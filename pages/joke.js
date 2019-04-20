import propTypes from 'prop-types';

import { Joke, Link } from '../components';
import { axiosFactory } from '../helpers';

const joke = ({ joke: jokeData }) => (
  <>
    <Link to="/">
      <h1>
        This is a {jokeData && jokeData.category && jokeData.category[0]} Chuck
        Norris joke
      </h1>
    </Link>
    <Joke content={jokeData && jokeData.value} />
  </>
);

joke.defaultProps = {
  joke: {},
};

joke.propTypes = {
  joke: propTypes.object,
};

joke.getInitialProps = async ({ query, reduxStore }) => {
  try {
    const { joke: jokeId } = query;
    if (!jokeId) throw Error('Joke not found');
    const storedJoke = reduxStore.getState().jokesReducer.jokes[joke];
    if (storedJoke)
      return {
        joke: storedJoke,
      };

    const axiosInstance = axiosFactory(`/${jokeId}`);
    const { data } = await axiosInstance.get();
    return {
      joke: data,
    };
  } catch (e) {
    console.error(e);
  }
};

export default joke;

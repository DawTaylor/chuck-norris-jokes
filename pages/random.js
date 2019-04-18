import propTypes from 'prop-types';

import { jokesAdd } from '../store/actions';

import { axiosFactory } from '../helpers';
import { Joke, Link } from '../components';

const random = ({ category, joke }) => (
  <>
    <h1>Randon {category} Chuck Norris joke</h1>
    <Joke content={joke.value} />

    <Link route="random" params={{ category }}>
      Get another {category} joke
    </Link>
    <br />
    <Link to="/">Go to categories list</Link>
  </>
);

random.defaultProps = {
  category: null,
};
random.propTypes = {
  joke: propTypes.object.isRequired,
  category: propTypes.string,
};

random.getInitialProps = async ({ query, reduxStore }) => {
  try {
    const queryString = query.category ? `?category=${query.category}` : '';
    const axiosInstance = axiosFactory(`/random${queryString}`);
    const { data } = await axiosInstance.get();
    reduxStore.dispatch(jokesAdd(data));
    return { joke: data, category: query.category };
  } catch (e) {
    console.error(e);
  }
};

export default random;

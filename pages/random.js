import propTypes from 'prop-types';
import { connect } from 'react-redux';

import { jokesAdd } from '../store/actions';

import { axiosFactory } from '../helpers';
import { Joke, Link, PastJokesList } from '../components';

const random = ({ category, joke, pastJokes }) => (
  <>
    <Link to="/">
      <h1>Randon {category} Chuck Norris joke</h1>
    </Link>
    <Joke content={joke.value} />

    <Link route="random" params={{ category }}>
      Get another {category} joke
    </Link>

    {pastJokes && Object.keys(pastJokes).length > 1 && (
      <>
        <PastJokesList jokes={pastJokes} />
      </>
    )}
  </>
);

random.defaultProps = {
  category: null,
  pastJokes: {},
};
random.propTypes = {
  joke: propTypes.object.isRequired,
  category: propTypes.string,
  pastJokes: propTypes.object,
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

const mapStateToProps = state => ({
  pastJokes: state.jokesReducer.jokes,
});

export default connect(mapStateToProps)(random);

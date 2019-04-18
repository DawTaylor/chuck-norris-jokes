import propTypes from 'prop-types';

import { Joke } from './Joke';
import { Link } from '../Link';

export const PastJokesList = ({ jokes }) => (
  <>
    <h2>Past jokes</h2>
    {Object.values(jokes).map(joke => (
      <Link key={joke.id} route="joke" params={{ joke: joke.id }}>
        <Joke content={joke.value} />
      </Link>
    ))}
  </>
);

PastJokesList.defaultProps = {
  jokes: {},
};

PastJokesList.propTypes = {
  jokes: propTypes.object,
};

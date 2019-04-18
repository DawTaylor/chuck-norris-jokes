import propTypes from 'prop-types';
import css from './Joke.scss';
import { Card } from '../Card';

export const Joke = ({ content }) => (
  <div className={css.joke}>
    <Card>{content}</Card>
  </div>
);

Joke.propTypes = {
  content: propTypes.string.isRequired,
};

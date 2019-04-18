import propTypes from 'prop-types';
import css from './Joke.scss';
import { Card } from '../Card';
import { Tag } from '../Tag';

export const Joke = ({ content, tags }) => (
  <div className={css.joke}>
    <Card>
      {content}
      {tags &&
        tags.length > 0 &&
        tags.map(tag => <Tag content={tag} key={tag} />)}
    </Card>
  </div>
);

Joke.defaultProps = {
  tags: [],
};

Joke.propTypes = {
  content: propTypes.string.isRequired,
  tags: propTypes.arrayOf(propTypes.string),
};

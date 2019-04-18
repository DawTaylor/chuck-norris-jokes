import propTypes from 'prop-types';

import css from './Tag.scss';

export const Tag = ({ content }) => <div className={css.tag}>{content}</div>;

Tag.propTypes = {
  content: propTypes.string.isRequired,
};

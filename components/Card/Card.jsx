import propTypes from 'prop-types';
import css from './Card.scss';

export const Card = ({ children }) => (
  <div className={css.card}>{children}</div>
);

Card.propTypes = {
  children: propTypes.node.isRequired,
};

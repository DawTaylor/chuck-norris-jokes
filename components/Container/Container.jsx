import propTypes from 'prop-types';
import css from './Container.scss';

export const Container = ({ children }) => (
  <div className={css.container}>{children}</div>
);

Container.propTypes = {
  children: propTypes.node.isRequired,
};

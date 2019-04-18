import propTypes from 'prop-types';
import css from './Wrapper.scss';

export const Wrapper = ({ children }) => (
  <div className={css['page-wrapper']}>{children}</div>
);

Wrapper.propTypes = {
  children: propTypes.node.isRequired,
};

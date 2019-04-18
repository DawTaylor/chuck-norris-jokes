import propTypes from 'prop-types';
import css from './CardHeader.scss';

export const CardHeader = ({ title, subtitle }) => (
  <h2 className={css['card-header']}>
    {title}
    {subtitle && <small>{subtitle}</small>}
  </h2>
);

CardHeader.defaultProps = {
  subtitle: null,
};

CardHeader.propTypes = {
  title: propTypes.string.isRequired,
  subtitle: propTypes.string,
};

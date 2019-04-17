import css from './Card.scss';

export const Card = ({ children }) => (
	<div className={css.card}>{children}</div>
);

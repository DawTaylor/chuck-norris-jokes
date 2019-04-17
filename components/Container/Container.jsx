import css from './Container.scss';

export const Container = ({ children }) => (
	<div className={css.container}>{children}</div>
);

import css from './Wrapper.scss';

export const Wrapper = ({ children }) => (
	<div className={css['page-wrapper']}>{children}</div>
);

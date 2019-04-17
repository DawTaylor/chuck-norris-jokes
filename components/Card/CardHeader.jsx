import css from './CardHeader.scss';

export const CardHeader = ({ title, subtitle }) => (
	<h2 className={css['card-header']}>
		{title}
		{subtitle && <small>{subtitle}</small>}
	</h2>
);

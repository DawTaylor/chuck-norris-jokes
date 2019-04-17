import { Link as RouterLink } from '../../routes';
import css from './Link.scss';

export const Link = ({ children, ...props }) => (
	<RouterLink {...props}>
		<a className={css.link}>{children}</a>
	</RouterLink>
);

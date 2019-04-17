import css from './Main.scss';

import { Container, Wrapper } from '../components';

export const Main = ({ children }) => (
	<Wrapper>
		<Container>{children}</Container>
	</Wrapper>
);

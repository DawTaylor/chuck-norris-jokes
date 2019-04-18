import propTypes from 'prop-types';
import { Container, Wrapper } from '../components';

import './Main.scss';

export const Main = ({ children }) => (
  <Wrapper>
    <Container>{children}</Container>
  </Wrapper>
);

Main.propTypes = {
  children: propTypes.node.isRequired,
};

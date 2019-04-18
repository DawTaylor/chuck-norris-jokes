import propTypes from 'prop-types';
import { Container, Wrapper } from '../components';

export const Main = ({ children }) => (
  <Wrapper>
    <Container>{children}</Container>
  </Wrapper>
);

Main.propTypes = {
  children: propTypes.node.isRequired,
};

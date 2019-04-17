import { Link } from "../routes";

const joke = ({ joke = "not fun" }) => (
  <>
    <Link route="joke" params={{ joke: "teste" }}>
      Test joke
    </Link>
    <h1>{joke}</h1>
  </>
);

joke.getInitialProps = async ({ query }) => {
  return { joke: query.joke };
};

export default joke;

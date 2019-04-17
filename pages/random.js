import { axiosFactory } from '../helpers';
import { Joke, Link } from '../components';

const random = ({ category, joke }) => (
	<>
		<h1>Randon {category} Chuck Norris joke</h1>
		<Joke content={joke.value} />

		<Link route="random" params={{ category }}>
			Get another {category} joke
		</Link>
	</>
);

random.getInitialProps = async ({ query }) => {
	const queryString = query.category ? `?category=${query.category}` : '';
	const axiosInstance = axiosFactory(`/random${queryString}`);
	const { data } = await axiosInstance.get();
	return { joke: data, category: query.category };
};

export default random;

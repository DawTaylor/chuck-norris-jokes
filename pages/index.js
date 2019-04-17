import { CategoryList } from '../components/Category';
import { axiosFactory } from '../helpers';

const index = ({ categories }) => <CategoryList categories={categories} />;

index.getInitialProps = async () => {
	try {
		const axiosInstance = axiosFactory('/categories');
		const { data } = await axiosInstance.get();

		return {
			categories: data,
		};
	} catch (e) {
		console.error(e);
		return { categories: [] };
	}
};

export default index;

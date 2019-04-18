import propTypes from 'prop-types';

import { setCategoriesList } from '../store/actions';

import { CategoryList } from '../components/Category';
import { axiosFactory } from '../helpers';

const index = ({ categories }) => <CategoryList categories={categories} />;

index.getInitialProps = async ({ reduxStore }) => {
  try {
    const { categories } = reduxStore.getState().categoriesReducer;

    if (categories.length > 0) return { categories };
    const axiosInstance = axiosFactory('/categories');
    const { data } = await axiosInstance.get();

    if (data.length > 0) {
      reduxStore.dispatch(setCategoriesList(data));
    }

    return {
      categories: data,
    };
  } catch (e) {
    console.error(e);
    return { categories: [] };
  }
};

index.defaultProps = {
  categories: [],
};
index.propTypes = {
  categories: propTypes.array,
};

export default index;

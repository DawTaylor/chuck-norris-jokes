import propTypes from 'prop-types';

import { Card, CardHeader } from '../Card';
import { Link } from '../Link';

export const CategoryList = ({ categories }) => (
  <>
    <h1>Jokes categories</h1>
    {categories.map(cat => (
      <Link key={cat} route="random" params={{ category: cat }}>
        <Card>
          <CardHeader title={cat} />
        </Card>
      </Link>
    ))}
  </>
);

CategoryList.defaultProps = {
  categories: [],
};

CategoryList.propTypes = {
  categories: propTypes.array,
};

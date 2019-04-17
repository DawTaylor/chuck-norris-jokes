import { Link } from '../index';

import { Card, CardHeader } from '../index';

export const CategoryList = ({ categories }) => (
	<>
		<h1>Jokes categories</h1>
		{categories.map(cat => (
			<Link route="random" params={{ category: cat }}>
				<Card>
					<CardHeader title={cat} />
				</Card>
			</Link>
		))}
	</>
);

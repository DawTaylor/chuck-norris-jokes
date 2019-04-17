import React from 'react';
import App, { Container } from 'next/app';

import { Main } from '../layout';

class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {};

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}

		return { pageProps };
	}

	render() {
		const { Component, pageProps } = this.props;

		return (
			<Container>
				<Main>
					<Component {...pageProps} />
				</Main>
			</Container>
		);
	}
}

export default MyApp;

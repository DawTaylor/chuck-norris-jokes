import React from 'react';
import App, { Container } from 'next/app';
import { Provider } from 'react-redux';
import Router from 'next/router';
import NProgress from 'nprogress';
import Head from 'next/head';

import { withRedux } from '../hoc/withRedux';

import { Main } from '../layout';

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});

Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <Container>
        <Head>
          <title>Chuck Norris Jokes</title>
        </Head>
        <Provider store={reduxStore}>
          <Main>
            <Component {...pageProps} />
          </Main>
        </Provider>
      </Container>
    );
  }
}

export default withRedux(MyApp);

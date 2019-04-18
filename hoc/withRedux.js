import React, { Component } from 'react';
import propTypes from 'prop-types';

import { storeFactory } from '../store';

const isServer = typeof window === 'undefined';
const __INITIAL_STORE__ = '__INITIAL_STORE__';

const getOrCreateStore = initialState => {
  if (isServer) return storeFactory(initialState);
  if (!window[__INITIAL_STORE__]) {
    window[__INITIAL_STORE__] = storeFactory(initialState);
  }

  return window[__INITIAL_STORE__];
};

export const withRedux = App => {
  class AppWithRedux extends Component {
    static async getInitialProps(appContext) {
      const reduxStore = getOrCreateStore();
      appContext.ctx.reduxStore = reduxStore;

      const appProps =
        typeof App.getInitialProps === 'function'
          ? await App.getInitialProps(appContext)
          : {};

      return {
        ...appProps,
        initialReduxStore: reduxStore.getState(),
      };
    }

    constructor(props) {
      super(props);
      this.reduxStore = getOrCreateStore(props.initialReduxStore);
    }

    render() {
      return <App {...this.props} reduxStore={this.reduxStore} />;
    }
  }

  AppWithRedux.defaultProps = {
    reduxStore: {},
  };

  AppWithRedux.propTypes = {
    initialReduxStore: propTypes.object.isRequired,
    reduxStore: propTypes.object,
  };

  return AppWithRedux;
};

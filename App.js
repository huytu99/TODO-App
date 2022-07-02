import React from 'react';
import { Provider } from 'react-redux';
import Root from './src';
import Test from './src/fomik/fomik';
import store from './src/redux/configStore';
import HomeContainer from './src/screens/home.container';
const App = () => {
  return (
    <Provider store={store}>
      <HomeContainer />
      {/* <Test /> */}
    </Provider>
  );
};

export default App;

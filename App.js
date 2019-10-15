import React from 'react';
import { Provider } from 'react-redux';

import store from './store/store';
import { init } from './helpers/db';

init()
  .then(() => {
    console.log('Initialized database');
  })
  .catch(err => {
    console.log(`Initialized db failed, error : ${err}`);
  });

import PlacesNavigator from './navigation/PlacesNavigator';

export default function App() {
  return (
    <Provider store={store}>
      <PlacesNavigator />
    </Provider>
  );
}

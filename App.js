import React from 'react';

import {Provider} from 'react-redux';
import {store} from './src/redux/store/store';

import EntryScreen from './src/screens/Entry/EntryScreen';

const App = () => (
  <Provider store={store}>
    <EntryScreen />
  </Provider>
)

export default App;

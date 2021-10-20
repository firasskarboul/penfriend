import 'react-native-gesture-handler';
import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux'
import { store } from './redux/index';
import { AppNavigation } from './components/AppNavigation';

export default function App() {
    return (
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    );
}

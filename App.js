import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import SplashScreen from 'react-native-splash-screen';
import {SafeAreaView, StyleSheet, Text, StatusBar, View} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';

import reducer from './src/store/reducers';
import rootSaga from './src/store/sagas';
import AppNavigation from './src/navigations/NavigationContainer';

const sagaMiddleware = createSagaMiddleware();

const configureStore = () =>
  createStore(reducer, applyMiddleware(sagaMiddleware));

const store = configureStore();

sagaMiddleware.run(rootSaga);

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <PaperProvider>
        <StatusBar barStyle="light-content" backgroundColor="#DFDCF1" />

        <AppNavigation />
      </PaperProvider>
    </Provider>
  );
};

export default App;

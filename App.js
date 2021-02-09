import React from 'react';
import ContactNavigator from './navigator/newContact';
import {createStore,combineReducers,applyMiddleware} from 'redux';
import searchReducer from './store/reducers/addContact';
import {Provider} from 'react-redux';
import {SafeAreaView,StyleSheet} from 'react-native';
import logger from 'redux-logger';

const rootReducer = combineReducers({
  search : searchReducer
});

const store = createStore(rootReducer,applyMiddleware(logger));

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <ContactNavigator/>
      </Provider>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})

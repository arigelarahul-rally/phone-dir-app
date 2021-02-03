import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import ContactNavigator from '../navigator/newContact';
import {createStore,combineReducers} from 'redux';
import searchReducer from '../store/reducers/addContact';
import {Provider} from 'react-redux';

const rootReducer = combineReducers({
    search : searchReducer
  });
  
  const store = createStore(rootReducer);

describe('rendering the initial-Router-Screen', ()=>{  
    it('renders the correct screen', async () => {
          const {getByPlaceholderText} = render(<Provider  store={store}><ContactNavigator/></Provider>);
          await waitFor(()=>getByPlaceholderText('Search'));
    });

    it('checking whether cancel button is present',async() => {
        const {getByRole} = render(<Provider  store={store}><ContactNavigator/></Provider>);
       await waitFor(()=> getByRole('button',{name:'Cancel'}));
    })
});
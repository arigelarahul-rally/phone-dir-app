import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import NewContact from '../components/newEntry';
import {createStore,combineReducers} from 'redux';
import searchReducer from '../store/reducers/addContact';
import {Provider} from 'react-redux';

const rootReducer = combineReducers({
    search : searchReducer
  });
  
  const store = createStore(rootReducer);

describe('rendering the newEntry component',()=>{

     it('checking whether placeholder is present', async ()=>{

        const {getAllByPlaceholderText} = render(<Provider store={store}><NewContact/></Provider>);

        await waitFor
        (()=>{getAllByPlaceholderText[0]=='Name'
        &&getAllByPlaceholderText[1]=='Email'
        &&getAllByPlaceholderText[2]=='PhoneNo'
        });

     });
});
import React from 'react';
import {render, waitFor ,fireEvent} from '@testing-library/react-native';
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

    it('should render the the search field text', async ()=>{
         const {getByText} = render(<Provider  store={store}><ContactNavigator/></Provider>);
         await waitFor(()=>getByText('Cancel'));
    })

    it('to check cancel button and searchField',()=>{
      const {getByPlaceholderText,getByText,queryByText} = render(<Provider store={store}><ContactNavigator/></Provider>);
      const button = getByText('Cancel');
      fireEvent.changeText(getByPlaceholderText('Search'),'rahul');
      fireEvent.press(button);
      expect(queryByText('test')).toBeNull();
  })
 
   it('moving from one screen to other',async()=>{
     const {getByTestId,getByText,getByPlaceholderText} = render(<Provider store={store}><ContactNavigator/></Provider>);
            fireEvent.press(getByTestId('newContact'))
            fireEvent.changeText(getByPlaceholderText('Name'),'ra')
            fireEvent.changeText(getByPlaceholderText('Email'),'arg@mail.com')
            fireEvent.changeText(getByPlaceholderText('PhoneNo'),'0000000000')
            fireEvent.press(getByText('save'))
            fireEvent.changeText(getByPlaceholderText('Search'),'r');
            fireEvent.changeText(getByPlaceholderText('Search'),'');
            fireEvent.press(getByTestId('user-info'));
            fireEvent.press(getByText('Delete'));
   })
   
});
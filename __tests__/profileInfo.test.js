import React from 'react';
import {render,fireEvent} from '@testing-library/react-native';
import ContactInfo from '../components/profileInfo';
import {createStore,combineReducers} from 'redux';
import searchReducer from '../store/reducers/addContact';
import {Provider} from 'react-redux';

const rootReducer = combineReducers({
    search : searchReducer
  });
  
  const store = createStore(rootReducer);

   window.alert = jest.fn()

  describe('rendering the profileInfo component',()=>{

    it('checking whether placeholder is present', async ()=>{

       const {getByTestId} = render(<Provider store={store}><ContactInfo /></Provider>);
       expect(getByTestId('user-email').props.children).toStrictEqual(['Email:  ','']);
       expect(getByTestId('user-name').props.children).toStrictEqual(['Name:  ','']);
       expect(getByTestId('user-phoneNo').props.children).toStrictEqual(['PhoneNo:  ','']);

    });

    it('checking whether delete button is present',() => {
        const {getByText} = render(<Provider  store={store}><ContactInfo/></Provider>);
        fireEvent.press(getByText('Delete'));
        expect(getByText('Delete')).toBeDefined();
        
    });
    
});
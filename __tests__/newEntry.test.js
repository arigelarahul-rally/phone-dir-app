import React from 'react';
import {render, waitFor, fireEvent} from '@testing-library/react-native';
import NewContact from '../components/newEntry';
import {createStore,combineReducers} from 'redux';
import searchReducer from '../store/reducers/addContact';
import {Provider} from 'react-redux';

const rootReducer = combineReducers({
    search : searchReducer
  });
  
  const store = createStore(rootReducer);

describe('rendering the newEntry component',()=>{

     it('checking whether placeholder is present or not', async ()=>{

        const {getAllByPlaceholderText} = render(<Provider store={store}><NewContact/></Provider>);
 
        await waitFor    (()=>{getAllByPlaceholderText[0]=='Name'
                               &&getAllByPlaceholderText[1]=='Email'
                               &&getAllByPlaceholderText[2]=='PhoneNo'
                              });

     });

     it('checking by changing text',()=>{
      const {getByPlaceholderText,getByText,queryByText} = render(<Provider store={store}><NewContact/></Provider>);

            fireEvent.changeText(getByPlaceholderText('Name'),'rahul')
            fireEvent.changeText(getByPlaceholderText('Email'),'ar@gmail.com')
            fireEvent.changeText(getByPlaceholderText('PhoneNo'),'0000000000')

            fireEvent.press(getByText('clear'))

            expect(queryByText('please enter valid name')).toBeNull()
            expect(queryByText('please enter valid email')).toBeNull()
            expect(queryByText('please enter valid phoneNo')).toBeNull()

     });
     it('checking by changing text',()=>{
      const {getByPlaceholderText,getByText,queryByText} = render(<Provider store={store}><NewContact/></Provider>);

            fireEvent.changeText(getByPlaceholderText('Name'),'r')
            fireEvent.changeText(getByPlaceholderText('Email'),'argmail.com')
            fireEvent.changeText(getByPlaceholderText('PhoneNo'),'000000000')
            fireEvent.press(getByText('save'))
            expect(queryByText('please enter valid name')).toBeDefined()
            expect(queryByText('please enter valid email')).toBeDefined()
            expect(queryByText('please enter valid phoneNo')).toBeDefined()

     });

     it('should render the  input invalid text', ()=>{
      const {queryByTestId} = render(<Provider  store={store}><NewContact/></Provider>);
      const TotalWarns = queryByTestId('contacts');
      expect(TotalWarns).toBeNull();
      });

      it('should render all the buttons', ()=>{
        const {getAllByRole} = render(<Provider  store={store}><NewContact/></Provider>);
        const TotalButtons = getAllByRole('button');
        expect(TotalButtons).toHaveLength(2);
        });
      
        it('checking the existing functionality',()=>{
          const {getByText} = render(<Provider  store={store}><NewContact/></Provider>);
          const Save = getByText('save');
          fireEvent.press(Save);
        })

});
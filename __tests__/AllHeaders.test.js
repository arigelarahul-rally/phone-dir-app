import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Header from '../components/contactHeader';
import EntryHeader from '../components/newEntryHeader';

const createTestProps = (props: Object) => ({
   navigation:{
       navigate:jest.fn()
   },
   ...props
})


describe('rendering Header components of all screens',()=>{

    it('testing contact header ',()=>{
        const {getByTestId} = render(<Header/>);
        expect(getByTestId('contacts').props.children).toBe('Contacts');
    });
   
    it('navigating to newContact Screen',()=>{
        props = createTestProps({})
        const {getByTestId} = render(<Header {...props}/>);
        fireEvent.press(getByTestId('newContact'));

    })

    it('testing contact header ',()=>{
        const {getByTestId} = render(<EntryHeader title='New Contact'/>);
        expect(getByTestId('new-entry').props.children).toBe('New Contact');
    });
     
});
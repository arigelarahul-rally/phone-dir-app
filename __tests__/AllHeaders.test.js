import React from 'react';
import {render} from '@testing-library/react-native';
import Header from '../components/contactHeader';
import EntryHeader from '../components/newEntryHeader';




describe('rendering Header components of all screens',()=>{

    it('testing contact header ',()=>{
        const {getByTestId} = render(<Header/>);
        expect(getByTestId('contacts').props.children).toBe('Contacts');
    });

    it('testing contact header ',()=>{
        const {getByTestId} = render(<EntryHeader/>);
        expect(getByTestId('new-entry').props.children).toBe('New Contact');
    });
     
});
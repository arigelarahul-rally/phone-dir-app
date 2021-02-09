import {ADD_CONTACT} from '../store/actions/contactAction';
import {DELETE_CONTACT} from '../store/actions/deleteContact';
import * as saveContact from '../store/actions/contactAction';
import * as deleteContact from '../store/actions/deleteContact';


describe('actions',()=>{
    it('should create an action to add contact',()=>{
        const expectedAction = {
            type: 'ADD_CONTACT',
            contactData: {
              id: '1',
              name: 'rahul',
              email: 'ar@gmail.com',
              phoneNo: '0000000000',
              image: null
            }
          }
        expect(saveContact.addContact('1', 'rahul' , 
        'ar@gmail.com','0000000000' , null)).toEqual(expectedAction)
    })
    it('should create an action to add contact',()=>{
        const expectedAction = {
            type: DELETE_CONTACT,
            deleteId : {id : '1'}
        }
        expect(deleteContact.deleteContact('1')).toEqual(expectedAction)
    })
})
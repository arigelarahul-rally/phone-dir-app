import reducer from '../store/reducers/addContact';
import {ADD_CONTACT} from '../store/actions/contactAction';
import {DELETE_CONTACT} from '../store/actions/deleteContact';



describe('adding contacts reducers',()=>{
    it('it should return initial state',()=>{
        expect(reducer(undefined,{})).toEqual({"fullList": []})
    });

    it('should handle ADD_CONTACT',()=>{
       const add=(reducer({"fullList": []},{type: ADD_CONTACT, 
            contactData : {id: '2', name:'rahul' , 
            email:'ar@gmail.com',phoneNo: '0000000000' , 
            image: null}}))
            expect(add.fullList[0]).toBeDefined();
    });

    it('should handle DELETE_CONTACT',()=>{
        const deleteContact = (reducer({"fullList": [{id:'1', name:'rahul' , 
        email:'ar@gmail.com',phoneNo:'0000000000' , 
        image:null}]},{
            type: DELETE_CONTACT,
            deleteId : {id : '1'}
        })) 
        expect(deleteContact.fullList).toEqual([])
    })
    
})
import userInfo from '../../userData/info';
import {ADD_CONTACT} from '../actions/contactAction';
import {DELETE_CONTACT} from '../actions/deleteContact';

const initialState = {
    fullList:[],
};

const searchReducer=(state = initialState, action)=>{
     
    switch (action.type){
        case ADD_CONTACT:
            const newContact = new userInfo(action.contactData.id,action.contactData.name,action.contactData.email,action.contactData.phoneNo,action.contactData.image);
             return{
                 ...state,
                 fullList:state.fullList.concat(newContact)
             }
        case DELETE_CONTACT:
            return{
                ...state,
                fullList:state.fullList.filter((pointer)=>pointer.id!==action.deleteId.id)
            }
        default: return state;
}
};

export default searchReducer;
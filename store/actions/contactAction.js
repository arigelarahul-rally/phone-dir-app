export const ADD_CONTACT = 'ADD_CONTACT';

export const addContact = (Id,Name,Email,PhoneNumber,Image) =>{
    return {type: ADD_CONTACT, 
        contactData : {id: Id , name:Name , email:Email,phoneNo: PhoneNumber , image: Image}
    };
};
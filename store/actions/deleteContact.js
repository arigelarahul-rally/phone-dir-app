export const DELETE_CONTACT = 'DELETE_CONTACT';

export const deleteContact = (Id) =>{
    return {
        type: DELETE_CONTACT,
        deleteId : {id : Id}
    };
}

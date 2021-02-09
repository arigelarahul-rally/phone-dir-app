import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { View,StyleSheet,Text, Button ,Alert, Image ,ScrollView } from 'react-native';
import * as deleteContact from '../store/actions/deleteContact';
import { Ionicons } from '@expo/vector-icons';

const profileInfo = props =>{
    let name = ''
    let email=''
    let phoneNo=''
    let image=null
    const contactList = useSelector(state=>state.search.fullList)
    const contact_id = props.route?props.route.params.id:null;
    const display_list = contactList.find(pointer=>pointer.id===contact_id)
    if(display_list)
    {
         name=display_list.name,
         email=display_list.email,
         phoneNo=display_list.phoneNo,
         image=display_list.image
    }
    const dispatch = useDispatch();
   const alertButton = props =>{
       Alert.alert(
           "DELETE",
           "are u sure u want to delete the contact saved",
           [{
               text:'Cancel',
               onPress:()=> {},
               style:"cancel"
           },
          {
              text:'okay',
              onPress:()=>{dispatch(deleteContact.deleteContact(contact_id)),
                props.navigation.goBack()},
          }]
       )
   }
    return(
        <ScrollView>
        <View>
        <View style={styles.imageContainer}>
           {image==null?<Ionicons name="person-circle-outline" size={84} color="black" />:<Image style={styles.picContainer} source={{uri:image}}/>}
        </View>
        <View style={styles.profileContainer}>
         <Text testID="user-name" style={styles.inputContainer}>Name:  {name}</Text>
         <Text testID="user-email" style={styles.inputContainer}>Email:  {email}</Text>
         <Text testID="user-phoneNo" style={styles.inputContainer}>PhoneNo:  {phoneNo}</Text>
        </View>
        <View style={styles.buttonContainer}>
        <Button title="Delete"  onPress={()=>alertButton(props)}/>
        </View>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    profileContainer:{
        margin:20,
        backgroundColor:'#f0f8ff',
    },
    userContainer:{
        marginTop:20,
        marginBottom:50,
        alignSelf:"center",
    },
    buttonContainer:{
        margin:50,
    },
    inputContainer:{
        padding:15,
    },
    imageContainer :{ 
        height:150,
        width:150,
        borderRadius:150/2,
        margin:10,
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
    },
    picContainer:{
        width:'100%',
        height:'100%',
        borderRadius:150/2,
        overflow:'hidden',
    }
});
export default profileInfo;
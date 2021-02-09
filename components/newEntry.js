import React,{useState} from 'react';
import {View, StyleSheet,TextInput,Button,Alert,Text} from 'react-native';
import {useDispatch} from 'react-redux';
import * as saveContact from '../store/actions/contactAction';
import ImagePicker from '../components/imageSelector';


const newEntry =props => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [phoneNo,setPhoneNo] = useState('')
    const [pic,setPic] = useState(null)
    const [vaildemail,setValidemail] = useState(true)
    const [vaildphoneNo,setValidphoneNo] = useState(true)
    const [vaildname,setValidname] = useState(true)
    const dispatch = useDispatch();
    const emailregex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
    const phoneNoregex = /^\d{10}$/
    const nameregex = /^[a-zA-Z]+[a-zA-Z]+$/;
    const nameStore =(value)=>{
        setValidname(false)
        setName(value)
        if(nameregex.test(value)){
               setValidname(true)
        }
    }
    const emailStore =(value)=>{
        setValidemail(false)
        setEmail(value)
        if(emailregex.test(value)){
            setValidemail(true)
        }
    }
    const phonenoStore =(value)=>{
        setValidphoneNo(false)
        setPhoneNo(value)
        if(phoneNoregex.test(value)){
            setValidphoneNo(true)
        }
    }
    const picStore = (value) =>{
        setPic(value)
    }
    const clear =() =>{
        setName('')
        setEmail('')
        setPhoneNo('')
        setValidname(true)
        setValidphoneNo(true)
        setValidemail(true)
    }
    const InputValidation= props => {
               if (vaildemail&&vaildname&&vaildphoneNo&&name!=''&&email!=''&&phoneNo!='')
               {
                dispatch(saveContact.addContact(new Date().toString(),name,email,phoneNo,pic)),
                props.navigation.goBack()
               }
               else{
                   Alert.alert("please verify the inputs given")
               }
    }
    return(
        <View>
         <ImagePicker parentCallback={picStore}/>
         <View style={styles.infoContainer}>
         <TextInput placeholder="Name" style={styles.inputContainer} onChangeText={nameStore} value={name} />
         {!vaildname&&<Text >please enter valid name</Text>}
         <TextInput placeholder="Email" style={styles.inputContainer} onChangeText={emailStore} value={email}/>
         {!vaildemail&&<Text >please enter valid email</Text>}
         <TextInput placeholder="PhoneNo" style={styles.inputContainer} onChangeText={phonenoStore} value={phoneNo} />
         {!vaildphoneNo&&<Text >please enter valid phoneNo</Text>}
         <View style={styles.saveContainer}>
             <Button  title='clear' onPress={clear}/>
             <Button  title='save' onPress={()=>{InputValidation(props)}}/>
         </View>
         </View>
     </View>
     )

};
 
const styles = StyleSheet.create({
      profileContainer:{
          marginTop:20,
          marginBottom:50,
          alignSelf:"center",
      },
      infoContainer:{
          justifyContent:'space-around',
      },
      inputContainer:{
          padding:10,
          backgroundColor:'#f0f8ff',
          borderBottomWidth:0.5,
          borderTopWidth:0.5,
          borderBottomColor:'black',
          borderTopColor:'black',
      },
      saveContainer:{ 
          flexDirection:'row',
          marginTop:20,
          alignItems:'stretch',
          justifyContent:'space-around'
      }
}) ;

export default newEntry;
import React, { useState } from 'react';
import {View ,  StyleSheet ,Alert, ImageBackground, } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


const imageSelector = props => {
       const [pic, setPic] = useState(null)
        const askPermissions = async ()=>{
           const result = await Permissions.askAsync(Permissions.CAMERA)
           if(result.status !=='granted'){
             Alert.alert(
                 'Camera Access',
                 'you need camera access to upload a pick',
                 [{text:'Okay'}]
             );
            return false;
           }
           return true;
        }
        const takeImageHandler = async(props) =>{
            const hasPermission = await askPermissions()
            if(!hasPermission)
            {
                return; 
            }
           const image = await ImagePicker.launchCameraAsync({
                allowsEditing:true,
                quality:0.5,
                aspect:[1,1]
            });
            setPic(image.uri);
            props.parentCallback(image.uri)
        }
        const deleteImage =(props)=>{
            setPic(null);
            props.parentCallback(null)
        }

    return (
        <View style={styles.imageContainer}>
        {pic==null?(<Feather name="camera" size={24} color="black" onPress={()=>takeImageHandler(props)}/>)
        :(<ImageBackground  style={styles.picContainer}source={{uri:pic}}>
            <MaterialIcons style={{alignSelf:'flex-end',position:'absolute',top:20,right:12}} name="cancel" size={24} color='white' onPress={()=>deleteImage(props)}/>
            </ImageBackground>)
        }
        </View>
    )
};

const styles = StyleSheet.create({
     imageContainer :{ 
         height:150,
         width:150,
         borderRadius:150/2,
         margin:10,
         alignSelf:'center',
         alignItems:'center',
         justifyContent:'center',
         backgroundColor:'#f0f8ff'
     },
     picContainer:{
         width:'100%',
         height:'100%',
         borderRadius:150/2,
         overflow:'hidden',
     }
});

export default imageSelector;
import React from 'react';
import {View,StyleSheet,Text} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Header = (props) =>{
         return (
            <View style={styles.container}>
                <Text testID="contacts" style={styles.textContainer}>Contacts</Text>
                <AntDesign name="plus" size={24} color="black" onPress={()=>props.navigation.navigate('NewEntry')
                } />
            </View>);
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        paddingTop:40,
        paddingLeft:150,
        height:80,
        paddingRight:15,
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'#f0f8ff',
        elevation:10,
    },
    textContainer:{
         fontSize:20,
         color:'black',
         fontWeight:'bold',
    },
})
export default Header;
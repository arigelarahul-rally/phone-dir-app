import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const Header = (props) => {
         return (
            <View style={styles.headerContainer}>
                <Text maxFontSizeMultiplier={1} adjustsFontSizeToFit>      </Text>
                <Text testID="contacts" maxFontSizeMultiplier={2} adjustsFontSizeToFit >Contacts</Text>
                <Ionicons testID="newContact" name="ios-add" size={28} color="black" onPress={()=>props.navigation.navigate('NewEntry')}/>
            </View>);
}

const styles = StyleSheet.create({
    headerContainer:{
        padding:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    }
})
export default Header;
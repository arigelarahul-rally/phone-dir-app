import React from 'react';
import {View,Text} from 'react-native';

const newHeadr = (props) =>{
    return(
        <View>
        <Text testID="new-entry" style={{textAlign:'center'}} maxFontSizeMultiplier={2} adjustsFontSizeToFit >{props.title}</Text>  
        </View>
    );
} 

export default newHeadr;
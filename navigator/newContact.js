import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SearchField from '../components/searchField';
import NewEntry from '../components/newEntry';
import React from 'react';
import  HeaderContent  from '../components/contactHeader';
import NewHeaderContent from '../components/newEntryHeader';
import ProfileInfo from '../components/profileInfo';



 const Stack= createStackNavigator();
 const ContactNavigator = () =>{
     return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Contact">
                <Stack.Screen name="Contact" component={SearchField} options={{ header:props=><HeaderContent {...props}/>}}/>
                <Stack.Screen name="NewEntry" component={NewEntry} options={{ header:props=><NewHeaderContent {...props} title='New Contact'/>}}/>
                <Stack.Screen name="ContactInfo" component={ProfileInfo} options={{ header:props=><NewHeaderContent {...props} title='Contact Info'/>}}/>
            </Stack.Navigator>
        </NavigationContainer>)
 }

export default ContactNavigator;
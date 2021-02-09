import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SearchField from '../components/searchField';
import NewEntry from '../components/newEntry';
import  HeaderTitle from '../components/contactHeader';
import ProfileInfo from '../components/profileInfo';
import NewEntryHeader from '../components/newEntryHeader';
import React from 'react';



 const Stack= createStackNavigator();
 const ContactNavigator = () =>{
     return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Contact">
                <Stack.Screen name="Contact" component={SearchField}  options={{header: props => <HeaderTitle {...props} />}} />
                <Stack.Screen name="NewEntry" component={NewEntry} options={{headerTitle: props => <NewEntryHeader {...props} title='New Contact'/>}}/>
                <Stack.Screen name="ContactInfo" component={ProfileInfo} options={{headerTitle: props => <NewEntryHeader {...props} title='Contact Info'/>}}/>
            </Stack.Navigator>
        </NavigationContainer>)
 }

export default ContactNavigator;
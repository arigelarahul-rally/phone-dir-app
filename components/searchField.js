import React,{useState,useEffect} from 'react';
import {View, StyleSheet,TextInput,Button,Text} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {useSelector} from 'react-redux';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';


const SearchBar = props =>{
    const [searchBarText, setSearchBarText] = useState('');
    const [filteredList,setFilteredList] = useState([]);
    const contactList = useSelector(state => state.search.fullList);
useEffect (()=>{
       setFilteredList(contactList)},[contactList]);
    const clear = () =>{
        setSearchBarText('');
        setFilteredList(contactList)
    }
    const searchFilterFunction = (text) =>{
                  if(text){
                      const newData = contactList.filter(item =>{const member= item.name.toLowerCase();
                         const member_name =text.toLowerCase();
                         return member.includes(member_name);
                      }) ;
                      setFilteredList(newData)
                  }
                  else {
                      setFilteredList(contactList)
                  }
                  setSearchBarText(text)
    } 
     return(
         <View>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <View style={styles.inputContainer}>
            <MaterialCommunityIcons name="text-box-search-outline" size={24} color="black" style={{padding:5,marginTop:10,}} /> 
            <TextInput placeholder="Search" style={{width:250}}  onChangeText={searchFilterFunction} value={searchBarText} />
        </View>
         <View style={styles.buttonContainer}>
         <Button title="Cancel"  onPress={clear}/>          
        </View>
        </View>
        <View>
         <FlatList data={filteredList} 
         renderItem={pointer=>
             <TouchableOpacity onPress={()=>{ props.navigation.navigate({name:'ContactInfo',params:{
                 id:pointer.item.id
             }})}}>
              <View style={styles.textContainer}>
                 <Text>{pointer.item.name}</Text>
              </View>
             </TouchableOpacity>
         }/>
         
        </View>
        </View>

    )
};

const styles = StyleSheet.create({
    inputContainer:{
        flexDirection:'row',
        marginTop:20,
        marginLeft:10,
        borderWidth:1,
    },
    buttonContainer:{
        height:50,
        width:80,
        marginTop:30,
        marginRight:5,
    },
    textContainer:{
        margin:10,
        backgroundColor:'#f0f8ff',
        padding:15,
    }
});

export default SearchBar;
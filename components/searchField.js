import React,{useState,useEffect} from 'react';
import {View, StyleSheet,TextInput,Text} from 'react-native';
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
        <View style={{width:'100%',height:50,flexDirection:'row'}}>
        <View style={styles.inputContainer}>
            <MaterialCommunityIcons name="text-box-search-outline" size={24} color="black" style={{padding:5}} /> 
            <TextInput style={{width:'85%'}} placeholder="Search"   onChangeText={searchFilterFunction} value={searchBarText} />
        </View>
        <View style={styles.buttonContainer}>
         <TouchableOpacity
        onPress={clear}
        style={styles.buttonContainer}>
        <Text style={{textAlign:'center'}}maxFontSizeMultiplier={1.7} adjustsFontSizeToFit>Cancel</Text>
       </TouchableOpacity>  
       </View>       
        </View>
        <View>
         <FlatList data={filteredList} 
         renderItem={pointer=>
             <TouchableOpacity testID='user-info' onPress={()=>{ props.navigation.navigate({name:'ContactInfo',params:{
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
        marginTop:10,
        marginLeft:10,
        borderWidth:1,
        width:'75%',
        justifyContent:'space-around'
    },
    buttonContainer:{
      marginTop:10,
      paddingLeft:5,
    },
    textContainer:{
        margin:10,
        backgroundColor:'#f0f8ff',
        padding:15,   
    }
});

export default SearchBar;
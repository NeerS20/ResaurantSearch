import React from 'react';
import {View,TextInput,StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar=(props)=>{
    
    return (
        <View style={styles.background}>
            <Feather name="search" style={styles.iconStyle}/>
            <TextInput
            placeholder="Search"
            style={styles.InputStyle}
            value={props.term}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={newTerm=>props.onTermChange(newTerm)}
            onEndEditing={()=> props.onTermSubmitted()}
            />
        </View>
    )
}

const styles=StyleSheet.create({
    background:{
        margin:15,
        backgroundColor:"#ffff",
        height:50,
        marginHorizontal:15,
        borderRadius:20,
        flexDirection:"row",
        
    },
    iconStyle:{
       fontSize:35,
       alignSelf:'center',
      marginHorizontal:5
    },
    InputStyle:{
        flex:1,
        fontSize:15,


    }
})

export default SearchBar;

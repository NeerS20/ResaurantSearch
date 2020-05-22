import React, {useState,useEffect } from 'react';
import {View,Text,StyleSheet,ScrollView} from 'react-native';
import SearchBar from '../Component/SearchBar';
import useResults from '../Hooks/useResults';
import ResultsList from '../Component/ResultsList';


const SearchScreen=()=>{
    const [term,setTerm]=useState('');
    const [searchApi,results,errorMessage]=useResults();


   const filterResultsByPrice=(price)=>{
       // price=='$'|| '$$' || '$$$'

       return results.filter(result=>{
           return result.restaurant.price_range===price;
       })
   }

    return (
        // <View style={{flex:1}} >
        <View style={Styles.Container}>
            <SearchBar term={term} 
            onTermChange={(newTerm)=>setTerm(newTerm)}
            onTermSubmitted={()=>searchApi(term)}
            />
         {errorMessage? <Text>{errorMessage}</Text>:null}
       <ScrollView>    
       <ResultsList   title="Cost Effective"
        results={filterResultsByPrice(2)}
       />
       <ResultsList title="Bit Pricer"
       results={filterResultsByPrice(3)}/>
       <ResultsList title="Big Spender"
       results={filterResultsByPrice(4)}/>
       
       </ScrollView>
        </View>

    )
}

const Styles=StyleSheet.create({
   Container:{
       backgroundColor:'#121111',
       flex:1
    } 
 
})

export default SearchScreen;

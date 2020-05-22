import React,{useState,useEffect} from 'react';
import {View,Text,StyleSheet,FlatList,Image} from 'react-native';
import yelp from '../api/yelp';
import { ScrollView } from 'react-native-gesture-handler';


const ResultsShowScreen=({navigation})=>{

   const id=  navigation.getParam('id');
   const [result,setResult]=useState(null);

   const getResults =async(id)=>{
     const response= await yelp.get(`/restaurant?res_id=${id}`);
     setResult(response.data);
   }
   useEffect(()=>{
       getResults(id);
   },[])

   if(!result) 
    {
        return null;
    }

   return(
        <>
          <View style={styles.container}>
             <ScrollView
             showsVerticalScrollIndicator={false}
            >
                 <Image
                 style={styles.image}
                 source={{uri:result.thumb}}
                 />
             <Text style={styles.title}>{result.name}</Text>
             <Text style={styles.value}>{result.location.address}</Text>
             <Text style={styles.name}>Average Cost For Two Person</Text>
   <Text style={styles.value}>{result.currency} {result.average_cost_for_two}</Text>
             <Text style={styles.name}>Cuisines :- </Text>
             <Text style={styles.value}>{result.cuisines}</Text>
             <Text style={styles.name}>Timing :- </Text>
             <Text style={styles.value} >{result.timings}</Text>
             <Text style={styles.name}>Highlights :-</Text>
             
              <FlatList
              
              data={result.highlights}
              keyExtractor={it=>it}
              renderItem={({item})=>{
                     return <Text style={styles.value}>{item}</Text>
              }}
              />
</ScrollView>

         
          </View>

        </>
    )
}

const styles=StyleSheet.create({
    image:{
        width:'auto',
        height:200,
    },
    container:{
        backgroundColor:'#0a0a0a'
    },
   name:{
       fontSize:18,
       color:'#ffff',
       marginTop:5,

       fontWeight:'bold'
   },
   title:{
       fontSize:22,
        color:'#ffff',
        marginVertical:8,
        fontWeight:'bold'
   },
   value:{
       fontSize:16,
       marginVertical:2,
       color:"#ffff"
   }


})

export default ResultsShowScreen;
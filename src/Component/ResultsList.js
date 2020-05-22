import React from 'react';
import {View,Text,StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import ResultsDetails from './ResultsDetails';
import {withNavigation } from 'react-navigation'


const ResultsList=({title,results,navigation})=>{
    if(!results.length)
    {
        return null;
    }

    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <FlatList
             showsHorizontalScrollIndicator={false}
             horizontal={true}
             data={results}
             keyExtractor={(result)=>result.restaurant.id }
             renderItem={({item})=>{
             return (
             <TouchableOpacity 
             onPress={()=>
             navigation.navigate('ResultsShow',{id:item.restaurant.id})
             }>
             <ResultsDetails result={item.restaurant}/>
             </TouchableOpacity>
             )
             }}
            
            />
 
        </View>
    )
}
const styles =StyleSheet.create({
 title:{
     fontSize:18,
     fontWeight:"bold",
     marginLeft:15,
     color:"#ffff"

 }
})

export default withNavigation( ResultsList);
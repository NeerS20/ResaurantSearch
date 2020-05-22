import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';


const ResultsDetails=({result})=>{

    return (
        <View style={Style.Container} >
               <Image
            source={{ uri:result.thumb}}
            style={Style.image}
            />
            <Text style={Style.name}>{result.name} , {result.location.city}</Text>
            <Text>{result.user_rating.aggregate_rating} Starts {result.all_reviews_count} Reviews </Text>

        </View>
    )

}
const Style =StyleSheet.create({
     Container:{
        margin:10,
        backgroundColor:'#ffff',
        borderRadius:3,
        height:170
    },
    image:{
        width:250,
        height:120,
        borderRadius:4,
        marginBottom:5
    },
    name:{
        fontSize:15,
        fontWeight:"bold",
        alignSelf:'flex-start'

    }

})

export default ResultsDetails;
import {useState,useEffect} from 'react';
import yelp from '../api/yelp';

export default ()=>{

    const [results,setResults]=useState([])   
    const [errorMessage,setErrorMessage]=useState('');


   const searchApi= async(searchTerm)=>{
    try{   
    const response =await yelp.get(`/search?entity_id=4&entity_type=city&q=${searchTerm}`);
       
       setResults(response.data.restaurants);
   }
   catch (e)
   {
       setErrorMessage('SomeThing Went Wrong!!!');
   }
};


   //call Search Api When Component get Rendered..
    useEffect(()=>{searchApi('chinese')},[])

    return [searchApi,results,errorMessage];

};
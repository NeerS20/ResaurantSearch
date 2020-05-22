import React from 'react';
import {StyleSheet} from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResutlsShowScreens';

const navigator=createStackNavigator({

  Search:SearchScreen,
  ResultsShow:ResultsShowScreen

},{
  initialRouteName:'Search',
  defaultNavigationOptions:{
    headerTitleAlign:'center',
    title:'Restro',
    headerStyle:{
      backgroundColor:'#f70505'
    }
  }
})

export default createAppContainer(navigator);
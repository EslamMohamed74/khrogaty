// import React from 'react';

//For React Navigation 4+
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
// import {createStackNavigator} from 'react-navigation-stack';
import FirstPage from '../AboutRestaurant/AboutRestaurant';
import SecondPage from '../Map/Map';


const TabScreen = createMaterialTopTabNavigator(
  {
    About: { screen: FirstPage },
    Map: { screen: SecondPage },
  },
  {
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#000',
      inactiveTintColor: '#808080',
      style: {
        backgroundColor: '#FFFFFF',
      },
      labelStyle: {
        textAlign: 'center',
      },
      indicatorStyle: {
        borderBottomColor: '#008000',
        borderBottomWidth: 5,
      },
    },
  }
);

//making a StackNavigator to export as default
/* const App = createStackNavigator({
  TabScreen: {
    screen: TabScreen,
    navigationOptions: {
        header: null,
      headerTintColor: '#FFFFFF',
      title: 'TabExample',
    },
  },
}); */
export default createAppContainer(TabScreen);
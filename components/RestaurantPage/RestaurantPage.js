import React from 'react';

//For React Navigation 4+
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import FirstPage from '../Restaurant/Restaurant';
//Making TabNavigator which will be called in App StackNavigator
//we can directly export the TabNavigator also but header will not be visible
//as header comes only when we put anything into StackNavigator and then export

const TabScreen = createMaterialTopTabNavigator(
  {
    All: { screen: FirstPage },
    Restaurant: { screen: FirstPage },
    CoffeShope: { screen: FirstPage },
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
const App = createStackNavigator({
  TabScreen: {
    screen: TabScreen,
    navigationOptions: {
      header: null,
      headerTintColor: '#FFFFFF',
      title: 'TabExample',
    },
  },
});
export default createAppContainer(App);
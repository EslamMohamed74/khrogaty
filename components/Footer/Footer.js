
import React from 'react';
import { Button, Image, StyleSheet } from 'react-native';

//For React Navigation 4+
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../HomeScreen/HomeScreen';
import Search from '../Search/Search';
import FindPlaces from '../FindPlaces/FindPlaces';
import Restaurants from '../RestaurantPage/RestaurantPage';
import SingleRestaurant from '../SingleRestaurant/SingleRestaurant';
import ThingToDo from '../ThingToDo/ThingToDo';



const HomeStack = createStackNavigator(
	{
		//Defination of Navigaton from home screen
		Home: { screen: HomeScreen },
	},
	{
		defaultNavigationOptions: {
			//Header customization of the perticular Screen
			header: null,
			headerTintColor: '#FFFFFF',
			title: 'Home',
			//Header title
		},
	}
);

const SearchStack = createStackNavigator(
	{
		//Defination of Navigaton from setting screen
		Settings: { screen: Search },

	},
	{
		defaultNavigationOptions: {
			//Header customization of the perticular Screen
			header: null,
			headerTintColor: '#FFFFFF',
			title: 'Search',
			//Header title
		},
	}
);


const FindPlacesStack = createStackNavigator(
	{
		//Defination of Navigaton from setting screen
		Settings: { screen: FindPlaces },

	},
	{
		defaultNavigationOptions: {
			//Header customization of the perticular Screen
			header: null,
			headerTintColor: '#FFFFFF',
			title: 'Find Places',
			//Header title
		},
	}
);

const RestaurantsStack = createStackNavigator(
	{
		//Defination of Navigaton from setting screen
		Restaurants: {
			screen: Restaurants,
			navigationOptions: {
				title: 'Restaurants',
			}
		},
		SingleRestaurant: SingleRestaurant,


	},
	{
		defaultNavigationOptions: {
			//Header customization of the perticular Screen
			headerBackground: (
				<Image
					style={StyleSheet.absoluteFill}
					source={{ uri: 'https://i.imgur.com/L7wfaDQ.png' }}
				/>
			),
			headerTintColor: '#FFFFFF',

			//Header title
		},
	}
);


const ThingToDoStack = createStackNavigator(
	{
		//Defination of Navigaton from setting screen
		Settings: { screen: ThingToDo },

	},
	{
		defaultNavigationOptions: {
			//Header customization of the perticular Screen
			header: null,
			headerTintColor: '#FFFFFF',
			title: 'Things To Do',
			//Header title
		},
	}
);


const App = createBottomTabNavigator(
	{
		//Defination of Navigaton bottom options
		Home: { screen: HomeStack },
		Search: { screen: SearchStack },
		FindPlaces: { screen: FindPlacesStack },
		Restaurants: { screen: RestaurantsStack },
		ThingToDo: { screen: ThingToDoStack },
	},
	{
		defaultNavigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ focused }) => {
				const { routeName } = navigation.state;
				if (routeName === 'Home') {
					return (
						<Image
							source={
								focused
									? require('../../images/Icons/ghome.png')
									: require('../../images/Icons/home.png')
							}
							style={{
								width: 25,
								height: 25,

							}}
						/>
					);
				} else if (routeName === 'Search') {
					return (
						<Image
							source={
								focused
									? require('../../images/Icons/gfilter.png')
									: require('../../images/Icons/filter.png')
							}
							style={{
								width: 25,
								height: 25,

							}}
						/>
					);
				} else if (routeName === 'FindPlaces') {
					return (
						<Image
							source={
								focused
									? require('../../images/Icons/gfind-places.png')
									: require('../../images/Icons/find-places.png')
							}
							style={{
								width: 25,
								height: 25,

							}}
						/>
					);
				} else if (routeName === 'Restaurants') {
					return (
						<Image
							source={
								focused
									? require('../../images/Icons/grestaurants.png')
									: require('../../images/Icons/restaurants.png')
							}
							style={{
								width: 25,
								height: 25,

							}}
						/>
					);
				} else if (routeName === 'ThingToDo') {
					return (
						<Image
							source={
								focused
									? require('../../images/Icons/gtodo.png')
									: require('../../images/Icons/todo.png')
							}
							style={{
								width: 25,
								height: 25,

							}}
						/>
					);
				}
			},
		}),
		tabBarOptions: {
			activeTintColor: '#32CD32',
			inactiveTintColor: 'black',

		},
	}
);
export default createAppContainer(App);



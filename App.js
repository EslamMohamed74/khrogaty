import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Tutorial from './components/Tutorial/Tutorial';
import Footer from './components/Footer/Footer';
import Splash from './components/Splash/Splash';



const AppNavigator = createStackNavigator({
  Splash: Splash,
  Tutorial: Tutorial,
  Footer: {
    screen: Footer,
    navigationOptions: {
      header: null,
    }
  },
});

export default createAppContainer(AppNavigator);
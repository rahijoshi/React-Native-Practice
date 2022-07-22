import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import SearchScreen from './src/screens/SearchScreen';

const navigator = createStackNavigator({
  Search: SearchScreen
  },
  {
    //first screen we want to show
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Find your favourite restaurant'
  }
});

export default createAppContainer(navigator);
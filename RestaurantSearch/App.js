import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';

const navigator = createStackNavigator({
  Search: SearchScreen,
  ResultsShow: ResultsShowScreen
  },
  {
    //first screen we want to show
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Restaurant Search',
  }
});

export default createAppContainer(navigator);
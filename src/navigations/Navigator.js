

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Home from '../screens/Home';
import Detail from '../screens/Detail';
import AddPost from '../screens/AddPost';
import SocialLogin from '../screens/SocialLogin';

const stackNavigatorOptions = {
  headerShown: false,
};

const AppNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    Detail: { screen: Detail },
    AddPost: { screen: AddPost },
    SocialLogin:{screen:SocialLogin},
  },
  {
    defaultNavigationOptions: stackNavigatorOptions,
  }
);

export default createAppContainer(AppNavigator);

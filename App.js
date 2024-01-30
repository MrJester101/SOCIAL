

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import AppNavigator from './src/navigations/Navigator';
import AppLoading from 'expo-app-loading';
import Tabs from './src/navigations/Tab';
import { NavigationContainer } from '@react-navigation/native';
import { LoginButton, AccessToken } from 'react-native-fbsdk';


const App2=()=> {
  return(
    <NavigationContainer>
    <Tabs/>
  </NavigationContainer>
  );

}

// export default App2;





export default class App extends React.Component{
  state={
    isFontLoaded:false
  }
  async componentDidMount(){
    await Font.loadAsync({
      'Bold':require('./src/fonts/Montserrat-ExtraBold.otf'),
      'Medium':require('./src/fonts/Montserrat-Medium.otf'),
      'Regular':require('./src/fonts/Montserrat-Regular.otf'),
    });
    this.setState({isFontLoaded:true})
  }
  render(){
    return (
      
      <NavigationContainer>
      <Tabs/>
    </NavigationContainer>,

     
    (this.state.isFontLoaded === true)?(<AppNavigator/>) : (<AppLoading/>)
      );

    //   <NavigationContainer>
    //   <Tabs/>
    // </NavigationContainer>
  }
  
}


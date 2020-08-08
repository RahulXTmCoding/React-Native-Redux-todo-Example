import React, { Component } from 'react';
import {View, Text,Stylesheet} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Home from './components/home'
import List from './components/list'
import { Provider } from 'react-redux'
import { store } from './reduxStore/store';
import { createStackNavigator} from 'react-navigation-stack';
import {createAppContainer } from 'react-navigation'

const AppNavigator = createStackNavigator({
  Home: {screen:Home} ,
  List: {screen:List},
});

const Stack=createAppContainer(AppNavigator);
class App extends Component {
  state = {  }
  render() { 
    return ( 
    <Provider store={store}>
     
      
         <Stack />
        
        

</Provider>
     );
  }
}
 
export default App;
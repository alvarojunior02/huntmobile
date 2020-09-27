import React, {Component} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './src/pages/main';

import './src/config/StatusBarConfig';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#DA552F',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            textAlign: 'center',
          },
        }}
      >
        <Stack.Screen 
          name="Main" 
          component={Main} 
          options={{
            title: 'Hunt Mobile',
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
    );
  }
}

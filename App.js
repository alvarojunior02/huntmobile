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
      <Stack.Navigator>
        <Stack.Screen 
          name="Main" 
          component={Main} 
          options={{
            title: 'Hunt Mobile',
            headerStyle: {
              backgroundColor: '#DA552F',
              justifyContent: 'center',
              alignItems: 'center',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              textAlign: 'center',
            },
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
    );
  }
}

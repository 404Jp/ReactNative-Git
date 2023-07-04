import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
        <Stack.Screen name="Navegador" component={Navigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

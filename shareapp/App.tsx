import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import CrearCuenta from './src/screens/CrearCuenta'
import Navigation from './src/navigation/Navigation';
import UserScreen from './src/screens/UserScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false }} name="Login" component={CrearCuenta} />
        <Stack.Screen name="cuenta" component={LoginScreen} />
        <Stack.Screen options={{headerShown: false }} name="navegacion" component={Navigation} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

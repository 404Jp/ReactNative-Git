import React from 'react'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import MapScreen from '../screens/MapScreen';
import PostScreen from '../screens/PostScreen';
import UserScreen from '../screens/UserScreen';
import LoginScreen from '../screens/LoginScreen';
import Icon from "react-native-vector-icons/FontAwesome5";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
            <Tab.Screen name="Publicar" component={PostScreen} options={{
                tabBarLabel: "Publicar Comida",
                tabBarIcon: () => (
                    <Icon name="apple" color="#000" size={15} />
  )
            }} />
            <Tab.Screen name="Mapa Publicaciones" component={MapScreen} options={{
                tabBarLabel: "Mapa",
                tabBarIcon: () => (
                    <Icon name="map" color="#000" size={15} />
  )
            }} />
            <Tab.Screen name="Mi Perfil" component={UserScreen} options={{
                tabBarLabel: "Perfil",
                tabBarIcon: () => (
                    <Icon name="user" color="#000" size={15} />
  )
            }} />
           </Tab.Navigator>

  )
}
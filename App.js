import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, useColorModeValue } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import theme from './theme';
import Inicio from './screens/Inicio'; 
import Scanner from './screens/Scanner';
import Usuario from './screens/Usuario';
import Historial from './screens/Historial';
import Config from './screens/Config';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator 
          initialRouteName="Inicio"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Inicio') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Scanner') {
                iconName = focused ? 'scan' : 'scan-outline';
              } else if (route.name === 'Usuario') {
                iconName = focused ? 'person' : 'person-outline';
              } else if (route.name === 'Historial') {
                iconName = focused ? 'time' : 'time-outline';
              } else if (route.name === 'Config') {
                iconName = focused ? 'settings' : 'settings-outline';
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'green',
            tabBarInactiveTintColor: 'gray',
            headerShown: false, // Oculta los encabezados de todas las pantallas
          })}
        >
          <Tab.Screen name="Inicio" component={Inicio} />
          <Tab.Screen name="Scanner" component={Scanner} />
          <Tab.Screen name="Usuario" component={Usuario} />
          <Tab.Screen name="Historial" component={Historial} />
          <Tab.Screen name="Config" component={Config} />
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;

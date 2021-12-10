 import React, { useState }  from 'react';
import { View, Text, Button, TextInput, SafeAreaView, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './components/HomeScreen.js';
import SecondScreen from './components/SecondScreen.js';
import ThirdScreen from './components/ThirdScreen';
import FourthScreen from './components/FourthScreen';
import FifthScreen from './components/FifthScreen';
import ScreenTemplate from './containers/ScreenTemplate';
import ValueProvider from './components/ValueContext';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <ValueProvider value=''>  

    <NavigationContainer>
      <Tab.Navigator initialRouteName="Welcome">
        <Tab.Screen name = "Home" component = {HomeScreen}/>
        <Tab.Screen name = "Players" component = {SecondScreen}/>
        <Tab.Screen name = "About" component = {ThirdScreen}/>
        <Tab.Screen name = "Shopping" component = {FourthScreen}/>
        <Tab.Screen name = "Settings" component = {FifthScreen}/>
      </Tab.Navigator>
      <ScreenTemplate
        footer={<Text>Welcome to Swing Buddy! The app for your tennis needs</Text>}> 
      </ScreenTemplate>
    </NavigationContainer>
    </ValueProvider>
    
  );
}

export default App;



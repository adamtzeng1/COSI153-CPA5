import React, {useRef, useState, useEffect } from 'react'
import {View,StyleSheet,Text, ScrollView, TextInput, Animated} from 'react-native';
import HomeScreenCard from './HomeScreenCard';
import NameChecker from './NameChecker';
import SiteCard from './SiteCard';
import {useValue} from './ValueContext';


const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 10000,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}>
      {props.children}
    </Animated.View>
  );
};

const FourthScreen = ({navigation}) => {
  const {currentValue, setCurrentValue} = useValue();

  return (
    <ScrollView style = {styles.container}>
      <View style = {{borderWidth: 5, borderBottomLeftRadius: 20, borderBottomRightRadius: 20,}}>
        <Text>Current player:{currentValue}</Text>
      </View>
      <View>
        <Text style = {styles.textFormat}>
          Get Started On Your Tennis Journey.
        </Text>  
        <Text>
          The following are some buttons to get you started on equipment
        </Text>
        <FadeInView>
        <View style = {{flexDirection: 'column', padding: 10}}>
          <SiteCard  site = "https://www.midwestsports.com/" name = "Tennis Point" />
          <SiteCard  site = "https://www.tennis-warehouse.com/" name = "Tennis Warehouse"/>
          <SiteCard  site = "https://www.tennis-express.com/" name = "Tennis Express"/>
          <SiteCard site = "https://www.fromuthtennis.com/" name = "Fromuth Tennis"/>
        </View>
        </FadeInView>
      </View>
    </ScrollView>
  )
}
export default FourthScreen

const styles = StyleSheet.create ({
    container:{
      flex:1,
      backgroundColor: 'lightblue',
    },
    textFormat: {
      fontSize: 30,
      textAlign: "center"
    }
})
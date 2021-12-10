import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  Button,
} from 'react-native';
import NameChecker from './NameChecker';
import { Card } from 'react-native-paper';
import TennisInfo from './TennisInfo';
import ValueProvider, {useValue} from './ValueContext'


const SecondScreen = ({navigation}) => {
  const {currentValue, setCurrentValue} = useValue();
  const [newName, setNewName] = useState('');
    return (
      <ScrollView style={styles.container}>
        <View
          style={{
            borderWidth: 5,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}>
          <Text>Current player:{currentValue}</Text>
        </View>
        
      <ScrollView>
      <TennisInfo/>
      </ScrollView>
      </ScrollView>
    );

};
export default SecondScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
  },

});

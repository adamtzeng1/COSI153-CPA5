import React, { useRef, useState, useEffect } from 'react';

import {
  Linking,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Button,
  ScrollView,
  Image,
  Animated,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Card } from 'react-native-paper';
import { Camera } from 'expo-camera';
import HomeScreenCard from './HomeScreenCard';
import ValueProvider, {useValue} from './ValueContext'

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

const HomeScreen = ({ navigation }) => {
  const {currentValue, setCurrentValue} = useValue();
  const [debugging, setDebugging] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  let debugView = '';
  if (debugging) {
    debugView = (
      <View>
        <Text>current: {currentValue}</Text>
        <Button title="clear memory" onPress={() => clearAll()} />
      </View>
    );
  }
  let saveData = <View></View>;

  if (currentValue !== '') {
    saveData = (
      <Button
        title="Save Data"
        onPress={() => storeData({ currentValue })}
        style={{ justifyContent: 'center' }}
      />
    );
  }

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@Home');
      let data = null;
      if (jsonValue != null) {
        data = JSON.parse(jsonValue);
        setCurrentValue(data.currentValue);
      }
    } catch (e) {
      console.dir(e);
    }
  };

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@Home', jsonValue);
      alert('Data successfully saved');
    } catch (e) {
      console.dir(e);
    }
  };
  const clearAll = async () => {
    try {
      await AsyncStorage.clear();
      alert('Storage successfully cleared!');
    } catch (e) {
      console.dir(e);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ flex: 0.8 }}>
        <View>
          <Camera />
        </View>
        <Text style={styles.textFormat}>Welcome, </Text>

        <TextInput
          style={styles.textFormat}
          placeholder="Your name here"
          onChangeText={(currentValue) => setCurrentValue(currentValue)}
        />

        {saveData}

        <View style={{ flex: 0.1, alignItems: 'center' }}>
          <Card>
            <HomeScreenCard />
          </Card>
        </View>
        <FadeInView>
          <Image
            source={{
              uri: 'https://www.tennisexpress.com/prodimages/alt_images/WRT106200CS-4.jpg',
            }}
            style={{
              margin: 20,
              width: 350,
              height: 400,
              borderRadius: 150 / 2,
            }}
          />

          <View
            style={{
              flex: 0.1,
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
          </View>
          <View>
            <Button
              title={(debugging ? 'hide' : 'show') + ' debug info'}
              color="red"
              onPress={() => setDebugging(!debugging)}
            />
          </View>
          <Text>{debugView}</Text>
        </FadeInView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
  textFormat: {
    fontSize: 50,
  },
});

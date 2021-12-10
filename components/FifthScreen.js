import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Switch,
  Button,
  Linking,
} from 'react-native';
import ScreenTemplate from '../containers/ScreenTemplate';
import ThreePartRow from '../containers/ThreePartRow';
import { useValue } from './ValueContext';

const FifthScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ fontSize: 20 }}>Push Notificiations</Text>
      </View>
      <View style={{ alignItems: 'flex-end' }}>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View style={{ borderTopWidth: 3 }}>
        <Text style={styles.headers}>App Information</Text>
        <Text>App version: 1.0.1</Text>
      </View>
      <View style={{ borderTopWidth: 3 }}>
        <Button
          title="Help"
          onPress={() => Linking.openURL('https://www.google.com')}
        />
      </View>
    </View>
  );
};

export default FifthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
  headers: {
    fontSize: 30,
  },
});

import React, { useState, useEffect } from 'react';
import {
  Button,
  Text,
  TextInput,
  View,
  FlatList,
  SafeAreaView,
  ScrollView,
} from 'react-native';

const TennisInfo = () => {

  const DATA = [
  {
    name: 'Benjamin',
    ranking: '4.5',
    hand:'Right-handed',
  },
  {
    name: 'Aaron',
    ranking:'5.5',
    hand:'Left-handed',
  },
  {
    name: 'Max',
    ranking: '6.5',
    hand:'Right-handed',
  },
    {
    name: 'Ryan',
    ranking: '6.5',
    hand:'Right-handed',
  },
];


  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState('');
  const [data, setData] = useState([]);
  const [showRepo, setShowRepo] = useState(false);

  const renderItem = ({ item }) => {
    return (
      <View style={{backgroundColor: '#eee',flexDirection: 'column',margin: 15, padding: 10}}>
        <Text style = {{fontSize: 25}}>
          {item.name}
        </Text>
        <Text style = {{fontSize: 25}}>
          {item.ranking} 
        </Text>
        <Text style = {{fontSize: 25}}>
          {item.hand}
        </Text>
        <Button 
          title = 'press me'
        />
      </View>
    );
  };

    return (
    <SafeAreaView>
      <ScrollView>
        <FlatList
          data={DATA}
          renderItem={renderItem}
        //  keyExtractor={(item) => item.description}
        />
        </ScrollView>
    </SafeAreaView>
  );
}

export default TennisInfo;
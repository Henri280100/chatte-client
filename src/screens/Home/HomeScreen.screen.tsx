import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import { HomeContentComponent } from '../../components/Home';


export const HomeScreen: React.FC = () => {
  const [chats, setChats] = useState([
    {id: '1', name: 'Khoa', message: 'Hello', avatar: '', time: '23/12/2020'},
    {id: '2', name: 'asd', message: 'How are you?', avatar: '', time: '31/1/2024'},
    {id: '3', name: 'ddd', message: 'I am good, thank you!', avatar: '', time: '23/12/2020'},
  ]);

  return (
    <View style={styles.container}>
      <HomeContentComponent data={chats}/>
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });
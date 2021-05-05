import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import CarItem from "./assets/components/CarItem"
import CarList from './assets/components/CarList'
import Header from './assets/components/Header'



export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
   <CarList/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  }

});

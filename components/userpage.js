import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './components/Header';
import Goods from './components/Goods';
import Promotion from './components/Promotion';

const Userpage = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.text}> โปรโมชัน </Text>
      <Promotion />
      <Text style={styles.text}>  </Text>
      <Goods />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 30,
  }
})

export default Userpage;
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'

const Promotion = () => {
  return(
    <View style={styles.container}>
        <Image source={require('../images/shirt1.jpg')} style={styles.pomo} />
    </View>
    
    )
  }

  const styles = StyleSheet.create({
    container: {
        height: 150,
        padding: 5,
        borderColor: 'black'
    },
    pomo:{
      width: '100%',
      height: '110%',
    },
    text: {
        fontSize: 30
    },
    image: {
      width: 100,
      height: 100,
      borderRadius: 100/3
  }
})

export default Promotion;
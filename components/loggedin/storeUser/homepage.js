import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Dimensions,
  ImageStore
} from 'react-native'

const list = [0, 1, 2, 3, 4, 5];
const nologinpage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../../../images/back.png')} style={{ height: 40, width: 40, marginTop: 19 }} />
        </TouchableOpacity>
        <Text style={styles.text}> Fashion men shop  </Text>
      </View>

      { // header 
      }
      <View style={{ flex: 2 }}>
        <View style={styles.box2}>
          <Image source={require('../../../images/shirt1.jpg')} style={styles.image} />
          <Text style={styles.text2}> Fashion men shop </Text>
        </View>
      </View>

      { // party group
      }
      <View style={{ flex: 3, marginTop: '10%' }}>
        <Text style={styles.pomotext}> รายการสินค้า </Text>
        <ScrollView>
          <View style={styles.container}>
            <FlatList
              style={{ marginTop: -40 }}
              data={list}
              numColumns={2}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('partypage')}>
                  <View style={styles.insidegoodsbox} elevation={5}>
                    <Image source={require('../../../images/shirt1.jpg')} style={styles.goodsimage} />
                    <Text style={{ fontSize: 15 }}> เสื้อแฟชัน sleeveless </Text>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={{ fontSize: 15, color: 'red' }}> 150 B </Text>
                      <Text style={{ fontSize: 15, color: 'black' }}> / คน </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <Image source={require('../../../images/shirt1.jpg')} style={styles.goodslogo} />
                      <Text style={{ fontSize: 13, textAlign: 'center', paddingTop: 8 }}> Fashion men shop </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <Image source={require('../../../images/user.png')} style={styles.goodslogo} />
                      <Text style={{ fontSize: 13, textAlign: 'center', paddingTop: 8 }}> หารกัน 3 ชิ้น </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '10%',
    backgroundColor: '#E5E5E5',
  },
  box: {
    height: 100,
    padding: 10,
    backgroundColor: '#00B900',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
  },
  box2: {
    flex: 1,
    alignItems: 'center',
    marginTop: '10%',
  },
  text: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    marginTop: '5%',
    marginLeft: '6%'
  },
  text2: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    marginTop: '3%'
  },
  image: {
    width: '45%',
    height: '100%',
    borderRadius: 120,
  },
  pomotext: {
    fontSize: 30,
    color: 'black'
  },
  goodscontainer: {
    flex: 1,
  },
  goodsimage: {
    width: '95%',
    height: '50%',
    borderRadius: 20,
    marginLeft: 4
  },
  insidegoodsbox: {
    width: 180,
    height: 240,
    backgroundColor: '#FFFF',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 25,
    marginHorizontal: 3,
    marginLeft: 10,
    marginBottom: 15,
    alignSelf: 'center'
  },
  goodslogo: {
    width: 40,
    height: 40,
    borderRadius: 100 / 3
  },
})

export default nologinpage;
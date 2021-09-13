import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
  FlatList,
  SafeAreaView
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import Topnavigator from './topnavigator';

export default function Home({ navigation }) {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    // Post updated, do something with route.params.post
    // For example, send the post to the server 

    axios.get('http://34.126.169.148/showparty.php')
      .then(response => {
        setInfo(response.data);
      })
      .catch(err => {
        console.log(err)
      })
  })

  return (
    <ScrollView>
      <View style={styles.container}>

        {
          // header
        }
        <View style={styles.headerbox}>
          <View style={styles.header}>
            <View style={styles.searchbar}>
              <Image source={require('../images/search.png')} style={styles.icon} />
              <TextInput style={{ marginLeft: '5%' }} placeholder="ค้นหา" />
            </View>
            <TouchableOpacity onPress={() => Alert.alert("กรุณาเข้าสู่ระบบ")}>
              <View style={styles.box2}>
                <Image source={require('../images/noti.png')} style={styles.noti} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.textbox}>
            {
              // top navigation
            }

          </View>
        </View>

        {
          // promotion
        }
        <View style={{ flex: 2, height: 200 }}>
          <View style={styles.pomobox}>
            <Text style={styles.pomotext}> โปรโมชัน </Text>
            <Image source={require('../images/shirt1.jpg')} style={styles.pomoimage} />
          </View>
        </View>

        {
          // goods view
        }
        <View style={styles.goodscontainer}>
          <Text style={styles.pomotext}> กำลังมาแรง </Text>
            <SafeAreaView style={styles.container2}>
              <FlatList
                style={{ marginTop: -40 }}
                data={info}
                numColumns={2}
                keyExtractor={(items) => items.id}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => navigation.navigate('partydetail', { id: item.party_id })}>
                    <View style={styles.insidegoodsbox} elevation={5}>
                      <Image source={{ uri: item.party_picture }} style={styles.goodsimage} />
                      <Text numberOfLines={1} style={{ fontSize: 15, width: 200 }}> {item.party_name} </Text>
                      <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 15, color: 'red' }}> {item.party_price} B </Text>
                        <Text style={{ fontSize: 15, color: 'black' }}> / คน </Text>
                      </View>
                      <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../images/shirt1.jpg')} style={styles.goodslogo} />
                        <Text numberOfLines={1} style={{ fontSize: 13, textAlign: 'center', paddingTop: 8 }}> {item.party_store} </Text>
                      </View>
                      <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../images/user.png')} style={{
                          width: 30,
                          height: 30,
                          borderRadius: 100 / 3,
                          tintColor: '#6359d5',
                          marginTop: '1%'
                        }} />
                        <Text style={{ fontSize: 13, textAlign: 'center', paddingTop: 8, marginLeft: '3%' }}> หารกัน {item.party_limitmember} ชิ้น </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                )}
              />
            </SafeAreaView>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  container2: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: '10%'
  },
  header: {
    height: 50,
    padding: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    marginTop: '10%'
  },
  searchbar: {
    height: '130%',
    width: '90%',
    backgroundColor: '#E7E8E8',
    borderRadius: 7,
    flexDirection: 'row',
    alignItems: 'center'
  },
  box2: {
    alignItems: 'flex-end',
    alignItems: 'center',
    paddingTop: '1.5%',
    paddingLeft: '2%'
  },
  inputbox: {
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
    width: '75%',
    marginLeft: '2.5%'
  },
  text1: {
    color: 'black',
    fontSize: 18,
    textAlign: 'left',
    flexDirection: 'row',
    marginTop: '4%',
    marginLeft: '2%'
  },
  icon: {
    height: '65%',
    width: '7%',
    tintColor: 'black',
    marginLeft: '3%'
  },
  textbox: {
    height: 50,
    backgroundColor: 'black',
    flexDirection: 'column',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  noti: {
    width: 30,
    height: 30,
    marginTop: '8%',
    marginLeft: '2%',
    tintColor: '#6359d5'
  },
  pomobox: {
    height: '50%',
    padding: 5,
    borderColor: 'black'
  },
  pomoimage: {
    width: '100%',
    height: '160%',
    borderRadius: 15
  },
  pomotext: {
    fontSize: 30,
    color: 'black'
  },
  goodscontainer: {
    flex: 3,
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
    backgroundColor: '#f5f5f5',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 25,
    marginHorizontal: 3,
    marginLeft: 10,
    marginBottom: 15,
    alignSelf: 'center',
    elevation: 20
  },
  goodslogo: {
    width: 35,
    height: 35,
    borderRadius: 100 / 3
  },
})
  ;
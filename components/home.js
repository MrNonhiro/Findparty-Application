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
  FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';

const List = [0, 1, 2, 3, 4, 5];
export default function Home({ navigation }) {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    // Post updated, do something with route.params.post
    // For example, send the post to the server 

    axios.get('http://34.87.120.146/showparty.php')
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
              <Icon name="ios-search" style={styles.icon} />
              <TextInput placeholder="ค้นหา" />
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
          <ScrollView>
            <View style={styles.container}>
              <FlatList
                style={{ marginTop: -40 }}
                data={info}
                numColumns={2}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => navigation.navigate('partypage', { id: item.party_id })}>
                    <View style={styles.insidegoodsbox} elevation={5}>
                      <Image source={require('../images/shirt1.jpg')} style={styles.goodsimage} />
                      <Text style={{ fontSize: 15 }}> {item.party_name} </Text>
                      <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 15, color: 'red' }}> {item.party_price} B </Text>
                        <Text style={{ fontSize: 15, color: 'black' }}> / คน </Text>
                      </View>
                      <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../images/shirt1.jpg')} style={styles.goodslogo} />
                        <Text style={{ fontSize: 13, textAlign: 'center', paddingTop: 8 }}> Fashion men shop </Text>
                      </View>
                      <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../images/user.png')} style={styles.goodslogo} />
                        <Text style={{ fontSize: 13, textAlign: 'center', paddingTop: 8 }}> หารกัน {item.party_limitmember} ชิ้น </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                )}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    marginTop: '10%'
  },
  header: {
    height: 50,
    padding: 10,
    backgroundColor: '#00B900',
    flexDirection: 'row'
  },
  searchbar: {
    height: '130%',
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 15,
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
    color: 'white',
    fontSize: 18,
    textAlign: 'left',
    flexDirection: 'row',
    marginTop: '4%',
    marginLeft: '2%'
  },
  icon: {
    fontSize: 25,
  },
  textbox: {
    height: 50,
    backgroundColor: 'black',
    flexDirection: 'column',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#00B900',
    flexDirection: 'row'
  },
  noti: {
    width: 30,
    height: 30,
    marginTop: '8%',
    marginLeft: '2%'
  },
  pomobox: {
    height: '50%',
    padding: 5,
    borderColor: 'black'
  },
  pomoimage: {
    width: '100%',
    height: '160%',
    borderRadius: 10
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
    width: 35,
    height: 35,
    borderRadius: 100 / 3
  },
})
  ;
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert, FlatList } from 'react-native';
import axios from 'axios';
import { BlurView } from 'expo-blur';

export default function partypage({ navigation, route }) {
  const [info, setInfo] = useState([]);
  const { id } = route.params;
  useEffect(() => {
    // Post updated, do something with route.params.post
    // For example, send the post to the server 

    axios.get('http://34.126.164.13/showsingle.php', {
      params: {
        id: id
      }
    })
      .then(response => {
        setInfo(response.data);
      })
      .catch(err => {
        console.log(err)
      })
  })

  return (
    <FlatList
      style={{ marginTop: -40 }}
      data={info}
      numColumns={1}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <View style={styles.imagebox, { flexDirection: 'row' }}>
            <Image source={require('../images/shirt1.jpg')} style={styles.goodsimage} />
              <BlurView intensity={45} tint="light" style={{
                height: '10%',
                width: '9%',
                borderRadius: 20,
                justifyContent: 'center',
                position: 'absolute',
                marginTop: '2%',
                marginLeft: '2%'
              }}>
                <Image source={require('../images/back.png')} style={{
                  height: 25,
                  width: 25,
                  tintColor: 'white',
                  alignSelf: 'center',
                  marginRight: '5%'
                }} />
              </BlurView>
          </View>
          <View style={styles.infobox}>
            <Text style={{ color: 'black', fontSize: 20, marginTop: '3%', fontWeight: 'bold' }}> {item.party_name} </Text>
            <View style={styles.detailbox}>
              <View style={{ flexDirection: 'row', marginTop: '2%' }}>
                <Text style={{ fontSize: 16 }}> ประเภท </Text>
                <Text style={{ fontSize: 16, marginLeft: '15%', marginLeft: '21%', fontWeight: 'bold' }}> {item.party_type} </Text>
              </View>
              <View style={{ flexDirection: 'row', marginTop: '5%' }}>
                <Text style={{ fontSize: 16, color: 'black' }}> วันที่จัดตั้งกลุ่ม </Text>
                <Text style={{ fontSize: 16, color: 'black', marginLeft: '4%', marginLeft: '10.5%', fontWeight: 'bold' }}> 30/06/64 </Text>
              </View>
              <View style={{ flexDirection: 'row', marginTop: '5%' }}>
                <Text style={{ fontSize: 16, color: 'black' }}> ราคาหารต่อคน </Text>
                <Text style={{ fontSize: 16, color: 'black', marginLeft: '10%', fontWeight: 'bold' }}> {item.party_price} </Text>
                <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}> บาท </Text>
              </View>
              <View style={{ flexDirection: 'row', marginTop: '5%' }}>
                <Text style={{ fontSize: 16, color: 'black' }}> จำนวนสมาชิกกลุ่ม </Text>
                <Text style={{ color: 'red', fontSize: 16, marginLeft: '5%', fontWeight: 'bold' }}> {item.party_member} </Text>
                <Text style={{ fontSize: 16, color: 'black' }}> / </Text>
                <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}> {item.party_limitmember} </Text>
                <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}> คน </Text>
              </View>
              <View style={{ flexDirection: 'row', marginTop: '5%' }}>
                <Text style={{ marginTop: '2%', color: 'black', fontSize: 16 }}> รายละเอียด </Text>
                <Text numberOfLines={5} style={{ width: 250, marginTop: '2%', fontSize: 16, color: 'black', marginLeft: '17%', fontWeight: 'bold' }}>
                  {item.party_detail}
                </Text>
              </View>
              <View>
                <TouchableOpacity>
                  <View style={{
                    backgroundColor: '#6359d5',
                    alignItems: 'center',
                    height: 35,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginTop: '3%',
                    width: '60%',
                    alignSelf: 'center',
                    borderRadius: 10
                  }}>
                    <Text onPress={() => Alert.alert("กรุณาเข้าสู่ระบบ")}
                      style={{
                        fontSize: 16,
                        color: 'white',
                        marginRight: '3%',
                        fontWeight: 'bold'
                      }} > เข้าร่วมกลุ่ม </Text>
                    <Image source={require('../images/joinpeople.png')} style={{ height: 30, width: 30, tintColor: 'white' }} />
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 16, color: '#6359d5', fontWeight: 'bold', alignSelf: 'center' }}> ------------------------------------------------------------- </Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 16 }}> สร้างกลุ่มโดย </Text>
              </View>
              <TouchableOpacity>
                <View style={{ flexDirection: 'row', marginTop: '2%' }}>
                  <Image source={require('../images/shirt1.jpg')} style={styles.storelogo} />
                  <Text onPress={() => navigation.navigate('storepage')}
                    style={{
                      fontSize: 18,
                      textAlign: 'center',
                      paddingTop: 13
                    }}> {item.party_store} </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '20%',
    backgroundColor: '#E5E5E5',
  },
  box: {
    height: 100,
    padding: 10,
    backgroundColor: '#00B900',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    zIndex: 1
  },
  text: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    marginTop: '5%',
  },
  imagebox: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center'
  },
  goodsimage: {
    height: 320,
    width: '100%',
    borderRadius: 20
  },
  infobox: {
    flex: 3,
    backgroundColor: 'white',
    borderRadius: 20,
    marginTop: 5
  },
  storelogo: {
    width: 50,
    height: 50,
    borderRadius: 100 / 3
  },
})
  ;

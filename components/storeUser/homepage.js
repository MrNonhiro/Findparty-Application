import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import { Header } from 'react-native-elements';
import axios from 'axios';

export default function storepage({ navigation }) {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    // Post updated, do something with route.params.post
    // For example, send the post to the server 

    axios.get('http://34.124.194.224/showparty.php')
      .then(response => {
        setInfo(response.data);
      })
      .catch(err => {
        console.log(err)
      })
  })


  return (
    <View style={styles.container}>
      <Header
        centerComponent={{ text: 'Fashion men shop', style: { color: 'black', fontSize: 25 } }}
        containerStyle={{
          backgroundColor: 'white',
          height: '18%',
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20
        }}
        rightComponent={
          <View style={{ marginTop: '4%' }}>
            <TouchableOpacity onPress={() => { setIsSubmit(true) }}>
              <Image source={require('../../images/setting.png')} style={{
                height: 25,
                width: 25,
                tintColor: 'black',
              }} />
            </TouchableOpacity>
          </View>
        }
      />
      <ScrollView>
        <View style={{ flex: 1 }}>
          { // header 
          }
          <View style={{
            height: '13%'
          }}>
            <View style={styles.box2}>
              <Image source={require('../../images/shirt1.jpg')} style={styles.image} />
              <Text style={styles.text2}> Fashion men shop </Text>
            </View>
          </View>

          <View style={{
            flex: 2,
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: '15%'
          }}>
            <TouchableOpacity>
              <View style={{ marginRight: '2.5%' }}>
                <Text style={{ alignSelf: 'center', color: 'black', fontSize: 50 }}> 0 </Text>
                <Text style={{ alignSelf: 'center', color: 'black', fontSize: 15 }}> ผู้ติดตาม </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={{ marginRight: '2.5%' }}>
                <Text style={{ alignSelf: 'center', color: 'black', fontSize: 50 }}> 0 </Text>
                <Text style={{ alignSelf: 'center', color: 'black', fontSize: 15 }}> ปาร์ตี้ทั้งหมด </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.statusbox}>
            <TouchableOpacity onPress={() => navigation.navigate('storepaymentWaiting')}>
              <View style={{ marginTop: '10%', marginRight: '2.5%' }}>
                <Image source={require('../../images/waitingpayment.png')} style={styles.statusimage1} />
                <View style={styles.badge}>
                  {/* data == 0 ? false :  true */}

                  <Text style={styles.badgeText}> 0 </Text>
                </View>
                <Text style={{ alignSelf: 'center', color: 'black' }}> รอการชำระเงิน </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('storedeliveryWaiting')}>
              <View style={{ marginTop: '12%', marginRight: '2.5%' }}>
                <Image source={require('../../images/deliverywating.png')} style={styles.statusimage2} />
                <View style={styles.badge}>
                  <Text style={styles.badgeText}> 0 </Text>
                </View>
                <Text style={{ alignSelf: 'center', color: 'black' }}> รอการจัดส่ง </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('storedelivery')}>
              <View style={{ marginTop: '13%', marginRight: '2.5%' }}>
                <Image source={require('../../images/delivery.png')} style={styles.statusimage3} />
                <View style={styles.badge}>
                  <Text style={styles.badgeText}> 0 </Text>
                </View>
                <Text style={{ alignSelf: 'center', color: 'black' }}> รอรับสินค้า </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('storerecieved')}>
              <View style={{ marginTop: '10%', marginRight: '2.5%' }}>
                <Image source={require('../../images/received.png')} style={styles.statusimage4} />
                <View style={styles.badge}>
                  <Text style={styles.badgeText}> 0 </Text>
                </View>
                <Text style={{ alignSelf: 'center', color: 'black' }}> รายการที่สำเร็จ </Text>
              </View>
            </TouchableOpacity>
          </View>

          { // party group
          }
          <View style={{ flex: 3, marginTop: '10%' }}>
            <View style={styles.container}>
              <FlatList
                data={info}
                numColumns={2}
                renderItem={({ item }) => (
                  <View>
                    <TouchableOpacity onPress={() => navigation.navigate('storepartydetail', { id: item.party_id })}>
                      <View style={styles.insidegoodsbox} elevation={5}>
                        <Image source={{ uri: item.party_picture }} style={styles.goodsimage} />
                        <Text numberOfLines={1} style={{ fontSize: 15, width: 200 }}> {item.party_name} </Text>
                        <View style={{ flexDirection: 'row' }}>
                          <Text style={{ fontSize: 15, color: 'red' }}> {item.party_price} B </Text>
                          <Text style={{ fontSize: 15, color: 'black' }}> / คน </Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                          <Image source={require('../../images/shirt1.jpg')} style={styles.goodslogo} />
                          <Text numberOfLines={1} style={{ fontSize: 13, textAlign: 'center', paddingTop: 8 }}> {item.party_store} </Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                          <Image source={require('../../images/user.png')} style={{
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
                  </View>
                )}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  box2: {
    flex: 1,
    alignItems: 'center',
    marginTop: '3%',
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
    height: '110%',
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
  statusimage1: {
    width: '45%',
    height: 48,
    alignSelf: 'center',
    tintColor: 'black'
  },
  statusimage2: {
    width: '70%',
    height: 48,
    alignSelf: 'center',
    tintColor: 'black'
  },
  statusimage3: {
    width: '85%',
    height: 48,
    alignSelf: 'center',
    tintColor: 'black'
  },
  statusimage4: {
    width: '45%',
    height: 48,
    alignSelf: 'center',
    tintColor: 'black'
  },
  statusbox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    height: 90,
    borderRadius: 20,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginTop: '3%',
    borderColor: 'black',
  },
  badge: {
    position: 'absolute',
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    right: '5%', top: '-10%'

  },
  badgeText: {
    color: 'white',
    fontSize: 18
  }
})
  ;
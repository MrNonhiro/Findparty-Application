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
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function storepage({ navigation }) {
  const [store_id, setStore_id] = useState([]);
  const [storedata, setStoredata] = useState([]);
  const [store_name, setUsedisplay] = useState([]);
  const [store_email, setEmail] = useState([]);
  const [store_profile, setImage] = useState();
  const [store_commercial, setCommercial] = useState([]);

  const [follow, setFollow] = useState([]);
  const [joinAll, setJoinAll] = useState([]);
  const [onPayment, setOnPayment] = useState();
  const [onSending, setonSending] = useState();
  const [onRecieve, setonRecieve] = useState();
  const [onSuccessfully, setonSuccessfully] = useState();

  const [partyThisStore, setPartyThisStore] = useState([]);


  useEffect(() => {
    AsyncStorage.getItem('store_id')
      .then((value) => {
        setStore_id(value);

      })
  })
  useEffect(() => {
    const store = async () => {
      try {
        const response = await axios.get('http://34.124.194.224/profile_getdata_for_store.php', {
          params: {
            store_id: store_id
          }
        })

            setStoredata(response.data.all);
            setUsedisplay(response.data.all.store_name)
            setImage(response.data.all.store_profile)
            setFollow(response.data.data.profiledata.allfollow)
            setJoinAll(response.data.data.profiledata.allparty)
            setOnPayment(response.data.data.partystatus.onpayment)
            setonSending(response.data.data.partystatus.onsending)
            setonRecieve(response.data.data.partystatus.onrecieve)
            setonSuccessfully(response.data.data.partystatus.successfully)
            setPartyThisStore(response.data.partyThisStore)

          
      } catch(err) {
        console.log(err)
      }
    }
    store();

  })


  return (
    <View style={styles.container}>
      <Header
        leftComponent={
          <View style={{ marginTop: '4%' }}>
            <TouchableOpacity onPress={() => navigation.navigate('addparty')}>
              <Image source={require('../../images/add.png')} style={{
                height: 25,
                width: 25,
                tintColor: 'black',
              }} />
            </TouchableOpacity>
          </View>
        }
        centerComponent={
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('addparty')}>
              <Text style={{
                fontSize: 24
              }}> {store_name} </Text>
            </TouchableOpacity>
          </View>
        }
        containerStyle={{
          backgroundColor: 'white',
          height: '18%',
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20
        }}
        rightComponent={
          <View style={{ marginTop: '4%' }}>
            <TouchableOpacity onPress={() => navigation.navigate('storeSetting', { id: store_id })}>
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
        <View>
          <View style={{
            height: '16%',
          }}>
            <View style={styles.box2}>
              {store_profile == null ? (
                <>
                  <Text>ไม่มีรูปภาพ</Text>
                </>
              ) : (
                <>
                  <Image source={{ uri: store_profile }} style={styles.sprofile} />
                </>
              )}
              <Text style={styles.text2}> {store_name} </Text>
            </View>
          </View>

          <View style={{
            flex: 2,
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: '25%'
          }}>
            <TouchableOpacity>
              <View style={{ marginRight: '2.5%' }}>
                <Text style={{ alignSelf: 'center', color: 'black', fontSize: 50 }}> {follow} </Text>
                <Text style={{ alignSelf: 'center', color: 'black', fontSize: 15 }}> ผู้ติดตาม </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={{ marginRight: '2.5%' }}>
                <Text style={{ alignSelf: 'center', color: 'black', fontSize: 50 }}> {joinAll} </Text>
                <Text style={{ alignSelf: 'center', color: 'black', fontSize: 15 }}> ปาร์ตี้ทั้งหมด </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.statusbox}>
            <TouchableOpacity onPress={() => navigation.navigate('storepaymentWaiting')}>
              <View style={{ marginTop: '10%', marginRight: '2.5%' }}>
                <Image source={require('../../images/waitingpayment.png')} style={styles.statusimage1} />
                {onPayment === 0 ? (
                  null
                ) : (
                  <View style={styles.badge}>
                    {/* data == 0 ? false :  true */}

                    <Text style={styles.badgeText}> {onPayment} </Text>
                  </View>
                )}
                <Text style={{ alignSelf: 'center', color: 'black' }}> รอการชำระเงิน </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('storedeliveryWaiting')}>
              <View style={{ marginTop: '12%', marginRight: '2.5%' }}>
                <Image source={require('../../images/deliverywating.png')} style={styles.statusimage2} />
                {onSending === 0 ? (
                  null
                ) : (
                  <View style={styles.badge}>
                    {/* data == 0 ? false :  true */}

                    <Text style={styles.badgeText}> {onSending} </Text>
                  </View>
                )}
                <Text style={{ alignSelf: 'center', color: 'black' }}> รอการจัดส่ง </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('storedelivery')}>
              <View style={{ marginTop: '13%', marginRight: '2.5%' }}>
                <Image source={require('../../images/delivery.png')} style={styles.statusimage3} />
                {onRecieve === 0 ? (
                  null
                ) : (
                  <View style={styles.badge}>
                    {/* data == 0 ? false :  true */}

                    <Text style={styles.badgeText}> {onRecieve} </Text>
                  </View>
                )}
                <Text style={{ alignSelf: 'center', color: 'black' }}> กำลังจัดส่ง </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('storerecieved')}>
              <View style={{ marginTop: '10%', marginRight: '2.5%' }}>
                <Image source={require('../../images/received.png')} style={styles.statusimage4} />
                {onSuccessfully === 0 ? (
                  null
                ) : (
                  <View style={styles.badge}>
                    {/* data == 0 ? false :  true */}

                    <Text style={styles.badgeText}> {onSuccessfully} </Text>
                  </View>
                )}
                <Text style={{ alignSelf: 'center', color: 'black' }}> รายการที่สำเร็จ </Text>
              </View>
            </TouchableOpacity>
          </View>

          { // party group
          }
          <View style={{ flex: 3, marginTop: '10%' }}>
            <View style={styles.container}>
              <FlatList
                data={partyThisStore}
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
                          <Image source={require('../../images/store.png')} style={{
                            width: 30,
                            height: 30,
                            borderRadius: 100 / 3,
                            tintColor: 'black',
                            marginTop: '1%'
                          }} />
                          <Text numberOfLines={1} style={{ fontSize: 13, textAlign: 'center', paddingTop: 8 }}> {item.party_store} </Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                          <Image source={require('../../images/user.png')} style={{
                            width: 30,
                            height: 30,
                            borderRadius: 100 / 3,
                            tintColor: 'black',
                            marginTop: '1%'
                          }} />
                          <Text style={{ fontSize: 13, textAlign: 'center', paddingTop: 8, marginLeft: '3%' }}> ต้องการสมาชิก {item.party_limitmember} คน </Text>
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
  },
  sprofile: {
    width: '50%',
    height: '130%',
    borderRadius: 120,
  }
})
;
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
  const [store_id, setStore_id] = useState([]);
  const [storedata, setStoredata] = useState([]);
  const [store_name, setUsedisplay] = useState([]);
  const [store_email, setEmail] = useState([]);
  const [store_profile, setImage] = useState([]);
  const [store_commercial, setCommercial] = useState([]);

  const [follow, setFollow] = useState([]);
  const [joinAll, setJoinAll] = useState([]);
  const [onPayment, setOnPayment] = useState([]);
  const [onSending, setonSending] = useState([]);
  const [onRecieve, setonRecieve] = useState([]);
  const [onSuccessfully, setonSuccessfully] = useState([]);

  const [partyThisStore, setPartyThisStore] = useState([]);

  useEffect(() => {
    axios.get('http://34.124.194.224/profile_getdata_for_store.php', {
      params: {
        store_id: store_id
      }
    })
      .then(response => {
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



      })
      .catch(err => {
        console.log(err)
      })

  }, [storedata])
  console.log(store_name)

  return (
    <View style={styles.container}>
      <Header
        leftComponent={
          <View style={{ marginTop: '8%' }}>
            <TouchableOpacity
              onPress={() => { navigation.goBack() }}>
              <Image source={require('../images/back.png')} style={{
                height: 25,
                width: 25,
                tintColor: '#6359d5',
              }} />
            </TouchableOpacity>
          </View>}
        centerComponent={{ text: {store_name}, style: { color: 'black', fontSize: 25 } }}
        containerStyle={{
          backgroundColor: 'white',
          height: '18%',
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20
        }}
      />
      <ScrollView>
        <View style={{ flex: 1 }}>
          { // header 
          }
          <View style={{
            height: '13%'
          }}>
            <View style={styles.box2}>
              <Image source={require('../images/shirt1.jpg')} style={styles.image} />
              <Text style={styles.text2}> {store_name} </Text>
              <TouchableOpacity>
                <View style={{
                  marginTop: '4%',
                  alignSelf: 'center',
                  backgroundColor: '#6359d5',
                  borderRadius: 10,
                  borderColor: '#6359d5',
                  width: 80,
                  height: 40,
                  justifyContent: 'center'
                }}>
                  <Text style={{
                    fontSize: 18,
                    color: 'white',
                    alignSelf: 'center'
                  }}> ติดตาม </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{
            flex: 2,
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: '45%'
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

          { // party group
          }
          <View style={{ flex: 3, marginTop: '10%' }}>
            <View style={styles.container}>
              <FlatList
                data={partyThisStore}
                numColumns={2}
                renderItem={({ item }) => (
                  <View>
                    <TouchableOpacity onPress={() => navigation.navigate('storepartydetail', { id: item.data.party_id })}>
                      <View style={styles.insidegoodsbox} elevation={5}>
                        <Image source={{ uri: item.data.party_picture }} style={styles.goodsimage} />
                        <Text numberOfLines={1} style={{ fontSize: 15, width: 200 }}> {item.data.party_name} </Text>
                        <View style={{ flexDirection: 'row' }}>
                          <Text style={{ fontSize: 15, color: 'red' }}> {item.data.party_price} B </Text>
                          <Text style={{ fontSize: 15, color: 'black' }}> / คน </Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                          <Image source={require('../images/shirt1.jpg')} style={styles.goodslogo} />
                          <Text numberOfLines={1} style={{ fontSize: 13, textAlign: 'center', paddingTop: 8 }}> {item.data.party_store} </Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                          <Image source={require('../images/user.png')} style={{
                            width: 30,
                            height: 30,
                            borderRadius: 100 / 3,
                            tintColor: '#6359d5',
                            marginTop: '1%'
                          }} />
                          <Text style={{ fontSize: 13, textAlign: 'center', paddingTop: 8, marginLeft: '3%' }}> {item.userjoin}  ชิ้น </Text>
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
    height: '120%',
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
  ;
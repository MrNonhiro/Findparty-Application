import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Animated, FlatList, Button } from 'react-native';
import { Header } from 'react-native-elements'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function deliveryWaiting({ navigation }) {

    const [info, setInfo] = useState([]);
    const [user_id, setUser_id] = useState([]);
    const [userdata, setUserdata] = useState([]);
    const [username, setUsername] = useState([]);
    const [userdisplay, setUsedisplay] = useState([]);
    const [user_tel, setUsertel] = useState([]);
    const [email, setEmail] = useState([]);
    const [user_profile, setImage] = useState([]);
    const [party_status, setPartyStatus] = useState([]);

    const [follow, setFollow] = useState([]);
    const [joinAll, setJoinAll] = useState([]);
    const [onPayment, setOnPayment] = useState([]);
    const [onSending, setonSending] = useState([]);
    const [onRecieve, setonRecieve] = useState([]);
    const [onSuccessfully, setonSuccessfully] = useState([]);
    useEffect(() => {
        axios.get('http://34.124.194.224/profile_getdata_for_user.php', {
            params: {
                user_id: user_id
            }
        })
            .then(response => {
                setUserdata(response.data.all);
                setUsername(response.data.username)
                setUsedisplay(response.data.userdisplay)
                setUsertel(response.data.user_tel)
                setEmail(response.data.email)
                setImage(response.data.user_profile)

                setFollow(response.data.data.profiledata.follow)
                setJoinAll(response.data.data.profiledata.alljoined)
                setOnPayment(response.data.data.partystatus.onpayment)
                setonSending(response.data.data.partystatus.onsending)
                setonRecieve(response.data.data.partystatus.onrecieve)
                setonSuccessfully(response.data.data.partystatus.successfully)

            })
            .catch(err => {
                console.log(err)
            })

    }, [userdata])
    console.log(userdata)

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
                leftComponent={
                    <View style={{ marginTop: '8%' }}>
                        <TouchableOpacity
                            onPress={() => { navigation.goBack() }}>
                            <Image source={require('../../../images/back.png')} style={{
                                height: 25,
                                width: 25,
                                tintColor: '#6359d5',
                            }} />
                        </TouchableOpacity>
                    </View>}
                centerComponent={{ text: 'รอการจัดส่ง', style: { color: 'black', fontSize: 25 } }}
                containerStyle={{
                    backgroundColor: 'white',
                    height: '18%',
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20
                }}
            />

            <View style={{ flex: 3 }}>
                <View style={styles.container}>
                    <FlatList
                        data={userdata}
                        numColumns={1}
                        renderItem={({ item }) => (
                            <View>
                                <TouchableOpacity onPress={() => navigation.navigate('partypage', { id: item.party_id })}>
                                    <View style={styles.insidegoodsbox} elevation={5}>
                                        <Image source={{ uri: item.party_picture }} style={styles.goodsimage} />
                                        <View style={{
                                            marginLeft: '3%'
                                        }}>
                                            <Text numberOfLines={1} style={{
                                                fontSize: 15,
                                                width: 200,
                                                marginTop: '2%',
                                            }}> {item.party_name} </Text>

                                        </View>

                                    </View>
                                </TouchableOpacity>
                            </View>
                        )}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    text: {
        fontSize: 30,
        color: 'white',
        textAlign: 'center',
        marginTop: '5%',
        marginLeft: '15%'
    },
    goodscontainer: {
        flex: 1,
    },
    goodsimage: {
        width: '35%',
        height: '100%',
        borderRadius: 20,
        marginLeft: 4
    },
    insidegoodsbox: {
        width: '95%',
        height: 100,
        backgroundColor: '#FFFF',
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        borderRadius: 25,
        marginHorizontal: 3,
        marginLeft: 10,
        marginBottom: 15,
        alignSelf: 'center',
        flexDirection: 'row'
    },
    goodslogo: {
        width: 40,
        height: 40,
        borderRadius: 100 / 3
    },
})
    ;
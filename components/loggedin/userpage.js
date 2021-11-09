import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Animated, FlatList, SafeAreaView } from 'react-native';
import { Header } from 'react-native-elements'
import { Button } from 'react-native-elements/dist/buttons/Button';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function userpage({ navigation }) {

    const [user_id, setUser_id] = useState([]);
    const [userdata, setUserdata] = useState([]);
    const [username, setUsername] = useState([]);
    const [userdisplay, setUsedisplay] = useState([]);
    const [user_tel, setUsertel] = useState([]);
    const [email, setEmail] = useState([]);
    const [user_profile, setImage] = useState([]);
    const [party_status, setPartyStatus] = useState([]);
    useEffect(() => {
        AsyncStorage.getItem('user_id')
            .then((value) => {
                setUser_id(value);

            })
    })

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

    useEffect(() => {
        axios.get('http://34.124.194.224/showuser.php', {
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
            })
            .catch(err => {
                console.log(err)
            })

    }, [userdata])
    console.log(userdata)

    return (
        <View style={styles.container}>
            <Header
                leftComponent={
                    <View style={{ marginTop: '8%' }}>
                        <TouchableOpacity
                            onPress={() => { navigation.goBack() }}>
                            <Image source={require('../../images/back.png')} style={{
                                height: 25,
                                width: 25,
                                tintColor: '#6359d5',
                            }} />
                        </TouchableOpacity>
                    </View>}
                centerComponent={{ text: 'ข้อมูลส่วนตัว', style: { color: 'black', fontSize: 25 } }}
                containerStyle={{
                    backgroundColor: 'white',
                    height: '18%',
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20
                }}
            />
            <View style={{ flex: 1 }}>
                <FlatList
                    style={{ marginTop: -40 }}
                    data={userdata}
                    renderItem={({ item }) => (
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate('usersetting', { id: item.user_id })}>
                                <View>
                                    <Image source={require('../../images/setting.png')} style={{
                                        height: 35,
                                        width: 35,
                                        marginRight: '5%',
                                        alignSelf: 'flex-end',
                                        tintColor: '#6359d5',
                                        marginTop: '2%'
                                    }} />
                                </View>
                            </TouchableOpacity>

                            <View style={styles.box2}>
                                <Image source={{ uri: item.user_profile }} style={styles.image} />
                                <Text style={styles.text2}> {item.user_display} </Text>
                            </View>

                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                marginTop: '4%'
                            }}>
                                <TouchableOpacity>
                                    <View style={{ marginRight: '2.5%' }}>
                                        <Text style={{ alignSelf: 'center', color: 'black', fontSize: 50 }}> 0 </Text>
                                        <Text style={{ alignSelf: 'center', color: 'black', fontSize: 15 }}> กำลังติดตาม </Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={{ marginRight: '2.5%' }}>
                                        <Text style={{ alignSelf: 'center', color: 'black', fontSize: 50 }}> 0 </Text>
                                        <Text style={{ alignSelf: 'center', color: 'black', fontSize: 15 }}> เข้าร่วมทั้งหมด </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <Text style={{
                                fontSize: 20,
                                color: 'black',
                                marginLeft: '3%',
                                marginTop: '8%'
                            }}> รายการซื้อของฉัน </Text>
                            <View style={styles.statusbox}>
                                <TouchableOpacity onPress={() => navigation.navigate('paymentWating')}>
                                    <View style={{ marginTop: '10%', marginRight: '2.5%' }}>
                                        <Image source={require('../../images/waitingpayment.png')} style={styles.statusimage1} />
                                        <View style={styles.badge}>
                                            {/* data == 0 ? false :  true */}
                                            
                                            <Text style={styles.badgeText}> 0 </Text>
                                        </View>
                                        <Text style={{ alignSelf: 'center', color: 'black' }}> รอการชำระเงิน </Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate('deliveryWaiting')}>
                                    <View style={{ marginTop: '12%', marginRight: '2.5%' }}>
                                        <Image source={require('../../images/deliverywating.png')} style={styles.statusimage2} />
                                        <View style={styles.badge}>
                                            <Text style={styles.badgeText}> 0 </Text>
                                        </View>
                                        <Text style={{ alignSelf: 'center', color: 'black' }}> รอการจัดส่ง </Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate('delivery')}>
                                    <View style={{ marginTop: '13%', marginRight: '2.5%' }}>
                                        <Image source={require('../../images/delivery.png')} style={styles.statusimage3} />
                                        <View style={styles.badge}>
                                            <Text style={styles.badgeText}> 0 </Text>
                                        </View>
                                        <Text style={{ alignSelf: 'center', color: 'black' }}> รอรับสินค้า </Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate('received')}>
                                    <View style={{ marginTop: '10%', marginRight: '2.5%' }}>
                                        <Image source={require('../../images/received.png')} style={styles.statusimage4} />
                                        <View style={styles.badge}>
                                            <Text style={styles.badgeText}> 0 </Text>
                                        </View>
                                        <Text style={{ alignSelf: 'center', color: 'black' }}> รายการที่สำเร็จ </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                />
            </View>

            <Button title='Add' onPress={() => this.animateBadge()}> </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    box: {
        height: '15%',
        width: '100%',
        padding: 10,
        backgroundColor: '#6359d5',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    box2: {
        alignItems: 'center'
    },
    text: {
        fontSize: 30,
        color: 'white',
        textAlign: 'center',

    },
    text2: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: '3%',
        color: 'black'
    },
    image: {
        width: '50%',
        height: 200,
        borderRadius: 120,
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
        marginBottom: '20%',
        height: 90,
        borderRadius: 20,
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        marginTop: '3%',
        borderColor: '#6359d5',
    },
    badge: {
        position: 'absolute',
        width: 30,
        height: 30,
        borderRadius: 20,
        backgroundColor: '#6359d5',
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
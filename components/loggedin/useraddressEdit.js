import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Platform } from 'react-native';
import { Header } from 'react-native-elements';
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export default function useraddressEdit({ navigation }) {
    const [info, setInfo] = useState([]);
    useEffect(() => {
        // Post updated, do something with route.params.post
        // For example, send the post to the server 

        axios.get('http://34.87.24.98/showuser.php', {
            params: {
                user_id: user_id
            }
        })
            .then(response => {
                setInfo(response.data);
            })
            .catch(err => {
                console.log(err)
            })
    }, [info])

    useEffect(() => {
        // Post updated, do something with route.params.post
        // For example, send the post to the server 

        AsyncStorage.getItem('user_id')
            .then(response => {
                setUser_id(response);
            })
            .catch(err => {
                console.log(err)
            })
    })

    const [user_id, setUser_id] = useState([]);

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
                centerComponent={{ text: 'แก้ไขที่อยู่', style: { color: 'black', fontSize: 25 } }}
                containerStyle={{
                    backgroundColor: 'white',
                    height: '18%',
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20
                }}
                rightComponent={
                    <View style={{ marginTop: '4%' }}>
                        <TouchableOpacity>
                            <Text style={{
                                color: '#6359d5',
                                fontSize: 20
                            }}> บันทึก </Text>
                        </TouchableOpacity>
                    </View>
                }
            />

            <View style={{
                height: 20,
                marginTop: '2%',
                marginLeft: '1%',
                marginBottom: 10,
                alignSelf: 'flex-start'
            }}>
                <Text style={{
                    fontSize: 20,
                    color: 'black',

                }}> ช่องทางการติดต่อ </Text>
            </View>
            <View style={{ flex: 1, width: '100%', marginTop: '6%' }}>
                <FlatList
                    style={{ marginTop: -40 }}
                    data={info}
                    renderItem={({ item }) => (
                        <View>
                            <View style={styles.detailView}>
                                <Image source={require('../../images/user.png')} style={styles.userimage} />
                                <TextInput
                                    style={styles.input}
                                    placeholder={item.user_display}
                                />
                            </View>
                            <View style={styles.detailView}>
                                <Image source={require('../../images/phone.png')} style={styles.userimage} />
                                <TextInput
                                    style={styles.input}
                                    placeholder="เบอร์โทรศัพท์"
                                    keyboardType="numeric"
                                />
                            </View>

                            <View style={{
                                height: 20,
                                marginTop: '8%',
                                marginLeft: '1%',
                                marginBottom: 10,
                                alignSelf: 'flex-start'
                            }}>
                                <Text style={{
                                    fontSize: 20,
                                    color: 'black',

                                }}> ที่อยู่ </Text>
                            </View>
                            <View style={styles.detailView}>
                                <Text style={styles.paragraph}></Text>
                            </View>
                            <View style={styles.detailView}>
                                <Image source={require('../../images/address.png')} style={styles.userimage} />
                                <TextInput
                                    style={styles.input}
                                    placeholder="รายละเอียดที่อยู่"
                                />
                            </View>

                        </View>
                    )}
                />
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    text: {
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
        marginTop: '5%',
        marginLeft: '25%'
    },
    text2: {
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
        marginTop: '65%'
    },
    detailView: {
        flexDirection: 'row',
        backgroundColor: 'white',
        height: 50,
        width: '100%',
        marginTop: '1%',
        alignItems: 'center',
        elevation: 3
    },
    detailFont: {
        fontSize: 15,
        color: 'black',
        alignSelf: 'center',
        marginLeft: 10
    },
    userimage: {
        height: '43%',
        width: '5.5%',
        marginLeft: '3%',
        tintColor: '#6359d5'
    },
    input: {
        marginLeft: '5%'
    }
})
    ;
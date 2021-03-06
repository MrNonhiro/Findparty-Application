import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Animated, FlatList, Button, ActivityIndicator } from 'react-native';
import { Header } from 'react-native-elements'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function deliveryWaiting({ navigation }) {

    const [info, setInfo] = useState([]);
    const [loading, setLoading] = useState(false);
    const [store_id, setStore_id] = useState();
    const [party_id, setParty_id] = useState();
    const [submit, setSubmit] = useState(false);

    const userid = async () => {
        try {
            const userid = await AsyncStorage.getItem('store_id');
            setStore_id(userid);
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        userid();
    });

    useEffect(() => {
        // Post updated, do something with route.params.post
        // For example, send the post to the server 
        axios.get('http://34.124.194.224/store_show_party_status.php', {
            params: {
                store_id: store_id,
                status: 2
            }
        })
            .then(response => {
                setInfo(response.data);
                setLoading(true);
            })
            .catch(err => {
                console.log(err)
            })

    })

    useEffect(() => {
        const Payment = async () => {
            try {
                const res = axios.post('http://34.124.194.224/store_update_party_status_3.php', {
                    party_id: party_id
                })
            } catch (err) {
                console.log(err);
            }
        }
        if (submit) Payment();
    }, [submit]);

    console.log('store_id : ' + store_id)

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
                centerComponent={{ text: '?????????????????????????????????', style: { color: 'black', fontSize: 25 } }}
                containerStyle={{
                    backgroundColor: 'white',
                    height: '18%',
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20
                }}
            />

            <View style={{ flex: 3 }}>
                <View style={styles.container}>
                    {info == null ? (
                        <>
                            <Text style={{
                                fontSize: 20,
                                alignSelf: 'center',
                                marginTop: '10%'
                            }}>?????????????????????????????????</Text>
                        </>
                    ) : (
                        <>
                            <FlatList
                                data={info}
                                numColumns={1}
                                renderItem={({ item }) => (
                                    <View>
                                        <TouchableOpacity onPress={() => navigation.navigate('partypage', { id: item.data.party_id })}>
                                            <View style={styles.insidegoodsbox} elevation={5}>
                                                <Image source={{ uri: item.data.party_picture == null ? 'https://www.thaipoultry.org/image/about/nonpic.jpg' : item.data.party_picture }} style={styles.goodsimage} />
                                                <View style={{
                                                    marginLeft: '3%',
                                                    justifyContent: 'center'
                                                }}>
                                                    <Text numberOfLines={1} style={{
                                                        fontSize: 15,
                                                        width: 200,
                                                        fontWeight: 'bold'
                                                    }}> {item.data.party_name} </Text>
                                                    <View style={{
                                                        marginTop: '2%',
                                                        flexDirection: 'row'
                                                    }}>
                                                        <Text numberOfLines={1} style={{
                                                            fontSize: 15,
                                                            width: 200,
                                                        }}> ?????????????????????????????????????????????????????? {item.userjoin} ?????? </Text>
                                                    </View>
                                                    <TouchableOpacity
                                                        onPress={() => { setSubmit(true); setParty_id(item.data.party_id); }}
                                                    >
                                                        <View style={{
                                                            backgroundColor: '#6359d5',
                                                            width: 150,
                                                            height: 30,
                                                            borderRadius: 10,
                                                            marginTop: '4%',
                                                            justifyContent: 'center'
                                                        }}>
                                                            <Text style={{
                                                                fontSize: 14,
                                                                color: 'white',
                                                                alignSelf: 'center'
                                                            }}> ?????????????????????????????????????????????????????? </Text>
                                                        </View>
                                                    </TouchableOpacity>
                                                </View>

                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                )}
                            />
                        </>
                    )}
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
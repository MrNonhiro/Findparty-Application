import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Animated, FlatList, Button } from 'react-native';
import { Header } from 'react-native-elements'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function storepaymentWaiting({ navigation }) {

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
                centerComponent={{ text: 'รอการชำระ', style: { color: 'black', fontSize: 25 } }}
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
                        data={info}
                        numColumns={1}
                        renderItem={({ item }) => (
                            <View>
                                <TouchableOpacity onPress={() => navigation.navigate('storepartydetail', { id: item.party_id })}>
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
                                            <View style={{
                                                marginTop: '5%'
                                            }}>
                                                <TouchableOpacity>
                                                    <Button color="#6359d5" style={{ fontSize: 20 }}
                                                        title="จ่าย">
                                                    </Button>
                                                </TouchableOpacity>
                                            </View>
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
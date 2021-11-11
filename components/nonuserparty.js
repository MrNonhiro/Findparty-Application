import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Animated, FlatList } from 'react-native';
import { Header } from 'react-native-elements'
import { Button } from 'react-native-elements/dist/buttons/Button';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function nonuserparty({ navigation }) {

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

    return (
        <View style={styles.container}>
            <Header
                centerComponent={{ text: 'ปาร์ตี้', style: { color: 'black', fontSize: 25 } }}
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
    box: {
        height: 100,
        padding: 10,
        backgroundColor: 'white',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        marginTop: '10%'
    },
    text: {
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
        marginTop: '5%'
    },
    text2: {
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        marginTop: '65%'
    }
})
    ;
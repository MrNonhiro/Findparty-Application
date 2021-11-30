import React, { useState, useEffect, useRef } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Alert,
    FlatList,
    Animated
} from 'react-native';
import axios from 'axios';
import { Header } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function partydetail({ navigation, route }) {
    const [user_id, setUser_id] = useState();
    const [info, setInfo] = useState([]);
    const [userdata, setUserdata] = useState([]);
    const [buttonStatus, setButtonStatus] = useState([]);
    const [submit, setSubmit] = useState(false);
    const [submit2, setSubmit2] = useState(false);
    const [party_id, setParty_id] = useState([]);
    const { id } = route.params;
    useEffect(() => {
        // Post updated, do something with route.params.post
        // For example, send the post to the server 

        axios.get('http://34.124.194.224/party_show_detail.php', {
            params: {
                party_id: id
            }
        })
            .then(response => {
                setInfo(response.data);

            })
            .catch(err => {
                console.log(err)
            })
    })


    useEffect(() => {
        // Post updated, do something with route.params.post
        // For example, send the post to the server 

        axios.get('http:/34.124.194.224/party_button_status_for_user.php', {
            params: {
                p_id: id,
                u_id: user_id
            }
        })
            .then(response => {
                setButtonStatus(response.data.status);
            })
            .catch(err => {
                console.log(err)
            })
    })

    useEffect(() => {
        AsyncStorage.getItem('user_id')
            .then((value) => {
                setUser_id(value);

            })
    })

    console.log('btn' + buttonStatus);

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


    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const dataRef = useRef(null);
    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

    const scrollNext = () => {
        if (currentIndex < gif.length - 1) {
            dataRef.current.scrollToIndex({ index: currentIndex + 1 });
        } else {
            console.log('last item.');
        }
    }

    const scrollPre = () => {
        if (currentIndex < gif.length + 1) {
            dataRef.current.scrollToIndex({ index: currentIndex - 1 });
        } else {
            console.log('last item.');
        }
    }

    useEffect(() => {
        const authenticate = async () => {
            axios
                .post(
                    "http://34.124.194.224/party_button_action_for_user.php",
                    {
                        u_id: user_id,
                        p_id: id,
                        action: 1
                    }
                )
                .then((response) => {
                    if (response.data == "ok") {
                        setSubmit(false)
                        alert(response.data);
                    } else {
                        alert(response.data);
                        setSubmit(false)
                    }

                })
                .catch((err) => {
                    console.log(err);
                });
        };
        if (submit) authenticate();
    }, [submit]);

    useEffect(() => {
        const authenticate = async () => {
            axios
                .post(
                    "http://34.124.194.224/party_button_action_for_user.php",
                    {
                        u_id: user_id,
                        p_id: id,
                        action: 0
                    }
                )
                .then((response) => {
                    if (response.data == "ok") {
                        setSubmit2(false)
                        alert(response.data);
                    } else {
                        alert(response.data);
                        setSubmit2(false)
                    }

                })
                .catch((err) => {
                    console.log(err);
                });
        };
        if (submit2) authenticate();
    }, [submit2]);

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.headerbox}>
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
                        centerComponent={{ text: 'ปาร์ตี้', style: { color: 'black', fontSize: 25 } }}
                        containerStyle={{
                            backgroundColor: 'white',
                            height: '18%',
                            borderBottomLeftRadius: 20,
                            borderBottomRightRadius: 20
                        }}
                    />
                </View>

                <View style={styles.detailbox}>
                    <FlatList
                        style={{ marginTop: -40 }}
                        data={info}
                        numColumns={1}
                        keyExtractor={(items) => items}
                        renderItem={({ item }) => (
                            <View>
                                <View style={{
                                    marginTop: '4%',
                                    width: '100%',
                                }}>
                                    <Image source={{ uri: item.data.party_picture }} style={styles.goodsimage} />
                                </View>
                                <Text style={{ color: 'black', fontSize: 20, marginTop: '3%', fontWeight: 'bold' }}> {item.data.party_name} </Text>
                                <View style={styles.detailbox}>
                                    <View style={{ flexDirection: 'row', marginTop: '2%' }}>
                                        <Text style={{ fontSize: 16 }}> ประเภท </Text>
                                        <Text style={{ fontSize: 16, marginLeft: '15%', marginLeft: '21%', fontWeight: 'bold' }}> {item.data.party_type} </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: '5%' }}>
                                        <Text style={{ fontSize: 16, color: 'black' }}> วันที่จัดตั้งกลุ่ม </Text>
                                        <Text style={{ fontSize: 16, color: 'black', marginLeft: '4%', marginLeft: '10.5%', fontWeight: 'bold' }}> 30/06/64 </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: '5%' }}>
                                        <Text style={{ fontSize: 16, color: 'black' }}> ราคาหารต่อคน </Text>
                                        <Text style={{ fontSize: 16, color: 'black', marginLeft: '10%', fontWeight: 'bold' }}> {item.data.party_price} </Text>
                                        <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}> บาท </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: '5%' }}>
                                        <Text style={{ fontSize: 16, color: 'black' }}> จำนวนสมาชิกกลุ่ม </Text>
                                        <Text style={{ color: 'red', fontSize: 16, marginLeft: '5%', fontWeight: 'bold' }}> {item.userjoin} </Text>
                                        <Text style={{ fontSize: 16, color: 'black' }}> / </Text>
                                        <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}> {item.data.party_limitmember} </Text>
                                        <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}> คน </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: '5%' }}>
                                        <Text style={{ color: 'black', fontSize: 16 }}> รายละเอียด </Text>
                                        <Text numberOfLines={5}
                                            style={{
                                                width: 250,
                                                fontSize: 16,
                                                color: 'black',
                                                marginLeft: '17%',
                                                fontWeight: 'bold'
                                            }}>
                                            {item.data.party_detail}
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', width: '100%', marginTop: '2%' }}>
                                        <View >
                                            {buttonStatus == '0' ? (
                                                <TouchableOpacity onPress={() => setSubmit(true)}>
                                                    <View style={{
                                                        backgroundColor: 'red',
                                                        alignItems: 'center',
                                                        height: 35,
                                                        flexDirection: 'row',
                                                        justifyContent: 'center',
                                                        marginTop: '3%',
                                                        width: '80%',
                                                        alignSelf: 'center',
                                                        borderRadius: 10
                                                    }}>
                                                        <Text
                                                            style={{
                                                                fontSize: 16,
                                                                color: 'white',
                                                                fontWeight: 'bold'
                                                            }} > ออกจากกลุ่ม </Text>
                                                    </View>
                                                </TouchableOpacity>
                                            ) : buttonStatus == '1' ? (
                                                <TouchableOpacity>
                                                    <View style={{
                                                        backgroundColor: 'gray',
                                                        alignItems: 'center',
                                                        height: 35,
                                                        flexDirection: 'row',
                                                        justifyContent: 'center',
                                                        marginTop: '3%',
                                                        width: '80%',
                                                        alignSelf: 'center',
                                                        borderRadius: 10
                                                    }}>
                                                        <Text
                                                            style={{
                                                                fontSize: 16,
                                                                color: 'white',
                                                                fontWeight: 'bold'
                                                            }} > กลุ่มเต็มแล้ว </Text>
                                                    </View>
                                                </TouchableOpacity>
                                            ) : (
                                                <TouchableOpacity onPress={() => setSubmit2(true)}>
                                                    <View style={{
                                                        backgroundColor: '#6359d5',
                                                        alignItems: 'center',
                                                        height: 35,
                                                        flexDirection: 'row',
                                                        justifyContent: 'center',
                                                        marginTop: '3%',
                                                        width: '80%',
                                                        alignSelf: 'center',
                                                        borderRadius: 10
                                                    }}>
                                                        <Text
                                                            style={{
                                                                fontSize: 16,
                                                                color: 'white',
                                                                fontWeight: 'bold'
                                                            }} > เข้าร่วมกลุ่ม </Text>
                                                    </View>
                                                </TouchableOpacity>
                                            )}
                                        </View>
                                        <View>
                                            <TouchableOpacity onPress={() => navigation.navigate('cmPage', { id: item.data.party_id })}>
                                                <View style={{
                                                    backgroundColor: '#6359d5',
                                                    alignItems: 'center',
                                                    height: 35,
                                                    flexDirection: 'row',
                                                    justifyContent: 'center',
                                                    marginTop: '3%',
                                                    width: '80%',
                                                    alignSelf: 'center',
                                                    borderRadius: 10
                                                }}>
                                                    <Text
                                                        style={{
                                                            fontSize: 16,
                                                            color: 'white',
                                                            fontWeight: 'bold'
                                                        }} > แชทกลุ่ม </Text>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text style={{ fontSize: 16, color: '#6359d5', fontWeight: 'bold', alignSelf: 'center' }}> ------------------------------------------------------------- </Text>
                                    </View>
                                    <View>
                                        <View style={{ flexDirection: 'row', marginTop: '3%' }}>
                                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}> สร้างกลุ่มโดย </Text>
                                        </View>
                                        <TouchableOpacity onPress={() => navigation.navigate('storepage', { id: item.data.store_id })}>
                                            <View style={{ flexDirection: 'row', marginTop: '2%' }}>
                                                <Image source={require('../images/shirt1.jpg')} style={styles.storelogo} />
                                                <Text
                                                    style={{
                                                        fontSize: 18,
                                                        textAlign: 'center',
                                                        paddingTop: '2%'
                                                    }}> {item.data.party_store} </Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        )}
                    />
                </View>

            </ScrollView>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    headerbox: {
        flex: 2,
        marginTop: '10%',
    },
    imagebox: {
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        alignContent: 'center'
    },
    detailbox: {
        flex: 3,
        backgroundColor: 'white',
        borderRadius: 20,
        marginTop: '5%'
    },
    goodsimage: {
        height: 320,
        width: '100%',
        borderRadius: 20
    },
    storelogo: {
        width: 40,
        height: 40,
        borderRadius: 100 / 3
    },
});

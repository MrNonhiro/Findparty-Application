import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Animated,
    Dimensions,
    TextInput,
    FlatList
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { ScrollView } from 'react-native-gesture-handler';
import { Header, Button, ThemeProvider } from 'react-native-elements'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import * as FileSystem from 'expo-file-system';

export default function usersetting({ navigation }) {
    const [party_name, setPartyname] = useState('');
    const [party_type, setPartytype] = useState('');
    const [party_date, setPartydate] = useState('');
    const [party_detail, setPartyndetail] = useState('');
    const [party_price, setPartyprice] = useState('');
    const [party_limitmember, setPartylimitmember] = useState('');
    const [party_goodspictures, setPartygoodspictures] = useState('');
    const [submit, setSubmit] = useState(false);
    const [party_storeId, setParty_storeId] = useState('');
    


    const [pickedImagePath, setPickedImagePath] = useState('');
    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        const base64 = await FileSystem.readAsStringAsync(result.uri, { encoding: 'base64' });
        console.log(base64);
        const base = 'data:image/jpeg;base64,'
        if (!result.cancelled) {
            setPartygoodspictures(base + base64);
        }
    };

    useEffect(() => {
        AsyncStorage.getItem('store_id')
            .then((value) => {
                setParty_storeId(value);

            })
    })

    useEffect(() => {
        const authenticate = async () => {
            axios
                .post(
                    "http://34.124.194.224/create_party.php",
                    JSON.stringify({
                        party_name: party_name,
                        party_type: party_type,
                        party_date: party_date,
                        party_detail: party_detail,
                        party_price: party_price,
                        party_limitmember: party_limitmember,
                        party_goodspictures: party_goodspictures,
                        party_storeId: party_storeId
                    })
                )
                .then((response) => {
                    setSubmit(false)
                    console.log(response.data);
                })
                .catch((err) => {
                    setSubmit(false)
                    alert(err);
                });
        };
        if (submit) authenticate();
    }, [submit]);

    console.log(party_storeId)

    const [currentDate, setCurrentDate] = useState('');
    useEffect(() => {
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        setCurrentDate(
            year + '-' + month + '-' + date
        );
    }, []);

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
                centerComponent={{ text: 'เพิ่มปาร์ตี้', style: { color: 'black', fontSize: 25 } }}
                containerStyle={{
                    backgroundColor: 'white',
                    height: '18%',
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20
                }}
                rightComponent={
                    <View style={{ marginTop: '4%' }}>
                        <TouchableOpacity onPress={() => setSubmit(true)}>
                            <Text style={{
                                color: '#6359d5',
                                fontSize: 20
                            }}> บันทึก </Text>
                        </TouchableOpacity>
                    </View>
                }
            />

            <View style={{
                flex: 1,
                width: '100%',
                alignItems: 'center',
                alignSelf: 'center',
                marginBottom: '8%'
            }}>
                <ScrollView style={{ width: '100%' }}>
                    <View style={styles.profileImageBox}>
                        {
                            party_goodspictures !== '' && <Image
                                source={{ uri: party_goodspictures }}
                                style={styles.profileimage}
                            />
                        }
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'row', marginTop: 15 }}>
                                <TouchableOpacity onPress={pickImage}>
                                    <View style={{
                                        backgroundColor: '#6359d5',
                                        height: 40,
                                        width: 120,
                                        flexDirection: 'row',
                                        justifyContent: 'center',
                                        borderRadius: 15
                                    }}>
                                        <Image source={require('../../images/gallery.png')} style={{ height: 25, width: 25, marginTop: 8 }} />
                                        <Text style={{
                                            fontSize: 20,
                                            color: 'white',
                                            alignSelf: 'center'
                                        }}> แกลลอรี่ </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                    <View style={{ flex: 1, width: '100%', height: 600 }}>
                        <View style={{
                            height: '300%'
                        }}>
                            <View style={{
                                height: 20,
                                marginTop: '10%',
                                marginBottom: 10,
                                alignSelf: 'flex-start',
                                width: '100%'
                            }}>
                                <Text style={{
                                    fontSize: 20,
                                    color: 'black',

                                }}> ข้อมูลปาร์ตี้ </Text>
                            </View>
                            <View style={styles.detailView}>
                                <Text style={{ fontWeight: 'bold' }}> ชื่อปาร์ตี้ </Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="ชื่อปาร์ตี้"
                                    onChangeText={(text) => setPartyname(text)}
                                />
                            </View>
                            <View style={styles.detailView}>
                                <Text style={{ fontWeight: 'bold' }}> ประเภท </Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="ประเภท"
                                    onChangeText={(text) => setPartytype(text)}
                                />
                            </View>
                            <View style={styles.detailView}>
                                <Text style={{ fontWeight: 'bold' }}> เวลาที่จัดตั้งกลุ่ม </Text>
                                <Text style={styles.input} onChangeText={(text) => setPartydate(text)}> {currentDate} </Text>
                            </View>
                            <View style={styles.detailView}>
                                <Text style={{ fontWeight: 'bold' }}> ราคาหารต่อคน </Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="ราคาหารต่อคน"
                                    onChangeText={(text) => setPartyprice(text)}
                                />
                            </View>
                            <View style={styles.detailView}>
                                <Text style={{ fontWeight: 'bold' }}> จำนวนสมาชิกกลุ่ม </Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="จำนวนสมาชิกกลุ่ม"
                                    onChangeText={(text) => setPartylimitmember(text)}
                                />
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                backgroundColor: 'white',
                                height: 80,
                                width: '100%',
                                marginTop: '1%',
                                alignItems: 'center',
                                elevation: 3
                            }}>
                                <Text style={{ fontWeight: 'bold' }}> รายละเอียด </Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="รายละเอียด"
                                    onChangeText={(text) => setPartyndetail(text)}
                                />
                            </View>
                        </View>



                    </View>

                    {/* when click this, it will insert data into user table */}
                    {/* <TouchableOpacity onPress={() => navigation.navigate('userpage')}>
                        <View style={{
                            marginTop: '6%',
                            elevation: 10
                        }}>
                            <Image source={require('../../images/correct.png')} style={{
                                height: 50,
                                width: 50,
                                alignSelf: 'center'
                            }} />
                        </View>
                        </TouchableOpacity> */}
                </ScrollView>
            </View>
        </View >

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
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        flexDirection: 'row',
        marginTop: '10%'
    },
    box2: {
        alignItems: 'center',
        marginTop: '10%'
    },
    pictureEdit: {
        backgroundColor: 'black',
        marginTop: '5%'
    },
    text: {
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
        marginLeft: '11%',
        marginTop: '4.5%'
    },
    profileImageBox: {
        height: '35%',
        width: '100%',
        alignItems: 'center'
    },
    profileimage: {
        width: '50%',
        height: '90%',
        borderRadius: 120,
        resizeMode: 'cover',
        marginTop: '5%'
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
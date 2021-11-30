import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
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

    const [user_id, setUser_id] = useState();
    const [userdata, setUserdata] = useState([]);
    const [username, setUsername] = useState();
    const [userdisplay, setUsedisplay] = useState();
    const [user_tel, setUsertel] = useState();
    const [email, setEmail] = useState();
    const [user_profile, setImage] = useState();
    const [submit, setSubmit] = useState("");
    useEffect(() => {
        AsyncStorage.getItem('user_id')
            .then((value) => {
                setUser_id(value);

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
                setUsedisplay(response.data.user_display)
                setUsertel(response.data.user_tel)
                setEmail(response.data.email)
                setImage(response.data.user_profile)
            })
            .catch(err => {
                console.log(err)
            })

    }, [user_id])
    console.log(userdata)

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
            setImage(base + base64);
        }
    };

    useEffect(() => {
        const authenticate = async () => {
            axios
                .post(
                    "http://34.124.194.224/user_edit.php",
                    JSON.stringify({
                        username: username,
                        userdisplay: userdisplay,
                        user_tel: user_tel,
                        email: email
                    })
                )
                .then((response) => {
                    if (response.data == "ok") {
                        setSubmit(false)
                        alert(JSON.stringify(response.data));
                    } else {
                        alert(JSON.stringify(response.data));
                        setSubmit(false)
                    }

                })
                .catch((err) => {
                    console.log(err);
                });
        };
        if (submit) authenticate();
    }, [submit]);

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
                centerComponent={{ text: 'แก้ไขข้อมูลส่วนตัว', style: { color: 'black', fontSize: 25 } }}
                containerStyle={{
                    backgroundColor: 'white',
                    height: '18%',
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20
                }}
                rightComponent={
                    <View style={{ marginTop: '4%' }}>
                        <TouchableOpacity onPress={() => { setIsSubmit(true) }}>
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
                <View style={styles.profileImageBox}>
                    {
                        user_profile !== '' && <Image
                            source={{ uri: user_profile }}
                            style={styles.profileimage}
                        />
                    }
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <TouchableOpacity
                            onPress={pickImage}
                            style={{
                                backgroundColor: '#6359d5',
                                height: 40,
                                width: 120,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                borderRadius: 10
                            }}>
                            <Image source={require('../../images/gallery.png')} style={{ height: 25, width: 25, marginTop: 8 }} />
                            <Text style={{
                                fontSize: 20,
                                color: 'white',
                                alignSelf: 'center'
                            }}> แกลลอรี่ </Text>

                        </TouchableOpacity>
                    </View>


                </View>

                <View style={{ flex: 1, width: '100%', marginTop: '6%' }}>
                    <FlatList
                        style={{ marginTop: -40 }}
                        data={userdata}
                        renderItem={({ item }) => (
                            <View>
                                <View style={{
                                    height: 20,
                                    marginTop: '20%',
                                    marginBottom: 10,
                                    alignSelf: 'flex-start'
                                }}>
                                    <Text style={{
                                        fontSize: 20,
                                        color: 'black',

                                    }}> ข้อมูลส่วนตัว </Text>
                                </View>
                                <View style={styles.detailView}>
                                    <Image source={require('../../images/user.png')} style={styles.userimage} />
                                    <TextInput
                                        style={styles.input}
                                        value={userdisplay}
                                        onChangeText={setUsedisplay}
                                    />
                                </View>
                                <View style={styles.detailView}>
                                    <Image source={require('../../images/phone.png')} style={styles.userimage} />
                                    <TextInput
                                        style={styles.input}
                                        value={user_tel}
                                        keyboardType="numeric"
                                        onChangeText={setUsertel}
                                    />
                                </View>
                                <View style={styles.detailView}>
                                    <Image source={require('../../images/emailuser.png')} style={styles.userimage} />
                                    <TextInput
                                        style={styles.input}
                                        value={email}
                                        onChangeText={setEmail}
                                    />
                                </View>
                                <TouchableOpacity style={styles.detailView} onPress={() => navigation.navigate('useraddressEdit', { id: item.user_id })}>
                                    <View style={styles.detailView}>
                                        <Image source={require('../../images/address.png')} style={styles.userimage} />
                                        <Text style={{
                                            color: 'gray'
                                        }}> ที่อยู่ </Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate('loginpage', AsyncStorage.removeItem('user_id'))}>
                                    <View style={{
                                        backgroundColor: 'red',
                                        alignItems: 'center',
                                        height: 35,
                                        flexDirection: 'row',
                                        justifyContent: 'center',
                                        marginTop: '5%',
                                        width: '90%',
                                        alignSelf: 'center',
                                        borderRadius: 10
                                    }}>
                                        <Text style={{
                                            fontSize: 16,
                                            color: 'white',
                                            marginRight: '3%',
                                            fontWeight: 'bold'
                                        }}> ออกจากระบบ </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                        )}
                    />

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
        alignItems: 'center',
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
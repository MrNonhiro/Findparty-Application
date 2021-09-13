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

export default function usersetting({ navigation }) {
    const [pickedImagePath, setPickedImagePath] = useState('');
    const showImagePicker = async () => {
        // Ask the user for the permission to access the media library 
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("You've refused to allow this appp to access your photos!");
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync();

        // Explore the result
        console.log(result);

        if (!result.cancelled) {
            setPickedImagePath(result.uri);
            console.log(result.uri);
        }
    }

    const openCamera = async () => {
        // Ask the user for the permission to access the camera
        const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("You've refused to allow this appp to access your camera!");
            return;
        }

        const result = await ImagePicker.launchCameraAsync();

        // Explore the result
        console.log(result);

        if (!result.cancelled) {
            setPickedImagePath(result.uri);
            console.log(result.uri);
        }
    }

    {/* let [fontsLoaded] = useFonts({
        'Inter-SemiBoldItalic': 'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
        'bahnschrift': require('./assets/fonts/bahnschrift.ttf'),
        'FC_Iconic': require('./assets/fonts/FC_IconicBold.ttf'),
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    }
    */}

    const [info, setInfo] = useState([]);
    useEffect(() => {
        // Post updated, do something with route.params.post
        // For example, send the post to the server 

        axios.get('http://34.126.169.148/showuser.php', {
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
                centerComponent={{ text: 'แก้ไขข้อมูลส่วนตัว', style: { color: 'black', fontSize: 25 } }}
                containerStyle={{
                    backgroundColor: 'white',
                    height: '18%',
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20
                }}
                rightComponent={
                    <View style={{ marginTop: '4%' }}>
                        <TouchableOpacity onPress={() => { navigation.navigate('userpage') }}>
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
                        pickedImagePath !== '' && <Image
                            source={{ uri: pickedImagePath }}
                            style={styles.profileimage}
                        />
                    }
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <TouchableOpacity onPress={showImagePicker}>
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

                        <View style={{ flexDirection: 'row', marginTop: 15, marginLeft: 10 }}>
                            <TouchableOpacity onPress={openCamera}>
                                <View style={{
                                    backgroundColor: '#6359d5',
                                    height: 40,
                                    width: 100,
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    borderRadius: 15
                                }}>
                                    <Image source={require('../../images/camera.png')} style={{ height: 25, width: 25, marginTop: 8 }} />
                                    <Text style={{
                                        fontSize: 20,
                                        color: 'white',
                                        alignSelf: 'center'
                                    }}> กล้อง </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1, width: '100%', marginTop: '6%' }}>
                    <FlatList
                        style={{ marginTop: -40 }}
                        data={info}
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

                                    }}> ข้อมูลส่วนตัว {item.user_display} </Text>
                                </View>
                                <View style={styles.detailView}>
                                    <Image source={require('../../images/user.png')} style={styles.userimage} />
                                    <TextInput
                                        style={styles.input}
                                        value={item.user_display}
                                    />
                                </View>
                                <View style={styles.detailView}>
                                    <Image source={require('../../images/phone.png')} style={styles.userimage} />
                                    <TextInput
                                        style={styles.input}
                                        placeholder={item.user_tel}
                                        keyboardType="numeric"
                                    />
                                </View>
                                <View style={styles.detailView}>
                                    <Image source={require('../../images/emailuser.png')} style={styles.userimage} />
                                    <TextInput
                                        style={styles.input}
                                        placeholder={item.user_email}
                                    />
                                </View>
                                <TouchableOpacity style={styles.detailView} onPress={() => navigation.navigate('useraddressEdit')}>
                                    <View style={styles.detailView}>
                                        <Image source={require('../../images/address.png')} style={styles.userimage} />
                                        <TextInput
                                            style={styles.input}
                                            placeholder="ที่อยู่"
                                        />
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate('nologinpage',AsyncStorage.removeItem('user_id'))}>
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
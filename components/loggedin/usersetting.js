import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Animated,
    Dimensions,
    TextInput
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { ScrollView } from 'react-native-gesture-handler';
import { Header, Button, ThemeProvider } from 'react-native-elements'

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

    const theme = {
        Button: {
            raised: false,

        },
    };

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
                                    borderRadius: 10
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
                                    borderRadius: 10
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
                    <Text style={styles.detailFont}> ชื่อ </Text>
                    <TextInput style={{
                        fontSize: 15,
                        color: '#808080',
                        alignSelf: 'center',
                        marginLeft: '26%'
                    }}> ชื่อ display </TextInput>
                </View>
                <View style={styles.detailView}>
                    <Image source={require('../../images/phone.png')} style={styles.userimage} />
                    <Text style={styles.detailFont}> เบอร์โทรศัพท์ </Text>
                    <TextInput style={{
                        fontSize: 15,
                        color: '#808080',
                        alignSelf: 'center',
                        marginLeft: '8%'
                    }}> ชื่อ display </TextInput>
                </View>
                <View style={styles.detailView}>
                    <Image source={require('../../images/emailuser.png')} style={styles.userimage} />
                    <Text style={styles.detailFont}> อีเมลล์ </Text>
                    <TextInput maxLength={23}
                        style={{
                            fontSize: 15,
                            color: '#808080',
                            alignSelf: 'center',
                            marginLeft: '20%'
                        }}> non.hiroki@hotmail.com </TextInput>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('useraddressEdit')}>
                    <View style={styles.detailView}>
                        <Image source={require('../../images/address.png')} style={styles.userimage} />
                        <Text style={styles.detailFont}> ที่อยู่ </Text>
                        <Text
                            style={{
                                fontSize: 15,
                                color: '#808080',
                                alignSelf: 'center',
                                marginLeft: '9%'
                            }}> 111/1 บรรพปราการ เวียง เมือง เชียงราย </Text>
                    </View>
                </TouchableOpacity>

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
                <View style={{
                    marginTop: '3%'
                }}>
                    <ThemeProvider theme={theme}>
                        <Button title="บันทึก" />
                    </ThemeProvider>
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
        marginTop: '2%',
        alignItems: 'center',
        borderRadius: 10,
        elevation: 5
    },
    detailFont: {
        fontSize: 15,
        color: 'black',
        alignSelf: 'center',
        marginLeft: 10
    },
    userimage: {
        height: '55%',
        width: '8%',
        marginLeft: '3%',
        tintColor: 'black'
    },
})
    ;
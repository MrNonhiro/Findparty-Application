import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Button,
    Animated,
    Dimensions
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { ScrollView } from 'react-native-gesture-handler';

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

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../../images/back.png')} style={{ height: 25, width: 25, marginTop: 26,tintColor: 'white' }} />
                </TouchableOpacity>
                <Text style={styles.text}> แก้ไขข้อมูลส่วนตัว  </Text>
            </View>
            <View style={{
                flex: 1,
                width: '90%',
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
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
                                    backgroundColor: '#041955',
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
                                    backgroundColor: '#041955',
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
                <ScrollView>
                    <View style={{
                        height: 40,
                        width: 150,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        borderRadius: 15,
                        marginTop: 30
                    }}>
                        <Text style={{
                            fontSize: 25,
                            color: 'white',
                            
                        }}> ข้อมูลส่วนตัว </Text>
                    </View>
                    <View style={styles.detailView}>
                        <Text> Waranon Techa </Text>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: '10%',
        backgroundColor: '#3450a1',
    },
    box: {
        height: 100,
        padding: 10,
        backgroundColor: '#3450a1',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        flexDirection: 'row',
    },
    box2: {
        alignItems: 'center',
        marginTop: '10%'
    },
    pictureEdit: {
        backgroundColor: 'black',
        marginTop: '5%'
    },
    editProfile: {
        width: '20%',
        height: '50%',
        borderRadius: 80,
    },
    text: {
        fontSize: 30,
        color: 'white',
        textAlign: 'center',
        marginLeft: '11%',
        marginTop: '4.5%'
    },
    image: {
        width: '50%',
        height: '100%',
        borderRadius: 120,
    },
    profileImageBox: {
        height: '35%',
        width: '100%',
        alignItems: 'center',
    },
    profileimage: {
        width: '50%',
        height: '75%',
        borderRadius: 120,
        resizeMode: 'cover',
        marginTop: '5%',
        elevation: 5
    },
    modalButton: {
        backgroundColor: "transparent",
        borderColor: "#ffffff",
        borderRadius: 100,
        marginTop: 20,
        borderWidth: 1,
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10
    },
    detailView: {
        flexDirection: 'row'
    }
})
    ;
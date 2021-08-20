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

    const [animation, setAnimation] = useState(new Animated.Value(0));
    const { height } = Dimensions.get("window");

    const openModal = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
        extrapolate: "clamp",
    });
    const saveModal = animation.interpolate({
        inputRange: [1, 2],
        outputRange: [0, -height],
        extrapolate: "clamp",
    });
    const modalTrigger = () => {
        Animated.timing(animation, {
            toValue: 1,
            duration: 500,
            useNativeDriver: false
        }).start();
    };
    const close = () => {
        Animated.timing(animation, {
            toValue: 0,
            duration: 500,
            useNativeDriver: false
        }).start();
    };
    const open = {
        transform: [
            { scale: openModal },
            { translateY: saveModal }
        ]
    };

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../../images/back.png')} style={{ height: 40, width: 40, marginTop: 19 }} />
                </TouchableOpacity>
                <Text style={styles.text}> แก้ไขข้อมูลส่วนตัว  </Text>
            </View>

            { // Profile picture and name
            }
            <View style={styles.profileImageBox}>
                {
                    pickedImagePath !== '' && <Image
                        source={{ uri: pickedImagePath }}
                        style={styles.profileimage}
                    />
                }
                <TouchableOpacity style={styles.mainButton} onPress={modalTrigger}>
                    <View style={styles.box2} elevation={5}>
                        <Image source={require('../../images/photoEditor.png')} style={{ height: 30, width: 30, tintColor: 'black' }} />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.center}>
                <Animated.View style={[open]}>
                    <View style={styles.wrap}>
                        <TouchableOpacity style={styles.modalButton} onPress={showImagePicker}>
                            <Text style={styles.modalText}> เลือกรูปภาพ </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modalButton} onPress={openCamera}>
                            <Text style={styles.modalText}> เปิดกล้อง </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ alignSelf: 'center', marginBottom: 5 }} onPress={close}>
                            <Image source={require('../../images/close.png')} style={{ height: 30, width: 30, tintColor: 'red' }} />
                        </TouchableOpacity>
                    </View>
                </Animated.View>
            </View>
            { // Goods status bar
            }
            <View style={styles.userDetail}>
                <Text> Waranon Techa </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: '10%',
        backgroundColor: '#E5E5E5',
    },
    box: {
        height: 100,
        padding: 10,
        backgroundColor: '#00B900',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
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
        marginTop: '5%',
        marginLeft: '8%'
    },
    image: {
        width: '50%',
        height: '100%',
        borderRadius: 120,
    },
    mainButton: {
        width: 50,
        height: 40,
        borderRadius: 100,
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 0.5,
        shadowColor: 'black',
        shadowOffset: {
            width: 6.5,
            height: 6.5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 20,
        elevation: 10,
        marginLeft: '30%',
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
    center: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    wrap: {
        borderRadius: 8,
        backgroundColor: "black",
        shadowColor: "#4049BF",
        shadowOffset: {
            width: 6.5,
            height: 6.5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 20,
        elevation: 10
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
    modalText: {
        fontSize: 30,
        color: 'white',
    },
    userDetail: {
        flex: 2,
        backgroundColor: 'green'
    }
})
    ;
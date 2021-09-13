import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Platform } from 'react-native';
import { Header } from 'react-native-elements';
import * as Location from 'expo-location';

export default function useraddressEdit({ navigation }) {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);

    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }


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
                centerComponent={{ text: 'แก้ไขที่อยู่', style: { color: 'black', fontSize: 25 } }}
                containerStyle={{
                    backgroundColor: 'white',
                    height: '18%',
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20
                }}
            />
            <View style={{
                height: 20,
                marginTop: '2%',
                marginLeft: '1%',
                marginBottom: 10,
                alignSelf: 'flex-start'
            }}>
                <Text style={{
                    fontSize: 20,
                    color: 'black',

                }}> ช่องทางการติดต่อ </Text>
            </View>
            <View style={styles.detailView}>
                <Image source={require('../../images/user.png')} style={styles.userimage} />
                <TextInput
                    style={styles.input}
                    placeholder="ชื่อ นามสกุล"
                />
            </View>
            <View style={styles.detailView}>
                <Image source={require('../../images/phone.png')} style={styles.userimage} />
                <TextInput
                    style={styles.input}
                    placeholder="เบอร์โทรศัพท์"
                    keyboardType="numeric"
                />
            </View>

            <View style={{
                height: 20,
                marginTop: '8%',
                marginLeft: '1%',
                marginBottom: 10,
                alignSelf: 'flex-start'
            }}>
                <Text style={{
                    fontSize: 20,
                    color: 'black',

                }}> ที่อยู่ </Text>
            </View>
            <View style={styles.detailView}>
                <Text style={styles.paragraph}>{text}</Text>
            </View>
            <View style={styles.detailView}>
                <Image source={require('../../images/address.png')} style={styles.userimage} />
                <TextInput
                    style={styles.input}
                    placeholder="รายละเอียดที่อยู่"
                />
            </View>


        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    text: {
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
        marginTop: '5%',
        marginLeft: '25%'
    },
    text2: {
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
        marginTop: '65%'
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
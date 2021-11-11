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
            setPickedImagePath(base + base64);
        }
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
                centerComponent={{ text: 'แก้ไขที่อยู่', style: { color: 'black', fontSize: 25 } }}
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
            }}>
                <View style={{ flex: 2, width: '100%' }}>
                    <FlatList
                        data={userdata}
                        renderItem={({ item }) => (
                            <View>
                                <View style={styles.map}>
                                    <Text> map </Text>
                                </View>
                                <View>
                                    <View style={{
                                        height: 20,
                                        marginTop: '10%',
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
                                </View>
                            </View>

                        )}
                    />

                </View>
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
        marginTop: '1.5%',
        alignItems: 'center',
        borderBottomWidth: 0.5
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
    },
    map: {
        backgroundColor: 'black',
        width: '100%',
        height: 250
    }
})
    ;
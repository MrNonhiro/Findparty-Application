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
import { ListItem } from 'react-native-elements/dist/list/ListItem';

export default function cmPage({ navigation }) {

    const [currentDate, setCurrentDate] = useState('');
    useEffect(() => {
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        setCurrentDate(
            hours + ':' + min
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
                centerComponent={{ text: 'ข้อความปาร์ตี้', style: { color: 'black', fontSize: 25 } }}
                containerStyle={{
                    backgroundColor: 'white',
                    height: '18%',
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20
                }}
            />
            <View style={styles.box2}>
                <View style={styles.buttonBox}>
                    <View style={{
                        justifyContent: 'center'
                    }}>
                        <Text style={{
                            fontSize: 20,
                            marginLeft: '8%'
                        }}> ช่องคอมเม้นท์ </Text>
                    </View>
                    <TouchableOpacity onPress={() => { navigation.navigate('partymember',) }}>
                        <View style={styles.memberButton}>
                            <Text style={{
                                color: 'white',
                                fontSize: 16,
                                alignSelf: 'center'
                            }}> สมาชิกปาร์ตี้ </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.commentBox}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../../images/user.png')} style={{
                            height: 35,
                            width: 35,
                            tintColor: '#6359d5',
                            margin: 10
                        }} />
                        <Text style={styles.commentText}> Hello </Text>
                        <Text style={styles.commentDate}> {currentDate} </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../../images/user.png')} style={{
                            height: 35,
                            width: 35,
                            tintColor: 'black',
                            margin: 10
                        }} />
                        <Text style={styles.commentText}> Nice to meet you! </Text>
                        <Text style={styles.commentDate}> {currentDate} </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../../images/user.png')} style={{
                            height: 35,
                            width: 35,
                            tintColor: 'pink',
                            margin: 10
                        }} />
                        <Text style={styles.commentText}> Hi guys </Text>
                        <Text style={styles.commentDate}> {currentDate} </Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.inputBox}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="คอมเม้นท์"
                        />
                    </View>
                    <View style={styles.inputBox2}>
                        <Image source={require('../../images/image.png')} style={{
                            height: 25,
                            width: 25,
                            tintColor: '#6359d5',
                            marginTop: 12,
                            marginRight: '10%'
                        }} />
                        <Image source={require('../../images/send.png')} style={{
                            height: 25,
                            width: 25,
                            tintColor: '#6359d5',
                            marginTop: 12,
                            marginLeft: '10%'
                        }} />
                    </View>
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
    box2: {
        flex: 2
    },
    buttonBox: {
        backgroundColor: 'white',
        height: 35,
        flexDirection: 'row'
    },
    commentBox: {
        backgroundColor: 'white',
        height: '80%',
        width: '100%',
        marginTop: '3%',
        elevation: 3
    },
    input: {
        marginLeft: '5%'
    },
    commentText: {
        fontSize: 20,
        marginTop: '3%'
    },
    commentDate: {
        fontSize: 12,
        marginTop: '4.5%',
        marginLeft: '3%'
    },
    inputBox: {
        backgroundColor: 'white',
        height: '140%',
        width: '80%',
        elevation: 3,
        flexDirection: 'row'
    },
    TextInput: {
        marginLeft: '5%',
    },
    inputBox2: {
        backgroundColor: 'white',
        height: '140%',
        width: '20%',
        elevation: 3,
        flexDirection: 'row',
    },
    memberButton: {
        backgroundColor: '#6359d5',
        height: 35,
        width: '120%',
        left: 120,
        borderRadius: 15,
        justifyContent: 'center'
    }
})
    ;
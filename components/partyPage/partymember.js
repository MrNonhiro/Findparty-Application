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
                centerComponent={{ text: 'สมาชิก', style: { color: 'black', fontSize: 25 } }}
                containerStyle={{
                    backgroundColor: 'white',
                    height: '18%',
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20
                }}
            />
            <View style={styles.box2}>
                <View style={styles.commentBox}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../../images/user.png')} style={{
                            height: 35,
                            width: 35,
                            tintColor: '#6359d5',
                            margin: 10
                        }} />
                        <Text style={styles.commentText}> Hello </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../../images/user.png')} style={{
                            height: 35,
                            width: 35,
                            tintColor: 'black',
                            margin: 10
                        }} />
                        <Text style={styles.commentText}> Nice to meet you! </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../../images/user.png')} style={{
                            height: 35,
                            width: 35,
                            tintColor: 'pink',
                            margin: 10
                        }} />
                        <Text style={styles.commentText}> Hi guys </Text>
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
    }
})
    ;
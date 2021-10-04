import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements'

const nologinpage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header
                centerComponent={{ text: 'ข้อมูลส่วนตัว', style: { color: 'black', fontSize: 25 } }}
                containerStyle={{
                    backgroundColor: 'white',
                    height: '18%',
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20
                }}
            />
            <View style={styles.box2}>
                <Image source={require('../images/userpage.png')} style={styles.image} />
                <Text style={styles.text2}> Guest </Text>
                <Button color="green" style={{ fontSize: 20, borderRadius: 10 }}
                    title="คลิกเพื่อสมัครสมาชิก"
                    onPress={() => navigation.navigate('register',AsyncStorage.removeItem('user_id'))}>
                </Button>
                <Button color="blue" style={{ fontSize: 20, borderRadius: 10 }}
                    title="e.g. user's detail page"
                    onPress={() => navigation.navigate('userpage')}>
                </Button>
                <Button color="red" style={{ fontSize: 20, borderRadius: 10 }}
                    title="store user page"
                    onPress={() => navigation.navigate('homepage')}>
                </Button>
                <Button color="black" style={{ fontSize: 20, borderRadius: 10 }}
                    title="party comment"
                    onPress={() => navigation.navigate('cmPage')}>
                </Button>
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
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        marginTop: '10%'
    },
    box2: {
        flex: 1,
        alignItems: 'center',
        marginTop: '10%',
    },
    text: {
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
        marginTop: '5%'
    },
    text2: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        marginTop: '3%'
    },
    image: {
        width: 150,
        height: 150,
    },
})

export default nologinpage;
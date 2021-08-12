import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

const usersetting = ({ navigation }) => {
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
            <View style={{ flex: 2 }}>
                <View style={styles.box2}>
                    <Image source={require('../../images/shirt1.jpg')} style={styles.image} />
                    <Text style={styles.text2}> Waranon Techa </Text>
                </View>
            </View>

            { // Goods status bar
            }
            <View style={{ flex: 3 }}>

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
        flex: 2,
        alignItems: 'center',
        marginTop: '10%'
    },
    text: {
        fontSize: 30,
        color: 'white',
        textAlign: 'center',
        marginTop: '5%',
        marginLeft: '8%'
    },
    text2: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        marginTop: '3%'
    },
    image: {
        width: '50%',
        height: '90%',
        borderRadius: 120,
    },
    statusimage1: {
        width: '45%',
        height: '65%',
        alignSelf: 'center'
    },
    statusimage2: {
        width: '70%',
        height: '65%',
        alignSelf: 'center'
    },
    statusimage3: {
        width: '85%',
        height: '65%',
        alignSelf: 'center'
    },
    statusimage4: {
        width: '45%',
        height: '65%',
        alignSelf: 'center'
    },
})

export default usersetting;
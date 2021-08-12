import React from 'react';
import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

const Header = () => {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.searchbar}>
                    <Icon name="ios-search" style={styles.icon} />
                    <TextInput placeholder="ค้นหา" />
                </View>
                <View style={styles.box2}>
                    <Image source={require('../images/noti.png')} style={styles.image} />
                </View> 
            </View>      
            <View style={styles.textbox}>
                <Text style={styles.text2}> เสื้อผ้า  คอมพิวเตอร์ </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.6
    },
    header: {
        height: 50,
        padding: 10,
        backgroundColor: '#00B900',
        flexDirection: 'row'
    },
    searchbar: {
        height: '130%',
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    box2: {
        alignItems: 'flex-end',
        alignItems: 'center',
        paddingTop: '1.5%',
        paddingLeft: '2%'
    },
    inputbox:{
        backgroundColor: 'white',
        borderRadius: 10,
        flexDirection: 'row',
        width: '75%',
        marginLeft: '2.5%'
    },
    text2: {
        color: 'white',
        fontSize: 18,
        textAlign: 'left',
        flexDirection: 'row',
        marginTop: '4%',
        marginLeft: '2%'
    },
    icon: {
        fontSize: 25,
    },
    textbox: {
        height: 50,
        backgroundColor: 'black',
        flexDirection: 'column',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: '#00B900',
    },
    image: {
        width: 30,
        height: 30,
        paddingTop: 5
    }
})

export default Header;
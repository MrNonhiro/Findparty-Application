import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

const nonuserparty = () => {
    return(
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.text}> ปาร์ตี้ที่เข้าร่วม </Text>
            </View>
            <View style={styles.centerbox}>
                <Text style={styles.text2}> ยังไม่ได้เข้าสู่ระบบ </Text>
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
        borderBottomRightRadius: 20
    },
    text: {
        fontSize: 30,
        color: 'white',
        textAlign: 'center',
        marginTop: '5%'
    },
    text2: {
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
        marginTop: '65%'
    }
})

export default nonuserparty;
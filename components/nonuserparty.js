import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements'

const nonuserparty = () => {
    return(
        <View style={styles.container}>
             <Header
                centerComponent={{ text: 'ปาร์ตี้', style: { color: 'black', fontSize: 25 } }}
                containerStyle={{
                    backgroundColor: 'white',
                    height: '18%',
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20
                }}
            />
            <View style={styles.centerbox}>
                <Text style={styles.text2}> กรุณาเข้าสู่ระบบ </Text>
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
    text: {
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
        marginTop: '5%'
    },
    text2: {
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        marginTop: '65%'
    }
})

export default nonuserparty;
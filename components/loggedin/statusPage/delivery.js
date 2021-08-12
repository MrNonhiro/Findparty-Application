import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

const paymentWating = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../../../images/back.png')} style={{ height: 40, width: 40, marginTop: 19 }} />
                </TouchableOpacity>
                <Text style={styles.text}> รอการรับสินค้า  </Text>
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
    text: {
        fontSize: 30,
        color: 'white',
        textAlign: 'center',
        marginTop: '5%',
        marginLeft: '15%'
    }
})

export default paymentWating;
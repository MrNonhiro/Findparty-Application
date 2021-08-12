import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

const userpage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../../images/back.png')} style={{ height: 40, width: 40, marginTop: 19 }} />
                </TouchableOpacity>
                <Text style={styles.text}> ข้อมูลส่วนตัว  </Text>
            </View>

            { // Profile picture and name
            }
            <View style={{ flex: 2 }}>
                <TouchableOpacity onPress={() => navigation.navigate('usersetting')}>
                    <Image source={require('../../images/setting.png')} style={{
                        height: 35, width: 35, marginTop: '2%', marginRight: '3%',
                        alignSelf: 'flex-end'
                    }} />
                </TouchableOpacity>
                <View style={styles.box2}>
                    <Image source={require('../../images/shirt1.jpg')} style={styles.image} />
                    <Text style={styles.text2}> Waranon Techa </Text>
                </View>
            </View>

            { // Goods status bar
            }
            <View style={styles.statusbox} elevation={5}>
                <TouchableOpacity onPress={() => navigation.navigate('paymentWating')}>
                    <View style={{ marginTop: '10%', marginRight: '2.5%' }}>
                        <Image source={require('../../images/waitingpayment.png')} style={styles.statusimage1} />
                        <Text style={{ alignSelf: 'center' }}> รอการชำระเงิน </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('deliveryWaiting')}>
                    <View style={{ marginTop: '12%', marginRight: '2.5%' }}>
                        <Image source={require('../../images/deliverywating.png')} style={styles.statusimage2} />
                        <Text style={{ alignSelf: 'center' }}> รอการจัดส่ง </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('delivery')}>
                    <View style={{ marginTop: '13%', marginRight: '2.5%' }}>
                        <Image source={require('../../images/delivery.png')} style={styles.statusimage3} />
                        <Text style={{ alignSelf: 'center' }}> รอรับสินค้า </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('received')}>
                    <View style={{ marginTop: '10%', marginRight: '2.5%' }}>
                        <Image source={require('../../images/received.png')} style={styles.statusimage4} />
                        <Text style={{ alignSelf: 'center' }}> รายการที่สำเร็จ </Text>
                    </View>
                </TouchableOpacity>
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
    },
    text: {
        fontSize: 30,
        color: 'white',
        textAlign: 'center',
        marginTop: '5%',
        marginLeft: '15%'
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
    statusbox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        marginBottom: '60%',
        marginTop: '15%',
        backgroundColor: 'white',
        height: '12%',
        borderRadius: 20
    }
})

export default userpage;
import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'

const Goods = () => {
    return(
    <View style={styles.container}>
        <View style={styles.box}>
            <View style={styles.boxgoods} elevation={5}>
            <Image source={require('../images/shirt1.jpg')} style={styles.image} />
                <Text style={styles.text2}> เสื้อแฟชัน sleeveless </Text>
                    <View style={styles.boxgoodsrow}>
                        <Image source={require('../images/shirt1.jpg')} style={styles.logo} />
                        <Text style={styles.text3}> Fashion men shop </Text>
                    </View>
                    <View style={styles.boxgoodsrow}>
                        <Image source={require('../images/shirt1.jpg')} style={styles.logo} />
                        <Text style={styles.text4}> หารกัน 3 ชิ้น </Text>
                </View>
            </View>
            <View style={styles.boxgoods} elevation={5}>
                <Image source={require('../images/shirt1.jpg')} style={styles.image} />
                <Text style={styles.text2}> เสื้อแฟชัน sleeveless </Text>
                    <View style={styles.boxgoodsrow}>
                        <Image source={require('../images/shirt1.jpg')} style={styles.logo} />
                        <Text style={styles.text3}> Fashion men shop </Text>
                    </View>
                    <View style={styles.boxgoodsrow}>
                        <Image source={require('../images/shirt1.jpg')} style={styles.logo} />
                        <Text style={styles.text4}> หารกัน 3 ชิ้น </Text>
                    </View>
            </View>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    box:{
        flexDirection: 'row'
    },
    boxgoods:{
        padding: '2%',
        backgroundColor: '#F3F3F3',
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    boxgoodsrow:{
        flexDirection: 'row',
    },
    text: {
        fontSize: 30,
        padding: 5
    },
    text2: {
        fontSize: 15
    },
    text3: {
        fontSize: 13,
        textAlign: 'center',   
        paddingTop: 8
    },
    text4: {
        fontSize: 13,
        textAlign: 'center',   
        paddingTop: 8
    },
    image: {
        width: 180,
        height: 150,
    },
    logo: {
        width: 40,
        height: 40,
        borderRadius: 100/3
    }
})

export default Goods;
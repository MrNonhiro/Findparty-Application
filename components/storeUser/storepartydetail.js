import React, { useState, useEffect, useRef } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList,
    Animated
} from 'react-native';
import axios from 'axios';
import { Header } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';

export default function partydetail({ navigation, route }) {
    const [info, setInfo] = useState([]);
    const [userjoin, setUserjoin] = useState([]);

    const { id } = route.params;
    useEffect(() => {
        // Post updated, do something with route.params.post
        // For example, send the post to the server 

        axios.get('http://34.124.194.224/showsingle.php', {
            params: {
                id: id
            }
        })
            .then(response => {
                setInfo(response.data);
                setUserjoin(response.data.userjoin);
            })
            .catch(err => {
                console.log(err)
            })
    })

    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const dataRef = useRef(null);
    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

    const scrollNext = () => {
        if (currentIndex < gif.length - 1) {
            dataRef.current.scrollToIndex({ index: currentIndex + 1 });
        } else {
            console.log('last item.');
        }
    }

    const scrollPre = () => {
        if (currentIndex < gif.length + 1) {
            dataRef.current.scrollToIndex({ index: currentIndex - 1 });
        } else {
            console.log('last item.');
        }
    }


    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.headerbox}>
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
                        centerComponent={{ text: 'ปาร์ตี้', style: { color: 'black', fontSize: 25 } }}
                        containerStyle={{
                            backgroundColor: 'white',
                            height: '18%',
                            borderBottomLeftRadius: 20,
                            borderBottomRightRadius: 20
                        }}
                        rightComponent={
                            <View style={{ marginTop: '4%' }}>
                                <TouchableOpacity onPress={() => { setIsSubmit(true) }}>
                                    <Image source={require('../../images/setting.png')} style={{
                                        height: 25,
                                        width: 25,
                                        tintColor: '#6359d5',
                                    }} />
                                </TouchableOpacity>
                            </View>
                        }

                    />
                </View>
                {/*
                <View style={styles.imagebox}>
                    <View style={{
                        justifyContent: 'center',
                        width: '100%',
                        backgroundColor: 'red',
                        flexDirection: 'row'
                    }}>
                        
                        <FlatList
                            style={{
                                width: '100%',
                                backgroundColor: 'white'
                            }}
                            data={info}
                            renderItem={
                                ({ item }) => (
                                    <View style={{
                                        width: '100%',
                                        alignSelf: 'center',
                                        alignItems: 'center',
                                        alignContent: 'center'
                                    }}>

                                    </View>
                                )
                            }
                            keyExtractor={(index) => index.toString()}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            pagingEnabled
                            bounces={false}
                            keyExtractor={(item) => item.idgif}
                            onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                                useNativeDriver: false,
                            })}
                            scrollEventThrottle={32}
                            onViewableItemsChanged={viewableItemsChanged}
                            viewabilityConfig={viewConfig}
                            ref={dataRef}
                        />
                    </View>
                            */}
                <View style={styles.detailbox}>
                    <FlatList
                        style={{ marginTop: -40 }}
                        data={info}
                        numColumns={1}
                        keyExtractor={(items) => items}
                        renderItem={({ item }) => (
                            <View>
                                <Text style={{ color: 'black', fontSize: 20, marginTop: '3%', fontWeight: 'bold' }}> {item.party_name} </Text>
                                <View style={styles.detailbox}>
                                    <View style={{ flexDirection: 'row', marginTop: '2%' }}>
                                        <Text style={{ fontSize: 16 }}> ประเภท </Text>
                                        <Text style={{ fontSize: 16, marginLeft: '15%', marginLeft: '21%', fontWeight: 'bold' }}> {item.party_type} </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: '5%' }}>
                                        <Text style={{ fontSize: 16, color: 'black' }}> วันที่จัดตั้งกลุ่ม </Text>
                                        <Text style={{ fontSize: 16, color: 'black', marginLeft: '4%', marginLeft: '10.5%', fontWeight: 'bold' }}> 30/06/64 </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: '5%' }}>
                                        <Text style={{ fontSize: 16, color: 'black' }}> ราคาหารต่อคน </Text>
                                        <Text style={{ fontSize: 16, color: 'black', marginLeft: '10%', fontWeight: 'bold' }}> {item.party_price} </Text>
                                        <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}> บาท </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: '5%' }}>
                                        <Text style={{ fontSize: 16, color: 'black' }}> จำนวนสมาชิกกลุ่ม </Text>
                                        <Text style={{ color: 'red', fontSize: 16, marginLeft: '5%', fontWeight: 'bold' }}> {userjoin} </Text>
                                        <Text style={{ fontSize: 16, color: 'black' }}> / </Text>
                                        <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}> {item.party_limitmember} </Text>
                                        <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}> คน </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: '5%' }}>
                                        <Text style={{ color: 'black', fontSize: 16 }}> รายละเอียด </Text>
                                        <Text numberOfLines={5}
                                            style={{
                                                width: 250,
                                                fontSize: 16,
                                                color: 'black',
                                                marginLeft: '17%',
                                                fontWeight: 'bold'
                                            }}>
                                            {item.party_detail}
                                        </Text>
                                    </View>

                                    <View>
                                        <TouchableOpacity onPress={() => navigation.navigate('cmPage')}>
                                            <View style={{
                                                backgroundColor: '#6359d5',
                                                alignItems: 'center',
                                                height: 35,
                                                flexDirection: 'row',
                                                justifyContent: 'center',
                                                marginTop: '3%',
                                                width: '80%',
                                                alignSelf: 'center',
                                                borderRadius: 10
                                            }}>
                                                <Text
                                                    style={{
                                                        fontSize: 16,
                                                        color: 'white',
                                                        fontWeight: 'bold'
                                                    }} > แชทกลุ่ม </Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={{ fontSize: 16, color: '#6359d5', fontWeight: 'bold', alignSelf: 'center' }}> ------------------------------------------------------------- </Text>
                                </View>
                            </View>
                        )}
                    />
                </View>

            </ScrollView>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    headerbox: {
        flex: 2,
        marginTop: '10%',
    },
    imagebox: {
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        alignContent: 'center'
    },
    detailbox: {
        flex: 3,
        backgroundColor: 'white',
        borderRadius: 20,
        marginTop: '5%'
    },
    goodsimage: {
        height: 320,
        width: '100%',
        borderRadius: 20
    },
    storelogo: {
        width: 40,
        height: 40,
        borderRadius: 100 / 3
    },
});

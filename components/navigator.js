import React from 'react';
import { View, Image } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './home';
import Nonuserparty from './nonuserparty';
import nologinpage from './nologinpage';
import homenavigator from './homenavigator';

const Tab = createBottomTabNavigator();

const Navigator = () => {
  return (   
    <Tab.Navigator 
        tabBarOptions={{
            showLabel: false,
            style:{
                height: '8%',
                backgroundColor: 'white',
                borderTopWidth: 0
            }
        }}
    >
    <Tab.Screen 
        name="หน้าหลัก" 
        component={homenavigator} 
        options={{
            tabBarIcon: ({focused}) => (
                <View>
                    <Image 
                        source={require('../images/homepage.png')}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: focused ? '#6359d5' : '#D1D1D1',
                        }}
                    />
                </View>
            )
        }}
    />
    <Tab.Screen 
        name="ปาร์ตี้" 
        component={Nonuserparty}
        options={{
            tabBarIcon:({focused}) => (
                <Image
                    source={require('../images/community.png')}
                    resizeMode="contain"
                    style={{
                        width: 30,
                        height: 30,
                        tintColor: focused ? '#6359d5' : '#D1D1D1',
                    }}
                />
            ),
        }}
    />
    <Tab.Screen 
        name="ผู้ใช้งาน" 
        component={nologinpage} 
        options={{
            tabBarIcon: ({focused}) => (
                <View>
                    <Image 
                        source={require('../images/user.png')}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: focused ? '#6359d5' : '#D1D1D1',
                        }}
                    />
                </View>
            )
        }}
    />

    </Tab.Navigator>
    
  )
}

export default Navigator;
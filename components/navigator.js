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
            activeTintColor: 'green',
            style:{
                height: '8%',
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
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
                            width: 35,
                            height:35,
                            tintColor: focused ? 'green' : 'black',
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
                        width: 45,
                        height: 45,
                        tintColor: focused ? 'green' : 'black',
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
                            width: 40,
                            height:40,
                            tintColor: focused ? 'green' : 'black',
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
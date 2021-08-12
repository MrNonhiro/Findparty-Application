import React from 'react';
import Register from './register';
import Home from './home';
import Partypage from './partypage';
import Navigator from './navigator'
import storepage from './storepage'
import nologinpage from './nologinpage';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Homenavigator = () => {
  return (
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
          <Stack.Screen name="partypage" component={Partypage} options={{headerShown:false}} />
          <Stack.Screen name="register" component={Register} options={{headerShown:false}} />
          <Stack.Screen name="navigator" component={Navigator} options={{headerShown:false}} />
          <Stack.Screen name="storepage" component={storepage} options={{headerShown:false}} />
          <Stack.Screen name="nologinpage" component={nologinpage} options={{headerShown:false}} />
        </Stack.Navigator>
  )
}

export default Homenavigator;
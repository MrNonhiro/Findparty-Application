import React from 'react';
import Navigator from './components/navigator';
import nologinpage from './components/nologinpage';
import Register from './components/register';
import Loginpage from './components/loginpage';
import Home from './components/home';
import Partypage from './components/partypage';
import Partydetail from './components/partydetail';
import Storepage from './components/storepage';
import loggedHome from './components/loggedin/loggedHome';
import registerStore from './components/registerStore';
import topnavigator  from'./components/topnavigator';

{
  // loggedin pages
}
import userpage from './components/loggedin/userpage';
import usersetting from './components/loggedin/usersetting';
import useraddressEdit from './components/loggedin/useraddressEdit';

{
  // goods status bar
}
import paymentWating from './components/loggedin/statusPage/paymentWating';
import deliveryWaiting from './components/loggedin/statusPage/deliveryWaiting';
import delivery from './components/loggedin/statusPage/delivery';
import received from './components/loggedin/statusPage/received';

{
  // store user page
}
import homepage from './components/storeUser/homepage';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Navigator" component={Navigator} options={{ headerShown: false }} />
        <Stack.Screen name="nologinpage" component={nologinpage} options={{ headerShown: false }} />
        <Stack.Screen name="register" component={Register} options={{ headerShown: false }} />
        <Stack.Screen name="loginpage" component={Loginpage} options={{ headerShown: false }} />
        <Stack.Screen name="home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="partypage" component={Partypage} options={{ headerShown: false }} />
        <Stack.Screen name="partydetail" component={Partydetail} options={{ headerShown: false }} />
        <Stack.Screen name="storepage" component={Storepage} options={{ headerShown: false }} />
        <Stack.Screen name="loggedHome" component={loggedHome} options={{ headerShown: false }} />
        <Stack.Screen name="registerStore" component={registerStore} options={{ headerShown: false }} />

        {
          // loggedin pages
        }
        <Stack.Screen name="userpage" component={userpage} options={{ headerShown: false }} />
        <Stack.Screen name="usersetting" component={usersetting} options={{ headerShown: false }} />
        <Stack.Screen name="useraddressEdit" component={useraddressEdit} options={{ headerShown: false }} />

        {
          // goods status bar
        }
        <Stack.Screen name="paymentWating" component={paymentWating} options={{ headerShown: false }} />
        <Stack.Screen name="deliveryWaiting" component={deliveryWaiting} options={{ headerShown: false }} />
        <Stack.Screen name="delivery" component={delivery} options={{ headerShown: false }} />
        <Stack.Screen name="received" component={received} options={{ headerShown: false }} />

        {
          // store user page
        }
        <Stack.Screen name="homepage" component={homepage} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
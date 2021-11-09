import React from 'react';
import { LogBox } from 'react-native';
import Navigator from './components/navigator';
import nologinpage from './components/nologinpage';
import Register from './components/register';
import Loginpage from './components/loginpage';
import Home from './components/home';
import Partydetail from './components/partydetail';
import Storepage from './components/storepage';
import loggedHome from './components/loggedin/loggedHome';
import registerStore from './components/registerStore';
import topnavigator from './components/topnavigator';
import storelogin from './components/storelogin';

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
import addparty from './components/storeUser/addparty';
import storepartydetail from './components/storeUser/storepartydetail';
import storedelivery from './components/storeUser/status/storedelivery';
import storedeliveryWaiting from './components/storeUser/status/storedeliveryWaiting';
import storepaymentWaiting from './components/storeUser/status/storepaymentWaiting';
import storerecieved from './components/storeUser/status/storerecieved';

{
  // party page
}
import cmPage from './components/partyPage/cmPage';
import partymember from './components/partyPage/partymember';
import partypage from './components/partyPage/partypage';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

LogBox.ignoreAllLogs();

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
        <Stack.Screen name="partydetail" component={Partydetail} options={{ headerShown: false }} />
        <Stack.Screen name="storepage" component={Storepage} options={{ headerShown: false }} />
        <Stack.Screen name="loggedHome" component={loggedHome} options={{ headerShown: false }} />
        <Stack.Screen name="registerStore" component={registerStore} options={{ headerShown: false }} />
        <Stack.Screen name="storelogin" component={storelogin} options={{ headerShown: false }} />

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
        <Stack.Screen name="addparty" component={addparty} options={{ headerShown: false }} />
        <Stack.Screen name="storepartydetail" component={storepartydetail} options={{ headerShown: false }} />
        <Stack.Screen name="storedelivery" component={storedelivery} options={{ headerShown: false }} />
        <Stack.Screen name="storedeliveryWaiting" component={storedeliveryWaiting} options={{ headerShown: false }} />
        <Stack.Screen name="storepaymentWaiting" component={storepaymentWaiting} options={{ headerShown: false }} />
        <Stack.Screen name="storerecieved" component={storerecieved} options={{ headerShown: false }} />

        {
          // store user page
        }
        <Stack.Screen name="cmPage" component={cmPage} options={{ headerShown: false }} />
        <Stack.Screen name="partymember" component={partymember} options={{ headerShown: false }} />
        <Stack.Screen name="partypage" component={partypage} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
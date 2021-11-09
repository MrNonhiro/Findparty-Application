import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function loginpage({ navigation }) {
  const [username, setuser_Username] = useState("");
  const [password, setuser_Password] = useState("");
  const [googleSubmitting, setGoogleSubmitting] = useState("");
  const [hidePass, setHidePass] = useState("");

  let [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    const authenticate = async () => {
      axios
        .post(
          "http://34.124.194.224/login.php",
          JSON.stringify({
            password: password,
            username: username
          })
        )
        .then((response) => {
          if (response.data.onLogin == "true") {
            navigation.navigate("userpage");
            AsyncStorage.setItem('user_id', response.data.user_id)
            alert(response.data.user_id)
            setIsSubmit(false)
          } else {
            alert(JSON.stringify(response.data));
            setIsSubmit(false)
          }
          console.log(response.data);
          setIsSubmit(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    if (isSubmit) authenticate();
  }, [isSubmit]);

  return (
    <View style={styles.container}>
        <View style={styles.headbox}>
          <Text style={styles.text2}> ลงชื่อเข้าใช้ </Text>
          <Text style={styles.text}> | </Text>
          <Text style={styles.text} onPress={() => navigation.navigate('register')}> สมัครสมาชิก </Text>
        </View>
        <View style={styles.inputbox}>
          <View style={styles.detailView}>
            <Image source={require('../images/user.png')} style={styles.userimage} />
            <TextInput
              onChangeText={(text) => setuser_Username(text)} style={styles.placeholder}
              placeholder="ชื่อผู้ใช้"
            />
          </View>
          <View style={styles.detailView}>
            <Image source={require('../images/password.png')} style={styles.userimage} />
            <TextInput
              onChangeText={(text) => setuser_Password(text)} style={styles.placeholder}
              placeholder="รหัสผ่าน"
              secureTextEntry={hidePass ? true : false}
            />
            <Icon
              style={{
                padding: 5
              }}
              name={hidePass ? 'eye-slash' : 'eye'}
              size={15}
              color="grey"
              onPress={() => setHidePass(!hidePass)}
            />
          </View>
          <View style={styles.buttombox}>
            <Text style={{
            }} onPress={() => navigation.navigate('storelogin')}> เข้าสู่ระบบร้านค้า </Text>
          </View>
          <View style={styles.buttombox2}>
            <Text style={{ alignSelf: 'center', marginTop: '5%' }}> เข้าสู่ระบบโดย </Text>
          </View>
          <View style={styles.loginvia}>
            <Image source={require('../images/facebook.png')} style={styles.loginimage} />
            <Image source={require('../images/google.png')} style={styles.loginimage2} />
          </View>
          <TouchableOpacity onPress={() => setIsSubmit(true)}>
            <View style={styles.submit}>
              <Text style={styles.submittext}> เข้าสู่ระบบ </Text>
            </View>
          </TouchableOpacity>
          <View style={styles.submit2}>
            <Text style={styles.submittext2} onPress={() => navigation.goBack()}> ยกเลิก </Text>
          </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginTop: '40%'
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  headbox: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
  text2: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    color: '#6359d5'
  },
  inputbox: {
    alignItems: 'center',
    marginTop: '8%'
  },
  searchbar: {
    height: '8%',
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 15,
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: '5%'
  },
  icon: {
    fontSize: 25,
  },
  placeholder: {
    marginLeft: 15
  },
  userimage: {
    height: '43%',
    width: '5.5%',
    marginLeft: '5%',
    marginRight: '0.5%',
    tintColor: '#6359d5'
  },
  buttombox: {
    marginTop: '3%',
    marginLeft: '55%'
  },
  buttombox2: {
  },
  submit: {
    alignSelf: 'center',
    backgroundColor: '#6359d5',
    borderRadius: 25,
    borderWidth: 10,
    borderColor: '#6359d5',
    marginTop: '10%',
    elevation: 3,
  },
  submittext: {
    fontSize: 25,
    color: 'white',
  },
  submit2: {
    alignSelf: 'center',
    backgroundColor: 'red',
    borderRadius: 25,
    borderWidth: 10,
    borderColor: 'red',
    borderLeftWidth: 29,
    borderRightWidth: 29,
    marginTop: '2%',
    elevation: 3,
  },
  submittext2: {
    fontSize: 25,
    color: 'white',
  },
  loginvia: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  loginimage: {
    marginTop: '1%',
    height: 90,
    width: 50
  },
  loginimage2: {
    marginTop: '1%',
    height: 50,
    width: 50
  },
  detailView: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 50,
    width: '85%',
    marginTop: '1%',
    alignItems: 'center',
    elevation: 3,
    borderRadius: 30,
    marginTop: '3%',
  },
})
  ;
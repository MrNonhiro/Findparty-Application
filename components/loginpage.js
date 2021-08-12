import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Image, ImageBackground, TouchableOpacity } from 'react-native';
import axios from 'axios';

export default function loginpage({ navigation }) {
  const [email, setuser_Email] = useState("");
  const [password, setuser_Password] = useState("");
  const [googleSubmitting, setGoogleSubmitting] = useState("");

  let [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    const authenticate = async () => {
      axios
        .post(
          "http://34.87.120.146/login.php",
          JSON.stringify({
            user_email: email,
            user_password: password,
          })
        )
        .then((response) => {
          if (response.data == "true") {
            navigation.navigate("userpage");
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

  const usernameHandler = (text) => {
    setuser_Email(text);

  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../images/loginregiswall.png')} style={styles.image}>
        <View style={styles.headbox}>
          <Text style={styles.text2}> ลงชื่อเข้าใช้ </Text>
          <Text style={styles.text}> | </Text>
          <Text style={styles.text} onPress={() => navigation.navigate('register')}> สมัครสมาชิก </Text>
        </View>
        <View style={styles.inputbox}>
          <View style={styles.searchbar}>
            <Image source={require('../images/userpage.png')} style={styles.userimage} />
            <TextInput style={styles.placeholder} placeholder="Username" onChangeText={usernameHandler} />
          </View>
          <View style={styles.searchbar}>
            <Image source={require('../images/password.png')} style={styles.userimage} />
            <TextInput style={styles.placeholder} placeholder="Password" onChangeText={(text) => setuser_Password(text)} />
          </View>
          <View style={styles.buttombox}>
            <Text style={{ alignSelf: 'center', alignSelf: 'flex-end', marginRight: '10%', marginTop: '2%' }}> ลืมรหัสผ่าน? </Text>
            <Text style={{ alignSelf: 'center', marginTop: '5%' }}> เข้าสู่ระบบโดย </Text>
          </View>
          <View style={styles.loginvia}>
            <Image source={require('../images/facebook.png')} style={styles.loginimage} />
            <Image source={require('../images/google.png')} style={styles.loginimage2} />
          </View>
          <View style={styles.submit}>
            <TouchableOpacity onPress={() => setIsSubmit(true)} style={styles.submittext}><Text> เข้าสู่ระบบ </Text></TouchableOpacity>
          </View>
          <View style={styles.submit2}>
            <Text style={styles.submittext2} onPress={() => navigation.goBack()}> ยกเลิก </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
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
    textDecorationLine: 'underline',
    color: 'green'
  },
  inputbox: {
    padding: 10
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
    height: '5%',
    width: '11%',
    paddingTop: '11%'
  },
  buttombox: {
  },
  submit: {
    alignSelf: 'center',
    backgroundColor: 'green',
    borderRadius: 25,
    borderWidth: 10,
    borderColor: 'green',
    marginTop: '20%'
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
    marginTop: '2%'
  },
  submittext2: {
    fontSize: 25,
    color: 'white',
  },
  loginvia: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '37%'
  },
  loginimage: {
    marginTop: '1%',
    height: '145%',
    width: '20%'
  },
  loginimage2: {
    marginTop: '1%',
    height: '75%',
    width: '19%'
  }
})
  ;
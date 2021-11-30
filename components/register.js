import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Image, ImageBackground, TouchableOpacity } from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

const register = ({ navigation }) => {

  const [hidePass, setHidePass] = useState("");

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submit, setSubmit] = useState("");

  useEffect(() => {
    const authenticate = async () => {
      axios
        .post(
          "http://34.124.194.224/insert.php",
          JSON.stringify({
            username: username,
            email: email,
            password: password
          })
        )
        .then((response) => {
          if (response.data == "สมัครสมาชิกสำเร็จ") {
            setSubmit(false)
            alert(JSON.stringify(response.data));
          } else {
            alert(JSON.stringify(response.data));
            setSubmit(false)
          }

        })
        .catch((err) => {
          console.log(err);
        });
    };
    if (submit) authenticate();
  }, [submit]);

  const usernameHandler = (text) => {
    setUsername(text);
  }

  return (
    <View style={styles.container}>
      <View style={styles.headbox}>
        <Text style={styles.text} onPress={() => navigation.navigate('loginpage')}> ลงชื่อเข้าใช้ </Text>
        <Text style={styles.text}> | </Text>
        <Text style={styles.text2}> สมัครสมาชิก </Text>
      </View>
      <View style={styles.inputbox}>
        <View style={styles.detailView}>
          <Image source={require('../images/user.png')} style={styles.userimage} />
          <TextInput
            onChangeText={usernameHandler} style={styles.placeholder}
            placeholder="ชื่อผู้ใช้"
          />
        </View>
        <View style={styles.detailView}>
          <Image source={require('../images/password.png')} style={styles.userimage} />
          <TextInput
            onChangeText={(text) => setPassword(text)} style={styles.placeholder}
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
        <View style={styles.detailView}>
          <Image source={require('../images/emailuser.png')} style={styles.userimage} />
          <TextInput
            onChangeText={(text) => setEmail(text)} style={styles.placeholder}
            placeholder="อีเมลล์"
          />
        </View>
        <View style={styles.buttombox}>
          <Text onPress={() => navigation.navigate('registerStore')} style={{ alignSelf: 'center', marginBottom: '1%' }}> สมัครสมาชิกร้านค้า? </Text>
        </View>
        <TouchableOpacity onPress={() => setSubmit(true)}>
          <View style={styles.submit}>
            <Text style={styles.submittext}> สมัครสมาชิก </Text>
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
    marginBottom: '10%'
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
    alignItems: 'center'
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
    alignSelf: 'center',
    marginTop: '8%'
  },
  submit: {
    marginTop: '20%',
    alignSelf: 'center',
    backgroundColor: '#6359d5',
    borderRadius: 25,
    borderWidth: 10,
    borderColor: '#6359d5',
    elevation: 10
  },
  submittext: {
    fontSize: 25,
    color: 'white',
    borderTopWidth: 0
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
})

export default register;
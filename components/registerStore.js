import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Image, ImageBackground, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';

const registerStore = ({ navigation }) => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [commercial, setCommercial] = useState("");
  const [submit, setSubmit] = useState("");

  useEffect(() => {
    const authenticate = async () => {
      axios
        .post(
          "http://34.126.169.148/registerstore.php",
          JSON.stringify({
            username: username,
            email: email,
            password: password,
            name: name,
            commercial: commercial
          })
        )
        .then((response) => {
          if (response.data == "ok") {
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
      <ImageBackground source={require('../images/loginregiswall.png')} style={styles.image}>
        <View style={styles.headbox}>
          <Text style={styles.text}> ลงทะเบียนร้านค้า </Text>
        </View>
        <View style={styles.inputbox}>
          <View style={styles.searchbar}>
            <Image source={require('../images/userpage.png')} style={styles.userimage} />
            <TextInput style={styles.placeholder} placeholder="ชื่อผู้ใช้" onChangeText={usernameHandler} />
          </View>
          <View style={styles.searchbar}>
            <Image source={require('../images/email.png')} style={styles.userimage} />
            <TextInput style={styles.placeholder} placeholder="อีเมลล์" onChangeText={(text) => setEmail(text)} />
          </View>
          <View style={styles.searchbar}>
            <Image source={require('../images/password.png')} style={styles.userimage} />
            <TextInput style={styles.placeholder} placeholder="รหัสผ่าน" onChangeText={(text) => setPassword(text)}/>
          </View>
          <View style={styles.searchbar}>
            <Image source={require('../images/store.png')} style={styles.userimage} />
            <TextInput style={styles.placeholder} placeholder="ชื่อร้านค้า" onChangeText={(text) => setName(text)} />
          </View>
          <View style={styles.searchbar}>
            <Image source={require('../images/detail.png')} style={styles.userimage} />
            <TextInput style={styles.placeholder} placeholder="เลขที่ทะเบียนการค้า(ถ้ามี)" onChangeText={(text) => setCommercial(text)} />
          </View>
          <TouchableOpacity onPress={() => setSubmit(true)}>
            <View style={styles.submit}>
              <Text style={styles.submittext}> ลงทะเบียน </Text>
            </View>
          </TouchableOpacity>
          <View style={styles.submit2}>
            <Text style={styles.submittext2} onPress={() => { navigation.goBack() }}> ยกเลิก </Text>
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
    textDecorationLine: 'underline',
    color: 'green'
  },
  inputbox: {
    padding: 10
  },
  searchbar: {
    height: '7%',
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
    height: '2%',
    width: '11%',
    paddingTop: '11%',
    marginTop: '1%'
  },
  buttombox: {
    alignSelf: 'center',
    marginTop: '10%'
  },
  submit: {
    marginTop: '20%',
    alignSelf: 'center',
    backgroundColor: 'green',
    borderRadius: 25,
    borderWidth: 10,
    borderColor: 'green'
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
  submittext: {
    fontSize: 25,
    color: 'white',
  }
})

export default registerStore;
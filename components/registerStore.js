import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Image, ImageBackground, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';

const registerStore = ({ navigation }) => {

  const [hidePass, setHidePass] = useState("");

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
          "http://34.124.194.224/registerstore.php",
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
        <View style={styles.headbox}>
          <Text style={styles.text}> ลงทะเบียนร้านค้า </Text>
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
            <Image source={require('../images/emailuser.png')} style={styles.userimage} />
            <TextInput
              onChangeText={usernameHandler} style={styles.placeholder}
              placeholder="อีเมลล์"
            />
          </View>
          <View style={styles.detailView}>
            <Image source={require('../images/password.png')} style={styles.userimage} />
            <TextInput
              onChangeText={usernameHandler} style={styles.placeholder}
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
            <Image source={require('../images/store.png')} style={styles.userimage} />
            <TextInput
              onChangeText={usernameHandler} style={styles.placeholder}
              placeholder="ชื่อร้านค้า"
            />
          </View>
          <View style={styles.detailView}>
            <Image source={require('../images/detail.png')} style={styles.userimage} />
            <TextInput
              onChangeText={usernameHandler} style={styles.placeholder}
              placeholder="เลขที่ทะเบียนการค้า(ถ้ามี"
            />
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
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginTop: '35%'
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
    alignItems: 'center'
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
    height: '43%',
    width: '5.5%',
    marginLeft: '5%',
    marginRight: '0.5%',
    tintColor: '#6359d5'
  },
  buttombox: {
    alignSelf: 'center',
    marginTop: '10%'
  },
  submit: {
    marginTop: '10%',
    alignSelf: 'center',
    backgroundColor: '#6359d5',
    borderRadius: 25,
    borderWidth: 10,
    borderColor: '#6359d5'
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

export default registerStore;
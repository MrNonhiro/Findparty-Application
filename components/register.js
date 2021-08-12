import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

const register = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../images/loginregiswall.png')} style={styles.image}>
        <View style={styles.headbox}>
          <Text style={styles.text} onPress={() => navigation.navigate('loginpage')}> ลงชื่อเข้าใช้ </Text>
          <Text style={styles.text}> | </Text>
          <Text style={styles.text2}> สมัครสมาชิก </Text>
        </View>
        <View style={styles.inputbox}>
          <View style={styles.searchbar}>
            <Image source={require('../images/userpage.png')} style={styles.userimage} />
            <TextInput style={styles.placeholder} placeholder="Username" />
          </View>
          <View style={styles.searchbar}>
            <Image source={require('../images/email.png')} style={styles.userimage} />
            <TextInput style={styles.placeholder} placeholder="E-mail" />
          </View>
          <View style={styles.searchbar}>
            <Image source={require('../images/password.png')} style={styles.userimage} />
            <TextInput style={styles.placeholder} placeholder="Password" />
          </View>
          <View style={styles.buttombox}>
            <Text onPress={() => navigation.navigate('registerStore')} style={{ alignSelf: 'center', marginBottom: '1%' }}> สมัครสมาชิกร้านค้า? </Text>
            <Text style={{ alignSelf: 'center', marginBottom: '1%' }}> หรือ </Text>
            <Text onPress={() => navigation.goBack()}> ดำเนินการต่อโดยผู้เยี่ยมชม </Text>
          </View>
          <View style={styles.submit}>
            <Text style={styles.submittext} onPress={() => navigation.navigate('loggedHome')}> สมัครสมาชิก </Text>
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
  submittext: {
    fontSize: 25,
    color: 'white',
  }
})

export default register;
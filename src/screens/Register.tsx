import { useState } from 'react'
import styled from 'styled-components'
import { Alert, Text, TextInput, View } from 'react-native'
import { Button, Header, Icon } from 'react-native-elements'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMugSaucer, faUser, faEnvelope, faMobile, faLock, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Login'
import axios from 'axios';
const baseUrl = 'http://192.168.1.6:3001';



const RegisterScreen = ({ navigation }: { navigation: any }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  console.log(email);

  const submitRegister = async () => {
    console.log("email", email);
    console.log(`${baseUrl}/auth/register`);

    try{
      const dataForm = {
        email: email,
        password: password,
        fullName: name,
        phoneNumber: phone,
        gender: 0
      }
      const response = await axios.post(`${baseUrl}/auth/register`, dataForm);
      console.log(response.data);
      if(response.data.success == true){
        Alert.alert('Register successfully!!'); 
      }
    }catch(error){
      Alert.alert('Register failed!!');
    }
  }

  return (
    <>
      <View style={{ height: 500, padding: 30 }}>
        <Button
          title={<FontAwesomeIcon icon={faArrowLeft} style={{ position: 'absolute', top: 11, left: 10 }} />}
          buttonStyle={{ backgroundColor: '#C0C0C0', width: 20, height: 30, padding: 20, borderRadius: 10, }}
          style={{ marginBottom: 30 }}
          onPress={() => navigation.navigate('LOGIN')}
        />
        <Text style={{ fontSize: 30, fontWeight: '700', textAlign: 'center' }}>Create Account</Text>
        <Text style={{ textAlign: 'center', marginBottom: 20 }}>Create a new account</Text>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          {<FontAwesomeIcon icon={faUser} style={{ position: 'absolute', top: 17, left: 14 }} />}
          <TextInput
            style={{ width: '100%', height: 50, borderWidth: 1, borderColor: '#C0C0C0', borderRadius: 10, marginBottom: 30, padding: 15, paddingLeft: 35 }}
            placeholder="NAME"
            keyboardType="default"
            onChangeText={name => setName(name)}
            defaultValue={name}
          />
        </View>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
            <FontAwesomeIcon icon={faEnvelope} style={{ position: 'absolute', top: 18, left: 17 }} />
            <TextInput
              style={{ width: '100%', borderColor: 'gray', borderWidth: 1, marginBottom: 20, borderRadius: 10, padding: 18, paddingLeft: 42 }}
              placeholder="EMAIL"
              keyboardType='default'
              onChangeText={email => setEmail(email)}
              defaultValue={email}
            />
          </View>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <FontAwesomeIcon icon={faMobile} style={{ position: 'absolute', top: 17, left: 14 }} />
          <TextInput
            style={{ width: '100%', height: 50, borderWidth: 1, borderColor: '#C0C0C0', borderRadius: 10, marginBottom: 30, padding: 15, paddingLeft: 35 }}
            placeholder="PHONE"
            keyboardType="numeric"
            onChangeText={phone => setPhone(phone)}
              defaultValue={phone}
          />
        </View>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <FontAwesomeIcon icon={faLock} style={{ position: 'absolute', top: 17, left: 14 }} />
          <TextInput
            style={{ width: '100%', height: 50, borderWidth: 1, borderColor: '#C0C0C0', borderRadius: 10, marginBottom: 30, padding: 15, paddingLeft: 35 }}
            placeholder="PASSWORD"
            keyboardType="default"
            secureTextEntry={true}
            onChangeText={password => setPassword(password)}
            defaultValue={password}
          />
        </View>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <FontAwesomeIcon icon={faLock} style={{ position: 'absolute', top: 17, left: 14 }} />
          <TextInput
            style={{ width: '100%', height: 50, borderWidth: 1, borderColor: '#C0C0C0', borderRadius: 10, marginBottom: 30, padding: 15, paddingLeft: 35 }}
            placeholder="CONFIRM PASSWORD"
            keyboardType="default"
            secureTextEntry={true}
          />
        </View>

        <Button
          title="CREATE ACCOUNT"
          buttonStyle={{ backgroundColor: '#00CC99', padding: 12, borderRadius: 10 }}
          style={{ marginBottom: 30 }}
          onPress={submitRegister}
        />
        <Text style={{ marginBottom: 20 }}></Text>
        <Text style={{ textAlign: 'center', marginBottom: 200 }}>Already have a account?
          <Button
            title={<Text style={{ color: 'green', top: 10 }}>Login</Text>}
            buttonStyle={{ backgroundColor: '#C0C0C0', paddingTop: 5 }}
            onPress={() => navigation.navigate('LOGIN')}
          />
        </Text>

      </View>
    </>
  )
}

export default RegisterScreen

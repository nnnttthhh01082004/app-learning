import { useState } from 'react'


import styled from 'styled-components'
import { Text, View, TextInput, Alert } from 'react-native'
import { Button } from 'react-native-elements'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircleUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
const baseUrl = 'http://192.168.1.6:3001';

  const LoginScreen: React.FC =   () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitLogin = async () => {
    // console.log(email);
    console.log(`${baseUrl}/auth/login`);

    try{
      const dataForm = {
        email: email,
        password: password,
      }
      const response = await axios.post(`${baseUrl}/auth/login`, dataForm);
      console.log(response.data);
      if(response.data.success == true){
        Alert.alert('Login successfully!!'); 
      }
    }catch(error){
      Alert.alert('Login failed!!');
    }
    

  }

  return (
    <>
      <View style={{ height: 500, padding: 30 }}>
        <FontAwesomeIcon icon={faCircleUser} style={{ position: 'absolute', top: 17, left: 157, padding: 50 }} />
        <View style={{ display: 'flex', flexDirection: 'column', top: 100 }}>
          <Text style={{ textAlign: 'center', fontWeight: '800', fontSize: 35 }}>Welcome Back</Text>
          <Text style={{ textAlign: 'center', fontWeight: '100', fontSize: 18, marginBottom: 40 }}>Sign in to continue</Text>
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
            <FontAwesomeIcon icon={faLock} style={{ position: 'absolute', top: 16, left: 17 }} />
            <TextInput
              style={{ width: '100%', borderWidth: 1, borderColor: 'gray', borderRadius: 10, marginBottom: 20, padding: 18, paddingLeft: 42 }}
              placeholder="PASSWORD"
              keyboardType="default"
              secureTextEntry={true}
              onChangeText={password => setPassword(password)}
              defaultValue={password}
            />
          </View>

          <Text style={{ textAlign: 'right', color: 'green', fontSize: 15, marginBottom: 40 }}>Forgot Password?</Text>

          <Button
            title="LOGIN"
            buttonStyle={{ backgroundColor: 'green', padding: 15 }}
            onPress={submitLogin}
            style={{ borderRadius: 10, marginBottom: 40 }}
          />

          <Text style={{ textAlign: 'center' }}>Don't have an account?
            <Text style={{ color: 'green' }}> Create a new account</Text>
          </Text>

        </View>
      </View>
    </>
  )
}

export default LoginScreen

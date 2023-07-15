import * as React from 'react'

import styled from 'styled-components'
import { TextInput, Text, View, Image } from 'react-native'
import { Button, Header, Icon } from 'react-native-elements'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMugSaucer,faUnlockKeyhole, faUser,faEnvelope, faCircleUser,faCalendarDays,faUserGroup} from '@fortawesome/free-solid-svg-icons'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './Login'
import { useState, useEffect } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";


const Page = styled(View)`
  padding: 40px 30px 0 30px;
`
const Heading = styled(Text)`
  text-align: center;
  font-size: 20px;
  margin-bottom: 16px;
  font-weight: bold;
`
const ProfileScreen: React.FC = () => {
  return (
    <>
      <Page>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
          { <FontAwesomeIcon icon={faCircleUser} style={{color:'#5377D5', position: 'absolute', top: 17, left: 14 }} />}
          <TextInput
           placeholderTextColor="#5377D5"
            style={{ width: '100%', height: 50, borderWidth: 1, borderColor: '#5377D5', borderRadius: 20, marginBottom: 20, padding: 10, paddingLeft: 35 }}
            placeholder="Username"
            keyboardType="default"
          />
        </View>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          { <FontAwesomeIcon icon={faCalendarDays} style={{color:'#5377D5', position: 'absolute', top: 17, left: 14 }} />}
          <TextInput
            placeholderTextColor="#5377D5"
            style={{ width: '100%', height: 50, borderWidth: 1,  borderColor: '#5377D5', borderRadius: 20, marginBottom: 20, padding: 10, paddingLeft: 35 }}
            placeholder="Date of Birth"
            keyboardType="numeric"
          />
        </View>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          { <FontAwesomeIcon icon={faUserGroup} style={{color:'#5377D5', position: 'absolute', top: 17, left: 14 }} />}
          <TextInput
           placeholderTextColor="#5377D5"
            style={{ width: '100%', height: 50, borderWidth: 1,  borderColor: '#5377D5', borderRadius: 20, marginBottom: 20, padding: 10, paddingLeft: 35 }}
            placeholder="Gender"
            keyboardType="default"
          />
        </View>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          { <FontAwesomeIcon icon={faEnvelope} style={{color:'#5377D5', position: 'absolute', top: 17, left: 14 }} />}
          <TextInput
           placeholderTextColor="#5377D5"
            style={{ width: '100%', height: 50, borderWidth: 1, borderColor: '#5377D5', borderRadius: 20, marginBottom: 20, padding: 10, paddingLeft: 35 }}
            placeholder="Email or Phone number"
            keyboardType="default"
          />
        </View>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          { <FontAwesomeIcon icon={faUnlockKeyhole} style={{color:'#5377D5', position: 'absolute', top: 17, left: 14 }} />}
          <TextInput
           placeholderTextColor="#5377D5"
            style={{width: '100%', height: 50, borderWidth: 1,  borderColor: '#5377D5', borderRadius: 20, marginBottom: 20, padding: 10, paddingLeft: 35 }}
            placeholder="Password"
            keyboardType="default"
            secureTextEntry={true}
          />
        </View>
      </Page>
    </>
  )
}


export default ProfileScreen
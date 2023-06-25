import * as React from 'react'
import { Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import BoyScreen from './BoyScreen'
import GirlScreen from './GirlScreen'
import LoginScreen from './Login'
import RegisterScreen from './Register'

const Tab = createBottomTabNavigator()

const HomeScreen: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="LOGIN"
        options={{ tabBarIcon: () => <Text>👧</Text> }}
        component={LoginScreen}
      />
      <Tab.Screen
        name="REGISTER"
        options={{ tabBarIcon: () => <Text>👦</Text> }}
        component={RegisterScreen}
      />
    </Tab.Navigator>
  )
}

export default HomeScreen

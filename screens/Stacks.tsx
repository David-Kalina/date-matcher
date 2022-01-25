import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../components/Home'
import Signin from '../components/Auth/Signin'
import React from 'react'
import Signup from '../components/Auth/Signup'
const Stack = createNativeStackNavigator()

export const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}

export const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Sign In" component={Signin} />
      <Stack.Screen name="Sign Up" component={Signup} />
    </Stack.Navigator>
  )
}

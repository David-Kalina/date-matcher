import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../components/Home'
import Signin from '../components/Auth/Signin'
import React from 'react'
import Signup from '../components/Auth/Signup'
import Match from '../components/Match'
import AllCategories from '../components/AllCategories'
import Invite from '../components/Invite'
import CreateRoom from '../components/CreateRoom'
import ChooseCategory from '../components/ChooseCategory'
const Stack = createNativeStackNavigator()

export const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Choose Category" component={ChooseCategory} />
      <Stack.Screen name="Match" component={Match} />
      <Stack.Screen name="All Categories" component={AllCategories} />
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

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../components/Home'
import Signin from '../components/Signin'
const Stack = createNativeStackNavigator()

export const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home Screen" component={Home} />
    </Stack.Navigator>
  )
}

export const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Sign In Screen" component={Signin} />
    </Stack.Navigator>
  )
}

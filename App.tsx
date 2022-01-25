import React from 'react'
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Code,
  Box,
} from 'native-base'
import NativeBaseIcon from './components/NativeBaseIcon'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Test from './components/Test'

const Stack = createNativeStackNavigator()

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
}

// extend the theme
export const theme = extendTheme({ config })

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Test} />
          {/* <Center _dark={{ bg: 'blueGray.900' }} _light={{ bg: 'blueGray.50' }} px={4} flex={1}>
            <VStack space={5} alignItems="center">
              <NativeBaseIcon />
              <Heading size="lg">Welcome to NativeBase</Heading>
              <HStack space={2} alignItems="center">
                <Text>Edit</Text>
                <Code>App.tsx</Code>
                <Text>and save to reload.</Text>
              </HStack>
              <Link href="https://docs.nativebase.io" isExternal>
                <Text color="primary.500" underline fontSize={'xl'}>
                  Learn NativeBase
                </Text>
              </Link>
              <ToggleDarkMode />
            </VStack>
          </Center> */}
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  )
}

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === 'light' ? true : false}
        onToggle={toggleColorMode}
        aria-label={colorMode === 'light' ? 'switch to dark mode' : 'switch to light mode'}
      />
      <Text>Light</Text>
    </HStack>
  )
}

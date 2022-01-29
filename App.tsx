import { createNativeStackNavigator } from '@react-navigation/native-stack'
import axios from 'axios'
import { extendTheme, HStack, NativeBaseProvider, Switch, Text, useColorMode } from 'native-base'
import React from 'react'
import { AuthProvider } from './providers/AuthProvider'
import { Router } from './screens/Router'

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
      <AuthProvider>
        <Router />
      </AuthProvider>
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

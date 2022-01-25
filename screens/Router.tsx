import { NavigationContainer } from '@react-navigation/native'
import { Box } from 'native-base'
import { useAuth } from '../hooks/useAuth'
import React from 'react'

import { AppStack, AuthStack } from './Stacks'

export const Router = () => {
  const { authData, loading } = useAuth()

  if (loading) {
    return <Box>Loading...</Box>
  }

  //More explanations about "authData" below
  return <NavigationContainer>{authData?.token ? <AppStack /> : <AuthStack />}</NavigationContainer>
}

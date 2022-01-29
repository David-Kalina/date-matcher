import { Button, FormControl, Heading, Input, Link, VStack } from 'native-base'
import React from 'react'

function Home({ navigation }: { navigation: any }) {
  return (
    <VStack p="6" space={10}>
      <Heading textAlign="center">Invite User</Heading>

      <VStack space={4}>
        <FormControl>
          <Input placeholder="Email" bg="white" />
        </FormControl>
        <Button>Invite</Button>
      </VStack>

      <Button onPress={() => navigation.navigate('Choose Category')}>Choose category</Button>
    </VStack>
  )
}

export default Home

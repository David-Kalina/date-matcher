import {
  Box,
  Flex,
  FormControl,
  Heading,
  Input,
  VStack,
  Text,
  Link,
  Button,
  HStack,
} from 'native-base'
import React from 'react'

function Signin({ navigation }: { navigation: any }) {
  return (
    <VStack display="flex" direction="column" alignItems="center" space={4} h="100%" pt="8">
      <Box textAlign="center">
        <Heading>Welcome Back!</Heading>
        <Text textAlign="center">Ready for another date?</Text>
      </Box>
      <VStack w="80%" mx="auto" space={4}>
        <FormControl>
          <Input
            h="50px"
            type="email"
            placeholder="Email"
            fontSize="md"
            bg="white"
            borderRadius="md"
          />
        </FormControl>
        <FormControl>
          <Input
            h="50px"
            type="password"
            placeholder="Password"
            fontSize="md"
            bg="white"
            borderRadius="md"
          />
        </FormControl>
        <Text textAlign="right">Recovery Password</Text>
        <Button colorScheme="orange" p="4" fontSize="lg">
          Sign In
        </Button>
      </VStack>

      <HStack flexDir="row" w="80%" alignItems="center" space={2} mt="8">
        <Text bg="black" flex={1} height={1} />
        <Text>Or continue with</Text>
        <Text bg="black" flex={1} height={1} />
      </HStack>

      <HStack
        flexDir="row"
        w="80%"
        alignItems="center"
        justifyContent="space-between"
        space={2}
        mt="12"
      >
        <Button w="80px" h="80px">
          1
        </Button>
        <Button w="80px" h="80px">
          2
        </Button>
        <Button w="80px" h="80px">
          3
        </Button>
      </HStack>

      <Link mt="auto" mb="12" onPress={() => navigation.navigate('Sign Up')}>
        Not a member? Register
      </Link>
    </VStack>
  )
}

export default Signin

import {
  Heading,
  VStack,
  Button,
  SimpleGrid,
  Text,
  ScrollView,
  FormControl,
  Input,
} from 'native-base'
import React from 'react'

function AllCategories() {
  return (
    <VStack space={10} w="90%" mx="auto">
      <Heading textAlign="center">All Categories</Heading>
      <FormControl>
        <Input placeholder="Filter" bg="white" />
      </FormControl>
      <ScrollView flexGrow={1}>
        <SimpleGrid minChildWidth={100} alignItems="center" space={2} columns={3}>
          <Button borderWidth={1} h={100} w={100}>
            <Text>Category</Text>
          </Button>
          <Button borderWidth={1} h={100} w={100}>
            <Text>Category</Text>
          </Button>
          <Button borderWidth={1} h={100} w={100}>
            <Text>Category</Text>
          </Button>
          <Button borderWidth={1} h={100} w={100}>
            <Text>Category</Text>
          </Button>
          <Button borderWidth={1} h={100} w={100}>
            <Text>Category</Text>
          </Button>
          <Button borderWidth={1} h={100} w={100}>
            <Text>Category</Text>
          </Button>
          <Button borderWidth={1} h={100} w={100}>
            <Text>Category</Text>
          </Button>
          <Button borderWidth={1} h={100} w={100}>
            <Text>Category</Text>
          </Button>
          <Button borderWidth={1} h={100} w={100}>
            <Text>Category</Text>
          </Button>
          <Button borderWidth={1} h={100} w={100}>
            <Text>Category</Text>
          </Button>
          <Button borderWidth={1} h={100} w={100}>
            <Text>Category</Text>
          </Button>
          <Button borderWidth={1} h={100} w={100}>
            <Text>Category</Text>
          </Button>
          <Button borderWidth={1} h={100} w={100}>
            <Text>Category</Text>
          </Button>
          <Button borderWidth={1} h={100} w={100}>
            <Text>Category</Text>
          </Button>
          <Button borderWidth={1} h={100} w={100}>
            <Text>Category</Text>
          </Button>
          <Button borderWidth={1} h={100} w={100}>
            <Text>Category</Text>
          </Button>
          <Button borderWidth={1} h={100} w={100}>
            <Text>Category</Text>
          </Button>
          <Button borderWidth={1} h={100} w={100}>
            <Text>Category</Text>
          </Button>
          <Button borderWidth={1} h={100} w={100}>
            <Text>Category</Text>
          </Button>
          <Button borderWidth={1} h={100} w={100}>
            <Text>Category</Text>
          </Button>
          <Button borderWidth={1} h={100} w={100}>
            <Text>Category</Text>
          </Button>
          <Button borderWidth={1} h={100} w={100}>
            <Text>Category</Text>
          </Button>
          <Button borderWidth={1} h={100} w={100}>
            <Text>Category</Text>
          </Button>
          <Button borderWidth={1} h={100} w={100}>
            <Text>Category</Text>
          </Button>
          <Button borderWidth={1} h={100} w={100}>
            <Text>Category</Text>
          </Button>
          <Button borderWidth={1} h={100} w={100}>
            <Text>Category</Text>
          </Button>
          <Button borderWidth={1} h={100} w={100}>
            <Text>Category</Text>
          </Button>
          <Button borderWidth={1} h={100} w={100}>
            <Text>Category</Text>
          </Button>
        </SimpleGrid>
      </ScrollView>
    </VStack>
  )
}

export default AllCategories

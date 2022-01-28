import {
  Box,
  ChevronRightIcon,
  Flex,
  FormControl,
  Heading,
  HStack,
  Icon,
  Input,
  InputLeftAddon,
  Link,
  ScrollView,
  SearchIcon,
  Skeleton,
  Text,
  VStack,
} from 'native-base'
import React from 'react'
import Category from './Category'

function Home({ navigation }: { navigation: any }) {
  return (
    <VStack p="6" space={10}>
      <Heading textAlign="center">Let's do something together</Heading>
      <FormControl>
        <Input placeholder="Search" bg="white" />
      </FormControl>

      <HStack justifyContent="space-between">
        <Text fontSize="xl" fontWeight="bold">
          Categories
        </Text>
        <Link onPress={() => navigation.navigate('All Categories')}>See all</Link>
      </HStack>

      <ScrollView h="500px" mt="4">
        <VStack space={4}>
          <Category navigation={navigation} name="Bars" />
          <Category navigation={navigation} name="Burgers" />
          <Category navigation={navigation} name="Noodles" />
          <Category navigation={navigation} name="Peruvian" />
          <Category navigation={navigation} name="Breweries" />
          <Category navigation={navigation} name="Pizza" />
          <Category navigation={navigation} name="Fast food" />
          <Category navigation={navigation} name="Bars" />
          <Category navigation={navigation} name="Burgers" />
          <Category navigation={navigation} name="Noodles" />
          <Category navigation={navigation} name="Breweries" />
          <Category navigation={navigation} name="Pizza" />
          <Category navigation={navigation} name="Fast food" />
        </VStack>
      </ScrollView>
    </VStack>
  )
}

export default Home

import {
  Box, Button, Flex, Heading, HStack, Image, Skeleton, Text, VStack
} from 'native-base'
import React from 'react'
import { useFetch } from '../hooks/useFetch'

function Match(props: any) {
  const { response, loading } = useFetch(
    'https://api.yelp.com/v3/businesses/search?term=bars&latitude=40.090003037925705&longitude=-104.92386004575837'
  )

  const [current, setCurrent] = React.useState(0)

  const handleNext = () => {
    setCurrent(current + 1)
  }

  return (
    <VStack alignItems="stretch" p="6" space={8}>
      <Heading textAlign="center">{props.route.params.name}</Heading>
      {!loading ? (
        <Flex position="relative">
          <Image
            key={new Date().getTime()}
            source={{
              uri:
                (response.businesses && response.businesses[current].image_url) ||
                'https://picsum.photos/200',
            }}
            h="400px"
            alt="bar"
          />
          <Box bg="black" position="absolute" bottom={0} w="100%" p="2">
            <Text fontSize="2xl" fontWeight="bold" color="white">
              {response.businesses && response.businesses[current].name}
            </Text>
          </Box>
        </Flex>
      ) : (
        <Skeleton height="400px" borderWidth={1} borderRadius="md" />
      )}

      <HStack alignItems="center" justifyContent="space-evenly">
        {response.businessses?.map((x: any) => (
          <Box h="10px" w="10px" borderRadius="full" borderWidth={1} />
        ))}
      </HStack>

      <HStack justifyContent="space-around">
        <Button w="100px" h="100px" borderRadius="full" onPress={handleNext}>
          No
        </Button>
        <Button w="100px" h="100px" borderRadius="full" onPress={handleNext}>
          Yes
        </Button>
      </HStack>
    </VStack>
  )
}

export default Match

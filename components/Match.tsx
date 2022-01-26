import { VStack, Text, Heading, Skeleton, HStack, Icon, Button } from 'native-base'
import React from 'react'

function Match(props: any) {
  console.log(props)
  return (
    <VStack alignItems="stretch" p="6" space={8}>
      <Heading textAlign="center">{props.route.params.name}</Heading>
      <Skeleton height="500px" borderWidth={1} borderRadius="md" />

      <HStack justifyContent="space-around">
        <Button w="100px" h="100px" borderRadius="full">
          No
        </Button>
        <Button w="100px" h="100px" borderRadius="full">
          Yes
        </Button>
      </HStack>
    </VStack>
  )
}

export default Match

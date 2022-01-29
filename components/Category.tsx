import { HStack, Skeleton, Box, ChevronRightIcon, Text, Pressable } from 'native-base'
import React from 'react'

function Category({ navigation, name }: { navigation: any; name: string }) {
  const navigate = () => {
    navigation.navigate('Match', { name })
  }

  return (
    <Pressable onPress={navigate}>
      <HStack alignItems="center" borderWidth={1} h="100px" borderRadius="md" space={3}>
        <Skeleton height="100%" flex={1} />
        <Box flex={2}>
          <Text fontWeight="bold">{name}</Text>
        </Box>
        <Box>
          <ChevronRightIcon />
        </Box>
      </HStack>
    </Pressable>
  )
}

export default Category

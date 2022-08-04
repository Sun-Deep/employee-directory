import { Flex, Spinner } from '@chakra-ui/react'

const Loading = () => {
  return (
    <Flex justifyContent={'center'}>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="primary.400"
        size="xl"
      />
    </Flex>
  )
}

export default Loading

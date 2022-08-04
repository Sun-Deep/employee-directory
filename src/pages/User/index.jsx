import { VStack } from '@chakra-ui/react'
import CustomHeading from '../../components/CustomHeading'

const Users = () => {
  return (
    <VStack alignSelf={'start'} spacing={5}>
      <CustomHeading title={'Employee List'} />
    </VStack>
  )
}

export default Users

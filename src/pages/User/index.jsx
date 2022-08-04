import { VStack } from '@chakra-ui/react'
import CustomHeading from '../../components/CustomHeading'
import CustomTable from '../../components/CustomTable'

const Users = () => {
  return (
    <VStack spacing={5}>
      <CustomHeading title={'Employee List'} />
      <CustomTable />
    </VStack>
  )
}

export default Users

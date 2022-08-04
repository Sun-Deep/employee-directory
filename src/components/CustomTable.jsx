import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import PropTypes from 'prop-types'
import Loading from './Loading'

const CustomTable = ({ users, isLoading }) => {
  console.log(users)
  return (
    <TableContainer w={'full'} overflowX={'auto'}>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Picture</Th>
            <Th>Name</Th>
            <Th>Job Title</Th>
            <Th>Department</Th>
            <Th>Location</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody w={'full'}>
          {isLoading ? (
            <Tr>
              <Td colSpan={6}>
                <Loading />
              </Td>
            </Tr>
          ) : null}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

CustomTable.propTypes = {
  isLoading: PropTypes.bool,
  users: PropTypes.array,
}

export default CustomTable

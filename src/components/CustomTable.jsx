import { Table, TableContainer, Tbody, Th, Thead, Tr } from '@chakra-ui/react'
import PropTypes from 'prop-types'

const CustomTable = ({ users }) => {
  return (
    <TableContainer overflowX={'auto'}>
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
        <Tbody>{JSON.stringify(users)}</Tbody>
      </Table>
    </TableContainer>
  )
}

CustomTable.propTypes = {
  users: PropTypes.array,
}

export default CustomTable

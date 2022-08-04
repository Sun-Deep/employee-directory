import {
  HStack,
  Icon,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from '@chakra-ui/react'
import { FaTrash, FaUserEdit } from 'react-icons/fa'
import PropTypes from 'prop-types'

import { SERVER_BASE_URL } from '../config/axios'
import Loading from './Loading'
import ActionCard from './ActionCard'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import DeleteModal from './DeleteModal'

const CustomTable = ({ users, isLoading }) => {
  const navigate = useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [info, setInfo] = useState(null)

  const handleDelete = (user) => {
    setInfo(user)
    onOpen()
  }

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
          ) : (
            users?.length > 0 &&
            users?.map((user) => (
              <Tr key={user._id} fontSize={'body'}>
                <Td>
                  <Image
                    src={`${SERVER_BASE_URL}/${user.profile_image}`}
                    w={'40px'}
                    h={'40px'}
                    borderRadius={'50%'}
                    crossOrigin={'anonymous'}
                  />
                </Td>
                <Td>{user?.name}</Td>
                <Td>{user?.job_title}</Td>
                <Td>{user?.department}</Td>
                <Td>{user?.location}</Td>
                <Td>
                  <HStack>
                    <ActionCard color={'orange'}>
                      <Icon
                        as={FaUserEdit}
                        onClick={() => navigate(`/edit/${user?._id}`)}
                      />
                    </ActionCard>
                    <ActionCard color={'red'}>
                      <Icon as={FaTrash} onClick={() => handleDelete(user)} />
                    </ActionCard>
                  </HStack>
                </Td>
              </Tr>
            ))
          )}
        </Tbody>
      </Table>
      {isOpen && (
        <DeleteModal
          id={info._id}
          name={info.name}
          isOpen={isOpen}
          onClose={onClose}
        />
      )}
    </TableContainer>
  )
}

CustomTable.propTypes = {
  isLoading: PropTypes.bool,
  users: PropTypes.array,
}

export default CustomTable

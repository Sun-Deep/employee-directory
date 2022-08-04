import {
  Button,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react'
import { FaTrash } from 'react-icons/fa'
import PropTypes from 'prop-types'

const DeleteModal = ({ isOpen, onClose, name, id }) => {
  console.log(id)
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Delete Employee</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>
            You are going to delete <b>{name}</b> record. Are you sure ?
          </Text>
        </ModalBody>

        <ModalFooter>
          <Button
            size={'sm'}
            colorScheme={'red'}
            leftIcon={<Icon as={FaTrash} />}
          >
            Delete
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

DeleteModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.bool,
  name: PropTypes.string,
  id: PropTypes.string,
}

export default DeleteModal

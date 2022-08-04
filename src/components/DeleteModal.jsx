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
import { deleteUserById } from '../services/users'
import { useState } from 'react'
import { useToastError, useToastSuccess } from './Toast'

const DeleteModal = ({ isOpen, onClose, name, id, setIsRefresh }) => {
  const [isLoading, setIsLoading] = useState(false)

  const toastError = useToastError()
  const toastSuccess = useToastSuccess()

  const handleOnClose = () => {
    setIsRefresh(true)
    onClose()
  }

  const handleOnDelete = () => {
    setIsLoading(true)
    deleteUserById(id)
      .then((res) => {
        setIsLoading(false)
        handleOnClose()
        toastSuccess({
          title: res.message,
        })
      })
      .catch((err) => {
        setIsLoading(false)
        toastError({
          title: err,
        })
      })
  }

  return (
    <Modal isOpen={isOpen} onClose={handleOnClose}>
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
            isLoading={isLoading}
            colorScheme={'red'}
            leftIcon={<Icon as={FaTrash} />}
            onClick={handleOnDelete}
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
  onClose: PropTypes.func,
  name: PropTypes.string,
  id: PropTypes.string,
  setIsRefresh: PropTypes.func,
}

export default DeleteModal

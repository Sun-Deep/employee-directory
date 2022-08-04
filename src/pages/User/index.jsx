import { Button, Flex, Icon, Input, VStack } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import CustomHeading from '../../components/CustomHeading'
import CustomTable from '../../components/CustomTable'
import { useToastError } from '../../components/Toast'

import { getUsersList } from '../../services/users'

const Users = () => {
  const [users, setUsers] = useState([])
  const [finalUserList, setFinalUserList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isRefresh, setIsRefresh] = useState(false)

  const navigate = useNavigate()
  const toastError = useToastError()

  const getUsers = async () => {
    let _users = await getUsersList()
    setIsLoading(false)
    setUsers(_users?.data)
    setFinalUserList(_users?.data)
  }

  useEffect(() => {
    setIsLoading(true)
    getUsers().catch((err) => {
      setIsLoading(false)
      toastError({
        title: err,
      })
    })
  }, [])

  useEffect(() => {
    if (isRefresh) {
      getUsers().catch((err) => {
        setIsLoading(false)
        toastError({
          title: err,
        })
      })
    }
  }, [isRefresh])

  const handleSearch = (event) => {
    const value = event.target.value
    if (value !== '' && users.length > 0) {
      let _u = users.filter((u) => {
        if (
          u.name.toLowerCase().includes(value.toLowerCase()) ||
          u.job_title.toLowerCase().includes(value.toLowerCase()) ||
          u.department.toLowerCase().includes(value.toLowerCase()) ||
          u.location.toLowerCase().includes(value.toLowerCase())
        ) {
          return true
        } else {
          return false
        }
      })
      setFinalUserList(_u)
    } else if (value === '') {
      setFinalUserList(users)
    }
  }

  return (
    <VStack spacing={5} w={'full'}>
      <CustomHeading title={'Employee List'} />
      <Flex
        justifyContent={'space-between'}
        gridGap={5}
        flexDir={['column', 'column', 'row']}
        w={'full'}
      >
        <Button
          alignSelf={'start'}
          leftIcon={<Icon as={FaPlus} />}
          variant="primary"
          size={'sm'}
          onClick={() => navigate('/register')}
        >
          Add Emmployee
        </Button>
        <Input
          size={'sm'}
          w={['full', 'full', '2xl', '3xl']}
          placeholder="Search by name, title, department, location"
          onChange={handleSearch}
        />
      </Flex>

      <CustomTable
        setIsRefresh={setIsRefresh}
        isLoading={isLoading}
        users={finalUserList}
      />
    </VStack>
  )
}

export default Users

import { Button, Icon, VStack } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import CustomHeading from '../../components/CustomHeading'
import CustomTable from '../../components/CustomTable'
import { getUsersList } from '../../services/users'

const Users = () => {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isRefresh, setIsRefresh] = useState(false)

  const navigate = useNavigate()

  const getUsers = async () => {
    let _users = await getUsersList()
    setIsLoading(false)
    setUsers(_users?.data)
  }

  useEffect(() => {
    setIsLoading(true)
    getUsers().catch((err) => {
      setIsLoading(false)
      console.log(err)
    })
  }, [])

  useEffect(() => {
    if (isRefresh) {
      getUsers().catch((err) => {
        setIsLoading(false)
        console.log(err)
      })
    }
  }, [isRefresh])

  return (
    <VStack spacing={5} w={'full'}>
      <CustomHeading title={'Employee List'} />
      <Button
        alignSelf={'start'}
        leftIcon={<Icon as={FaPlus} />}
        variant="primary"
        size={'sm'}
        onClick={() => navigate('/register')}
      >
        Add Emmployee
      </Button>
      <CustomTable
        setIsRefresh={setIsRefresh}
        isLoading={isLoading}
        users={users}
      />
    </VStack>
  )
}

export default Users

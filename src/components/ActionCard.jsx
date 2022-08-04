import { Flex } from '@chakra-ui/react'
import PropTypes from 'prop-types'

const ActionCard = ({ color, children }) => {
  return (
    <Flex
      bgColor={'white'}
      boxShadow={'md'}
      h={'30px'}
      w={'30px'}
      borderRadius={'50%'}
      justifyContent={'center'}
      alignItems={'center'}
      color={color}
      cursor={'pointer'}
      _hover={{
        bgColor: '#f9f7f7',
      }}
    >
      {children}
    </Flex>
  )
}

ActionCard.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node,
}

export default ActionCard

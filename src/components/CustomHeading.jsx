import { Heading } from '@chakra-ui/react'
import PropTypes from 'prop-types'

const CustomHeading = ({ title }) => {
  return (
    <Heading as={'h4'} size={'lg'}>
      {title}
    </Heading>
  )
}

CustomHeading.propTypes = {
  title: PropTypes.string,
}

export default CustomHeading

import { Box, Breadcrumb, BreadcrumbItem, Heading } from '@chakra-ui/react'

import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const BreadCrumb = ({ items }) => {
  return (
    <Box alignSelf={'start'} mb={5}>
      <Breadcrumb color="gray">
        {items.map((item) => (
          <BreadcrumbItem key={item.url} cursor="pointer">
            <Link to={item.url ?? ''}>
              <Heading
                color={item.isActive && 'primary.400'}
                as={'h4'}
                size={'sm'}
              >
                {item.name}
              </Heading>
            </Link>
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
    </Box>
  )
}

BreadCrumb.propTypes = {
  items: PropTypes.array,
}

export default BreadCrumb

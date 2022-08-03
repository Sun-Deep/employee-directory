import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

import { Button } from './components/button'

export const customTheme = extendTheme({
  colors: {
    'primary.200': '#5AD1B9',
    'primary.400': '#2EC0A3',
    'primary.600': '#228F79',
  },
  fontSizes: {
    body: '14px',
    heading: '22px',
    subheading: '18px',
  },
  fontWeights: {
    regular: 400,
    mediuam: 500,
    semibold: 600,
    bold: 700,
  },
  styles: {
    global: (props) => ({
      p: {
        fontSize: 'body',
        fontWeight: 'regular',
      },
      a: {
        color: 'primary',
        _hover: {
          textDecoration: 'underline',
        },
      },
      body: {
        color: mode('gray.600', 'gray.400')(props),
        bg: mode('gray.50', 'whiteAlpha.50')(props),
      },
    }),
  },
  initialColorMode: 'light',
  components: {
    Button,
  },
})

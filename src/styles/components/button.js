import { mode } from '@chakra-ui/theme-tools'

export const Button = {
  // Styles for the base style
  baseStyle: {},
  // Styles for the size variations
  sizes: {},
  // Styles for the visual style variations
  variants: {
    primary: (props) => ({
      bg: 'primary.400',
      color: 'white',
      _hover: {
        bg: mode('primary.600', 'primary.200')(props),
      },
      fontSize: 'body',
      boxShadow: 'md',
      fontWeight: 'bold',
      p: '0px 20px',
    }),
  },
  defaultProps: {},
}

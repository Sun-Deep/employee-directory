import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import { useField } from 'formik'
import PropTypes from 'prop-types'

const InputField = ({ name, label, isRequired = false, ...otherProps }) => {
  const [field, meta] = useField(name)

  const config = {
    ...field,
    ...otherProps,
  }

  return (
    <FormControl
      isInvalid={meta && meta.touched && meta.error}
      id={name}
      isRequired={isRequired}
    >
      <FormLabel fontSize="body" fontWeight="medium">
        {label}
      </FormLabel>
      <Input
        name={name}
        {...config}
        id={name}
        focusBorderColor="secondary"
        size="sm"
        borderRadius="5px"
      />
      <FormErrorMessage>{meta && meta.error}</FormErrorMessage>
    </FormControl>
  )
}

InputField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  isRequired: PropTypes.bool,
}

export default InputField

import {
  Button,
  GridItem,
  SimpleGrid,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react'
import * as Yup from 'yup'
import { Formik, Form } from 'formik'

import CustomHeading from '../../components/CustomHeading'
import InputField from '../../components/FormsUI/InputField'
import BreadCrumb from '../../components/BreadCrumb'

const INITIAL_FORM_STATE = {
  email: '',
  password: '',
}

const FORM_VALIDATION = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid Email').required('Email is required'),
  job_title: Yup.string().required('Job Title is required'),
  department: Yup.string().required('Department is required'),
  location: Yup.string(),
})

const BREADCRUMB = [
  {
    name: 'Employee List',
    url: '/',
    isActive: false,
  },
  {
    name: 'Register',
    url: '',
    isActive: true,
  },
]

const RegisterUser = () => {
  const colSpan = useBreakpointValue({
    base: 2,
    md: 1,
  })
  return (
    <VStack spacing={5} w={'full'}>
      <CustomHeading title={'Register Employee'} />
      {/* <BreadCrumb items={BREADCRUMB} /> */}
      <Formik
        initialValues={{
          ...INITIAL_FORM_STATE,
        }}
        validationSchema={FORM_VALIDATION}
        onSubmit={() => {}}
      >
        <Form>
          <SimpleGrid
            columns={2}
            rowGap={4}
            columnGap={5}
            w={['full', 'full', '2xl', '4xl']}
            boxShadow={['none', 'none', 'md']}
            p={5}
            borderRadius={'lg'}
          >
            <GridItem colSpan={2}>
              <BreadCrumb items={BREADCRUMB} />
            </GridItem>

            <GridItem colSpan={colSpan}>
              <InputField isRequired name="name" label="Name" />
            </GridItem>
            <GridItem colSpan={colSpan}>
              <InputField
                isRequired
                type={'email'}
                name="email"
                label="Email"
              />
            </GridItem>
            <GridItem colSpan={colSpan}>
              <InputField isRequired name="job_title" label="Job Title" />
            </GridItem>
            <GridItem colSpan={colSpan}>
              <InputField isRequired name="department" label="Department" />
            </GridItem>
            <GridItem colSpan={colSpan}>
              <InputField name="location" label="Location" />
            </GridItem>
            <GridItem colSpan={colSpan}>
              <InputField
                type={'file'}
                name="profile_image"
                label="Profile Image"
              />
            </GridItem>
            <GridItem colSpan={1}>
              <Button variant={'primary'} size={'sm'}>
                Save
              </Button>
            </GridItem>
          </SimpleGrid>
        </Form>
      </Formik>
    </VStack>
  )
}

export default RegisterUser

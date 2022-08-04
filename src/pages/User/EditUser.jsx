import {
  Button,
  FormControl,
  FormLabel,
  GridItem,
  Input,
  SimpleGrid,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react'
import * as Yup from 'yup'
import { Formik, Form } from 'formik'

import CustomHeading from '../../components/CustomHeading'
import InputField from '../../components/FormsUI/InputField'
import BreadCrumb from '../../components/BreadCrumb'
import { useEffect, useState } from 'react'
import { getUserById, updateUserById } from '../../services/users'
import { useParams } from 'react-router-dom'
import { useToastError, useToastSuccess } from '../../components/Toast'

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
    name: 'Edit',
    url: '',
    isActive: true,
  },
]

const EditUser = () => {
  const colSpan = useBreakpointValue({
    base: 2,
    md: 1,
  })

  let { id } = useParams()

  const toastError = useToastError()
  const toastSuccess = useToastSuccess()

  const [image, setImage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [initialValues, setInitialValues] = useState({
    name: '',
    email: '',
    job_title: '',
    department: '',
    location: '',
    profile_image: '',
  })

  useEffect(() => {
    const userById = async () => {
      let _user = await getUserById(id)
      setIsLoading(false)
      setInitialValues({
        name: _user?.data?.name,
        email: _user?.data?.email,
        job_title: _user?.data?.job_title,
        department: _user?.data?.department,
        location: _user?.data?.location,
        profile_image: _user?.data?.profile_image,
      })
    }
    userById()
  }, [])

  const handleFileChange = (event) => {
    setImage(event.target.files && event.target.files[0])
  }

  const handleSubmit = (values) => {
    setIsLoading(true)
    const data = new FormData()
    data.append('name', values.name)
    data.append('email', values.email)
    data.append('job_title', values.job_title)
    data.append('department', values.department)
    data.append('location', values.location)
    data.append('profile_image', image)

    updateUserById(id, data)
      .then((res) => {
        setIsLoading(false)
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
    <VStack spacing={5} w={'full'}>
      <CustomHeading title={'Register Employee'} />
      <Formik
        enableReinitialize
        initialValues={{
          ...initialValues,
        }}
        validationSchema={FORM_VALIDATION}
        onSubmit={handleSubmit}
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
              <FormControl>
                <FormLabel>Profile Image</FormLabel>
                <Input
                  type={'file'}
                  name={'profile_image'}
                  onChange={handleFileChange}
                  accept="image/*"
                />
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <Button
                isLoading={isLoading}
                type={'submit'}
                variant={'primary'}
                size={'sm'}
              >
                Save
              </Button>
            </GridItem>
          </SimpleGrid>
        </Form>
      </Formik>
    </VStack>
  )
}

export default EditUser

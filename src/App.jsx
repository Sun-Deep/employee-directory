import { Container } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Users from './pages/User'
import EditUser from './pages/User/EditUser'
import RegisterUser from './pages/User/RegisterUser'

function App() {
  return (
    <Container maxW={'4xl'} centerContent p={5}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Users />}></Route>
          <Route path="/register" element={<RegisterUser />}></Route>
          <Route path="/edit/:id" element={<EditUser />}></Route>
        </Routes>
      </Router>
    </Container>
  )
}

export default App

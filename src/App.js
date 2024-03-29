import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import { Col, Container, Row } from 'react-bootstrap';
import Signup from './components/Signup';
import { UserAuthContextProvider } from './context/UserAuthContext';
import Home from './components/Home';
import ProtectedRoute from './components/ProtectedRoute'
import Forgot from './components/Forgot';
import Reset from './components/Reset';
function App() {
  return (
    <Container>
      <Row>
        <Col >
          <UserAuthContextProvider>
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/forgot' element={<Forgot />} />
              <Route path='/reset' element={<Reset />} />
              <Route path='/home' element={<ProtectedRoute> <Home /> </ProtectedRoute>} />
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;

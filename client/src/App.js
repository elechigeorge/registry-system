import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';

import HomeScreen from './screens/HomeScreen';
import StaffLoginScreen from './screens/StaffLoginScreen';
import StaffRegisterScreen from './screens/StaffRegisterScreen';


const App = () => {
  return (
    <Router>
      <Header />
      <main className=''>
        <Route path='/' component={HomeScreen} exact />
        <Container>
          <Route path='/staff/login' component={StaffLoginScreen} />
          <Route path='/staff/register' component={StaffLoginScreen} />


        </Container>
      </main>

    </Router>
  )
}

export default App;
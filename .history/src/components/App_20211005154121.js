import { Container } from 'react-bootstrap';
import '../App.css';
import Signup from './Signup';
import { AuthProvider } from '../context/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';

function App() {
  return (
    <Container
      className='d-flex align-items-center justify-content-center'
      style={{ minHeight: '100vh' }}
    >
      <div className='w-100' style={{ maxWidth: '400px' }}>
        <Router>
          <AuthProvider>
            <Switch>
              <Route exact='/' component={Dashboard} />
              <Route path='/signup' component={Signup} />
              <Route path='/login' component={Login} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;

import { Container } from 'react-bootstrap';
import '../App.css';
import Signup from './Signup';
import { AuthProvider } from '../context/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Account from './Account';
import Login from './Login';
import PrivateRoute from './PrivateRoute';
import ForgotPassword from './ForgotPassword';
import UpdateProfile from './UpdateProfile';
import Storage from './Storage';
import { AppWrap } from './appStyles';
import Header from './header/header';
import ShoppingList from './Shoppinglist';
import AddItem from './AddItem';

function App() {
  return (
    <AppWrap>
      <Header />
      <Container
        className='d-flex align-items-center justify-content-center'
        // style={{ minHeight: '10vh' }}
      >
        <div className='w-100' style={{ maxWidth: '400px' }}>
          <Router>
            <AuthProvider>
              <Switch>
                <PrivateRoute exact path='/' component={Storage} />
                <PrivateRoute path='/account' component={Account} />
                <PrivateRoute path='/shoppinglist' component={ShoppingList} />
                <PrivateRoute path='/additem' component={AddItem} />
                <PrivateRoute
                  path='/update-profile'
                  component={UpdateProfile}
                />
                <Route path='/signup' component={Signup} />
                <Route path='/login' component={Login} />
                <Route path='/forgot-password' component={ForgotPassword} />
              </Switch>
            </AuthProvider>
          </Router>
        </div>
      </Container>
    </AppWrap>
  );
}

export default App;
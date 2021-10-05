import { Container } from 'react-bootstrap';
import '../App.css';
import Signup from './Signup';

function App() {
  return (
    <Container
      className='d-flex align-items-center justify-content-center'
      style={{ minHeight: '100vh' }}
    >
      <div className='w-100'></div>
      <Signup />
    </Container>
  );
}

export default App;

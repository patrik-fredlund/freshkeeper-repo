import { Container } from 'react-bootstrap';
import '../App.css';
import Signup from './Signup';

function App() {
  return (
    <Container className='d-flex align-items-center'>
      <Signup />
    </Container>
  );
}

export default App;

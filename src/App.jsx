import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Coffees from './components/Coffees';

function App() {
  const coffees = useLoaderData();
  
  return (
    <Container>
      <Row xs={1} md={2} className="g-4">
        {
          coffees.map((coffee) =>
            <Coffees key={coffee._id} coffee={coffee}></Coffees>
          )
        }
      </Row>
    </Container>


  )
}

export default App

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Coffees from './components/Coffees';
import { useState } from 'react';
import Hero from './components/Hero';
import Header from './components/Header';
import About from './components/About';

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <Container fluid>
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <Row xs={1} md={2} className="g-4">
        {
          coffees.map((coffee) =>
            <Coffees
              key={coffee._id}
              coffee={coffee}
              coffees={coffees}
              setCoffees={setCoffees}
            ></Coffees>
          )
        }
      </Row>
    </Container>


  )
}

export default App

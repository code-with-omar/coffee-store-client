import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Coffees from './components/Coffees';
import { useState } from 'react';
import Hero from './components/Hero';

import About from './components/About';
function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <Container fluid>

      <Hero></Hero>
      <About></About>
      <Container fluid>
        <Container className='coffee-wrap'>
          <h3 className='fw-400 font-dark-02'>Our Popular Products</h3>
          <Row xs={1} md={2} className=" coffee-contains">
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
      </Container>

    </Container>


  )
}

export default App

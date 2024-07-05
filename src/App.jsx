import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Coffees from './components/Coffees';
import { useState } from 'react';
import Hero from './components/Hero';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <Container fluid>
      <Header></Header>
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
      <Footer></Footer>
    </Container>


  )
}

export default App

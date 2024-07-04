import { Container, Row } from 'react-bootstrap';
import Icon1 from './../../public/images/icons/1.png';
import Icon2 from './../../public/images/icons/2.png';
import Icon3 from './../../public/images/icons/3.png';
import Icon4 from './../../public/images/icons/4.png';
import './css/about.css'
const About = () => {
    const data = [
        { title: 'Awesome Aroma', icon: Icon1, details: 'You will definitely be a fan of the design & aroma of your coffee' },
        { title: 'High Quality', icon: Icon2, details: 'We served the coffee to you maintaining the best quality' },
        { title: 'Pure Grades', icon: Icon3, details: 'The coffee is made of the green coffee beans which you will love' },
        { title: 'Proper Roasting', icon: Icon4, details: 'Your coffee is brewed by first roasting the green coffee beans' },

    ];

    return (
        <div className='about-wrap'>
            <Container>
                <Row xs={2} md={4} className="g-4">
                    {data.map((item, index) => (
                        <div key={index}>
                            <img src={item.icon} alt={item.title} />
                            <h3 className='my-3'>{item.title}</h3>
                            <p className='fs-16 fw-400'>{item.details}</p>
                        </div>
                    ))}
                </Row>
            </Container>

        </div>
    );
};

export default About;

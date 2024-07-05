import { Button, Container } from "react-bootstrap";
import './css/hero.css'
import './css/index.css'
import { Link } from "react-router-dom";
const Hero = () => {
    return (
        <div className="coffee-cup-section">
            <div className="hero-details">
                <h2 className="font-family font-white">Would you like a Cup of Delicious Coffee?</h2>
                <p className="font-family-2 fs-16 fw-400">
                    It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!
                    Your companion of every moment! Enjoy the beautiful moments and make them memorable.
                </p>
                <Button variant="outline-light" className="learn-more-button font-dark-01 fs-24 fw-400 bg-orange-01">Learn More</Button>
                <Link to='/singup'>
                    <Button variant="outline-light" className="learn-more-button font-dark-01 fs-24 fw-400 bg-orange-01 mx-4">Sign Up/In</Button>
                </Link>
            </div>
        </div>
    );
};

export default Hero;
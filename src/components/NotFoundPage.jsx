import React from 'react';
import NonFOundPage from './../../public/images/404/404.gif'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
const NotFoundPage = () => {
    return (
        <div className=''>
            <img src={NonFOundPage} alt="" />
            <Link to='/'>
                <Button variant="outline-light" className="learn-more-button font-dark-01 fs-24 fw-400 bg-orange-01 mx-4">Go Back</Button>
            </Link>
        </div>
    );
};

export default NotFoundPage;
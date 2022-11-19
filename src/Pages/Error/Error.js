import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='text-center font-bold text-orange-900 mt-5'>
            <h2>No pages found</h2>
            <h3>Please go back to</h3>
            <Link className='text-3xl' to='/'>Home</Link>
        </div>
    );
};

export default Error;
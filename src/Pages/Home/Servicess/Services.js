import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../Hook/Hook';
import ServicesCard from './ServicesCard';

const Services = () => {
    useTitle('Design Book')
    const [services, setServices]=useState([]);
    useEffect(()=>{
        fetch('https://web-developer-server-five.vercel.app/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[]);
    return (
        <div>
            <div className='text-center'>
                <p className='text-4xl font-bold text-orange-600'>Services</p>
                
                <p className='text-1xl text-orange-600 m-3'>Find my Services! Thast awaits for your best Classes!</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services.map(service=><ServicesCard key={service._id} service={service} />)
                }
            </div>
            <div className="card-actions justify-center">
          <Link to='/allServices'>
          <button className="btn btn-primary w-96 mt-3">See All Services</button>
          </Link>
        </div>
        </div>
    );
};

export default Services;
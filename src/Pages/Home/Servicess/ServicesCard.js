import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServicesCard = ({ service }) => {
  const { img, price, title, description, _id } = service;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <PhotoProvider>
        <PhotoView src={img}>
          <img style={{cursor:"pointer"}} src={img} alt="" />
        </PhotoView>
      </PhotoProvider>
      {/* <figure>
        <img src={img} alt="Shoes" />
      </figure> */}
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description.slice(0, 100)+ "..."}</p>
        <Link className="card-actions justify-end" to={`/servicedetails/${_id}`}>
          <button className="btn btn-xs">View Details</button>
        </Link>
        <h6 className="text-2xl text-orange-600 text-semibold">Price: {price}</h6>
        <div className="card-actions justify-end">
        </div>
        {/* <div className="card-actions justify-end">
          <Link to='/allServices'>
          <button className="btn btn-primary w-96">See All Services</button>
          </Link>
        </div> */}
        {/* <div className="card-actions justify-end">
          <Link to={`/checkout/${_id}`}>
          <Link to={`/add-services/${_id}`}>
          <button className="btn btn-primary">Check Out</button>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default ServicesCard
import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="hero bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Contact Address</h1>
          <p className="py-2 font-bold">
            Phone: 123456789
          </p>
          <p className="py-2 font-bold">
            Email: alaka@gmail.com
          </p>
          <p className="py-2 font-bold">
            Dhaka, Bangladesh.
          </p>
          <Link to='/allServices'><button className="btn btn-primary">Our Services</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
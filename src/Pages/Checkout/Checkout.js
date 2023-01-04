import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
  const { title, price, _id, description } = useLoaderData();
  console.log(description);
  const { user } = useContext(AuthContext);

  const handleReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const email = user?.email;
    const phone = form.phone.value;
    const message = form.message.value;

    const order = {
      service: _id,
      serviceName: title,
      price,
      curstomer: name,
      email,
      phone,
      message,
    };
    // warningn
    // if(phone.lenhth>10){
    //     alert('phone should be 10 characters')
    // }else{

    // }

        // create order in and save data base mongodb
        fetch("http://localhost:5000/orders", {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(order),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            if(data.acknowledged) {
            form.reset();
            toast('Congratulation! Review Posteed!');
            }else{
              toast('Not review added!')
            }
        })
        .catch((error) => console.error(error));
        // ended orders in and save at database
  };

  return (
    <div>
      <div>
            <ToastContainer
                position="top-center"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
             />
        </div>
      <form onSubmit={handleReview}>
        <h2 className="text-orange-600 text-center text-3xl font-semibold">
          Review: {title}
        </h2>
        {/* <h3 className="text-orange-600 text-center text-3xl font-semibold">
          Value: $ {price}
        </h3> */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 m-3">
          <input
            name="firstName"
            input-bordered
            type="text"
            placeholder="First Name"
            className="input input-ghost w-full"
          />
          <input
            name="lastName"
            input-bordered
            type="text"
            placeholder="Last Name"
            className="input input-ghost w-full"
          />
          <input
            name="phone"
            input-bordered
            type="text"
            placeholder="Your Phone"
            className="input input-ghost w-full"
          />
          <input
            name="email"
            input-bordered
            type="email"
            placeholder="Your Email"
            defaultValue={user?.email}
            readOnly
            className="input input-ghost w-full"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Type your Comments!</span>
          </label>
          <textarea
            name="message"
            className="textarea textarea-bordered h-24"
            placeholder="Your Message Here"
          ></textarea>
        </div>
        <input
          className="btn btn-primary"
          type="submit"
          value="Submit Reviews"
        />
      </form>
    </div>
  );
};

export default Checkout;
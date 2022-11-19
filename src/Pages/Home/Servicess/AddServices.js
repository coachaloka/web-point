import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
// import { AuthContext } from "../../Context/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from "../../../Hook/Hook";

const AddServices = () => {
    useTitle("Add Services");
    // const notify = () => toast("Wow so easy!");
//   const { title, price, _id, description } = useLoaderData();
  const { title, _id, description } = useLoaderData();
  console.log(description);
  const { user } = useContext(AuthContext);

  const handleReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const email = user?.email;
    // const phone = form.phone.value;
    const price = form.price.value;
    const description = form.description.value;

    const service = {
      service: _id,
      serviceName: title,
      price: price,
      title: name,
      email,
    //   phone,
        description,
    };
    // warningn
    // if(phone.lenhth>10){
    //     alert('phone should be 10 characters')
    // }else{

    // }

        // create order in and save data base mongodb
        fetch("https://web-developer-server-five.vercel.app/services", {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(service),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            if(data.acknowledged) {
            form.reset();
            toast('weldone! Service Added!');
            // alert("Service added seuccessfully!");
            }else{
              return toast('No Service Added!');
            }
            if(!data.acknowledged){
              toast('no service added!')
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
          Add Services: {title}
        </h2>
        {/* <h3 className="text-orange-600 text-center text-3xl font-semibold">
          Value: $ {price}
        </h3> */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 m-3">
          <input
            name="firstName"
            input-bordered
            type="text"
            placeholder="Service Name"
            className="input input-ghost w-full"
          />
          <input
            name="lastName"
            input-bordered
            type="text"
            placeholder="Catergory"
            className="input input-ghost w-full"
          />
          <input
            name="price"
            input-bordered
            type="text"
            placeholder="Service Price"
            className="input input-ghost w-full"
          />
          {/* <input
            name="phone"
            input-bordered
            type="text"
            placeholder="Service Price"
            className="input input-ghost w-full"
          /> */}
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
            <span className="label-text">Describe your Services</span>
          </label>
          <textarea
            name="description"
            className="textarea textarea-bordered h-24"
            placeholder="Description"
          ></textarea>
        </div>
        <input
          className="btn btn-primary"
          type="submit"
          value="Add Services"
        />
      </form>
    </div>
  );
};

export default AddServices;
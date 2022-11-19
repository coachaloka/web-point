import React, { useContext } from 'react';
import { Link, useNavigate} from "react-router-dom";
// import loginImage from "../../assets/images/login/login.svg";
import { AuthContext } from '../../Context/AuthProvider';

const Signup = () => {
  const {createUser} = useContext(AuthContext);
  const navigate = useNavigate();

    const handleSignup = (event) => {
      
        event.preventDefault();
        const form = event.target;
        // const name = form.name.value;
        const email= form.email.value;
        const password = form.password.value;
        form.reset();

        // 1-create user
        createUser(email, password)
        .then(result=>{
          const user=result.user;
          console.log(user);
          navigate('/');
        })
        .catch(error=>console.error(error))
        // finished create user
      };
      
    return (
      // <div className="hero min-h-screen bg-base-200">
      //   <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
      //   <div className="text-center lg:text-left">
      //      <img className="w-3/4" src={loginImage} alt="logimage" />
      //   </div>
      //   <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-20 py-10">
      //     <form onSubmit={handleSignup} className="card-body">
      //     <h4 className="text-3xl text-center font-bold">Sign Up Now!</h4>
      //     <div className="form-control">
      //     <label>Name</label><br />
      //       <input type="text" name='name' placeholder='name' className='input input-bordered'/><br />
      //       <label>Email</label><br />
      //       <input type="email" name='email' placeholder='email' className='input input-bordered' required/><br />
      //       <label>Password</label><br />
      //       <input type="password" name='password' placeholder='password'className='input input-bordered' required/><br />
      //       <button className="btn btn-primary" type="submit" value="signup" >Sign Up</button>
      //     </div>
      //     </form>
      //     <p className="text-center">Already have an Account <Link className="text-orange-600 font-bold" to='/login'>Log In</Link></p>
      //   </div>
      //   </div>
      // </div>



        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <img className="w-3/4"
            //  src={loginImage} 
             alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-20 py-10">
            <form onSubmit={handleSignup} className="card-body">
              <h4 className="text-5xl text-center font-bold">Sign Up Now!</h4>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name='name'
                  placeholder="Enter Name"
                  className="input input-bordered"
                />
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name='email'
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name='password'
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="signup" />
              </div>
            </form>
              <p className="text-center">Already have an Account <Link className="text-orange-600 font-bold" to='/login'>Log In</Link></p>
          </div>
        </div>
      </div>
    );
};

export default Signup;
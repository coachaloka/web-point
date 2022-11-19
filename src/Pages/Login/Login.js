import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImage from "../../assets2/carousel-3.jpg";
import { AuthContext } from "../../Context/AuthProvider";
import useTitle from "../../Hook/Hook";

const Login = () => {
  useTitle('Login')
  const {login}= useContext(AuthContext);
  const location= useLocation();
  const navigate = useNavigate();
// to redirect where the user wanted to go.
  const from = location.state?.from?.pathname || '/';

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    form.reset();
    console.log(email, password);

    //log in 
    login(email, password)
    .then(result=>{
      const user=result.user;
      const currentUser ={email: user.email}
      // console.log(user);
      console.log(currentUser);
      
      // get jwt 
      fetch('https://web-developer-server-five.vercel.app/jwt',{
        method: 'POST',
        headers:{
          'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
        // set token in local storage
        localStorage.setItem('car-token', data.token);
      })
      
      navigate(from, {replace:true})
    })
    .catch(error=>console.error(error));
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img className="w-3/4"
           src={loginImage} 
           alt="logimage" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-20 py-10">
          <form onSubmit={handleLogin} className="card-body">
            <h3 className="text-5xl text-center font-bold">Login now!</h3>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="login" />
            </div>
          </form>
            <p className="text-center">New to Cars <Link className="text-orange-600 font-bold" to='/signup'>Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
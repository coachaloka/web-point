import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets2/logo-4.png";
import { AuthContext } from "../../../Context/AuthProvider";



const googleProvider = new GoogleAuthProvider();
const Header = () => {
  const {user, logOut, providerLogIn} = useContext(AuthContext);

  const handleLogOut=()=>{
    logOut()
    .then()
    .catch()
  }
  const handleGoogle=()=>{
    providerLogIn(googleProvider)
    .then(result=>{
      const user=result.user;
      console.log(user)
    })
    .catch(err=>console.error(err));

  }
  const menuItems = <>
    <li className="font-semibold"><Link to="/">Home</Link></li>
    <li className="font-semibold"><Link to="/blogs">Blogs</Link></li>
    <li className="font-semibold"><Link to="/addServices">Add Services</Link></li>
    {
      user?.email?
      <>
        <li className="font-semibold"><Link to="/reviews">My Reviews</Link></li>
        <li className="font-semibold"><button onClick={handleLogOut} className='btn text-white'>Log Out</button></li>
      </>
      :
      <li className="font-semibold"><Link to="/login">Login</Link></li>
    }
  </>;
  return (
    <div className="navbar h-20 mb-12 mt-8 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-orange-900">
            {menuItems}
          </ul>
        </div>
        {/* <a className="btn btn-ghost normal-case text-xl">
            <Link to='/'><img className="w-3/4" src={logo} alt="" /></Link>
        </a> */}
          <div className="mt-5">
              <Link to='/'><img className="w-3/4" src={logo} alt="logo" /></Link>
          </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 text-orange-900">
          {menuItems}
        </ul>
      </div>
      <div className="navbar-end">
        
      <button onClick={handleGoogle} className="btn btn-outline btn-warning">Sign in with Google</button>
      </div>
    </div>
  );
};

export default Header;
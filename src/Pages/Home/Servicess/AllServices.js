import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import AllServicesCard from "./AllServicesCard";

const AllServices = () => {
  const [allServices, setAllServices] = useState([]);
  useEffect(() => {
    fetch("https://webpoint-server2.vercel.app/allservices")
      .then((res) => res.json())
      .then((data) => setAllServices(data));
  }, []);
  return (
    <div className="">
      <div>
        <h2 className="text-center font-bold text-5xl text-orange-900 mt-3">
          My services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {allServices.map((allService) => (
            <AllServicesCard key={allService._id} allService={allService} />
          ))}
        </div>
      </div>
      <div className="w-2/5">
        <h2>Reviews Services</h2>
      </div>
    </div>
  );
};


// const AllServices = () => {
//   const [allServices, setAllServices] = useState([]);
//   useEffect(() => {
//     fetch("https://webpoint-server2.vercel.app/services")
//       .then((res) => res.json())
//       .then((data) => setAllServices(data));
//   }, []);
//   return (
//     <div className="">
//       <div>
//         <h2 className="text-center font-bold text-5xl text-orange-900 mt-3">
//           My services
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
//           {allServices.map((allService) => (
//             <AllServicesCard key={allService._id} allService={allService} />
//           ))}
//         </div>
//       </div>
//       <div className="w-2/5">
//         <h2>Reviews Services</h2>
//       </div>
//     </div>
//   );
// };

export default AllServices;
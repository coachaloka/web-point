import React, { useEffect, useState } from "react";

const OrdersRaw = ({ order, handleDelete, handleStatusUpdate }) => {
  const { serviceName, price, email, phone, curstomer, service, _id, status } = order;

  // loade service data from servides fo show images
  const [orderServices, setOrderServices] = useState({});
  useEffect(() => {
    fetch(`https://web-developer-server-five.vercel.app/services/${service}`)
      .then((res) => res.json())
      .then((data) => setOrderServices(data));
  }, [service]);
  // load service data ended


  return (
    <div>
      <tr>
        <th>
            <label>
                <button onClick={()=>handleDelete(_id)} className="btn btn-ghost">X</button>
            </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                {orderServices?.img && (
                  <img
                    src={orderServices.img}
                    alt="Avatar Tailwind CSS Component"
                  />
                )}
              </div>
            </div>
            <div>
              <div className="font-bold">{curstomer}</div>
              <div className="text-sm opacity-50">{phone}</div>
            </div>
          </div>
        </td>
        <td>
          {serviceName}
          <br />
          <span className="badge badge-ghost badge-sm">{}</span>
        </td>
        <td>{price}</td>
        <th>
          <button className="btn btn-ghost btn-xs">{email}</button>
        </th>
        <th>
          <button onClick={()=>handleStatusUpdate(_id)} className="btn btn-ghost btn-xs">{status? status: 'Pending'}</button>
        </th>
      </tr>
    </div>
  );
};

export default OrdersRaw;
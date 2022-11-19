import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import useTitle from "../../Hook/Hook";
import OrdersRaw from "./OrdersRaw";

const Orders = () => {
  useTitle('My Reviews');
  const { user, logOut } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    //1 if there user lead data
    if (user) {
      fetch(`https://web-developer-server-five.vercel.app/orders?email=${user.email}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("car-token")}`,
        },
      })
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            logOut();
          }
          return res.json();
        })
        .then((data) => setOrders(data));
    }

    //2 user optional chair to laod data

    // fetch(`https://web-developer-server-five.vercel.app/orders?email=${user?.email}`)
    //     .then(res=>res.json())
    //     .then(data=>setOrders(data));
  }, [user]);
  // [user?.email] using in dependencies not deleting in UI. * once deleted, now not.

  //   delete data
  const handleDelete = (id) => {
    console.log(id);
    const proceed = window.confirm("Sure? Want to Erase?");
    if (proceed) {
      fetch(`https://web-developer-server-five.vercel.app/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            const remaining = orders.filter((odr) => odr._id !== id);

            setOrders(remaining);
            alert("Deleted Successfully!");
          }
        });
    }
  };

  const handleStatusUpdate = (id) => {
    fetch(`https://web-developer-server-five.vercel.app/orders/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "Approved" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // approved fucntions from pending
        if (data.modifiedCount > 0) {
          const remaining = orders.filter((ord) => ord._id !== id);
          const approving = orders.find((ord) => ord._id === id);
          approving.status = "Approved";
          const newOrder = [...remaining, approving];
          setOrders(newOrder);
        }
      });
  };

  return (
    <div>
      <h3>Services Reviews</h3>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead className="flex items-center">
            <tr>
              <th className="w-1/4">Name</th>
              <th>Comments</th>
              <th>Emails</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <OrdersRaw
                key={order._id}
                order={order}
                handleDelete={handleDelete}
                handleStatusUpdate={handleStatusUpdate}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
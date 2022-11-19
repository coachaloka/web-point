import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import useTitle from "../../Hook/Hook";


const Blog = () => {
  useTitle('Blog');
  const [blogs, setBlogs] = useState([])
  useEffect(()=>{
    fetch('https://web-developer-server-five.vercel.app/blogs')
    .then(res=>res.json())
    .then(data=>setBlogs(data))
  },[])
  return (
    <div>
      <div>
        {
          blogs.map(blog=><div key={blog._id} blog={blog}>
            <h2 className="text-3xl text-bold text-center m-3">{blog.title}</h2>
            <h2 className="text-semibold m-2">{blog.description}</h2>
          </div>)
        }
      </div>
    </div>
  );
};

export default Blog;
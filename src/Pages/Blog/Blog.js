import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import useTitle from "../../Hook/Hook";


const Blog = () => {
  useTitle('Blog');
  const [blogs, setBlogs] = useState([])
  useEffect(()=>{
    fetch('http://localhost:5000/blogs')
    .then(res=>res.json())
    .then(data=>setBlogs(data))
  },[])
  return (
    <div>
      <div>
        {
          blogs.map(blog=><div key={blog._id} blog={blog}>
            <h2 className="text-3xl text-bold text-center m-3">{blog.title}</h2>
            <h2 className="text-semibold m-2">{blog.details}</h2>
          </div>)
        }
      </div>
    </div>
  );
};

export default Blog;
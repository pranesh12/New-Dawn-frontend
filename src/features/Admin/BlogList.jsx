import React, { useEffect } from "react";
import { fetchBlogs } from "../blog/blogSlice";
import { useDispatch, useSelector } from "react-redux";

const BlogList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);
  const blogs = useSelector((state) => state.blogs.blogs);
  console.log(blogs);
  return <div>BlogList</div>;
};

export default BlogList;

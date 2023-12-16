import { useEffect } from "react";
import { fetchBlogs, selectAllBlogs } from "./blogSlice";
import { useDispatch, useSelector } from "react-redux";
import BlogCard from "../../components/BlogCard/BlogCard";

const Blogview = () => {
  const dispatch = useDispatch();
  const { isLoading, blogs, error } = useSelector(selectAllBlogs);
  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);
  console.log(isLoading);
  return (
    <div>
      <div className="flex flex-wrap justify-center mt-10 lg:Space between">
        {blogs.map((blog) => {
          return <BlogCard key={blog.key} blog={blog} />;
        })}
      </div>
    </div>
  );
};

export default Blogview;

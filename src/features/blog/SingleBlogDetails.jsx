import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchBlogById } from "./blogSlice";
import { useDispatch, useSelector } from "react-redux";

const SingleBlogDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const blog = useSelector((state) => state.blogs?.singleBlog);
  // const { author, category, content, created_at, image, readtime, title } =
  //   blog;

  useEffect(() => {
    dispatch(fetchBlogById(id));
  }, [dispatch, id]);

  return (
    <div className="mt-8 prose  container mx-auto ">
      {blog && (
        <div>
          <h1 className="uppercase">{blog.title}</h1>
          <div className="flex justify-between items-center">
            <div>
              <p className="capitalize">
                <span>{blog.author}</span>.{" "}
                <span>{blog.readtime} min read</span>. <span>20 hour ago</span>
              </p>
            </div>
            <div>
              <div className="badge badge-accent capitalize">
                {blog.category}
              </div>
            </div>
          </div>

          <img src={blog.image} alt={blog.title} />
          <p className="mt-3 text-justify">{blog.content}</p>
        </div>
      )}
    </div>
  );
};

export default SingleBlogDetails;

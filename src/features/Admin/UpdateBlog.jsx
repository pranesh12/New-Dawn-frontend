import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogById, updateBlog } from "../blog/blogSlice";

const UpdateBlog = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  const singleBlog = useSelector((state) => state.blogs.singleBlog);

  const [blog, setBlog] = useState({
    author: "",
    title: "",
    category: "",
    content: "",
    image: "",
    readtime: "",
    id,
  });

  useEffect(() => {
    if (singleBlog) {
      if (id === singleBlog._id) {
        setBlog({
          title: singleBlog?.title,
          author: singleBlog?.author,
          category: singleBlog?.category,
          content: singleBlog?.content,
          image: singleBlog?.image,
          readtime: singleBlog?.readtime,
          id,
        });
      } else {
        dispatch(fetchBlogById(id));
      }
    } else {
      dispatch(fetchBlogById(id));
    }
  }, [id, dispatch, singleBlog]);

  const handleOnChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateBlog(blog));
  };

  return (
    <div>
      <div className=" mx-auto mt-5 prose">
        <div className="flex ">
          <div className="">
            <h2>Update Blog</h2>
            <form onSubmit={handleSubmit}>
              <input
                value={blog.author}
                required
                onChange={handleOnChange}
                type="text"
                name="author"
                placeholder="Author"
                className="input input-bordered w-full mb-4 input-accent"
              />

              <input
                value={blog.title}
                required
                onChange={handleOnChange}
                type="text"
                name="title"
                placeholder="Title"
                className="input input-bordered w-full  mb-4 input-accent"
              />

              <select
                required
                className="select select-success  w-full mb-4"
                value={blog.category}
                onChange={handleOnChange}
                name="category"
              >
                <option disabled selected>
                  Category
                </option>
                <option value="love">love</option>
                <option value="science fiction">Science Fiction</option>
                <option value="geography">Geography</option>
                <option value="economy">Economy</option>
                <option value="gaming">Gaming</option>
                <option value="war">War</option>
                <option value="other">Other</option>
              </select>

              <input
                value={blog.image}
                required
                onChange={handleOnChange}
                type="url"
                name="image"
                placeholder="Image url"
                className="input input-bordered w-full  mb-4 input-accent"
              />

              <input
                value={blog.readtime}
                required
                onChange={handleOnChange}
                type="number"
                name="readtime"
                placeholder="Read Time(min)"
                className="input input-bordered w-full mb-4 input-accent"
              />

              <textarea
                value={blog.content}
                onChange={handleOnChange}
                required
                name="content"
                placeholder="Content"
                className="textarea textarea-accent textarea-lg w-full mb-4"
              ></textarea>

              <button
                type="submit"
                className="btn btn-wide btn-outline btn-success"
              >
                Update Blog
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateBlog;

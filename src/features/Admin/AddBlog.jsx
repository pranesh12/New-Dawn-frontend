import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addBlog } from "../blog/blogSlice";

const AddBlog = () => {
  const dispatch = useDispatch();
  const [blog, setBlog] = useState({
    author: "",
    title: "",
    category: "other",
    content: "",
    image: "",
    readtime: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBlog(blog));
    // setBlog({ author: "", title: "", category: "", content: "", image: "" });
  };

  console.log(blog);

  const handleOnChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  console.log(blog.category);

  return (
    <div>
      <div className=" mx-auto mt-5 prose">
        <div className="flex ">
          <div className="">
            <h2>Add Blog</h2>
            <form onSubmit={handleSubmit}>
              <input
                required
                onChange={handleOnChange}
                type="text"
                name="author"
                placeholder="Author"
                className="input input-bordered w-full mb-4 input-accent"
              />
              <input
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
                required
                onChange={handleOnChange}
                type="url"
                name="image"
                placeholder="Image url"
                className="input input-bordered w-full  mb-4 input-accent"
              />
              <input
                required
                onChange={handleOnChange}
                type="number"
                name="readtime"
                placeholder="Read Time(min)"
                className="input input-bordered w-full mb-4 input-accent"
              />
              <textarea
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
                Add Blog
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;

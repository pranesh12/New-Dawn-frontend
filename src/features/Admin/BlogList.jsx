import React, { useEffect } from "react";
import { fetchBlogs } from "../blog/blogSlice";
import { useDispatch, useSelector } from "react-redux";
import deleteIcon from "../../assets/delete-2-svgrepo-com.svg";
import editIcon from "../../assets/edit-1483-svgrepo-com.svg";

const BlogList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  const handleDelete = () => {};
  const handleEdit = () => {};

  const blogs = useSelector((state) => state.blogs.blogs);
  console.log(blogs);
  return (
    <div>
      <div>
        <h1>Blogs List</h1>
      </div>
      {blogs && (
        <div className="overflow-x-auto">
          <table className="table ">
            <thead>
              <tr>
                <th></th>
                <th>Author</th>
                <th>Title</th>
                <th>Category</th>
                <th>Content</th>
                <th>Image</th>
                <th>Read Time</th>
                <th>Edit </th>
                <th>Delete </th>
                <th>Created At</th>
              </tr>
            </thead>
            <tbody>
              {blogs &&
                blogs.map((blog) => {
                  return (
                    <>
                      <tr>
                        <th>1</th>
                        <td>{blog.author}</td>
                        <td>{blog.title}</td>
                        <td>{blog.category}</td>
                        <td>{blog.content}</td>
                        <td>
                          <img src={blog.image} alt="blog.title}" />
                        </td>
                        <td>{blog.readtime}</td>
                        <td
                          style={{ cursor: "pointer" }}
                          onClick={handleDelete}
                        >
                          <img className="w-6 h-5" src={editIcon} alt="" />
                        </td>

                        <td style={{ cursor: "pointer" }} onClick={handleEdit}>
                          <img
                            className="w-6 h-5"
                            src={deleteIcon}
                            alt="deleteSvg"
                          />
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default BlogList;

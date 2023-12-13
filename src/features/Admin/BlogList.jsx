import React, { useEffect } from "react";
import { deleteBlog, fetchBlogs } from "../blog/blogSlice";
import { useDispatch, useSelector } from "react-redux";
import deleteIcon from "../../assets/delete-2-svgrepo-com.svg";
import editIcon from "../../assets/edit-1483-svgrepo-com.svg";
import { Link } from "react-router-dom";

const BlogList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteBlog(id));

    window.location.replace("http://localhost:5173/admin/bloglist");
  };

  const blogs = useSelector((state) => state.blogs.blogs);

  return (
    <div>
      <div>
        <h1 className="text-center my-5 font-medium">Blogs List</h1>
      </div>
      {blogs && (
        <div className="overflow-x-auto">
          <table className="table ">
            <thead>
              <tr>
                <th>Author</th>
                <th>Title</th>
                <th>Category</th>
                <th>Content</th>
                <th>Image</th>
                <th>Read Time</th>
                <th>Edit </th>
                <th>Delete </th>
              </tr>
            </thead>
            <tbody>
              {blogs &&
                blogs.map((blog) => {
                  return (
                    <>
                      <tr>
                        <td>{blog.author}</td>
                        <td>{blog.title}</td>
                        <td>{blog.category}</td>
                        <td className="overflow-y-auto  block">
                          {blog.content}
                        </td>
                        <td>
                          <img src={blog.image} alt="blog.title}" />
                        </td>
                        <td>{blog.readtime} miniute</td>
                        <td style={{ cursor: "pointer" }}>
                          <Link to={`/admin/updateBlog/${blog._id}`}>
                            <img
                              className="w-6 h-5"
                              src={editIcon}
                              alt="edit Icon"
                            />
                          </Link>
                        </td>

                        <td style={{ cursor: "pointer" }}>
                          <img
                            onClick={() => handleDelete(blog._id)}
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

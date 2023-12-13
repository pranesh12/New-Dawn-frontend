import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const { title, image, _id, author, category, content } = blog;

  return (
    <div className="card w-80 bg-base-100 shadow-xl mx-3 max-w-sm my-3">
      <figure className="h-44 w-80">
        <img src={`${image}`} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <Link to={`/blogs/${_id}`} className="hover:text-orange-500">
            {title.slice(0, 25)}
          </Link>

          <div className="badge badge-secondary">BLOG</div>
        </h2>
        <p>{content.slice(0, 35)}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline capitalize">{category}</div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

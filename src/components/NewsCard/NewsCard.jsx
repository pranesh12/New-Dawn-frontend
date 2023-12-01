import { Link } from "react-router-dom";

const NewsCard = ({ blog }) => {
  const { title, photo_url, id, author, category, content } = blog;

  console.log(photo_url);
  return (
    <div className="card w-80 bg-base-100 shadow-xl mx-3 max-w-sm my-3">
      <figure>
        <img src={`${photo_url}`} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <Link to={`/blogs/${id}`} className="hover:text-orange-500">
            {title}
          </Link>

          <div className="badge badge-secondary">BLOG</div>
        </h2>
        <p>{content.slice(0, 35)}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{category}</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

import { useContext } from "react";
import "./Post.css";
import { AiFillDelete } from "react-icons/ai";
import { PostList } from "../../store/Post_List_Store";
export const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <>
      <div className="card post_card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">
            {post.title}
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              onClick={() => deletePost(post.id)}
            >
              <AiFillDelete />
            </span>
          </h5>
          <p className="card-text">{post.body} </p>
          {post.tags.map((tag, index) => (
            <span key={index} className="badge text-bg-primary hashtag me-2">
              {tag}
            </span>
          ))}

          <div className="alert alert-success reactions " role="alert">
            this post has been reached by {post.reactions} peoples.
          </div>
        </div>
      </div>
    </>
  );
};

import { useContext } from "react";
import { Post } from "../Posts/Post";
import { PostList as PostListData } from "../../store/Post_List_Store";
import MassageList from "../MassageList/MassageList";
export const PostList = () => {
  const { postList } = useContext(PostListData);
  const handleClick = () => {
    fetch("https://dummyjson.com/posts")
      .then((response) => response.json())
      .then(console.log);
  };
  return (
    <div className="d-flex flex-wrap">
      {postList.length === 0 && <MassageList onGetPostClick={handleClick} />}

      {postList.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
};

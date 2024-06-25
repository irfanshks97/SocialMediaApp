import React, { useContext, useRef } from "react";
import { PostList } from "../../store/Post_List_Store";

export const CreatePost = () => {
  const { addPost } = useContext(PostList);
  const userIdElement = useRef();
  const titleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const hashtagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const userId = userIdElement.current.value;
    const title = titleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const hashtags = hashtagsElement.current.value.split(/(\s+)/);

    consol;
  };
  return (
    <>
      <form className="p-5 w-100 create-post" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            Enter your userId here
          </label>
          <input
            ref={userIdElement}
            type="text"
            className="form-control"
            placeholder=""
            id="userId"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="postTitle" className="form-label">
            Post title
          </label>
          <input
            ref={titleElement}
            type="text"
            className="form-control"
            placeholder="how are you feeling today..."
            id="postTitle"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="textarea" className="form-label">
            Post content
          </label>
          <textarea
            ref={postBodyElement}
            className="form-control"
            id="postBody"
            rows="3"
            placeholder="enter the details here..."
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            Number of reactions
          </label>
          <input
            ref={reactionsElement}
            type="number"
            className="form-control"
            id="reactions"
            placeholder="how many people reacted to this..."
          />
        </div>
        <div className="mb-3">
          <label htmlFor="hashtag" className="form-label">
            Enter the hashtags
          </label>
          <input
            ref={hashtagsElement}
            type="text"
            className="form-control"
            id="hashtag"
            placeholder="hashtag...."
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </>
  );
};

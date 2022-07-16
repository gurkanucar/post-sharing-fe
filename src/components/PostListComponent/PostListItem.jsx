import React, { useRef, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import CommentCreateInput from "./CommentCreateInput";
import CommentItem from "./CommentItem";
// import ReactTooltip from "react-tooltip";
import { BsHeart, BsFillHeartFill } from "react-icons/bs";
import { BiComment, BiMenu } from "react-icons/bi";
import { MdMessage } from "react-icons/md";
import "./PostListComponent.css";
import { addLike, getComments, removeLike } from "../../api/apiCalls";

const PostListItem = (props) => {
  const { activeUser, post } = props;

  const { user, content, likedUsers, comments } = post;

  const [showComments, setShowComments] = useState(false);
  const [commentsState, setCommentsState] = useState(comments);

  //const [newComment, setnewComment] = useState();

  const addLikeFunc = async () => {
    const updatedLikes = (
      await addLike({
        post: { id: post.id },
        user: { id: activeUser.id, username: activeUser.username },
      })
    ).data.likedUsers;
    // updateComments();
  };
  const removeLikeFunc = async () => {
    const updatedLikes = (
      await removeLike({
        post: { id: post.id },
        user: { id: activeUser.id, username: activeUser.username },
      })
    ).data.likedUsers;
    //updateComments();
  };
  // const updateComments = async () => {
  //   const posts = await (await getComments(post.id)).data;
  //   console.log(posts);
  //   setCommentsState(posts);
  // };

  return (
    <div className="postItem">
      <div className="postItem__top">
        <div>
          <img className="profile__image" src={user.profileImageUrl} />
          <span className="top__username">{user.username}</span>
        </div>
        <BiMenu size={20} className="action__item" />
      </div>

      <div className="content">{content}</div>
      <hr></hr>

      <div className="postItem__actions">
        <div
          className="likeCount"
          title={likedUsers.map((x) => x.username).join("\n")}
        >
          {likedUsers.find((x) => x.username == activeUser.username) !=
          undefined ? (
            <BsFillHeartFill
              onClick={removeLikeFunc}
              className="action__item"
              size={20}
              color="red"
            />
          ) : (
            <BsHeart onClick={addLikeFunc} className="action__item" size={20} />
          )}

          <span className="likeCountText">{likedUsers.length}</span>
        </div>
        <div>
          <div className="commentCount">
            {comments.length > 0 ? (
              <MdMessage
                className="action__item"
                size={20}
                onClick={() => {
                  setShowComments(!showComments);
                }}
              />
            ) : (
              <BiComment
                className="action__item"
                size={20}
                onClick={() => {
                  setShowComments(!showComments);
                }}
              />
            )}
            <span className="commentCountText">{comments.length}</span>
          </div>
        </div>
      </div>
      {showComments && (
        <div>
          <div className="commentList">
            {comments != undefined ? (
              comments?.map((x) => (
                <CommentItem
                  //updateComments={updateComments}
                  postId={post.id}
                  comment={x}
                  activeUser={activeUser}
                  key={x.id}
                />
              ))
            ) : (
              <Spinner />
            )}
          </div>
          <CommentCreateInput
            activeUser={activeUser}
            //updateComments={updateComments}
            postId={post.id}
          />
        </div>
      )}
    </div>
  );
};

export default PostListItem;

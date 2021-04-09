import { Avatar } from "@material-ui/core";
import { Comment, Send, Share, ThumbUpAltOutlined } from "@material-ui/icons";
import React from "react";
import "./Post.css";
import Input from "./InputOption";

function Post({ name, description, message, photoUrl, Icon, Title }) {
  return (
    <div className="post">
      <div className="post__header">
        <div className="post__headerTop">
          <Avatar />

          <div className="post__details">
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
        </div>

        <div className="post__body">
          <p>{message}</p>
        </div>
        <div className="post__footer">
          {Icon && <Icon className="post__footer__icon" />}
          <h3 className="post__footer__title">{Title} </h3>
        </div>

        <div className="post__buttons">
          <Input Icon={ThumbUpAltOutlined} Title="Like" color="gray"></Input>
          <Input Icon={Comment} Title="Comment" color="gray" />
          <Input Icon={Share} Title="Share" color="gray" />
          <Input Icon={Send} Title="Send" color="gray" />
        </div>
      </div>
    </div>
  );
}

export default Post;

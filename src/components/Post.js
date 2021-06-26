import React from "react";
import { AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import { BiComment } from "react-icons/bi";

const Post = ({ style }) => {
  console.log(style);
  return (
    <div className="post" style={style}>
      <div className="post__date">
        <span>
          Dec 7,2020 <span>.</span> 1 min
        </span>
      </div>
      <div className="post__name">
        <h3 className="post__name--heading">
          Best protest <br />
          Posters of the Year
        </h3>
      </div>
      <div className="post__likes">
        <ul className="post__likes--list">
          <li className="likes-items">
            <AiOutlineEye /> <span>1184</span>
          </li>
          <li className="likes-items">
            <BiComment /> <span>0</span>
          </li>
          <li className="likes-items">
            <span>23</span> <AiOutlineHeart />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Post;

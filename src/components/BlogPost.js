import React from "react";
import Post from "./Post";

var stylePost1 = {
  backgroundImage:
    "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url('https://static.wixstatic.com/media/b25591_e0f2d99167f64ce0ae2f739ed956af16~mv2.jpg/v1/fill/w_740,h_670,al_c,q_90/b25591_e0f2d99167f64ce0ae2f739ed956af16~mv2.webp')",
};
var stylePost2 = {
  backgroundImage:
    "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url('https://static.wixstatic.com/media/b25591_2f4a2311ec3d4050867d2d2cb34d44ae~mv2.jpg/v1/fill/w_611,h_985,al_c,q_90/b25591_2f4a2311ec3d4050867d2d2cb34d44ae~mv2.webp')",
};
var stylePost3 = {
  backgroundImage:
    "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url('https://static.wixstatic.com/media/b25591_cda1fbb3e8d14ec587612fa3db63e912~mv2_d_5616_3744_s_4_2.jpg/v1/fill/w_740,h_493,al_c,q_90/b25591_cda1fbb3e8d14ec587612fa3db63e912~mv2_d_5616_3744_s_4_2.webp')",
};

const BlogPost = () => {
  return (
    <div className="blogPost">
      <h2 className="blogPost__heading">
        Recent <span>Blog</span> Posts
      </h2>
      <div className="blogPost__container">
        <Post style={stylePost1} />
        <Post style={stylePost2} />
        <Post style={stylePost3} />
      </div>
    </div>
  );
};
export default BlogPost;

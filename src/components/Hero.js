import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__text">
        <div className="hero__text--container">
          <span className="span-main">
            Looking <span className="span-1">for </span>my next
            <br />
            <span className="span-2">opportunity</span>
            <br />
            to make <span className="span-3"> a </span>
            <span className="span-4">change.</span>
            <br />
            <span className="span-5">The </span>
            <span>
              <span className="span-6">digital</span>{" "}
            </span>
            way.
          </span>
        </div>
      </div>
      <div className="hero__img">
        <img
          className="hero__image"
          src="https://static.wixstatic.com/media/b25591_5abe57e9137643f092821a9222200671~mv2_d_5808_7754_s_4_2.jpg/v1/fill/w_460,h_728,al_c,q_80,usm_0.66_1.00_0.01/b25591_5abe57e9137643f092821a9222200671~mv2_d_5808_7754_s_4_2.webp"
          alt="HeroImg"
        />
      </div>
    </div>
  );
};
export default Hero;

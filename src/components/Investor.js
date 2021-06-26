import React from "react";

const Investor = () => {
  return (
    <div className="investor">
      <div className="investor__text">
        <p className="investor__para">
          I'm a paragraph. Click here to add your own text and edit me. I’m a
          great place for you to tell a story and let your users know a little
          more about you.
        </p>
      </div>
      <ul className="investor__list">
        <li className="first-item">
          <span>FUTURE GOOD</span>
        </li>
        <li className="second-item">
          <img
            className="cloud"
            src="https://static.wixstatic.com/media/b25591_0b9a488afa964874aa3c3c8eea57d01f~mv2.png/v1/fill/w_140,h_132,al_c,q_85,usm_0.66_1.00_0.01/Untitled-1-02.webp"
            alt="cloud"
          />
        </li>
        <li className="third-item">WHO MAN</li>
        <li className="fourth-item">
          Equa <span>___</span>long
        </li>
        <li className="fifth-item">
          <span>#Go girl</span>
        </li>
      </ul>
    </div>
  );
};
export default Investor;

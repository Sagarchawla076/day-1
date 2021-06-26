import React from "react";

const ThisMe = () => {
  return (
    <React.Fragment>
      <div className="thisMe">
        <p>
          This is <span>me</span>
        </p>
      </div>
      <div className="thisMe__text">
        <p>
          I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font. Feel free to drag and drop me
          anywhere you like on your page. I’m a great place for you to tell a
          story and let your users know a little more about you.
        </p>
      </div>
      <div className="skills__text">
        <p className="skills__text--para">
          Content Strategy <span className="span-1">Writing</span> <br />
          <span className="span-2">Campaign Management</span>
          <br />
          <span className="span-3">Branding</span> Social Media <br />
          <span className="span-4">Events Content</span>{" "}
          <span className="span-5">Fundraising</span>
          <br />
          Creative initiatives
        </p>
        <a href="/" className="button">
          See Full CV
        </a>
      </div>
      <div className="second__img">
        <img
          src="https://static.wixstatic.com/media/b25591_b22378040fdb4bc6833d91d05bb1b90a~mv2_d_8167_5115_s_4_2.jpg/v1/fill/w_540,h_500,al_c,q_80,usm_0.66_1.00_0.01/b25591_b22378040fdb4bc6833d91d05bb1b90a~mv2_d_8167_5115_s_4_2.webp"
          className="second__image"
          alt="2ndImage"
        />
      </div>
    </React.Fragment>
  );
};

export default ThisMe;

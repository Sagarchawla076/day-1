import React from "react";

const Subscribe = () => {
  return (
    <div className="subscribe">
      <h2 className="subscribe__heading">I Sometimes Send Newsletters</h2>
      <div className="subscribe__form">
        <label htmlFor="subscribe" className="label">
          Email Address <span>*</span>
        </label>
        <input type="text" name="subscribe" id="subscribe" />
        <button className="button">Subscribe Now</button>
      </div>
      <div className="subscribe__copyright">
        <p>&copy; 2023 by Sofia Franco.Profoundly created with Wix.com</p>
      </div>
    </div>
  );
};
export default Subscribe;

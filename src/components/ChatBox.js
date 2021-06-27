import React from "react";
import { BsFillChatDotsFill } from "react-icons/bs";
const ChatBox = () => {
  return (
    <React.Fragment>
      <div className="chatBox"></div>
      <div className="chatBox__icon">
        <BsFillChatDotsFill />
      </div>
    </React.Fragment>
  );
};
export default ChatBox;

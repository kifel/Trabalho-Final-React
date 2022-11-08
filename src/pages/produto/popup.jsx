import React from "react";
import './popup.css';

export const Popup = (props) => {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="btn close-btn" onClick={() => props.setTrigger(false)}><i className="fa fa-times"></i></button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
};

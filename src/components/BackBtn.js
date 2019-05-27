import React from "react";
import './BackBtn.css';

const BackBtn= props => (
    <a  className="btn" onClick={props.onClick} id={props.id}>
  HOME{props.label}</a>
);

export default BackBtn;

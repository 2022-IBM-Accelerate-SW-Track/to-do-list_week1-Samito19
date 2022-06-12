import React from "react";

import "./my-tech-stack.css";
import HtmlIcon from "../../assets/html.svg";
import CssIcon from "../../assets/css3.svg";
import JsIcon from "../../assets/javascript.svg";
import PythonIcon from "../../assets/python.svg";
import JavaIcon from "../../assets/java.svg";

import ReactIcon from "../../assets/react.svg";
import NodeJS1 from "../../assets/nodejs.svg";
import ExpressJS from "../../assets/express.svg";
import NodeJS2 from "../../assets/node-js.svg";

const MyTechStack = () => {
  return (
    <div className="tech-stack-container">
      <h1 className="tech-stack-prog-lang">My programming languages</h1>
      <div className="prog-lang-imgs fade-in">
        <img src={HtmlIcon} alt="Html Icon" className="prog-lang-img" />
        <img src={CssIcon} alt="Css Icon" className="prog-lang-img" />
        <img src={JsIcon} alt="JS Icon" className="prog-lang-img" />
        <img src={PythonIcon} alt="Python Icon" className="prog-lang-img" />
        <img src={JavaIcon} alt="Java Icon" className="prog-lang-img" />
      </div>
      <h1 className="tech-stack-frameworks">Frameworks</h1>
      <div className="prog-lang-imgs fade-in">
        <img src={ReactIcon} alt="Html Icon" className="prog-lang-img" />
        <img src={NodeJS1} alt="Css Icon" className="prog-lang-img" />
        <img src={ExpressJS} alt="JS Icon" className="express-img" />
        <img src={NodeJS2} alt="Python Icon" className="prog-lang-img" />
      </div>
    </div>
  );
};

export default MyTechStack;

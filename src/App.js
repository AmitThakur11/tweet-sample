import React from "react";
import "./styles.css";
import profile from "./profile.jpg";
import heart from "./images/heart.png";

export default function App() {
  return (
    <div className="App">
      <div className="firstLayer">
        <img className="profile" src={profile} alt="" />
        <section className="name">
          <p id="mainName">
            <b>Amit Thakur</b>
          </p>
          <p id="role"> Software Developer</p>
        </section>
        <button className="follow">
          <b>
            <pre>FOLLOW +</pre>
          </b>
        </button>
      </div>
      <div className="content">
        <p>
          I would tell you a joke about programming.. But it only work on my
          machine.
        </p>
      </div>
      <div className="like">
        <img className="like" src={heart} alt="" />
        <p className="likeCount">
          <b>1M</b>
        </p>
      </div>
    </div>
  );
}

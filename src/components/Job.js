import React from "react";

export default function Job(props) {
  return (
    <div className="job">
      <div
        className="job__logo"
        style={{ backgroundColor: `${props.item.logoBackground}` }}
      >
        <img
          src={require(`../assets/logos/${props.item.logo}`)}
          alt="company icon"
        />
      </div>
      <div className="job__info">
        <p>
          {props.item.postedAt} <span className="bullet">.</span>{" "}
          {props.item.contract}
        </p>
        <h4>{props.item.position}</h4>
        <p>{props.item.company}</p>
      </div>
      <p className="job__location">{props.item.location}</p>
    </div>
  );
}

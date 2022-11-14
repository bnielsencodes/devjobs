import React from "react";
import data from "../data";
import Job from "./Job";

export default function JobsList() {
  const jobs = data.map((item) => {
    return <Job key={item.id} item={item} />;
  });

  return <div className="jobs-list">{jobs}</div>;
}

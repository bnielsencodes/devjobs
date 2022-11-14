import React from "react";
import SearchBar from "./SearchBar";
import JobsList from "./JobsList";

export default function Main() {
  return (
    <section className="main">
      <SearchBar />
      <JobsList />
    </section>
  );
}

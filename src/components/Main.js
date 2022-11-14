import React from "react";
import SearchBar from "./SearchBar";
import JobsList from "./JobsList";
import MoreButton from "./MoreButton";

export default function Main() {
  return (
    <section className="main">
      <SearchBar />
      <JobsList />
      <MoreButton />
    </section>
  );
}

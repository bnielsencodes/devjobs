import React from "react";
import filterIcon from "../assets/mobile/icon-filter.svg";
import filterIconDark from "../assets/mobile/icon-filter-dark.svg";
import searchIconMobile from "../assets/mobile/icon-search.svg";
import searchIcon from "../assets/desktop/icon-search.svg";
import locationIcon from "../assets/desktop/icon-location.svg";

export default function SearchBar() {
  return (
    <form className="search-wrapper" action="index.html" method="post">
      <div className="filter-title-container">
        <img src={searchIcon} alt="magnifying glass" />
        <input
          type="search"
          name="filter-title"
          id="filter-title"
          className="filter"
          placeholder="Filter by title..."
        />
        <input
          type="search"
          name="filter-title"
          id="filter-title-lg"
          className="filter"
          placeholder="Filter by title, companies, expertise..."
        />
      </div>
      <div className="filter-location-container">
        <img src={locationIcon} alt="magnifying glass" />
        <input
          type="search"
          name="filter-location"
          id="filter-location"
          className="filter"
          placeholder="Filter by location..."
        />
      </div>
      <div className="filter-search-container">
        <label className="filter-full-time">
          <input type="checkbox" value="false" />
          <span className="full-time-span">
            Full Time<span className="only-span">Only</span>
          </span>
        </label>
        <img
          className="filter-btn filter-btn-light"
          src={filterIcon}
          alt="filter icon"
        />
        <img
          className="filter-btn filter-btn-dark"
          src={filterIconDark}
          alt="filter icon"
        />
        <div className="search-btn">
          <img src={searchIconMobile} alt="magnifying glass" />
          <span>Search</span>
        </div>
      </div>
    </form>
  );
}

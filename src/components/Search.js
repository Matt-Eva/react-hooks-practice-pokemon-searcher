import React from "react";

function Search({search, searchInput}) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={search} onChange={(e) => searchInput(e.target.value)}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;

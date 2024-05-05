import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <h1>Dictionary</h1>
      <h3>What word do you want to look up?</h3>
      <form onSubmit={search}>
        <input type="search" autofocus="on" onChange={handleKeywordChange} />
      </form>
    </div>
  );
}

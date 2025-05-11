import { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [q, setQ] = useState("");
  const submit = e => {
    e.preventDefault();
    onSearch(q);
  };
  return (
    <form className="search " onSubmit={submit}>
      <input
      className=""
        type="text"
        placeholder="Search movie by title"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        
      />
      <button className="search-btn" >Search</button>
    </form>
  );
};
export default SearchBar;

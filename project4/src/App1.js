import React,{useState} from "react";

export default function App1() {
    const [search_term,setSearchTerm] = useState();
  function SearchFunc() {
    alert(search_term);
  }
  return (
    <>
    <form>
      <input type='text' value={search_term} onChange={(e) => setSearchTerm(e.target.value)}/>
      <button type="button" onClick={SearchFunc}>Search</button>
    </form>
    </>
  );
}

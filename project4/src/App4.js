import React, { useState, useEffect } from "react";
import axios from "axios";

export default function App4() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then((result) => {
      setData(result.data); 
    });
  }

  return (
    <>
      <div>Data Display</div>
      {data.length > 0 ? (
        data.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        ))
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
}
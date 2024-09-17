import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [data, setdata] = useState([]);
  const [search, setSearh] = useState("");
  const getTheData = () => {
    const fetchedData = fetch("https://cms.samespace.com/items/songs").then(
      (res) => res.json()
    );

    setdata(fetchedData);
    console.log(fetchedData);
  };

  useEffect(() => {
    getTheData();
  }, []);

  return (
    <div className="App">
      <h1>Welcome to the Music World</h1>
      <h2>Play and enjoy the music</h2>
      <div className="searchContainer">
        <input
          type="text"
          className="searchBar"
          placeholder="Search songs"
          name="search"
        />
        <input class="button" type="button" value="Seacch" />
        {[data].map((item) => {
          <p className="name">{item.name}</p>;
        })}
      </div>
    </div>
  );
}

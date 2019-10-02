import React, { useEffect, useState } from "react";
import LeagueList from "./components/LeagueList";
import "whatwg-fetch";
import "./App.css";

const App = () => {
  const [lolLeague, setLolLeague] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const response = await fetch(
        `https://api.pandascore.co/lol/leagues?per_page=5&page=${currentPage}`,
        {
          headers: {
            Authorization:
              "Bearer 5GOID2V4TAWOSP5zOeauD-1KIwU9fhxbHUhPp5PaCt-VTthp_18"
          }
        }
      );
      const data = await response.json();
      setLolLeague(data);
    } catch (e) {}
  }

  function nextPage() {
    if (currentPage < 11) {
      setCurrentPage(currentPage + 1);
      getData();
    } else {
      return;
    }
  }

  function prevPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      getData();
    } else {
      return;
    }
  }

  return (
    <div className='App'>
      <h1>Esport app</h1>
      <LeagueList lolLeague={lolLeague} />
      <div className='pagination'>
        <button onClick={prevPage}>Prev</button>
        <button onClick={nextPage}>Next</button>
      </div>
    </div>
  );
};

export default App;

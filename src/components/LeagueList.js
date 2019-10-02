import React from "react";
import League from "./League";

const LeagueList = ({ lolLeague = [] }) => {
  return lolLeague.map((league, key) => (
    <div key={key}>
      <League league={league} />
    </div>
  ));
};

export default LeagueList;

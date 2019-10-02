import React from "react";

const League = ({ league = {} }) => {
  return (
    <div>
      <h3>{league.name}</h3>
      <img src={league.image_url} alt='' />
    </div>
  );
};

export default League;

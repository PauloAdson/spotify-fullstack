import React from "react";
import ItemList from "../ItemList/ItemList";
import { artistArray } from "../../assets/database/artists";
import { songsArray } from "../../assets/database/songs";

const Main = () => {
  return (
    <div className="main">
      {/* ITEM LIST DE ARTISTAS */}

      <ItemList
        title="Artistas"
        items={10}
        itemsArray={artistArray}
        path="/artists"
        idPath="/artist"
      />
      {/* ITEM LIST DE MÚSICAS */}
      <ItemList
        title="Músicas"
        items={20}
        itemsArray={songsArray}
        path="/songs"
        idPath="/song"
      />
    </div>
  );
};

export default Main;

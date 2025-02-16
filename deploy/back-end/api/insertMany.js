// O insert Many vai servir para adicionar os dados no banco de dados e também vai excluir o antigo id e adicionar um mais robusto

import { artistArray } from "../../front-end/src/assets/database/artists.js";
import { songsArray } from "../../front-end/src/assets/database/songs.js";
import { db } from "./connetct.js";

const newArtistsArray = artistArray.map((currentArtistObj) => {
  const newArtistObj = { ...currentArtistObj };
  delete newArtistObj.id;

  return newArtistObj;
});

const newSongsArray = songsArray.map((currentSongObj) => {
  const newSongObj = { ...currentSongObj };
  delete newSongObj.id;

  return newSongObj;
});

const responseSongs = await db.collection("songs").insertMany(newSongsArray);

const responseArtists = await db
  .collection("artists")
  .insertMany(newArtistsArray);

console.log(responseSongs);
console.log(responseArtists);

// console.log(newArtistsArray);
// console.log(newSongsArray);
// console.log(songsArray);

export const selectSong = songname => {
  // Return an action
  return {
    type: "SONG_SELECTED",
    payload: songname
  };
};

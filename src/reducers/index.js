import { selectSongs } from "../actions";
import { combineReducers } from 'redux';


const songReducer = () => {
    return [
        { title: 'No Scrubs', duration: '4:05' },
        { title: 'Macarena', duration: '2:38' },
        { title: 'All Star', duration: '3:15'}
    ];
};


const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type == 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer
})
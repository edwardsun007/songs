import React from "react";
import { connect } from "react-redux";


// destructuring {songName} same as this.props.songName
// and we the title property so --- {songName.title}
const SongDetail = ({songName}) => {
    if(!songName){
        return <div>Select a song</div>
    }
    return (
        <div>
         <h3>Details for:</h3>
         <p>
            Title: {songName.title}
            <br/>
            Duration: {songName.duration}
         </p>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        songName: state.selectedSong 
    }
};

export default connect(mapStateToProps)(SongDetail)
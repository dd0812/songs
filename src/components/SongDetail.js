import React from 'react';
import {connect} from 'react-redux';

const SongDetail = ({song}) => { //destructuring prop -> song is the key name returned as prop from mapStateToProp. It's name is customizable by changing in mapStateToProps
    // console.log(props);
    if(!song){
        return <div>Select a song</div>;
    }
    return(        
        <div>
            <h3>Details for:</h3>
            <p>
                Title: {song.title}
            </p>
            <p>
                Duration: {song.duration}
            </p>
        </div>
    );
};

//Connect the SongDetail component to Provider using mapStateToProps
const mapStateToProps = (state) =>{ //this func is called with entire state obj from redux
    return {song: state.selectedSong} //get the user selected song from the store (state)
};

export default connect(mapStateToProps) (SongDetail);
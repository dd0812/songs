import {combineReducers} from 'redux';

//Reducers together in same file
const songsReducer = () => {
    return [
        {title: 'Led', duration : '4:05'},
        {title: 'Zepp', duration : '5:56'},
        {title: 'Iron', duration : '6:06'},
        {title: 'Maiden', duration : '7:10'}
    ];
};

const selectedSongReducer = (selectedSong=null , action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
};

//combineReducer keys are the keys inside of the state object
//export default will make our reducer available as named export thruout the project
export default combineReducers({
    songs : songsReducer,
    selectedSong : selectedSongReducer
});
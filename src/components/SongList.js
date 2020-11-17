import {connect} from 'react-redux';
import React, {Component} from 'react';
import {selectSong} from '../actions';

class SongList extends Component {
    renderList(){ //helper func - take a list of songs and map them and return a big blob of JSX
        return this.props.songs.map((song) => {
            return(
                <div className = "item" key={song.title}>
                    <div className="right floated content">
                        <button 
                            className="ui button primary"
                            onClick={() => this.props.selectSong(song)}
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        });
    }

    render(){
        // console.log(this.props);
        return (
            <div className="ui divided list">
                {this.renderList()}
            </div>
        );
    }
}

//mapStateToProps will always have state as first argument
const mapStateToProps = (state) => {
    // console.log (state);

    //mapStateToProps will return an obj with key:value which will show up as props inside our component
    return {songs: state.songs};
}

//Always export default connect(mapStateToProps) and pass component as second func (Component_Name)
export default connect(mapStateToProps, {selectSong})(SongList);
import React, { Component } from "react";
import { connect } from "react-redux";
class CurrentPlaylist extends Component {
  render() {
    let totalLength = this.props.songs.reduce(function(prev, current) {
      return prev + current.length;
    }, 0);
    return (
      <div>
        <h2>Songs</h2>
        <p>({this.props.songs.length} canciones)</p>
        <p>duración total :{totalLength}</p>
        <ul className="list-group">
          {this.props.songs.map((song, i) => {
            return (
              <li className="list-group-item" key={i}>
                {song.title} - {song.length}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
let mapStateToProps = state => {
  return {
    songs: state.items
  };
};
export default connect(
  mapStateToProps,
  null
)(CurrentPlaylist);

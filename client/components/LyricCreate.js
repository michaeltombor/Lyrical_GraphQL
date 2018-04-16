import React, {Component} from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link, hashHistory } from 'react-router';
import fetchSongsQuery from '../queries/fetchSongs';

class LyricCreate extends Component {
    constructor(props) {
    super(props);
    this.state = { content: '' };
  }
  
 onSubmit(event){
    event.preventDefault();
    
    this.props.mutate({
      variables:{ content: this.state.content,
      songId: this.props.songId },
      refetchQueries: [{ query: fetchSongsQuery }]
    }).then(() => hashHistory.push('/'))
 }
  render() {
    return(
          
          <div> 
          <form onSubmit={this.onSubmit.bind(this)}>
            <label>Lyric:</label>
            <input
              onChange={event => this.setState({ content: event.target.value })}
              value={this.state.content}
            />
          </form>
          </div>
          )
  }
}

const mutation = gql`
mutation AddSongToLyric($songId:ID, $content: String){
  addLyricToSong(songId: $songId, content: $content){
  title
  id
  lyrics{
    content
  }
  }
}
`;

export default graphql(mutation)(LyricCreate);
import React, { Component } from 'react';
import FindSongById from '../queries/FindSongById';
import { graphql } from 'react-apollo';
import { Link, hashHistory } from 'react-router';
import LyricCreate from './LyricCreate';
import LyricList from './LyricList';

class SongDetail extends Component {
    render(){
      const { song } = this.props.data;
      //!song works, but also this.props.loding would work. Better if waiting on multiple queries
      if(!song) { return <div> </div>; }
        return (
            <div>
            <Link to="/">Back</Link>
              <h3>{ song.title }</h3>
              <LyricList />
              <LyricCreate songId={ this.props.params.id}/>
            </div>
            );
    }
}

export default graphql(FindSongById, {
  options: (props) => { return { variables: { id: props.params.id } } }
})(SongDetail);
import React, { Component } from 'react';
import FindSongById from '../queries/FindSongById';
import { graphql } from 'react-apollo';

class SongDetail extends Component {
    render(){
      console.log(this.props);
        return (
            <div>
              <h3>Song Detail</h3>
            </div>
            );
    }
}

export default graphql(FindSongById, {
  options: (props) => { return { variables: { id: props.params.id } } }
})(SongDetail);
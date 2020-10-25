import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import HashTagForm from './HashTagForm';



export default  class HashTagList extends React.Component {
  constructor() {
    super()
    this.state = { 
      hashtags: []
    }
  }

  addHashtag = (hashtag) => {
    this.setState({
      hashtags: [hashtag, ...this.state.hashtags]
    })
  }

  render() {
    return(
      <div>
      <HashTagForm onSubmit={this.addHashtag}/>
      {
        this.state.hashtags.map(({id, text}) => (
          <div key={id}>
            {text}
          </div>
        ))
      }
      </div>
    )
  }
}

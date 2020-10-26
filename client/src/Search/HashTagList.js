import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import HashTagForm from './HashTagForm';



export default  function HashTagList () {
  const[hashtags, setHashTags] = useState([])

  const addHashtag = (hashtag) => {
    setHashTags([...hashtag, {id: Date.now()}, ])
  }
    return(
      <div>
      <HashTagForm onSubmit={addHashtag}/>
      {
        hashtags.map(({id, text}) => (
          <div key={id}>
            {text}
          </div>
        ))
      }
      </div>
    )
  }


import React, {useState} from 'react';
import './App.css';
import HashTagForm from './Search/HashTagForm';

function App() {

const[hashtags, setHashTag] = useState([])
 
  return (
    <div className="App">
      <h1>HashTag Mini App</h1>
      <HashTagForm onSubmit={text=> setHashTag([{text, complete: false}, ...hashtags])}/>
      <div>
        {
          hashtags.map(({ text }) => (
            <div key={text}>
                {text}
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;

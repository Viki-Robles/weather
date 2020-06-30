import React, { useEffect, useState } from "react";


export default function Main() {
const [isLoaded, setIsLoaded] = useState(false);
const [data, setData] = useState({});

useEffect(() => {
    fetch("https://samples.openweathermap.org/data/2.5/weather?id=London&appid=c64aaa632a5c1ae45e90")
    .then((response) => response.json())
    .then((data) => {
      setData(data)
      setIsLoaded(true)
    })  
}, [])

if (!isLoaded) {
    return <div>Loadin Main...</div>;
  } else {

    return(
        <div>    
            {
               Object.keys(data).map(data => <div>{data.weather}</div>)
            } 
        </div>
    );
        }

}

/*useEffect(() => {
    fetch("https://samples.openweathermap.org/data/2.5/weather?id=London&appid=439d4b804bc8187953eb36d2a8c26a02")
    .then((response) => console.log(response.json()))
)}*/


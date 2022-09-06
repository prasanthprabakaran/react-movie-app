import React from 'react'
import { useEffect } from 'react';

const Welcome = (props) => {
    console.log(props);
    useEffect(()=>{
      fetch("https://627dfc9e271f386cefeeddb7.mockapi.io/movies")
      .then((data) => data.json())
      .then((mvs) => console.log(mvs));
    },[]);
  return (
    <div>
        <h1>Hello, {props.name} 🎉🎉</h1>
    </div>
  )
}

export default Welcome
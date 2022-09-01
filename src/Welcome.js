import React from 'react'

const Welcome = (props) => {
    console.log(props);
  return (
    <div>
        <h1>Hello, {props.name} 🎉🎉</h1>
    </div>
  )
}

export default Welcome
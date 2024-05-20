import React from 'react'
import { data } from './App'

const Header = (props) => {
  return (
    <div>
        <h2>Welcome </h2>
        <p>{props.data.name}</p>
        <p>{props.data.job}</p>
    </div>
  )
}

export default Header



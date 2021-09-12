import React from "react"
import { Link } from 'react-router-dom'
import Foodplace from './Foodplace'

const About = ({rest}) => {
  console.log("rest", rest)
  return (
    <div>
      <Foodplace foodplace={rest}/>
      <Link to='/'>Try Again</Link>
    </div>
  )
}

export default About
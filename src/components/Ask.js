import { useState } from 'react'
import Auto from "./Auto" 
import {BrowserRouter as Router, Route, Link, Redirect, useHistory} from  'react-router-dom'

const AddForm = ({ onAdd }) => {
  const [location, setLocation] = useState('')
  const [distance, setDistance] = useState('')
  const [cuisine, setCuisine] = useState('restaurants')
  const [price, setPrice] = useState('1')
  let history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault()

     if (!location) {
       alert('Please add a valid address')
       return
     }

    if (!distance) {
      alert('Please add how far you are willing to travel')
      return
    }

    onAdd({ location, distance, cuisine, price})

    setLocation('')
    setDistance('')
    setCuisine('restaurants')
    setPrice('1')

    console.log("hi")

    history.push('/about')
  }

  //Add Submit
const addAuto = (finishedAuto) => {
  setLocation(prevLocation => finishedAuto)
}

  return (
    
  
  <div>
    <form className="ask" onSubmit={onSubmit}>
      <fieldset>
      <legend>Foodie Finder</legend>
          <div>
          <Auto setLocation={setLocation}/>
            {/* <label for="location">Your Adress: </label>
            <input 
            type="text" 
            id="location" 
            name="location" 
            placeholder= "350 6th Ave, New York, NY 10118"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            /> */}
          </div>

          <div>
            <label for="distance">How Far Are You Willing To Travel In Miles: </label>
          
            <input 
            type="number" 
            id="distance" 
            name="distance" 
            placeholder= "1" 
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
            />
          </div>

          <div>
            <label for="cuisine">Choose Your Cuisine: </label>
            <select 
            id="cuisine" 
            name="cuisine"
            value={cuisine}
            onChange={(e) => setCuisine(e.target.value)}
            >
              <option value="restaurants">Surprise Me!</option>
              <option value="burgers">Burgers</option>
              <option value="chicken_wings">Chicken Wings</option>
              <option value="chinese">Chinese</option>
              <option value="filipino">Filipino</option>
              <option value="italian">Italian</option>
              <option value="indian">Indian</option>
              <option value="japanese">Japanese</option>
              <option value="mexican">Mexican</option>
              <option value="pizza">Pizza</option>
              <option value="sandwiches">Sandwiches</option>
              <option value="sushi">Sushi</option>
              <option value="thai">Thai</option>
              <option value="vietnamese">Vietnamese</option>
            </select>
          </div>

          <div>
            <label for="price">Price: </label>
            <select 
            id="price" 
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            >
              <option value="1">$</option>
              <option value="1,2">$$</option>
              <option value="1,2,3">$$$</option>
              <option value="1,2,3,4">$$$$</option>
            </select>
          </div>

          <div>
            <input type='submit' value='Find Some Food!' className='btn btn-block' />
          </div>
      </fieldset>
    </form>
  </div>
  )
}

// //Add Submit
// const addAuto = (finishedAuto) => {
//   return console.log(finishedAuto)
// }


export default AddForm
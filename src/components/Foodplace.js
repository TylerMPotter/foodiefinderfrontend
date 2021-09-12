import React, { useState } from 'react'


const Foodplace = ({foodplace}) => {
    console.log("foodplace", foodplace)
    let place = null
    if (foodplace!="nothing is open") {
        console.log(foodplace.location.display_address)
        console.log(typeof foodplace.location.display_address)
        let joined = foodplace.location.display_address.join('')
        console.log(joined)
        place = "https://www.google.com/maps/search/"+joined

    }
    return (
      <div>
        {foodplace=="nothing is open" && (<p>Nothing With Your Specifications Are Open, Try Again.</p>)}
        {foodplace!="nothing is open" && (<h4>TIME TO EAT!</h4>)}
        {foodplace!="nothing is open" && (<h4>{foodplace.name}</h4>)}
        {foodplace!="nothing is open" && (<a href={place} target="_blank">Address: {foodplace.location.display_address} </a>)}
        {/* {foodplace.location.address2 && (<h4>{foodplace.location.address2}</h4>)}
        {foodplace.location.address3 && (<h4>{foodplace.location.address3}</h4>)}
         */}

        
        <p> {foodplace!="nothing is open" && (<p>Phone: {foodplace.display_phone}</p>)}
        {foodplace!="nothing is open" && (<p>Price: {foodplace.price}</p>)}
        {foodplace!="nothing is open" && (<p>Rating: {foodplace.rating}</p>)}
        {foodplace!="nothing is open" && (<a href={foodplace.url}>Visit Them On Yelp!</a>)}
        </p>
        {foodplace!="nothing is open" && (<img src={foodplace.image_url} alt="Food Pic" width="200" height="200"/>)}
      </div>
    )
  }

export default Foodplace
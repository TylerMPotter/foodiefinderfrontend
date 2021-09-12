import React, { useState } from 'react'


const Foodplace = ({foodplace}) => {
    console.log("foodplace", foodplace)
    let place = null
    if (foodplace!=null) {
        console.log(foodplace.location.display_address)
        console.log(typeof foodplace.location.display_address)
        let joined = foodplace.location.display_address.join('')
        console.log(joined)
        place = "https://www.google.com/maps/search/"+joined

    }
    return (
      <div>
        {foodplace && (<h4>TIME TO EAT!</h4>)}
        {foodplace && (<h4>{foodplace.name}</h4>)}
        {foodplace && (<a href={place} target="_blank">Address: {foodplace.location.display_address} </a>)}
        {/* {foodplace.location.address2 && (<h4>{foodplace.location.address2}</h4>)}
        {foodplace.location.address3 && (<h4>{foodplace.location.address3}</h4>)}
         */}

        
        <p> {foodplace && (<p>Phone: {foodplace.display_phone}</p>)}
        {foodplace && (<p>Price: {foodplace.price}</p>)}
        {foodplace && (<p>Rating: {foodplace.rating}</p>)}
        {foodplace && (<a href={foodplace.url}>Visit Them On Yelp!</a>)}
        </p>
        {foodplace && (<img src={foodplace.image_url} alt="Food Pic" width="200" height="200"/>)}
      </div>
    )
  }

export default Foodplace
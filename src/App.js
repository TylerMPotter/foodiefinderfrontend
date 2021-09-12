//import Header from './components/Header'
import About from './components/About'
import Ask from './components/Ask'
import Foodplace from './components/Foodplace'
import React, { useState } from 'react'
import {BrowserRouter as Router, Route, Link} from  'react-router-dom'


function App() {
  const [tyler, setTyler] = useState(null)


  const addForm = (finishedForm) => {
    let c = finishedForm.cuisine
    let d = finishedForm.distance.toString();
    let p = finishedForm.price.toString()
    let la = finishedForm.location.lat.toString()
    let ln = finishedForm.location.lng.toString()
    const fetchTasks = async () => {
      const res = await fetch('https://foodiefinderapi.herokuapp.com/?cuisine='+c+"&distance="+d+"&price="+p+"&lat="+la+"&lng="+ln)
      //console.log(res)
      const data = await res.json()
      console.log(data)
      return data
    }
    fetchTasks(c,d,p,la,ln)
    .then(thing => {
      setTyler(thing)
      //console.log(foodplace)
    })
  
   // console.log(foodplace)
    
    //return <Redirect to="/about" />
  }




  return (
    <Router>
    {/* <div className="container">
      <Ask onAdd={addForm}/>
    </div> */}
    <Route path='/' exact render={(props) => (
      <>
        <div className="container">
          
        <Ask onAdd={addForm}/>
        </div>
      </>
    )}
    />


    <Route path='/about' render={() => (
      <About rest={tyler} />
    )}/>




    </Router>
  );
}

//Add Submit


// const fetchTasks = async (c,d,p,la,ln) => {
//   const res = await fetch('https://foodiefinderapi.herokuapp.com/?cuisine='+c+"&distance="+d+"&price="+p+"&lat="+la+"&lng="+ln)
//   const data = await res.json()
//   console.log(data)
//   return data
// }


// const addForm = (finishedForm) => {
//   let c = finishedForm.cuisine
//   let d = finishedForm.distance.toString();
//   let p = finishedForm.price.toString()
//   let la = finishedForm.location.lat.toString()
//   let ln = finishedForm.location.lng.toString()
//   const fetchTasks = async () => {
//     const res = await fetch('https://foodiefinderapi.herokuapp.com/?cuisine='+c+"&distance="+d+"&price="+p+"&lat="+la+"&lng="+ln)
//     //console.log(res)
//     const data = await res.json()
//     console.log(data)
//     return data
//   }
//   fetchTasks(c,d,p,la,ln)
//   .then(thing => {
//     setFoodPlace(thing)
//     //console.log(foodplace)
//   })

//  // console.log(foodplace)
  
//   //return <Redirect to="/about" />
// }

export default App;

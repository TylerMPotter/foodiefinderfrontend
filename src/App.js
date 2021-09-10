//import Header from './components/Header'
import About from './components/About'
import Ask from './components/Ask'
import React from "react";
import {BrowserRouter as Router, Route, Link} from  'react-router-dom'


function App() {
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
    <Route path='/about' component={About}/>
    <footer>
      <p>TEST</p>
      <Link to='/about'>About</Link>
    </footer>

    </Router>
  );
}

//Add Submit
const addForm = (finishedForm) => {
  console.log(finishedForm);
  console.log(typeof finishedForm);

  console.log(finishedForm.cuisine);
  console.log(finishedForm.distance);
  console.log(finishedForm.price);
  console.log(finishedForm.location.lat);
  console.log(finishedForm.location.lng);
  const fetchTasks = async () => {
    const res = await fetch('https://foodiefinderapi.herokuapp.com/')
    const data = await res.json()
    console.log(data)
    return data
  }
  fetchTasks()
  //return <Redirect to="/about" />
}

export default App;

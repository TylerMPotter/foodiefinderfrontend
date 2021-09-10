import Header from './components/Header'
import About from './components/About'
import Ask from './components/Ask'
import React from "react";
import {BrowserRouter as Router, Route, Link, Redirect} from  'react-router-dom'


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
  console.log(finishedForm)
  //return <Redirect to="/about" />
}

export default App;

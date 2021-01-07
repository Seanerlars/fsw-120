import React from "react"
import {Link, Switch, Route} from "react-router-dom"
import './App.css'


import Home from "./home"
import Fax from "./fax"
import Info from "./Info"


function App() {    
    return (
        
        <div>
        <Link to="/home">Home</Link>
        <Link to="/Info">Info</Link>
        <Link to="/fax">Fax</Link>
        
        <Switch id="nav">
        
                <Route  exact path="/home"><Home /></Route>
                
                <Route exact path="/fax" >< Fax /> </Route>
                <Route exact path="/Info">< Info /></Route>
            
               
            </Switch>

            <footer id="footer">
                Roto Plumbing<br></br>
                608-577-9899<br></br>
                RotoPlumbing.org
            </footer>
    </div>
    )
}

export default App

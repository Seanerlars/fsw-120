import React, { useState } from "react"
import "./App.css"

function App() {
  const [state, setState] = useState({
    fname: "",
    lname: "",
    message:"",
    email:"",
    dob:"",
    phone:"",
    favfood:"",
    showName: false


  })

  const handleChange = x => {
    setState({
      ...state,
      [x.target.name]: x.target.value,
    })
  }

 

  

  return (
    <div>
      <h1>React Form Handling</h1>
      <form>

        <label>
          First Name:{" "}
          <input
            type="text"
            name="fname"
            value={state.fname}
            onChange={handleChange}
          />
        </label>{" "}

        <label>
          Last Name:{" "}
          <input
            type="text"
            name="lname"
            value={state.lname}
            onChange={handleChange}
          />
        </label>{""}


        
        <label>
          Email:{" "}
          <input
            type="text"
            name="email"
            value={state.email}
            onChange={handleChange}
          />
        </label>{""}
        

        <label>
          D.O.B:{" "}
          <input
            type="text"
            name="dob"
            value={state.dob}
            onChange={handleChange}
          />
        </label>{""}

        <label>
          Phone:{" "}
          <input
            type="text"
            name="phone"
            value={state.phone}
            onChange={handleChange}
          />
        </label>

        <label>
          Favorite Food:{" "}
          <input
            type="text"
            name="favfood"
            value={state.favfood}
            onChange={handleChange}
          />
        </label>
        
        <label>
        message:{" "}
        <textarea
          name="message"
          value={state.message}
          onChange={handleChange}
        />
      </label>

      <button onClick={state.fname}>Submit Form</button>

      
        
      </form>
      <h5>
         First Name: {state.fname} {state.lname} {state.email} {state.dob}  {state.phone}   {state.favfood}   {state.message}
      </h5>
    </div>
  )
}

export default App
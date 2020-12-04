import React from "react"

import vacation from "./vacation"
import vacData from "./vacData"

import React from "react"

function vacation(props) {
    return (
        <div>
            <h3 style={{display: !props.question && "none"}}>Question: {props.question}</h3>
            <h3 style={{color: !props.question && "#888888"}}>Answer: {props.punchLine}</h3>
            <hr/>
        </div>
    )
}

export default vacation
  

  export default vacData

export default App
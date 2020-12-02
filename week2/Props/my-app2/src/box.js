import React from "react"

function Boxes(props) {
    console.log(props)
    return (
        <div className="boxAtt">
            <div> = {props.backgroundColor} </div>
            <div> = {props.color} </div>
            <div> = {props.subtitle} </div>
            <div> = {props.information} </div>
            
            
        </div>
    )
}

export default Boxes
import React from "react"
import Boxes from "./box"

function App() {
    return (
        <div className="box">
            <Boxes
                boxAtt = {{backgroundColor:"black", color: "white", subtitle: "here is 1 box", information: "a black box with white" }}/>


            <Boxes 
            boxAtt = {{backgroundColor:"white", color: "black", subtitle: "here is 2nd box", information: "a white box with black" }}/>
            
            <Boxes 
            boxAtt = {{backgroundColor:"Blue", color: "black", subtitle: "here is 3rd box", information: "a blue box with black" }}/>


            <Boxes 
            boxAtt = {{backgroundColor:"Pink", color: "Blue", subtitle: "here is 4th box", information: "a pink box with blue" }}/>

            <Boxes 
            boxAtt = {{backgroundColor:"Red", color: "black", subtitle: "here is 5th box", information: "a red box with white" }}/>

            <Boxes 
            boxAtt = {{backgroundColor:"Yellow", color: "Red", subtitle: "here is 6thbox", information: "a yellow box with red" }}/>

            <Boxes 
            boxAtt = {{backgroundColor:"Green", color: "Purple", subtitle: "here is 7th box", information: "a green box with purple" }}/>

            <Boxes 
            boxAtt = {{backgroundColor:"Orange", color: "black", subtitle: "here is 8th box", information: "a orange box with black" }}/>

            <Boxes 
            boxAtt = {{backgroundColor:"Cyan", color: "Yellow", subtitle: "here is 9th box", information: "a cyan box with yellow" }}/>

            <Boxes 
            boxAtt = {{backgroundColor:"white", color: "Red", subtitle: "here is 10th box", information: "a white box with red" }}/>
            
           
        </div>
    )
}

export default App

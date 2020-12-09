import React from "react"

class App extends React.Component {
  constructor(){
         super();

         this.state = {
              black: true
         }
    }

    changeColor(){
        this.setState({black: !this.state.black})
    }

    render(){
        let btn_class = this.state.black ? "blackButton" : "whiteButton";

        return (
                <div id="container">
               <button id="box" className={btn_class} onClick={this.changeColor.bind(this)}>A</button>
               <button id="box" className={btn_class} onClick={this.changeColor.bind(this)}>B</button>
               <button id="box" className={btn_class} onClick={this.changeColor.bind(this)}>C</button>
               <button id="box" className={btn_class} onClick={this.changeColor.bind(this)}>D</button>
              <button>Change Colors</button>
             </div>
             )
        
    }
}






export default App
  

 
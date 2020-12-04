import React from "react"

import vacation from "./vacation"
import vacData from "./vacData"



function App() {
    
    return (
        <div className="vacation">
        <vacData 
            place={{name: "Meridian, Idaho.", price: 20, time: "Fall" }}
        />
        
        <vacData
            place={{name: "New York, New York", price: 120, time: "Summer"}}
        />
        
        <vacData
            place={{name: "Madison, Wisconsin", price: 50, time: "Spring"}}
        />
        
        <vacData 
            place={{name: "Topeka, Kansas", price: 25, time: "Summer" }}
        />
        
    </div>
    )
}

export default vacation
  

export default vacData

export default App
import React from "react"
import DeeperComponent from "./DeeperComponent";

const DeepComponent = (props) => {
    console.log(props.data)
    return(
        <div>
            <h1>Deep Component</h1>
            <DeeperComponent data={props.data} />
        </div>
    )
}

export default DeepComponent;
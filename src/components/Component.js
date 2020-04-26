import React from "react"
import DeepComponent from "./DeepComponent";

const Component = (props) => {
    console.log(props)

    return(
        <div>
            <h1>Component</h1>
            <DeepComponent data={props.data} />
        </div>
    )
}

export default Component;
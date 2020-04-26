import React from "react"

const DeeperComponent = (props) => {
    return(
        <div>
            <h1>Deeper Component</h1>
            {props.data.map((char) => {
                return <p>{char.name}</p>
            })}
        </div>
    )
}

export default DeeperComponent;
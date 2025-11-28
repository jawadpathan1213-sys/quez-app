import { useState } from "react";
import { ScoreContext } from "./ScoreContext";

export const ScoreContextProvider = (props) => {
    const [result, setResult] = useState(0)


    return(
        <ScoreContext.Provider value={{ result, setResult }}>
            {props.children}
        </ScoreContext.Provider>
    )
}
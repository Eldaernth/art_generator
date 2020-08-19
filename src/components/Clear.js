import React from "react";


export default function Clear({context,canvas}){
    return(
        <div>
            <button onClick={()=>context.clearRect(0,0,canvas.width,canvas.height)}>Clear</button>
        </div>
    )
}

import React,{useContext} from 'react'
import {CanvasContext} from './CanvasContext'

function LineChanger() {

    const {canvasMethods,lineSize} = useContext(CanvasContext);
    return (
        <div>
             <p className="m-1">Pick line size</p>
            <input type="number" className="bg-gray-800 m-2" value={lineSize} onChange={(e)=>canvasMethods.lineSizeChange(e.target.value)}/>
        </div>
    )
}

export default LineChanger

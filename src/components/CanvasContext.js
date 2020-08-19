import React, { createContext, useState,useRef } from 'react'

export const CanvasContext = createContext();

export function CanvasProvider(props){
    const [color, setColor] = useState('');
    const [lineSize, setLineSize] = useState(1);

    const canvasMethods = {
        colorChange : (color)=> {setColor(color.toHEXA())},
        lineSizeChange: (e)=>{setLineSize(e)}
    }
    return (
        <CanvasContext.Provider value={{color,canvasMethods,lineSize}}>
            {props.children}
        </CanvasContext.Provider>
    )

} 
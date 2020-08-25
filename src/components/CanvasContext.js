import React, { createContext, useState,useRef } from 'react'

export const CanvasContext = createContext();

export function CanvasProvider(props){
    const [color, setColor] = useState('');
    const [lineSize, setLineSize] = useState(1);
    const [layers,setLayers] = useState([])

    console.log(layers);
    const canvasMethods = {
        colorChange : (color)=> {setColor(color.toHEXA())},
        lineSizeChange: (e)=>{setLineSize(e)},
        addLayer:(newLayer)=>{setLayers((prev)=>[...prev,newLayer])}            
    }
    return (
        <CanvasContext.Provider value={{color,canvasMethods,lineSize,layers}}>
            {props.children}
        </CanvasContext.Provider>
    )

} 
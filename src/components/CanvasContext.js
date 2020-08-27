import React, { createContext, useState,useRef } from 'react'

export const CanvasContext = createContext();

export function CanvasProvider(props){
    const [color, setColor] = useState('');
    const [lineSize, setLineSize] = useState(1);
    const [layers,setLayers] = useState([{layer:0,checked:true}])

    const canvasMethods = {
        colorChange : (color)=> {setColor(color.toHEXA())},
        lineSizeChange: (e)=>{setLineSize(e)},
        addLayer:(newLayer)=>{setLayers((prev)=>[...prev,newLayer])},
        updateLayerVisibility:(updatedLayer) =>{
            setLayers((prev) => prev.map(item=>{
                if(item.layer === updatedLayer.layer){
                    return updatedLayer
                }
                return item;
            }))
        }          
    }
    return (
        <CanvasContext.Provider value={{color,canvasMethods,lineSize,layers}}>
            {props.children}
        </CanvasContext.Provider>
    )

} 
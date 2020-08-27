import React,{useContext,useEffect} from 'react'
import {CanvasContext} from './CanvasContext'

function LayerBox({layer}) {
    const {canvasMethods,layers} = useContext(CanvasContext);

    useEffect(() => {
        if(layer > 0)
        {
        canvasMethods.addLayer({layer:layer,checked:true})
        }
    }, [])

    return (
        <div className="bg-gray-800 m-2 p-2 flex justify-around items-center">
            <input type="checkbox" defaultChecked="checked" onChange={(e)=>canvasMethods.updateLayerVisibility({layer:layer,checked:e.target.checked})}/>
    <h2>{`Layer ${layer}`}</h2>
        </div>
    )
}

export default LayerBox

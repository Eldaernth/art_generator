import React,{useContext,useEffect} from 'react'
import {CanvasContext} from './CanvasContext'

function LayerBox({layer}) {
    const {canvasMethods,layers} = useContext(CanvasContext);

    useEffect(() => {
        canvasMethods.addLayer({layer:layer,checked:true})
    }, [])

    console.log(layers);

    return (
        <div className="bg-gray-800 m-2 p-2 flex justify-around items-center">
            <input type="checkbox" defaultChecked="checked"/>
    <h2>{`Layer ${layer}`}</h2>
        </div>
    )
}

export default LayerBox

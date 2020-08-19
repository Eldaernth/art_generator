import React,{useEffect,useContext} from "react";
import Pickr from '@simonwep/pickr';
import dynamic from 'next/dynamic'
import {CanvasContext} from './CanvasContext'

export default function Picker(){
    
    const {canvasMethods} = useContext(CanvasContext);
    
    useEffect(() => {
    const pickr = Pickr.create({
        el: '.color-picker',
        theme:  'nano', 
        components: {
    
            // Main components
            preview: true,
            opacity: true,
            hue: true,
    
            // Input / output Options
            interaction: {
                hex: true,
                rgba: true,
                input: true,
                clear: true,
                save: true
            }
        }
    });
    pickr.on('change',(color, instance) => {
        canvasMethods.colorChange(color)})
     },[])

    return(
        <div className="color-picker">
                
        </div>
    )
}
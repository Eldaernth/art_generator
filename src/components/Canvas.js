import React,{useContext,useState,useEffect,useRef} from 'react'
import {CanvasContext} from './CanvasContext'


export default function Canvas(){
    const {color,lineSize} = useContext(CanvasContext);
    const [isDrawing, setIsDrawing] = useState(false);
    const canvasRef = useRef(null);
    const contextRef = useRef(null);

        useEffect(()=>{
            const canvas = canvasRef.current;
            canvas.width = window.innerWidth * 2;
            canvas.height = window.innerHeight * 2;
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
        
            const ctx = canvas.getContext("2d");
            ctx.scale(2,2);
            ctx.lineCap = "round";
            ctx.strokeStyle = color;
            ctx.lineCap = 5;
            contextRef.current = ctx;
          },[])
        
          const startDrawing= ({nativeEvent})=>{
            const {x,y} = nativeEvent;
            contextRef.current.strokeStyle = color;
            contextRef.current.lineWidth = lineSize;
            contextRef.current.beginPath();
            contextRef.current.moveTo(x,y);
            setIsDrawing(true);
          }
        
          const finishDrawing= ()=>{
            contextRef.current.closePath();
            setIsDrawing(false);
          }
          const draw= ({nativeEvent})=>{
            if(!isDrawing){
              return
            }
            const {x,y} = nativeEvent;
            contextRef.current.lineTo(x,y);
            contextRef.current.stroke();
          }
    return(
        <canvas
          onMouseDown={startDrawing}
          onMouseUp={finishDrawing}
          onMouseMove={draw}
          ref={canvasRef}
          />
    )
}
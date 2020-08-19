import {useEffect,useState,useRef, useContext } from 'react';
import Clear from '../components/Clear'
import dynamic from 'next/dynamic'
import {CanvasProvider} from '../components/CanvasContext'
import styled from 'styled-components'
import Canvas from '../components/Canvas'
import LineChanger from '../components/LineChanger'


const Picker = dynamic(()=>import('../components/Picker'))

function App() {
  const [drawing,setDrawing] = useState([]);
  

  return (
    <div className="flex">
      <CanvasProvider>
      <div className="bg-gray-900 text-white">
        <LineChanger/>  
        <Picker/>
        </div>
        <div id="drawingPanel">
          <Canvas/>
          {drawing.map((canvas=>
            canvas
          ))}
        /</div>
        <div className="bg-gray-900 text-white" >
          <div>
            <p className="m-2">Layers</p>
            <button className="bg-gray-800 m-2 p-2"  onClick={()=>setDrawing((prev)=>[...prev,<Canvas/>])}>Add layers</button>
            </div>
        </div>
        </CanvasProvider>
    </div>
  );
}

export default App;
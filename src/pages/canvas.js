import {useEffect,useState,useRef, useContext } from 'react';
import Clear from '../components/Clear'
import dynamic from 'next/dynamic'
import {CanvasProvider} from '../components/CanvasContext'
import styled from 'styled-components'
import Canvas from '../components/Canvas'
import LineChanger from '../components/LineChanger'
import LayerBox from '../components/LayerBox';
import Symmetry from '../components/SymmetryButton';


const Picker = dynamic(()=>import('../components/Picker'))

function App() {
  const [layerNumber,setLayerNumber] = useState(0);
  const [drawing,setDrawing] = useState([{layerNumber:layerNumber,html:<Canvas layer={layerNumber}/>}]);
  const [layers,setLayers] = useState([<LayerBox layer={layerNumber}/>]);

  useEffect(() => {
    setLayerNumber(1)
  }, [])

  return (
    <div className="flex">
      <CanvasProvider>
      <div className="bg-gray-900 text-white z-50 absolute top-0 left-0">
        <LineChanger/>  
        <Picker/>
        <Symmetry/>
        </div>
        <div id="drawingPanel">
          {drawing.map(canvas=>
            canvas.html
          )}
        </div>
        <div className="bg-gray-900 text-white z-50 absolute top-0 right-0" >
          <div>
            <p className="m-2">Layers</p>
            <button className="bg-gray-800 m-2 p-2"  onClick={()=>{setLayerNumber(layerNumber+1);
              setLayers((prev)=>[...prev,<LayerBox layer={layerNumber}/>]);
              setDrawing((prev)=>[...prev,{layerNumber:layerNumber,html:<Canvas layer={layerNumber}/>}]);}}>Add layers</button>
            </div>
            <div>
              {layers.map(layer => layer)}
              </div>
        </div>
        </CanvasProvider>
    </div>
  );
}

export default App;
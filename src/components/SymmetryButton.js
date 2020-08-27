import React,{useContext} from 'react'
import {CanvasContext} from './CanvasContext'

function SymmetryButton() {
    const {canvasMethods} = useContext(CanvasContext)

    return (
        <button className="bg-gray-800 m-2 p-2 hover:bg-gray-700" onClick={canvasMethods.changeSymmetryMode}>
            Symmetry
        </button>
    )
}

export default SymmetryButton

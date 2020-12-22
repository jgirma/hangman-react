import React from "react"
import '../App.css'
const initialMessage = "Choose a Category";


const CategoryPopup = ({setIndex, selectedWord}) => {
  return(
    <div className="category-popup" style={selectedWord === ' ' ? {display: 'flex'} : {}}>
     <div className="c-popup">
       <h2>{initialMessage}</h2>
       <button onClick={() => setIndex(0)}>Sports Teams</button>
       <button onClick={() => setIndex(1)}>Programming Languages</button>
     </div>
   </div>
  )
}


export default CategoryPopup
export var selectedWord

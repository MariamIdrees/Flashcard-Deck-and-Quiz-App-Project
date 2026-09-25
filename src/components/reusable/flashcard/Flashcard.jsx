import { useState } from "react"
import "./Flashcard.css"

 const Flashcard = ({question, answer}) => {
    const [flipped, setFlipped] =useState(false)
    const handleFlip =() =>{
        setFlipped(!flipped)
    }

  return (
    <div className="flashcardContainer">
     <div className={`flashcard ${flipped ? "flipped" : ""}`}  onClick={handleFlip}>
    
      
       <div className=" flashcardFront">
            <h1>{question}</h1> 
            <p>Click to reveal answer</p>
        </div>

        <div className="flashcardBack">
            <h1>{answer}</h1>
            <p>Click to see question</p>
        </div>
     


        </div>  
     </div>
  )
 }


export default Flashcard
import "./Mydecks.css"
import { useState } from "react"

const Mydecks = () => {



  
  

  return (
    <div>
       <div className="decksCointainer">
        <p className="library">LIBRARY</p>

        <div className="deckButton">
          <h1>My decks</h1>
          <button>+ New Deck</button>
        </div>

        <div className="allDecks">
          <h1>All your decks</h1>
         <span className="deckp"> <p>{"4"} decks</p>   <p>{" 16"} cards</p> </span>
        
        </div>

        <div className="searchDeck">
            <div className="searchbigDeck">

            </div>

            <div className="findDeck">

            </div>
          
        </div>



























       </div>
    </div>
  )
}

export default Mydecks
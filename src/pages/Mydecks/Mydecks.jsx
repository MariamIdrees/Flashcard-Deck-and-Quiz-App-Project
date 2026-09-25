import "./Mydecks.css"
import Flashcard from "../../components/reusable/flashcard/Flashcard"
import decks from "./data/flashcard"
import {useState} from "react"

const Mydecks = () => {
  
const [myDecks, setMyDecks] = useState(decks)
const [selectedDeck, setSelectedDeck] = useState(null)
const [currentCard, setCurrentCard] = useState(0)
const [isEditing, setIsEditing] = useState(false)
const [editedQuestion, setEditedQuestion] = useState("")
const [editedAnswer, setEditedAnswer] = useState("")
const [isCreatingDeck, setIsCreatingDeck] = useState(false)
const [newDeckTitle, setNewDeckTitle] = useState("")
const [newQuestion, setNewQuestion] = useState("")
const [newAnswer, setNewAnswer] = useState("")
const [newCards, setNewCards] = useState([])
const [isAddingCard, setIsAddingCard] = useState(false)
const [newCardQuestion, setNewCardQuestion] = useState("")
const [newCardAnswer, setNewCardAnswer] = useState("")
 
  return (
  
    <div>
     
     
       <div className="decksCointainer">
        <p className="library">LIBRARY</p>

        <div className="deckButton">
          <h1>My decks</h1>
         <button onClick={() => setIsCreatingDeck(true)}>  + New Deck </button>
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

          {isCreatingDeck && (
            <div className="createDeckForm">
             <h2>Create New Deck</h2>

            <label>Deck Title</label>

             <input
              type="text"
              placeholder="Enter deck title"
               value={newDeckTitle}
               onChange={(e) => setNewDeckTitle(e.target.value)} />

             <label>Question</label>

              <textarea
              placeholder="Enter question"
              value={newQuestion}
             onChange={(e) => setNewQuestion(e.target.value)}
              ></textarea>

    <label>Answer</label>

    <textarea
      placeholder="Enter answer"
      value={newAnswer}
      onChange={(e) => setNewAnswer(e.target.value)}
    ></textarea>
    <button
  onClick={() => {
    setNewCards([
      ...newCards,
      {
        question: newQuestion,
        answer: newAnswer,
      },
    ])

    setNewQuestion("")
    setNewAnswer("")
  }}
>
  + Add Card
</button>

<button
  onClick={() => {
    const newDeck = {
      id: Date.now(),
      title: newDeckTitle,
      cards: newCards,
    }

    setMyDecks([...myDecks, newDeck])
    setIsCreatingDeck(false)
    setNewDeckTitle("")
    setNewCards([])

    setMyDecks([...myDecks, newDeck])
  }}
>
  Create Deck
</button>

{newCards.length > 0 && (
  <div className="newCardsList">
    <h3>Cards added</h3>

    {newCards.map((card, index) => (
      <div className="newCardItem" key={index}>
        <p>
          <strong>Question:</strong> {card.question}
        </p>

        <p>
          <strong>Answer:</strong> {card.answer}
        </p>
      </div>
    ))}
  </div>
)}
  </div>
)}



           {!selectedDeck &&  !isCreatingDeck &&(
            <div className="deckList">
             {myDecks.map((deck) => (
             <div className="deckCard"
               key={deck.id}
              onClick={() => setSelectedDeck(deck)}  >
                <h1>{deck.title}</h1>
        
                 </div> ))}
                  </div> )}


<div className="flashcardGrid">
  {selectedDeck && (
    <>
    


    {isAddingCard ? (
  <div className="editCardForm">
    <h2>Add New Card</h2>

    <textarea
      value={newCardQuestion}
      onChange={(e) => setNewCardQuestion(e.target.value)}
      placeholder="Enter question"
    />

    <textarea
      value={newCardAnswer}
      onChange={(e) => setNewCardAnswer(e.target.value)}
      placeholder="Enter answer"
    />

    <div className="editButtons">
      {/* <button>Add Card</button>

      <button onClick={() => setIsAddingCard(false)}>
        Cancel
      </button> */}
      <button
  onClick={() => {
    const updatedCards = [
      ...selectedDeck.cards,
      {
        question: newCardQuestion,
        answer: newCardAnswer,
      },
    ]

    const updatedDeck = {
      ...selectedDeck,
      cards: updatedCards,
    }

    setMyDecks(
      myDecks.map((deck) =>
        deck.id === selectedDeck.id ? updatedDeck : deck
      )
    )

    setSelectedDeck(updatedDeck)
    setIsAddingCard(false)
    setNewCardQuestion("")
    setNewCardAnswer("")
  }}
>
  Add Card
</button>
    </div>
  </div>
) : isEditing ? (
  <div className="editCardForm">
    <textarea
      value={editedQuestion}
      onChange={(e) => setEditedQuestion(e.target.value)}
      placeholder="Enter question"
    />

    <textarea
      value={editedAnswer}
      onChange={(e) => setEditedAnswer(e.target.value)}
      placeholder="Enter answer"
    />

    <div className="editButtons">
      {/* your existing Save Changes button */}
      {/* your existing Cancel button */}
    </div>
  </div>
) : (
  <Flashcard
    key={currentCard}
    question={selectedDeck.cards[currentCard].question}
    answer={selectedDeck.cards[currentCard].answer}
  />
)}


  {/* {isEditing ? (
  <div className="editCardForm">
      
      <textarea
         value={editedQuestion}
         onChange={(e) => setEditedQuestion(e.target.value)}
        placeholder="Enter question"
         />

        <textarea
           value={editedAnswer}
           onChange={(e) => setEditedAnswer(e.target.value)}
           placeholder="Enter answer"
           />

    <div className="editButtons">
    <button
  onClick={() => {
    const updatedCards = [...selectedDeck.cards]

    updatedCards[currentCard] = {
      question: editedQuestion,
      answer: editedAnswer,
    }

    const updatedDeck = {
      ...selectedDeck,
      cards: updatedCards,
    }

    setMyDecks(
      myDecks.map((deck) =>
        deck.id === selectedDeck.id ? updatedDeck : deck
      )
    )

    setSelectedDeck(updatedDeck)
    setIsEditing(false)
  }}
>
  Save Changes
</button>

      <button onClick={() => setIsEditing(false)}>
        Cancel
      </button>
    </div>

  </div>
) : (
  <Flashcard
    key={currentCard}
    question={selectedDeck.cards[currentCard].question}
    answer={selectedDeck.cards[currentCard].answer}
  />
)} */}

      <button className="flashcardButtons"
        onClick={() => {
          if (currentCard === selectedDeck.cards.length - 1) {
            alert("Deck completed!");
          } else {
            setCurrentCard(currentCard + 1);
          }
        }}
      >
        {currentCard === selectedDeck.cards.length - 1 ? "Finish" : "Next"}
     

      <button
        onClick={() => {
          setSelectedDeck(null);
          setCurrentCard(0);
        }}
      >
        Back to Decks
       
      </button>
     <button  onClick={() => {
    setEditedQuestion(selectedDeck.cards[currentCard].question)
    setEditedAnswer(selectedDeck.cards[currentCard].answer)
    setIsEditing(true)
  }}>
         Edit Card
      </button>

    <button
  onClick={() => setIsAddingCard(true)}
>
  + Add Card
</button>

      <button
  onClick={() => {
    const updatedCards = selectedDeck.cards.filter(
      (_, index) => index !== currentCard
    )

    const updatedDeck = {
      ...selectedDeck,
      cards: updatedCards,
    }

    setMyDecks(
      myDecks.map((deck) =>
        deck.id === selectedDeck.id ? updatedDeck : deck
      )
    )

    setSelectedDeck(updatedDeck)

    if (currentCard >= updatedCards.length) {
      setCurrentCard(Math.max(updatedCards.length - 1, 0))
    }
  }}
>
  Delete Card
</button>

       </button>
    </>
  )}
</div>

       </div>
    </div>
  )
}

export default Mydecks
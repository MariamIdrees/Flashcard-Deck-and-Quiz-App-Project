import "./Dashboard.css"
import { useState, useEffect } from "react";
import decks from "../Mydecks/data/flashcard";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
    const [myDecks, setMyDecks] = useState(() => {
    const savedDecks = localStorage.getItem("myDecks");

    return savedDecks ? JSON.parse(savedDecks) : decks;
  });
  const [lastQuiz, setLastQuiz] = useState(null);

  useEffect(() => {
    const savedDecks = localStorage.getItem("myDecks");

    if (savedDecks) {
      setMyDecks(JSON.parse(savedDecks));
    }
  }, []);

  useEffect(() => {
  const savedQuiz = localStorage.getItem("lastQuizResult");

  if (savedQuiz) {
    setLastQuiz(JSON.parse(savedQuiz));
  }
}, []);

  const totalCards = myDecks.reduce(
    (total, deck) => total + deck.cards.length,
    0
  );

  return (
    <div className="dashhboardOverflow">


   <div className="dashboardText">
                    <p>GOOD MORNING</p>
                  <div className="dashboardHeader">
                    <h1>Ready to learn?</h1>
                  </div>
    </div>

  <div className="smallcardContainer">
     <div className="smallcard">
                    <h1>{myDecks.length}</h1>
<p>Total Decks</p>
                      
     </div>

     <div className="smallcard">
       <h1>{totalCards}</h1>
<p>Flashcards</p>
                      
      </div>

      <div className="smallcard">
        <h1>89%</h1>
         <p>Overall mastery</p>
                      
       </div>

       <div className="smallcard">
         <h1>0</h1>
         <p>Due now</p>
                      
       </div>
   </div>

   <div className="bigcardContainer">

    <div className="bigcardWrapper">

       <div className="bigcardFirstcard">
          <h5> TODAY'S GOAL </h5>
          <h4>10 cards can make a big difference </h4>
          <p>10 cards left to hit today's goal. You have 0 cards waiting for review.</p>
          {/* <button>Browse decks</button> */}
                         
       </div>

       <div className="bigcardSecondcard">
         <div className="secondcardWrapper">
               <div className="closureCard">
                  <p>What is a closure?</p>
                 </div>
          <div className="functionCard">
            <p>A function + its lexical scope.</p>
           </div>
               <div className="learnCard">
                   <div>
                      <img className=" w-20 h-10" src="recallicon4.jpeg" alt="Recall icon" />
                         <div className="threeps">
                              <p> Learn.</p>
                              <p> Recall.</p>
                              <p> Master.</p>
                          </div>
                     </div>
                 </div>
           </div>

         </div> 
     </div>
    </div>
                    
<div className="lastquizCard">
  <div className="lastQuizLeft">
    <h6 className="text-green-800 font-bold text-[10px]">LAST QUIZ</h6>

    <h3>
      {lastQuiz ? lastQuiz.deckTitle : "No quiz taken yet"}
    </h3>

    <p>
      {lastQuiz
        ? `${lastQuiz.score}/${lastQuiz.totalQuestions} correct`
        : "Take a quiz to see your result"}
    </p>
  </div>

  <div className="lastQuizRight">
    <strong>
      {lastQuiz ? `${lastQuiz.percentage}%` : "--"}
    </strong>

    <p className="text-green-700 text-[12px] font-bold">See stats →</p>
  </div>
</div>
    <div className="dashboardDeck">
  <div>
    <h2>Your Decks</h2>
    <p>Decks with the most cards due are shown first.</p>
  </div>

 <p onClick={() => navigate("/Mydecks")}className="viewHere"> View here</p>
</div>

<div className="dashboardDeckList">
  {myDecks.map((deck) => (
    <div
      className="dashboardDeckCard"
      key={deck.id}
      onClick={() =>
        navigate("/Mydecks", {
          state: {
            deckId: deck.id,
          },
        })
      }
    >
      <h3>{deck.title}</h3>
      <p>{deck.cards.length} cards</p>
    </div>
  ))}
</div>
                      

       
    </div>
  )
}

export default Dashboard
import "./Dashboard.css"

const Dashboard = () => {
  return (
    <div>


   <div className="dashboardText">
                    <p>GOOD MORNING</p>
                  <div className="dashboardHeader">
                    <h1>Ready to learn?</h1>
                  </div>
    </div>

  <div className="smallcardContainer">
     <div className="smallcard">
         <h1>4</h1>
         <p>Total Decks</p>
                      
     </div>

     <div className="smallcard">
         <h1>16</h1>
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
          <button>Browse decks</button>
                         
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
                      <img src="" alt="" />
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
              <h6>LAST QUIZ</h6>

           </div>

      <div className="dashboardDeck">
        <div>
          <h2>Your Decks</h2>
          <p>Decks with the most cards due are shown first.</p>
        </div>

        <p>view here</p>
     


      </div>
                      

       
    </div>
  )
}

export default Dashboard
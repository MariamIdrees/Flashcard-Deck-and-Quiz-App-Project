import "./Mydecks.css";
import Flashcard from "../../components/reusable/flashcard/Flashcard";
import decks from "./data/flashcard";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Mydecks = () => {
  const location = useLocation();



  const [myDecks, setMyDecks] = useState(() => {
    const savedDecks = localStorage.getItem("myDecks");

    return savedDecks ? JSON.parse(savedDecks) : decks;
  });
  const [selectedDeck, setSelectedDeck] = useState(null);
  const [currentCard, setCurrentCard] = useState(0);
  const [quizCard, setQuizCard] = useState(0);
  const [isQuiz, setIsQuiz] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [quizOptions, setQuizOptions] = useState([]);
  const [quizScore, setQuizScore] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingDeck, setIsEditingDeck] = useState(false);
  const [editedDeckTitle, setEditedDeckTitle] = useState("");
  const [editingDeckId, setEditingDeckId] = useState(null);
  const [editedQuestion, setEditedQuestion] = useState("");
  const [editedAnswer, setEditedAnswer] = useState("");
  const [isCreatingDeck, setIsCreatingDeck] = useState(false);
  const [newDeckTitle, setNewDeckTitle] = useState("");
  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswer, setNewAnswer] = useState("");
  const [newCards, setNewCards] = useState([]);
  const [isAddingCard, setIsAddingCard] = useState(false);
  const [newCardQuestion, setNewCardQuestion] = useState("");
  const [newCardAnswer, setNewCardAnswer] = useState("");
  const [openMenu, setOpenMenu] = useState(null);

  useEffect(() => {
    if (selectedDeck && isQuiz) {
      const currentQuizCard = selectedDeck.cards[quizCard];

      if (currentQuizCard.options) {
        setQuizOptions(
          [...currentQuizCard.options].sort(() => Math.random() - 0.5),
        );
      } else {
        setQuizOptions([]);
      }
    }
  }, [quizCard, isQuiz, selectedDeck]);

  useEffect(() => {
    const savedDecks = localStorage.getItem("myDecks");

    if (!savedDecks) {
      return;
    }

    const parsedDecks = JSON.parse(savedDecks);

    const updatedDecks = parsedDecks.map((savedDeck) => {
      const sourceDeck = decks.find((deck) => deck.id === savedDeck.id);

      if (!sourceDeck) {
        return savedDeck;
      }

      return {
        ...savedDeck,
        cards: savedDeck.cards.map((savedCard) => {
          const sourceCard = sourceDeck.cards.find(
            (card) => card.question === savedCard.question,
          );

          if (sourceCard?.options) {
            return {
              ...savedCard,
              options: sourceCard.options,
            };
          }

          return savedCard;
        }),
      };
    });

    setMyDecks(updatedDecks);
  }, []);

  useEffect(() => {
    localStorage.setItem("myDecks", JSON.stringify(myDecks));
  }, [myDecks]);

  const recordStudySession = () => {
  const today = new Date().toISOString().split("T")[0];

  const savedActivity = localStorage.getItem("studyActivity");

  const activity = savedActivity
    ? JSON.parse(savedActivity)
    : [];

  if (!activity.includes(today)) {
    activity.push(today);
    localStorage.setItem("studyActivity", JSON.stringify(activity));
  }
};
const getCurrentStreak = () => {
  const savedActivity = localStorage.getItem("studyActivity");

  if (!savedActivity) {
    return 0;
  }

  const activity = JSON.parse(savedActivity);

  if (activity.length === 0) {
    return 0;
  }

  const dates = [...new Set(activity)].sort().reverse();

  let streak = 0;
  let currentDate = new Date();

  for (let i = 0; i < dates.length; i++) {
    const dateString = currentDate.toISOString().split("T")[0];

    if (dates[i] === dateString) {
      streak++;
      currentDate.setDate(currentDate.getDate() - 1);
    } else {
      break;
    }
  }

  return streak;
};
const saveQuizResult = () => {
  const quizResult = {
    deckId: selectedDeck.id,
    deckTitle: selectedDeck.title,
    score: quizScore,
    totalQuestions: selectedDeck.cards.length,
    percentage: Math.round(
      (quizScore / selectedDeck.cards.length) * 100
    ),
    date: new Date().toISOString(),
  };

  localStorage.setItem("lastQuizResult", JSON.stringify(quizResult));
};

   useEffect(() => {
  if (location.state?.startQuiz && location.state?.deckId) {
    const deckToQuiz = myDecks.find(
      (deck) => deck.id === location.state.deckId
    );

    if (deckToQuiz) {
      setSelectedDeck(deckToQuiz);
      setIsQuiz(true);
      setIsQuizCompleted(false);
      setQuizCard(0);
      setQuizScore(0);
      setSelectedAnswer("");
      setIsAnswerChecked(false);
    }
  }
}, [location.state, myDecks]);

useEffect(() => {
  if (location.state?.deckId && !location.state?.startQuiz) {
    const deckToOpen = myDecks.find(
      (deck) => deck.id === location.state.deckId
    );

    if (deckToOpen) {
      setSelectedDeck(deckToOpen);
    }
  }
}, [location.state, myDecks]);



  return (
    <main>
      <div className="decksCointainer">
        <p className="library">LIBRARY</p>

        <div className="deckButton">
          <h1>My decks</h1>
          <button onClick={() => setIsCreatingDeck(true)}> + New Deck </button>
        </div>

        <div className="allDecks">
          <h1>All your decks</h1>
          <span className="deckp">
            {" "}
            <p>{"4"} decks</p> <p>{"40"} cards</p>{" "}
          </span>
        </div>

        {/* <div className="searchDeck">
            <div className="searchbigDeck">

            </div>

            <div className="findDeck">

            </div>

         
          
        </div> */}

        {isCreatingDeck && (
          <div className="createDeckForm">
            <h2>Create New Deck</h2>

            <label>Deck Title</label>

            <input
              type="text"
              placeholder="Enter deck title"
              value={newDeckTitle}
              onChange={(e) => setNewDeckTitle(e.target.value)}
            />

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
                ]);

                setNewQuestion("");
                setNewAnswer("");
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
                };

                setMyDecks([...myDecks, newDeck]);
                setIsCreatingDeck(false);
                setNewDeckTitle("");
                setNewCards([]);

                setMyDecks([...myDecks, newDeck]);
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

        {isEditingDeck && (
          <div className="createDeckForm">
            <h2>Edit Deck</h2>

            <label>Deck Title</label>

            <input
              type="text"
              value={editedDeckTitle}
              onChange={(e) => setEditedDeckTitle(e.target.value)}
            />

            <div className="editButtons">
              <button
                onClick={() => {
                  const updatedDecks = myDecks.map((deck) =>
                    deck.id === editingDeckId
                      ? {
                          ...deck,
                          title: editedDeckTitle,
                        }
                      : deck,
                  );

                  setMyDecks(updatedDecks);
                  setIsEditingDeck(false);
                  setEditingDeckId(null);
                  setEditedDeckTitle("");
                }}
              >
                Save Changes
              </button>

              <button onClick={() => setIsEditingDeck(false)}>Cancel</button>
            </div>
          </div>
        )}

        {!selectedDeck && !isCreatingDeck && !isEditingDeck && (
          <div className="deckList">
            {myDecks.map((deck) => (
              <div className="deckWrapper" key={deck.id}>
               <div
  className="deckCard"
  onClick={() => {
    if (openMenu === deck.id) {
      setOpenMenu(null);
    } else {
      setSelectedDeck(deck);
    }
  }}
>
  <h1>{deck.title}</h1>

  <div className="deckActions">
    <button
      onClick={(e) => {
        e.stopPropagation();
        setSelectedDeck(deck);
        setCurrentCard(0);
        setIsQuiz(false);
        setIsQuizCompleted(false);
        setQuizCard(0);
        setQuizScore(0);
        setSelectedAnswer("");
        setIsAnswerChecked(false);
      }}
    >
      Study Deck
    </button>

    <button
      onClick={(e) => {
        e.stopPropagation();
        setSelectedDeck(deck);
        setCurrentCard(0);
        setIsQuiz(true);
        setIsQuizCompleted(false);
        setQuizCard(0);
        setQuizScore(0);
        setSelectedAnswer("");
        setIsAnswerChecked(false);
      }}
    >
      Take Quiz
    </button>
  </div>
</div>

                {!deck.isDefault && (
                  <button
                    type="button"
                    className="deckMenuButton"
                    onClick={() => {
                      setOpenMenu(openMenu === deck.id ? null : deck.id);
                    }}
                  >
                    ⋮
                  </button>
                )}
                {openMenu === deck.id && (
                  <div className="deckMenu">
                    {!deck.isDefault && (
                      <>
                        <button
                          onClick={() => {
                            setEditingDeckId(deck.id);
                            setEditedDeckTitle(deck.title);
                            setOpenMenu(null);
                            setIsEditingDeck(true);
                          }}
                        >
                          Edit Deck
                        </button>

                        <button
                          onClick={() => {
                            const updatedDecks = myDecks.filter(
                              (item) => item.id !== deck.id,
                            );

                            setMyDecks(updatedDecks);
                            setOpenMenu(null);
                          }}
                        >
                          Delete Deck
                        </button>
                      </>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        <section className="flashcardGrid">
          {selectedDeck && (
            <>
              {isQuiz ? (
                isQuizCompleted ? (
                 <div className="quizSessionComplete">

  <h2>Session complete</h2>

  <div className="sessionCheck">
    ✓
  </div>

  <h3>Great work!</h3>

  <p className="sessionMessage">
    You completed your quiz session.
  </p>

  <div className="sessionScore">
    {Math.round(
      (quizScore / selectedDeck.cards.length) * 100
    )}
    <span>%</span>
  </div>

  <div className="sessionStats">

    <div className="sessionStat">
      <strong>{selectedDeck.cards.length}</strong>
      <span>questions</span>
    </div>

    <div className="sessionStat">
      <strong>
        {selectedDeck.cards.length - quizScore}
      </strong>
      <span>incorrect</span>
    </div>

    <div className="sessionStat">
      <strong>{getCurrentStreak()}</strong>
      <span>Day streak</span>
    </div>

  </div>

  <button
    className="sessionCompleteButton"
    onClick={() => {
      setSelectedDeck(null);
      setIsQuiz(false);
      setIsQuizCompleted(false);
      setQuizCard(0);
      setQuizScore(0);
      setSelectedAnswer("");
      setIsAnswerChecked(false);
    }}
  >
    Back to Decks
  </button>

</div>
                ) : (
                  <main className="quizContainer">
                      <div className="quizHeader">
                           <h2>Quiz</h2>
                         <span>{quizCard + 1}/{selectedDeck.cards.length} </span>
                         </div>
                        <p> Score: {quizScore}/{selectedDeck.cards.length}</p>
                    <h3> {selectedDeck.cards[quizCard].question} </h3>

                    <section className="quizOptions">
                      {quizOptions.map((option, index) => (
                        <button
                          key={index}
                          type="button"
                          className={
                            selectedAnswer === option ? "selectedOption" : ""
                          }
                          onClick={() => setSelectedAnswer(option)}
                        >
                          {option}
                        </button>
                      ))}

                      <button
                        type="button"
                        disabled={!selectedAnswer || isAnswerChecked}
                        onClick={() => {
                          if (
                            selectedAnswer ===
                            selectedDeck.cards[quizCard].answer
                          ) {
                            setQuizScore(quizScore + 1);
                          }

                          setIsAnswerChecked(true);
                        }}
                      >
                        Check Answer
                      </button>

                      {isAnswerChecked && (
                        <aside>
                          {selectedAnswer ===
                          selectedDeck.cards[quizCard].answer ? (
                            <p>✅ Correct!</p>
                          ) : (
                            <p>❌ Wrong!</p>
                          )}
                        </aside>
                      )}

                      {isAnswerChecked &&
                        quizCard < selectedDeck.cards.length - 1 && (
                          <button
                            type="button"
                            onClick={() => {
                              setQuizCard(quizCard + 1);
                              setSelectedAnswer("");
                              setIsAnswerChecked(false);
                            }}
                          >
                            Next Question
                          </button>
                        )}

                      {isAnswerChecked &&
                        quizCard === selectedDeck.cards.length - 1 && (
                             <button
      type="button"
      onClick={() => {
        const finalScore =
          quizScore +
          (selectedAnswer === selectedDeck.cards[quizCard].answer ? 1 : 0);

        const quizResult = {
          deckId: selectedDeck.id,
          deckTitle: selectedDeck.title,
          score: finalScore,
          totalQuestions: selectedDeck.cards.length,
          percentage: Math.round(
            (finalScore / selectedDeck.cards.length) * 100
          ),
          date: new Date().toISOString(),
        };

        localStorage.setItem(
          "lastQuizResult",
          JSON.stringify(quizResult)
        );

        recordStudySession();
        setIsQuizCompleted(true);
      }}
    >
      Quiz Completed
    </button>
                        )}
                    </section>
                  </main>
                )
              ) : (
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
                        <button
                          onClick={() => {
                            const updatedCards = [
                              ...selectedDeck.cards,
                              {
                                question: newCardQuestion,
                                answer: newCardAnswer,
                              },
                            ];

                            const updatedDeck = {
                              ...selectedDeck,
                              cards: updatedCards,
                            };

                            setMyDecks(
                              myDecks.map((deck) =>
                                deck.id === selectedDeck.id
                                  ? updatedDeck
                                  : deck,
                              ),
                            );

                            setSelectedDeck(updatedDeck);
                            setIsAddingCard(false);
                            setNewCardQuestion("");
                            setNewCardAnswer("");
                          }}
                        >
                          Add Card
                        </button>

                        <button onClick={() => setIsAddingCard(false)}>
                          Cancel
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
                        <button
                          onClick={() => {
                            const updatedCards = [...selectedDeck.cards];

                            updatedCards[currentCard] = {
                              question: editedQuestion,
                              answer: editedAnswer,
                            };

                            const updatedDeck = {
                              ...selectedDeck,
                              cards: updatedCards,
                            };

                            setMyDecks(
                              myDecks.map((deck) =>
                                deck.id === selectedDeck.id
                                  ? updatedDeck
                                  : deck,
                              ),
                            );

                            setSelectedDeck(updatedDeck);
                            setIsEditing(false);
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
                    <>
                      <Flashcard
                        key={currentCard}
                        question={selectedDeck.cards[currentCard].question}
                        answer={selectedDeck.cards[currentCard].answer}
                      />

                      <div className="flashcardButtons">
                        <button
                          onClick={() => {
                           if (currentCard === selectedDeck.cards.length - 1) {
                             recordStudySession();
                             setIsQuiz(true);
                              } else {
                              setCurrentCard(currentCard + 1);
                              }
                          }}
                        >
                          {currentCard === selectedDeck.cards.length - 1
                            ? "Finish"
                            : "Next"}
                        </button>

                        <button
                          onClick={() => {
                            setSelectedDeck(null);
                            setCurrentCard(0);
                          }}
                        >
                          Back to Decks
                        </button>

                        <button
                          onClick={() => {
                            setEditedQuestion(
                              selectedDeck.cards[currentCard].question,
                            );
                            setEditedAnswer(
                              selectedDeck.cards[currentCard].answer,
                            );
                            setIsEditing(true);
                          }}
                        >
                          Edit Card
                        </button>

                        <button onClick={() => setIsAddingCard(true)}>
                          + Add Card
                        </button>

                        <button
                          onClick={() => {
                            const updatedCards = selectedDeck.cards.filter(
                              (_, index) => index !== currentCard,
                            );

                            const updatedDeck = {
                              ...selectedDeck,
                              cards: updatedCards,
                            };

                            setMyDecks(
                              myDecks.map((deck) =>
                                deck.id === selectedDeck.id
                                  ? updatedDeck
                                  : deck,
                              ),
                            );

                            setSelectedDeck(updatedDeck);

                            if (currentCard >= updatedCards.length) {
                              setCurrentCard(
                                Math.max(updatedCards.length - 1, 0),
                              );
                            }
                          }}
                        >
                          Delete Card
                        </button>
                      </div>
                    </>
                  )}
                </>
              )}
            </>
          )}
        </section>
      </div>
    </main>
  );
};

export default Mydecks;

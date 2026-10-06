export const REVIEW_SCHEDULE_KEY = "reviewSchedule";

export const getReviewSchedule = () => {
  try {
    const schedule = JSON.parse(
      localStorage.getItem(REVIEW_SCHEDULE_KEY) || "{}",
    );
    return schedule && typeof schedule === "object" && !Array.isArray(schedule)
      ? schedule
      : {};
  } catch {
    return {};
  }
};

export const getDueCards = (
  deck,
  schedule = getReviewSchedule(),
  now = Date.now(),
) =>
  deck.cards.filter((card) => {
    const dueAt = schedule[`${deck.id}:${card.id}`]?.dueAt;
    return !dueAt || dueAt <= now;
  });

export const getReviewSummary = (decks, now = Date.now()) => {
  const schedule = getReviewSchedule();
  const dueDecks = decks
    .map((deck) => ({ ...deck, dueCards: getDueCards(deck, schedule, now) }))
    .filter((deck) => deck.dueCards.length > 0);
  const dueCards = dueDecks.flatMap((deck) =>
    deck.dueCards.map((card) => ({ deckId: deck.id, card })),
  );

  return {
    dueDecks,
    dueCardCount: dueCards.length,
    newCardCount: dueCards.filter(
      ({ deckId, card }) => !schedule[`${deckId}:${card.id}`],
    ).length,
    relearnCardCount: dueCards.filter(
      ({ deckId, card }) =>
        schedule[`${deckId}:${card.id}`]?.rating === "Again",
    ).length,
    estimatedMinutes: dueCards.length
      ? Math.max(1, Math.round((dueCards.length * 12) / 60))
      : 0,
  };
};

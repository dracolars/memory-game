const initialState = [
  { id: 0, contents: "🐶", visible: true, matched: false },
  { id: 1, contents: "🐶", visible: true, matched: false },
  { id: 2, contents: "🐝", visible: true, matched: false },
  { id: 3, contents: "🐝", visible: true, matched: false },
  { id: 4, contents: "🐘", visible: true, matched: false },
  { id: 5, contents: "🐘", visible: true, matched: false },
  { id: 6, contents: "🐮", visible: true, matched: false },
  { id: 7, contents: "🐮", visible: true, matched: false },
  { id: 8, contents: "🦉", visible: true, matched: false },
  { id: 9, contents: "🦉", visible: true, matched: false },
  { id: 10, contents: "🐢", visible: true, matched: false },
  { id: 11, contents: "🐢", visible: true, matched: false },
  { id: 12, contents: "🦊", visible: true, matched: false },
  { id: 13, contents: "🦊", visible: true, matched: false },
  { id: 14, contents: "🦋", visible: true, matched: false },
  { id: 15, contents: "🦋", visible: true, matched: false },
];

export const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case "board/setBoard":
      let setState = [];
      action.payload.forEach((element, index) =>
        setState.push({
          id: index,
          contents: element,
          visible: false,
          matched: false,
        })
      );
      return setState;
    case "board/flipCard":
      let flipState = [...state];
      const cardID = action.payload;
      flipState[cardID] = { ...state[cardID], visible: true };

      const [index1, index2] = flipState
        .filter((card) => card.visible)
        .map((card) => card.id);
      if (index2 !== undefined) {
        const card1 = flipState[index1];
        const card2 = flipState[index2];
        if (card1.contents === card2.contents) {
          flipState[index1] = { ...card1, visible: false, matched: true };
          flipState[index2] = { ...card2, visible: false, matched: true };
        }
      }

      return flipState;
    case "board/resetCards":
      return state.map((card) => ({ ...card, visible: false }));
    default:
      return state;
  }
};

const wordPairs = [
  "🐶",
  "🐶",
  "🐝",
  "🐝",
  "🐘",
  "🐘",
  "🐮",
  "🐮",
  "🦉",
  "🦉",
  "🐢",
  "🐢",
  "🦊",
  "🦊",
  "🦋",
  "🦋",
];

const randomWords = () => {
  let words = [];
  let newWordPairs = [...wordPairs];
  const reps = newWordPairs.length;
  for (let i = 0; i < reps; i++) {
    const wordIndex = Math.floor(Math.random() * newWordPairs.length);
    words.push(newWordPairs[wordIndex]);
    newWordPairs.splice(wordIndex, 1);
  }

  return words;
};

// action creators
export const setBoard = () => {
  const words = randomWords();
  return {
    type: "board/setBoard",
    payload: words,
  };
};

export const flipCard = (id) => {
  return {
    type: "board/flipCard",
    payload: id,
  };
};

export const resetCards = (id) => {
  return {
    type: "board/resetCards",
    payload: id,
  };
};

// Add selector export statments below
export const selectBoard = (state) => {
  return state.board.map((card) => {
    return { id: card.id, contents: card.contents };
  });
};

export const selectVisibleIDs = (state) => {
  return state.board.filter((card) => card.visible).map((card) => card.id);
};

export const selectMatchedIDs = (state) => {
  return state.board.filter((card) => card.matched).map((card) => card.id);
};

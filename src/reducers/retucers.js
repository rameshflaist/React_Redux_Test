let intialState = {
  Text: [],
};

export const reducer = (state = intialState, action) => {
    
    switch (action.type) {
        case 'GET_TEXT':
            const list = [...action.text];
            list.sort((a, b) => (a.id > b.id) ? 1 : -1);
            return {
              ...state,
              Text: list,
            };
        default:
            return state;
    }
}
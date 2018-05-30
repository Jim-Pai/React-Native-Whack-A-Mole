const score = (score = 0, action) => {
    switch(action.type) {
        case 'ADD_SCORE':
            return score + action.score;
        case 'SET_SCORE':
            return action.score;
        default:
            return score;
    }
};

export default score;
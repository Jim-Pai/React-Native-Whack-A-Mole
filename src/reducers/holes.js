const holes = (holes = [], action) => {
    switch(action.type) {
        case 'ADD_HOLE':
            return [...holes, action.hole];
        default:
            return holes;
    }
};

export default holes;
const time = (time = 0, action) => {
    switch (action.type) {
        case 'SET_TIME':
            return action.time;
        case 'COUNT_DOWN':
            return time - 1;
        default:
            return time;
    }
};

export default time;
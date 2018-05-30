export const setTime = time => ({
    type: 'SET_TIME',
    time
});

export const countDown = () => ({
    type: 'COUNT_DOWN'
});

export const addScore = score => ({
    type: 'ADD_SCORE',
    score
});

export const setScore = score => ({
    type: 'SET_SCORE',
    score
});

export const addHole = hole => ({
    type: 'ADD_HOLE',
    hole
});

export const addUsedHole = hole => ({
    type: 'ADD_USED_HOLE',
    hole,
});

export const removeUsedHole = hole => ({
    type: 'REMOVE_USED_HOLE',
    hole,
});
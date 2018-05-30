const usedHoles = (used = new Set(), action) => {
    switch(action.type) {
        case 'ADD_USED_HOLE':
            used.add(action.hole);
            return used;
        case 'REMOVE_USED_HOLE':
            used.delete(action.hole);
            return used;
        default:
            return used;
    }
};

export default usedHoles;
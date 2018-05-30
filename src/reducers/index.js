import { combineReducers } from 'redux';
import time from './time';
import score from './score';
import holes from './holes';
import usedHoles from './usedHoles';
// import other reducers here

export default combineReducers({
    // reducers imported
    time,
    score,
    holes,
    usedHoles
});
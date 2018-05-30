import { connect } from 'react-redux'; // create container component
import { setTime, countDown, setScore } from '../actions';
import Header from '../components/Header';

const mapStateToProps = state => ({
    time: state.time,
    score: state.score,
    holes: state.holes,
    usedHoles: state.usedHoles
});

const mapDispatchToProps = dispatch => ({
    setTime: time => dispatch(setTime(time)),
    countDown: () => dispatch(countDown()),
    setScore: score => dispatch(setScore(score))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
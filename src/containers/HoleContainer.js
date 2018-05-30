import { connect } from 'react-redux'; // create container component
import { addHole, addScore, addUsedHole, removeUsedHole } from '../actions';
import Hole from '../components/Hole';

const mapStateToProps = (state, ownProps) => ({
    idx: ownProps.idx
});

const mapDispatchToProps = dispatch => ({
    addHole: hole => dispatch(addHole(hole)),
    addScore: score => dispatch(addScore(score)),
    addUsedHole: hole => dispatch(addUsedHole(hole)),
    removeUsedHole: hole => dispatch(removeUsedHole(hole))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Hole);
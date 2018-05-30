import { connect } from 'react-redux'; // create container component
import { addScore } from '../actions';
import Mole from '../components/Mole';

const mapStateToProps = (state, ownProps) => ({
    moleDisappear: ownProps.moleDisappear
});

const mapDispatchToProps = dispatch => ({
    addScore: score => dispatch(addScore(score)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Mole);
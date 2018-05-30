import React, { Component } from 'react';
import { View, ImageBackground, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import HittableMole from '../containers/HittableMole';
import AutoHeightImage from 'react-native-auto-height-image';
import PropTypes from 'prop-types';

class Hole extends Component {
    constructor(props) {
        super(props);
        this.state = {
          y: 8,
          display: 'none'
        }
        this.moleUp = this.moleUp.bind(this);
        this.moleDown = this.moleDown.bind(this);
        this.moleShow = this.moleShow.bind(this);
        this.moleDisappear = this.moleDisappear.bind(this);
        this.moleMove = this.moleMove.bind(this);
        this.setMolePosition = this.setMolePosition.bind(this);
    }

    componentDidMount() {
      this.props.addHole(this);
    }

    moleMove = () => {
      this.setMolePosition(8);
      this.moleShow();
      window.holeIntervals[this.props.idx] = setInterval(this.moleUp, 10);
      this.props.addUsedHole(this);
    }

    moleUp = () => {
      const { y } = this.state;
      if(this.state.y <= -17) {
        clearInterval(window.holeIntervals[this.props.idx]);
        window.holeIntervals[this.props.idx] = setInterval(this.moleDown, 10);
        return;
      }
      this.setState({
        y: y - 0.5
      });
    }

    moleDown = () => {
      const { y } = this.state;
      if(this.state.y >= 8) {
        this.moleDisappear();
        // -3 score here
        this.props.addScore(-3);
        return;
      }
      this.setState({
        y: y + 0.5
      });
    }

    moleShow = () => {
      this.setState({
        display: 'flex'
      });
    }

    moleDisappear = () => {
      clearInterval(window.holeIntervals[this.props.idx]);
      this.props.removeUsedHole(this);
      this.setState({
        display: 'none'
      });
    }

    setMolePosition = (pos) => {
      this.setState({
        y: pos
      });
    }

    render() {
        return (
          <ImageBackground
            style={styles.container}
            source={require('../../assets/images/hole.png')}>
            
            <View style={{ top: this.state.y, display: this.state.display}}>
              <HittableMole moleDisappear={this.moleDisappear}/>
            </View>
            
            <AutoHeightImage 
              width={HOLE_WIDTH}
              style={styles.holeMask} 
              source={require('../../assets/images/holeMask.png')}/>
          </ImageBackground>
        );
    }
}

Hole.propTypes = {
  idx: PropTypes.number.isRequired,
  addHole: PropTypes.func.isRequired,
  addScore: PropTypes.func.isRequired,
  addUsedHole: PropTypes.func.isRequired,
  removeUsedHole: PropTypes.func.isRequired
}

const HOLE_WIDTH = 100;

const styles = StyleSheet.create({
  container: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: 92,
    height: 45,
    margin: 10,
  },
  holeMask: {
    position: 'absolute',
    top: 20,
    zIndex: 1,
  },
  mole: {
    top: 8, // 8(bottom) ~ -17(top)
  },
});

export default Hole;
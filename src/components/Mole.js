import React, { Component } from 'react';
import { View, Image, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image'
import PropTypes from 'prop-types';

class Mole extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
          <TouchableWithoutFeedback
            style={styles.container}
            onPress={() => {
                this.props.addScore(10);
                this.props.moleDisappear();
            }}>
            <AutoHeightImage
              width={50}
              source={require('../../assets/images/mole.png')}/>
          </TouchableWithoutFeedback>
        );
    }
}

Mole.propTypes = {
  addScore: PropTypes.func.isRequired,
  moleDisappear: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Mole;

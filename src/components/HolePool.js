import React, { Component } from 'react';
import { View, Alert, Dimensions, StyleSheet } from 'react-native';
import HoleRow from './HoleRow';

class HolePool extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const holeRows = [];
        for(let i = 0; i < rows; i++) {
            holeRows.push(
                <HoleRow key={i} 
                  rowIdx={i}
                  num={Math.floor(WINDOW_WIDTH / 100)}/>
            );
        }

        return (
            <View style={styles.poolContainer}>
              { holeRows }
            </View>
        );
    }
}

const WINDOW_WIDTH = Dimensions.get('window').width;
const SAND_HEIGHT = Dimensions.get('window').height - WINDOW_WIDTH * 0.5;
const rows = Math.floor(SAND_HEIGHT / 80);

const styles = StyleSheet.create({
    poolContainer: {
        paddingTop: 25,
        flexWrap: 'wrap',
        alignItems: 'center',
        flexDirection: 'column',
    },
});

export default HolePool;
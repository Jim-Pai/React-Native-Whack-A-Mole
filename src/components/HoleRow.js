import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
//import Hole from './Hole';
import HoleContainer from '../containers/HoleContainer';

class HoleRow extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const holes = [];
        for(let i = 0; i < this.props.num; i++) {
            if(this.props.rowIdx % 2 !== 0 && i === 0)
                continue;
            
            holes.push(
                <HoleContainer key={i} idx={window.holeIntervals.length}/>
            );
            window.holeIntervals.push(null);
        }

        return (
            <View style={ styles.rowContainer }>
              { holes }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    rowContainer: {
        flexWrap: 'wrap',
        alignItems: 'center',
        flexDirection: 'row',
    },
});

export default HoleRow;
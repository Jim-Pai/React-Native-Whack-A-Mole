
import React, { Component } from 'react';
import { ImageBackground, Dimensions, StyleSheet
    , TouchableHighlight, Text } from 'react-native';
import PropTypes from 'prop-types';
import Hole from './Hole';

class Header extends Component {
    constructor(props) {
        super(props);
        this.randomlySelectHole = this.randomlySelectHole.bind(this);
        this.spawnMole = this.spawnMole.bind(this);
        this.allMolesDisappear = this.allMolesDisappear.bind(this);
        this.init = this.init.bind(this);
    }

    init = () => {
        this.allMolesDisappear();
        clearInterval(window.timeInterval);
        clearTimeout(window.moleTimeout);
        this.props.setTime(60);
        this.props.setScore(0);
    }

    transformNum = (num) => {
        return num > 9 ? "" + num : "0" + num;
    }

    transformTime = (time) => {
        const min = this.transformNum(Math.floor(time / 60));
        const sec = this.transformNum(time % 60);
        return min + ":" + sec;
    }

    randomlySelectHole = () => {
        const len = this.props.holes.length;
        let index = Math.floor(Math.random() * len);
        while(this.props.usedHoles.has(this.props.holes[index])) {
            index = Math.floor(Math.random() * len);
        }
        this.props.holes[index].moleMove();
    }

    spawnMole = () => {
        if(this.props.time > 0) {
            this.randomlySelectHole();
            window.moleTimeout = setTimeout(() => {
                this.spawnMole();
            }, 200 + this.props.time * 30);
        }
    }

    allMolesDisappear = () => {
        for(let hole of this.props.holes) {
            hole.moleDisappear();
        }
    }

    render() {
        return (
          <ImageBackground 
            style={styles.background} 
            source={require('../../assets/images/game-screen-top.png')}>

           <ImageBackground
              style={styles.InfoButton}
              source={require('../../assets/images/gameBtn.png')}>
              <Text style={styles.InfoText}>
                { this.props.score }
              </Text>
            </ImageBackground>
            
            <TouchableHighlight
                onPress={() => {
                    this.init();
                    window.timeInterval = setInterval(() => {
                        this.props.countDown();
                        if(this.props.time == 0) {
                            clearInterval(window.timeInterval);
                            this.allMolesDisappear();
                        }
                    }, 1000);
                    window.moleTimeout = setTimeout(() => {
                        this.spawnMole();
                    }, 2000);
                }}
                style={styles.startButton}
                underlayColor='#bbb'>
                <Text>Start</Text>
            </TouchableHighlight>

            <ImageBackground
              style={styles.InfoButton}
              source={require('../../assets/images/gameBtn.png')}>
              <Text style={styles.InfoText}>
                { this.transformTime(this.props.time) }
              </Text>
            </ImageBackground>

          </ImageBackground>
        );
    }
}

Header.propTypes = {
    time: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired,
    usedHoles: PropTypes.instanceOf(Set).isRequired,
    holes: PropTypes.arrayOf(
        PropTypes.instanceOf(Hole).isRequired
    ).isRequired,
    setTime: PropTypes.func.isRequired,
    countDown: PropTypes.func.isRequired,
    setScore: PropTypes.func.isRequired
};

const WINDOW_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
    background: {
        width: WINDOW_WIDTH,
        height: WINDOW_WIDTH * 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    startButton: {
        backgroundColor: '#ddd',
        marginHorizontal: 40,
        bottom: 50,
    },
    InfoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    InfoButton: {
        width: 100,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 50,
    },
    InfoText: {
        fontSize: 20,
    },
});


export default Header;
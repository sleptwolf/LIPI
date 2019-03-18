import React from 'react';
import {
  View,
  Animated,
  Easing,
  ImageBackground,
  StatusBar,
  Dimensions,
  ViewPagerAndroid
} from 'react-native';

import Header from './Header';
import BarakhariButton from './BarakhariButton';

import LottieView from 'lottie-react-native';

const { width, height } = Dimensions.get('window');

const topImg = [
  require('../assets/consonants/1.png'),
  require('../assets/consonants/2.png'),
  require('../assets/consonants/3.png'),
  require('../assets/consonants/4.png')
];

const btmImg = [
  require('../assets/vowels/1.png'),
  require('../assets/vowels/2.png'),
  require('../assets/vowels/3.png'),
  require('../assets/vowels/4.png'),
  require('../assets/vowels/5.png'),
  require('../assets/vowels/6.png'),
  require('../assets/vowels/7.png'),
  require('../assets/vowels/8.png'),
  require('../assets/vowels/9.png'),
  require('../assets/vowels/10.png'),
  require('../assets/vowels/11.png'),
  require('../assets/vowels/12.png')
];

const finalImg = [];

class Barakhari extends React.Component {
  constructor() {
    super();
    this.state = {
      i: null,
      j: null,
      topCharLeft: null,
      disableButtons: false
    };
    this.animatedValue = new Animated.Value(0);
    this.animatedValue2 = new Animated.Value(0);
    this.animatedProgress = new Animated.Value(0);
  }

  componentWillMount() {
    StatusBar.setHidden(true);
  }

  // for initiating flow animation only after the view loads
  progress() {
    Animated.timing(this.animatedProgress, {
      toValue: 1,
      duration: 3000,
      easing: Easing.ease
    }).start();
  }

  // for dropping characters from top view
  drop(x, y) {
    this.animatedValue.setValue(0);
    this.setState({ i: x, topCharLeft: y }, () => {
      Animated.timing(this.animatedValue, {
        toValue: 1,
        duration: 500,
        easing: Easing.ease
      }).start();
    });
  }

  // for lifting characters from btm view
  lift(x, y) {
    this.animatedValue2.setValue(0);
    this.setState({ j: x, btmCharLeft: y }, () => {
      Animated.timing(this.animatedValue2, {
        toValue: 1,
        duration: 500,
        easing: Easing.ease
      }).start();
    });
  }

  render() {
    const { goBack } = this.props.navigation;
    const top = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, height * 0.3]
    });

    const left = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, this.state.topCharLeft]
    });

    const btmTop = this.animatedValue2.interpolate({
      inputRange: [0, 1],
      outputRange:
        this.state.j < 17 ? [0, -height * 0.325] : [0, -height * 0.475]
    });

    const btmLeft = this.animatedValue2.interpolate({
      inputRange: [0, 1],
      outputRange: [0, this.state.btmCharLeft]
    });
    const flowProgress = this.animatedProgress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1]
    });

    return (
      <ImageBackground
        source={require('../assets/bg/bg_display.png')}
        style={{ width: '100%', height: '100%' }}
      >
        <Header
          onPressHome={() => this.props.navigation.navigate('ChoicePage')}
          onPressBack={() => goBack()}
        />
        {/* Main container */}
        <View
          style={{
            height: '100%',
            width: '100%'
          }}
        >
          {/* top container */}
          <View
            style={{
              height: '10%',
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly'
            }}
          >
            <BarakhariButton
              style={
                this.state.i == 1
                  ? {
                      top,
                      left
                    }
                  : {}
              }
              onPress={() => this.drop(1, -13)}
              disabled={this.state.disableButtons}
              source={topImg[0]}
            />
            <BarakhariButton
              style={
                this.state.i == 2
                  ? {
                      top,
                      left
                    }
                  : {}
              }
              onPress={() => this.drop(2, -96)}
              disabled={this.state.disableButtons}
              source={topImg[1]}
            />
            <BarakhariButton
              style={
                this.state.i == 3
                  ? {
                      top,
                      left
                    }
                  : {}
              }
              onPress={() => this.drop(3, -177)}
              disabled={this.state.disableButtons}
              source={topImg[2]}
            />
            <BarakhariButton
              style={
                this.state.i == 4
                  ? {
                      top,
                      left
                    }
                  : {}
              }
              onPress={() => this.drop(4, -259)}
              disabled={this.state.disableButtons}
              source={topImg[3]}
            />
          </View>
          {/* middle container with swiper */}
          <ViewPagerAndroid
            style={{
              height: '50%',
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              position: 'absolute',
              zIndex: 1,
              top: '10%'
            }}
            onPageSelected={e => {
              if (e.nativeEvent.position === 1) {
                this.progress();
                this.setState({ disableButtons: true });
              } else if (e.nativeEvent.position === 0) {
                this.setState({ disableButtons: false });
                this.animatedProgress.setValue(0);
              }
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly'
              }}
              key='1'
            >
              <View style={{ height: 51, width: 51 }} />
              <View style={{ height: 51, width: 51 }} />
              <View style={{ height: 51, width: 51 }} />
              <View style={{ height: 51, width: 51 }} />
              <View style={{ height: 51, width: 51 }} />
            </View>
            <View
              style={{
                height: '100%',
                width: '100%',
                backgroundColor: 'white',
                alignSelf: 'center',
                borderWidth: 5,
                padding: 10
              }}
              key='2'
            >
              <LottieView
                source={require('./comp1.json')}
                style={{ height: 80, width: 80 }}
                progress={flowProgress}
              />
            </View>
          </ViewPagerAndroid>
          {/* btm container */}
          <View
            style={{
              height: '30%',
              width: '100%',
              top: '50%'
            }}
          >
            <View
              style={{
                height: '50%',
                width: '98%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly'
              }}
            >
              <BarakhariButton
                style={
                  this.state.j === 11 ? { top: btmTop, left: btmLeft } : {}
                }
                onPress={() => this.lift(11, 148)}
                disabled={this.state.disableButtons}
                source={btmImg[0]}
              />
              <BarakhariButton
                style={
                  this.state.j === 12 ? { top: btmTop, left: btmLeft } : {}
                }
                onPress={() => this.lift(12, 91)}
                disabled={this.state.disableButtons}
                source={btmImg[1]}
              />
              <BarakhariButton
                style={
                  this.state.j === 13 ? { top: btmTop, left: btmLeft } : {}
                }
                onPress={() => this.lift(13, 31)}
                disabled={this.state.disableButtons}
                source={btmImg[2]}
              />
              <BarakhariButton
                style={
                  this.state.j === 14 ? { top: btmTop, left: btmLeft } : {}
                }
                onPress={() => this.lift(14, -24)}
                disabled={this.state.disableButtons}
                source={btmImg[3]}
              />
              <BarakhariButton
                style={
                  this.state.j === 15 ? { top: btmTop, left: btmLeft } : {}
                }
                onPress={() => this.lift(15, -82)}
                disabled={this.state.disableButtons}
                source={btmImg[4]}
              />
              <BarakhariButton
                style={
                  this.state.j === 16 ? { top: btmTop, left: btmLeft } : {}
                }
                onPress={() => this.lift(16, -139)}
                disabled={this.state.disableButtons}
                source={btmImg[5]}
              />
            </View>
            <View
              style={{
                height: '50%',
                width: '98%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly'
              }}
            >
              <BarakhariButton
                style={
                  this.state.j === 17 ? { top: btmTop, left: btmLeft } : {}
                }
                onPress={() => this.lift(17, 148)}
                disabled={this.state.disableButtons}
                source={btmImg[6]}
              />
              <BarakhariButton
                style={
                  this.state.j === 18 ? { top: btmTop, left: btmLeft } : {}
                }
                onPress={() => this.lift(18, 91)}
                disabled={this.state.disableButtons}
                source={btmImg[7]}
              />
              <BarakhariButton
                style={
                  this.state.j === 19 ? { top: btmTop, left: btmLeft } : {}
                }
                onPress={() => this.lift(19, 21)}
                disabled={this.state.disableButtons}
                source={btmImg[8]}
              />
              <BarakhariButton
                style={
                  this.state.j === 20 ? { top: btmTop, left: btmLeft } : {}
                }
                onPress={() => this.lift(20, -24)}
                disabled={this.state.disableButtons}
                source={btmImg[9]}
              />
              <BarakhariButton
                style={
                  this.state.j === 21 ? { top: btmTop, left: btmLeft } : {}
                }
                onPress={() => this.lift(21, -82)}
                disabled={this.state.disableButtons}
                source={btmImg[10]}
              />

              <BarakhariButton
                style={
                  this.state.j === 22 ? { top: btmTop, left: btmLeft } : {}
                }
                onPress={() => this.lift(22, -139)}
                disabled={this.state.disableButtons}
                source={btmImg[11]}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export { Barakhari };

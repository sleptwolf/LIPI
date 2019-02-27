import React from 'react';
import {
  View,
  TouchableOpacity,
  Animated,
  Easing,
  Text,
  ImageBackground,
  StatusBar,
  Dimensions,
  PanResponder
} from 'react-native';
import Header from './Header';

const { width, height } = Dimensions.get('window');

class Barakhari extends React.Component {
  constructor() {
    super();

    this.animatedValue = new Animated.Value(0);
    this.animatedValue2 = new Animated.Value(0);

    this.drop = this.drop.bind(this);
    this.lift = this.lift.bind(this);

    this.panResponder;

    this.state = {
      i: null,
      j: null,
      topCharLeft: null
    };
  }

  static navigationOptions = {
    headerVisible: false,
    header: null
  };

  componentDidMount() {
    StatusBar.setHidden(true);
    // this.panResponder = PanResponder.create({
    //   onMoveShouldSetPanResponder: () => true,
    //   onMoveShouldSetPanResponderCapture: () => true,

    //   onPanResponderMove: Animated.event([null, {dx: this.translateX}]),
    //   onPanResponderRelease: (e, {vx, dx}) => {
    //     const screenWidth = Dimensions.get('window').width;
    //     if(Math.abs(vx) >= 0.5 || Math.abs(dx) >= 0.5 * screenWidth) {
    //       Animated.timing(this.translateX, {
    //         toValue: dx > 0 ? screenWidth : -screenWidth,
    //         duration: 200
    //       }).start(this.props.omDismiss)
    //     } else {
    //       Animated.spring(this.translateX, {
    //         toValue: 0,
    //         duration: 200,
    //         bounciness: 10
    //       }).start()
    //     }
    //   }
    // });
  }

  drop(x, y) {
    console.log('b4 press:', this.state.i);
    this.animatedValue.setValue(0);
    this.setState({ i: x, topCharLeft: y }, () => {
      Animated.timing(this.animatedValue, {
        toValue: 1,
        duration: 500,
        easing: Easing.ease
      }).start(() => console.log('after press:', this.state.i));
    });
  }

  lift(x, y) {
    this.animatedValue2.setValue(0);
    this.setState({ j: x, btmCharLeft: y}, () => {
      Animated.timing(this.animatedValue2, {
        toValue: 1,
        duration: 500,
        easing: Easing.ease
      }).start();
    })
  }

  render() {
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
      outputRange: this.state.j < 17 ? [0, -height* 0.325] : [0, -height * 0.475]
    })

    const btmLeft = this.animatedValue2.interpolate({
      inputRange: [0, 1],
      outputRange: [0, this.state.btmCharLeft]
    })

    return (
      <ImageBackground
        source={require('../assets/bg/bg_display.png')}
        style={{ width: '100%', height: '100%' }}
      >
        <Header
          onPressHome={() => this.props.navigation.navigate('ChoicePage')}
          onPressBack={() => goBack()}
        />
        <View
          style={{
            height: '100%',
            width: '100%'
            // borderWidth: 1,
            // borderColor: 'red'
          }}
        >
          <View
            style={{
              height: '10%',
              width: '100%',
              borderWidth: 1,
              borderColor: 'green',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly'
            }}
          >
            <Animated.View
              style={
                this.state.i == 1
                  ? {
                      top,
                      left
                    }
                  : {}
              }
            >
              <TouchableOpacity onPress={() => this.drop(1, 0)}>
                <Animated.View
                  style={{ height: 50, width: 50, backgroundColor: 'red' }}
                />
              </TouchableOpacity>
            </Animated.View>

            <Animated.View
              style={
                this.state.i == 2
                  ? {
                      top,
                      left
                    }
                  : {}
              }
            >
              <TouchableOpacity onPress={() => this.drop(2, -82)}>
                <Animated.View
                  style={{ height: 50, width: 50, backgroundColor: 'green' }}
                />
              </TouchableOpacity>
            </Animated.View>

            <Animated.View
              style={
                this.state.i == 3
                  ? {
                      top,
                      left
                    }
                  : {}
              }
            >
              <TouchableOpacity onPress={() => this.drop(3, -164)}>
                <Animated.View
                  style={{ height: 50, width: 50, backgroundColor: 'blue' }}
                />
              </TouchableOpacity>
            </Animated.View>

            <Animated.View
              style={
                this.state.i == 4
                  ? {
                      top,
                      left
                    }
                  : {}
              }
            >
              <TouchableOpacity onPress={() => this.drop(4, -246)}>
                <Animated.View
                  style={{ height: 50, width: 50, backgroundColor: 'yellow' }}
                />
              </TouchableOpacity>
            </Animated.View>
          </View>
          {/* middle container */}
          <Animated.View
            style={{
              height: '50%',
              width: '100%',
              borderColor: 'red',
              borderWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}
          >
            <View style={{ height: 51, width: 51, borderWidth: 1,  }}/>
            <View style={{ height: 51, width: 51, borderWidth: 1,  }}/>
            <View style={{ height: 51, width: 51, borderWidth: 1,  }}/>
            <View style={{ height: 51, width: 51, borderWidth: 1,  }}/>
          </Animated.View>
          {/* bottom container */}
          <View
            style={{
              height: '30%',
              width: '100%',
              borderColor: 'blue',
              borderWidth: 1
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
              <Animated.View style={this.state.j === 11 ? { top: btmTop, left: btmLeft} : {}}>
                <TouchableOpacity onPress={() => this.lift(11, 188)}>
                  <Animated.View
                    style={{ height: 50, width: 50, backgroundColor: 'yellow' }}
                  />
                </TouchableOpacity>
              </Animated.View>

              <Animated.View style={this.state.j === 12 ? { top: btmTop, left: btmLeft} : {}}>
                <TouchableOpacity onPress={() => this.lift(12, 131)}>
                  <Animated.View
                    style={{ height: 50, width: 50, backgroundColor: 'yellow' }}
                  />
                </TouchableOpacity>
              </Animated.View>

              <Animated.View style={this.state.j === 13 ? { top: btmTop, left: btmLeft} : {}}>
                <TouchableOpacity onPress={() => this.lift(13, 74)}>
                  <Animated.View
                    style={{ height: 50, width: 50, backgroundColor: 'yellow' }}
                  />
                </TouchableOpacity>
              </Animated.View>

              <Animated.View style={this.state.j === 14 ? { top: btmTop, left: btmLeft} : {}}>
                <TouchableOpacity onPress={() => this.lift(14, 17)}>
                  <Animated.View
                    style={{ height: 50, width: 50, backgroundColor: 'yellow' }}
                  />
                </TouchableOpacity>
              </Animated.View>

              <Animated.View style={this.state.j === 15 ? { top: btmTop, left: btmLeft} : {}}>
                <TouchableOpacity onPress={() => this.lift(15, -40)}>
                  <Animated.View
                    style={{ height: 50, width: 50, backgroundColor: 'yellow' }}
                  />
                </TouchableOpacity>
              </Animated.View>

              <Animated.View style={this.state.j === 16 ? { top: btmTop, left: btmLeft} : {}}>
                <TouchableOpacity onPress={() => this.lift(16, -97)}>
                  <Animated.View
                    style={{ height: 50, width: 50, backgroundColor: 'yellow' }}
                  />
                </TouchableOpacity>
              </Animated.View>
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
              <Animated.View style={this.state.j === 17 ? { top: btmTop, left: btmLeft} : {}}>
                <TouchableOpacity onPress={() => this.lift(17, 188)}>
                  <Animated.View
                    style={{ height: 50, width: 50, backgroundColor: 'yellow' }}
                  />
                </TouchableOpacity>
              </Animated.View>

              <Animated.View style={this.state.j === 18 ? { top: btmTop, left: btmLeft} : {}}>
                <TouchableOpacity onPress={() => this.lift(18, 131)}>
                  <Animated.View
                    style={{ height: 50, width: 50, backgroundColor: 'yellow' }}
                  />
                </TouchableOpacity>
              </Animated.View>

              <Animated.View style={this.state.j === 19 ? { top: btmTop, left: btmLeft} : {}}>
                <TouchableOpacity onPress={() => this.lift(19, 74)}>
                  <Animated.View
                    style={{ height: 50, width: 50, backgroundColor: 'yellow' }}
                  />
                </TouchableOpacity>
              </Animated.View>

              <Animated.View style={this.state.j === 20 ? { top: btmTop, left: btmLeft} : {}}>
                <TouchableOpacity onPress={() => this.lift(20, 17)}>
                  <Animated.View
                    style={{ height: 50, width: 50, backgroundColor: 'yellow' }}
                  />
                </TouchableOpacity>
              </Animated.View>

              <Animated.View style={this.state.j === 21 ? { top: btmTop, left: btmLeft} : {}}>
                <TouchableOpacity onPress={() => this.lift(21, -40)}>
                  <Animated.View
                    style={{ height: 50, width: 50, backgroundColor: 'yellow' }}
                  />
                </TouchableOpacity>
              </Animated.View>

              <Animated.View style={this.state.j === 22 ? { top: btmTop, left: btmLeft} : {}}>
                <TouchableOpacity onPress={() => this.lift(22, -97)}>
                  <Animated.View
                    style={{ height: 50, width: 50, backgroundColor: 'yellow' }}
                  />
                </TouchableOpacity>
              </Animated.View>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export { Barakhari };

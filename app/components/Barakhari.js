import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  StatusBar,
  ImageBackground,
  Dimensions,
  Animated,
  Easing,
  PanResponder
} from 'react-native';
import LottieView from 'lottie-react-native';

import Header from './Header';

class Barakhari extends React.Component {
  constructor(props) {
    super(props);
    // this.moveTopChar = this.moveTopChar.bind(this);

    this.animatedOpacity = new Animated.Value(0);
    this.animatedTopChar = new Animated.Value(0);
    this.animatedBtmChar = new Animated.Value(0);

    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) =>
        console.log('pan moved', gestureState)
    });
    this.state = {
      i: 0
    };
  }

  moveTopChar(x) {
    this.setState({ i: x });
    this.animatedTopChar.setValue(0);
    Animated.timing(this.animatedTopChar, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear
    }).start();
  }

  show() {
    this.animatedOpacity.setValue(0);

    Animated.timing(this.animatedOpacity, {
      toValue: 1,
      duration: 2000,
      easing: Easing.ease,
      delay: 300
    }).start();
  }
  componentDidMount() {
    StatusBar.setHidden(true);
  }
  render() {
    const { bg } = styles;
    const { width, height } = Dimensions.get('window');
    const { goBack } = this.props.navigation;

    const opacity = this.animatedOpacity.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1]
    });

    const topTopChar = this.animatedTopChar.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 100]
    });

    const leftTopChar = this.animatedTopChar.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -50]
    });

    return (
      <ImageBackground
        source={require('../assets/bg/traditionalbg.png')}
        style={bg}
        imageStyle={{
          width: width + 4,
          height: height + 2,
          resizeMode: 'stretch',
          left: -2
        }}
      >
        <Header
          onPressHome={() => this.props.navigation.navigate('ChoicePage')}
          onPressBack={() => goBack()}
        />
        {/* container main */}
        <View style={{ borderWidth: 1, marginHorizontal: 2, height: '90%' }}>
          {/* top container for ka kha */}
          <View
            style={{
              borderWidth: 1,
              height: '15%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Animated.View
              style={{
                borderWidth: 1,
                top: this.state.i !== 1 ? 0 : topTopChar,
                left: this.state.i !== 1 ? 0 : leftTopChar
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  this.moveTopChar(1);
                }}
              >
                <Animated.Image
                  source={require('../assets/vowels/1.png')}
                  style={{
                    resizeMode: 'contain',
                    height: 50,
                    width: 50
                  }}
                />
              </TouchableOpacity>
            </Animated.View>

            <Animated.View
              style={{
                borderWidth: 1,
                top: this.state.i !== 2 ? 0 : topTopChar,
                left: this.state.i !== 2 ? 0 : leftTopChar
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  this.moveTopChar(2);
                }}
              >
                <Animated.Image
                  source={require('../assets/vowels/1.png')}
                  style={{
                    resizeMode: 'contain',
                    height: 50,
                    width: 50
                  }}
                />
              </TouchableOpacity>
            </Animated.View>

            {/* <Animated.View
              style={{
                borderWidth: 1
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  this.setState({ i: 1 });
                  this.moveTopChar();
                }}
              >
                <Animated.Image
                  source={require('../assets/vowels/1.png')}
                  style={{
                    resizeMode: 'contain',
                    height: 50,
                    width: 50,
                    top: this.state.i === 1 ? topTopChar : 0,
                    left: this.state.i === 1 ? leftTopChar : 0
                  }}
                />
              </TouchableOpacity>
            </Animated.View> */}
          </View>

          {/* mid container */}
          <View
            style={{
              borderWidth: 1,
              height: '60%',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <LottieView
              source={require('./blast.json')}
              loop={false}
              ref={blast => {
                this.blast = blast;
              }}
              style={{}}
            />
            <Animated.View
              style={{
                backgroundColor: 'white',
                opacity,
                width: 80,
                height: 80
              }}
            />
          </View>

          {/* btm container for a aa */}
          <View style={{ borderWidth: 1, height: '25%' }}>
            <View
              style={{
                flexDirection: 'row',
                borderWidth: 1,
                height: '50%',
                alignItems: 'center',
                justifyContent: 'space-evenly'
              }}
            >
              <View style={{ height: 50, width: 50 }}>
                <Image
                  source={require('../assets/vowels/1.png')}
                  style={{ resizeMode: 'contain', height: 50, width: 50 }}
                />
              </View>
              <View style={{ height: 50, width: 50 }}>
                <Image
                  source={require('../assets/vowels/1.png')}
                  style={{ resizeMode: 'contain', height: 50, width: 50 }}
                />
              </View>
              <View style={{ height: 50, width: 50 }}>
                <Image
                  source={require('../assets/vowels/1.png')}
                  style={{ resizeMode: 'contain', height: 50, width: 50 }}
                />
              </View>
              <View style={{ height: 50, width: 50 }}>
                <Image
                  source={require('../assets/vowels/1.png')}
                  style={{ resizeMode: 'contain', height: 50, width: 50 }}
                />
              </View>
              <View style={{ height: 50, width: 50 }}>
                <Image
                  source={require('../assets/vowels/1.png')}
                  style={{ resizeMode: 'contain', height: 50, width: 50 }}
                />
              </View>
              <View style={{ height: 50, width: 50 }}>
                <Image
                  source={require('../assets/vowels/1.png')}
                  style={{ resizeMode: 'contain', height: 50, width: 50 }}
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                borderWidth: 1,
                height: '50%',
                alignItems: 'center',
                justifyContent: 'space-evenly'
              }}
            >
              <View style={{ height: 50, width: 50 }}>
                <Image
                  source={require('../assets/vowels/1.png')}
                  style={{ resizeMode: 'contain', height: 50, width: 50 }}
                />
              </View>
              <View style={{ height: 50, width: 50 }}>
                <Image
                  source={require('../assets/vowels/1.png')}
                  style={{ resizeMode: 'contain', height: 50, width: 50 }}
                />
              </View>
              <View style={{ height: 50, width: 50 }}>
                <Image
                  source={require('../assets/vowels/1.png')}
                  style={{ resizeMode: 'contain', height: 50, width: 50 }}
                />
              </View>
              <View style={{ height: 50, width: 50 }}>
                <Image
                  source={require('../assets/vowels/1.png')}
                  style={{ resizeMode: 'contain', height: 50, width: 50 }}
                />
              </View>
              <View style={{ height: 50, width: 50 }}>
                <Image
                  source={require('../assets/vowels/1.png')}
                  style={{ resizeMode: 'contain', height: 50, width: 50 }}
                />
              </View>
              <View style={{ height: 50, width: 50 }}>
                <Image
                  source={require('../assets/vowels/1.png')}
                  style={{ resizeMode: 'contain', height: 50, width: 50 }}
                />
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export { Barakhari };

const styles = {
  bg: {
    flex: 1
  }
};

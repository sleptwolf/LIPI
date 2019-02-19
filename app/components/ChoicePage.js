import React from 'react';
import {
  View,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  Image,
  Dimensions,
  Animated,
  Easing
} from 'react-native';

const { width, height } = Dimensions.get('window');

class ChoicePage extends React.Component {
  constructor(props) {
    super(props);
    this.animate = this.animate.bind(this);
    this.animatedValue = new Animated.Value(0);
    this.animatedValue1 = new Animated.Value(0);
    this.animatedValue2 = new Animated.Value(0);
    this.animatedValue3 = new Animated.Value(0);
    this.animatedValue4 = new Animated.Value(0);
  }

  static navigationOptions = {
    headerStyle: {
      backgroundColor: 'transparent'
    }
  };
  state = {};

  componentDidMount() {
    StatusBar.setHidden(true);
    this.setState({ isHidden: false });
    this.animate();
  }

  animate() {
    this.animatedValue.setValue(0);
    this.animatedValue1.setValue(0);
    Animated.parallel([
      Animated.timing(this.animatedValue, {
        toValue: 1,
        duration: 800,
        easing: Easing.linear
      }),
      Animated.timing(this.animatedValue1, {
        toValue: 1,
        duration: 800,
        // delay: 1000,
        easing: Easing.linear
      })
    ]).start(() => this.animate());
  }

  render() {
    const { containerStyle, bg } = styles;

    // rotate garnu paryo
    const rotate = this.animatedValue.interpolate({
      inputRange: [0, 0.25, 0.5, 0.75, 1],
      outputRange: ['0deg', '-15deg', '0deg', '15deg', '0deg']
    });

    const jump = this.animatedValue.interpolate({
      inputRange: [0, 0.25, 0.5, 0.75, 1],
      outputRange: [0, -10, 0, -10, 0]
    });

    const left = this.animatedValue1.interpolate({
      inputRange: [0, 0.25, 0.5, 0.75, 1],
      outputRange: [0, -5, 0, 5, 0]
    });

    const rotateLeft = this.animatedValue2.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '-15deg']
    });

    return (
      <View style={containerStyle}>
        <ImageBackground
          source={require('../assets/bg/learnbg.png')}
          style={bg}
          imageStyle={{
            width: width + 2,
            height: height + 2,
            resizeMode: 'stretch'
          }}
        >
          <View style={{ height: '30%', alignItems: 'flex-end' }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('MainPage');
              }}
            >
              <Image
                source={require('../assets/buttons/learn.png')}
                style={{
                  width: width * 0.45,
                  height: height * 0.2,
                  resizeMode: 'contain',
                  marginTop: 70
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', height: '20%', padding: 30 }}>
            <Animated.Image
              source={require('../assets/char/C3.png')}
              style={{
                height: 50,
                width: 50,
                transform: [{ rotate: rotate }],
                resizeMode: 'contain',
                top: jump,
                left
              }}
            />
            <Animated.Image
              source={require('../assets/char/C2.png')}
              style={{
                height: 50,
                width: 50,
                transform: [{ rotate: rotate }],
                resizeMode: 'contain',
                top: jump,
                left
              }}
            />
            <Animated.Image
              source={require('../assets/char/C6.png')}
              style={{
                height: 50,
                width: 50,
                transform: [{ rotate: rotate }],
                resizeMode: 'contain',
                top: jump,
                left
              }}
            />
            <Animated.Image
              source={require('../assets/char/C5.png')}
              style={{
                height: 50,
                width: 50,
                transform: [{ rotate: rotate }],
                resizeMode: 'contain',
                top: jump,
                left
              }}
            />
            <Animated.Image
              source={require('../assets/char/C4.png')}
              style={{
                height: 50,
                width: 50,
                transform: [{ rotate: rotate }],
                resizeMode: 'contain',
                top: jump,
                left
              }}
            />
            <Animated.Image
              source={require('../assets/char/C1.png')}
              style={{
                height: 50,
                width: 50,
                transform: [{ rotate: rotate }],
                resizeMode: 'contain',
                top: jump,
                left
              }}
            />
          </View>
          <View style={{ height: '50%' }}>
            <TouchableOpacity>
              <Image
                source={require('../assets/buttons/play.png')}
                style={{
                  width: width * 0.45,
                  height: height * 0.2,
                  resizeMode: 'contain',
                  marginTop: 30
                }}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export { ChoicePage };

const styles = {
  containerStyle: {
    flex: 1
  },
  bg: {
    flex: 1,
    alignItems: 'center'
  }
};

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
    // this.animate();
  }

  animate() {
    this.animatedValue.setValue(0);
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear
    }).start(() => this.props.navigation.navigate('MainPage'));
  }

  render() {
    const { containerStyle, bg } = styles;

    // rotate garnu paryo
    const rotate = this.animatedValue.interpolate({
      inputRange: [0, 0.33, 0.66, 1],
      outputRange: ['0deg', '5deg', '-5deg', '0deg']
    });

    return (
      <View style={containerStyle}>
        <ImageBackground
          source={require('../assets/bg/learnbg.png')}
          style={bg}
          imageStyle={{ width: width + 2, height: height + 2, resizeMode: 'stretch' }}
        >
          <View style={{ height: '30%',  alignItems: 'flex-end' }}>
            <TouchableOpacity
              onPress={() => {
                this.animate();
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
          <View style={{ flexDirection: 'row', height: '20%', padding: 30,  }}>
            <Animated.Image
              source={require('../assets/char/C3.png')}
              style={{
                height: 50,
                width: 50,
                transform: [{ rotate: rotate }],
                resizeMode: 'contain'
              }}
            />
            <Animated.Image
              source={require('../assets/char/C2.png')}
              style={{
                height: 50,
                width: 50,
                transform: [{ rotate: rotate }],
                resizeMode: 'contain'
              }}
            />
            <Animated.Image
              source={require('../assets/char/C6.png')}
              style={{
                height: 50,
                width: 50,
                transform: [{ rotate: rotate }],
                resizeMode: 'contain'
              }}
            />
            <Animated.Image
              source={require('../assets/char/C5.png')}
              style={{
                height: 50,
                width: 50,
                transform: [{ rotate: rotate }],
                resizeMode: 'contain'
              }}
            />
            <Animated.Image
              source={require('../assets/char/C4.png')}
              style={{
                height: 50,
                width: 50,
                transform: [{ rotate: rotate }],
                resizeMode: 'contain'
              }}
            />
            <Animated.Image
              source={require('../assets/char/C1.png')}
              style={{
                height: 50,
                width: 50,
                transform: [{ rotate: rotate }],
                resizeMode: 'contain'
              }}
            />
          </View>
          <View style={{ height: '50%',  }}>
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

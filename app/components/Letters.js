import React from 'react';
import {
  ImageBackground,
  StatusBar,
  View,
  TouchableOpacity,
  Text,
  Image,
  Dimensions,
  Animated,
  Easing
} from 'react-native';
import Header from './Header';

const { width, height } = Dimensions.get('window');

class Letters extends React.Component {
  constructor() {
    super();
    this.animate = this.animate.bind(this);
    this.animatedValue = new Animated.Value(0);
  }
  static navigationOptions = {
    headerVisible: false,
    gesturesEnabled: false,
    header: null
  };

  componentDidMount() {
    StatusBar.setHidden(true);
    this.setState({ isHidden: false });
    this.animate();
  }

  animate() {
    this.animatedValue.setValue(0);
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 4000,
      easing: Easing.linear
    }).start(() => this.animate());
  }

  render() {
    const { goBack } = this.props.navigation;
    const move = this.animatedValue.interpolate({
      inputRange: [0, 0.25, 0.5, 0.75, 1],
      outputRange: [0, -width * 0.1, 0, width * 0.1, 0]
    });
    return (
      <ImageBackground
        source={require('../assets/bg/bg_main.png')}
        style={styles.bg}
      >
        <Header
          onPressHome={() => this.props.navigation.navigate('ChoicePage')}
          onPressBack={() => goBack()}
        />
        <View style={styles.options}>
          <Animated.View style={{ right: move }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Vowels')}
            >
              <Image
                source={require('../assets/buttons/vowels2.png')}
                style={{
                  height: height * 0.1,
                  width: width * 0.4,
                  resizeMode: 'stretch'
                }}
              />
            </TouchableOpacity>
          </Animated.View>
          <Animated.View style={{ left: move }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Consonants')}
            >
              <Image
                source={require('../assets/buttons/consonants.png')}
                style={{
                  height: height * 0.1,
                  width: width * 0.4,
                  resizeMode: 'stretch'
                }}
              />
            </TouchableOpacity>
          </Animated.View>
          <Animated.View style={{ right: move }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Barakhari')}
            >
              <Image
                source={require('../assets/buttons/barakhari.png')}
                style={{
                  height: height * 0.1,
                  width: width * 0.4,
                  resizeMode: 'stretch'
                }}
              />
            </TouchableOpacity>
          </Animated.View>
        </View>
      </ImageBackground>
    );
  }
}

export { Letters };

const styles = {
  bg: {
    flex: 1
  },
  top: {
    flexDirection: 'row',
    padding: 10,
    height: 65
  },
  home: {
    flex: 1,
    marginLeft: '70%'
  },
  back: {
    flex: 1
  },
  options: {
    width: width,
    height: height * 0.7,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    // borderWidth: 1,
    marginTop: height * 0.05
  }
};

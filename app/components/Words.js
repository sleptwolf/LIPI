import React from 'react';
import {
  ImageBackground,
  StatusBar,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  Animated,
  Easing
} from 'react-native';
import Header from './Header';

const { width, height } = Dimensions.get('window');

class Words extends React.Component {
  constructor() {
    super();
    this.animate = this.animate.bind(this);
    this.animatedValue = new Animated.Value(0);
  }
  static navigationOptions = {
    headerVisible: false,
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
    const { bg, top, home, back, container } = styles;
    const { goBack } = this.props.navigation;
    const move = this.animatedValue.interpolate({
      inputRange: [0, 0.25, 0.5, 0.75, 1],
      outputRange: [0, -width * 0.1, 0, width * 0.1, 0]
    });
    return (
      <ImageBackground source={require('../assets/bg/TOPICbg.png')} style={bg}>
        <Header
          onPressHome={() => this.props.navigation.navigate('ChoicePage')}
          onPressBack={() => goBack()}
        />
        <View style={container}>
          <Animated.View style={{ right: move }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Animals')}
            >
              <Image
                source={require('../assets/buttons/animals.png')}
                style={{
                  height: height * 0.2,
                  width: width * 0.4,
                  resizeMode: 'contain'
                }}
              />
            </TouchableOpacity>
          </Animated.View>
          <Animated.View style={{ left: move }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Body')}
            >
              <Image
                source={require('../assets/buttons/body.png')}
                style={{
                  height: height * 0.2,
                  width: width * 0.4,
                  resizeMode: 'contain'
                }}
              />
            </TouchableOpacity>
          </Animated.View>
          <Animated.View style={{ right: move }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Color')}
            >
              <Image
                source={require('../assets/buttons/colors.png')}
                style={{
                  height: height * 0.2,
                  width: width * 0.4,
                  resizeMode: 'contain'
                }}
              />
            </TouchableOpacity>
          </Animated.View>
          <Animated.View style={{ left: move }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Family')}
            >
              <Image
                source={require('../assets/buttons/family.png')}
                style={{
                  height: height * 0.2,
                  width: width * 0.4,
                  resizeMode: 'contain'
                }}
              />
            </TouchableOpacity>
          </Animated.View>
        </View>
      </ImageBackground>
    );
  }
}

export { Words };

const styles = {
  bg: {
    flex: 1
  },
  container: {
    height: '75%',
    justifyContent: 'space-around',
    alignItems: 'center'
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
  }
};

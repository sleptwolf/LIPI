import React, { Component } from 'react';
import {
  View,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  BackHandler,
  Animated,
  Easing,
  Image
} from 'react-native';
import Header from './Header';

const { width, height } = Dimensions.get('window');
class MainPage extends Component {
  constructor() {
    super();
    this.animate = this.animate.bind(this);
    this.animatedValue = new Animated.Value(0);
  }
  static navigationOptions = {
    header: null
  };
  componentDidMount() {
    StatusBar.setHidden(true);
    this.setState({ isHidden: false });
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    this.animate();
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }
  handleBackButton() {
    return true;
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
    const { containerStyle, bgimg, top, home, back } = styles;
    const { goBack } = this.props.navigation;
    const move = this.animatedValue.interpolate({
      inputRange: [0, 0.25, 0.5, 0.75, 1],
      outputRange: [0, -width * 0.1, 0, width * 0.1, 0]
    });

    return (
      <View style={containerStyle}>
        <ImageBackground
          source={require('../assets/bg/bg_main.png')}
          style={[bgimg, { width: width + 2, height: height + 2 }]}
          imageStyle={{ resizeMode: 'stretch' }}
        >
          <Header
            onPressHome={() => this.props.navigation.navigate('ChoicePage')}
            onPressBack={() => goBack()}
          />

          <View
            style={{ marginTop: height * 0.05, flex: 1, paddingHorizontal: 20 }}
          >
            <Animated.View style={{ left: move }}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Letters')}
              >
                <Image
                  source={require('../assets/buttons/letters.png')}
                  style={{
                    width: width * 0.4,
                    height: height * 0.15,
                    resizeMode: 'contain',
                    margin: 20
                  }}
                />
              </TouchableOpacity>
            </Animated.View>

            <Animated.View style={{ right: move }}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Numbers')}
              >
                <Image
                  source={require('../assets/buttons/numbers.png')}
                  style={{
                    width: width * 0.4,
                    height: height * 0.15,
                    resizeMode: 'contain',
                    margin: 20
                  }}
                />
              </TouchableOpacity>
            </Animated.View>

            <Animated.View style={{ left: move }}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Words')}
              >
                <Image
                  source={require('../assets/buttons/words.png')}
                  style={{
                    width: width * 0.4,
                    height: height * 0.15,
                    resizeMode: 'contain',
                    margin: 20
                  }}
                />
              </TouchableOpacity>
            </Animated.View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export { MainPage };

const styles = {
  containerStyle: {},
  bgimg: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center'
    // justifyContent: 'center',
  },
  textStyle: {
    fontSize: 25,
    color: '#ECCF8D',
    fontWeight: 'bold',
    // marginBottom: 25,
    // borderBottomWidth: 1,
    // borderColor: '#ECCF8D',
    textAlign: 'center'
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20
  },
  choiceStyle: {
    fontSize: 20,
    color: '#dde9f8',
    borderBottomWidth: 2,
    borderColor: '#dde9f8',
    alignItems: 'flex-start',
    fontWeight: '600'
  },
  top: {
    flexDirection: 'row',
    padding: 10,
    height: 65,
    zIndex: 1
  },
  home: {
    flex: 1,
    marginLeft: '70%'
  },
  back: {
    flex: 1
  }
};

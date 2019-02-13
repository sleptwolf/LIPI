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
    this.animatedOpacity = new Animated.Value(0);

    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder:(evt, gestureState) => true,
      onPanResponderMove: ( evt, gestureState) => (console.log('pan moved', gestureState))
    });
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
          <View style={{ borderWidth: 1, height: '15%' }}>
            <TouchableOpacity
              onPress={() => {
                this.blast.play();
                this.show();
              }}
            >
              <Animated.Image
                source={require('../assets/vowels/1.png')}
                style={{ resizeMode: 'contain', height: 50, width: 50 }}
              />
            </TouchableOpacity>
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

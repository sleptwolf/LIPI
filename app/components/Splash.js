import React from 'react';
import {
  View,
  Animated,
  Image,
  Easing,
  Dimensions,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import LottieView from 'lottie-react-native';

class Splash extends React.Component {
  constructor() {
    super();
    this.animatedValueLogo = new Animated.Value(0);
    this.animatedValueSky = new Animated.Value(0);
    this.animatedValueHill = new Animated.Value(0);
    this.animatedValueSun = new Animated.Value(0);
    this.animatedValueMoon = new Animated.Value(0);
    this.animatedValueHouse = new Animated.Value(0);
    this.animatedValueL = new Animated.Value(0);
    this.animatedValueI = new Animated.Value(0);
    this.animatedValueP = new Animated.Value(0);
    this.animatedValueI2 = new Animated.Value(0);
    this.animatedValueButton = new Animated.Value(0);
    this.width = Dimensions.get('window').width;
    this.height = Dimensions.get('window').height;
    this.state = {
      disabled: true,
      autoplay: false
    };
  }
  static navigationOptions = {
    // headerVisible: false,
    header: null
  };

  componentDidMount() {
    StatusBar.setHidden(true);
    this.setState({ isHidden: false });
    this.animate();
  }
  animate() {
    this.animatedValueLogo.setValue(0);
    this.animatedValueSky.setValue(0);
    this.animatedValueHill.setValue(0);
    this.animatedValueSun.setValue(0);
    this.animatedValueMoon.setValue(0);
    this.animatedValueHouse.setValue(0);
    this.animatedValueL.setValue(0);
    this.animatedValueI.setValue(0);
    this.animatedValueP.setValue(0);
    this.animatedValueI2.setValue(0);
    this.animatedValueButton.setValue(0);

    const createAnimation = function(value, duration, easing, delay = 0) {
      return Animated.timing(value, {
        toValue: 1,
        duration,
        easing,
        delay
      });
    };

    Animated.parallel([
      createAnimation(this.animatedValueSky, 800, Easing.ease),
      createAnimation(this.animatedValueHill, 800, Easing.ease),
      createAnimation(this.animatedValueHouse, 1000, Easing.linear, 800),
      createAnimation(this.animatedValueLogo, 4000, Easing.ease, 2100),
      createAnimation(this.animatedValueSun, 2000, Easing.ease, 2300),
      createAnimation(this.animatedValueMoon, 2000, Easing.ease, 4300),
      createAnimation(this.animatedValueL, 700, Easing.ease, 3100),
      createAnimation(this.animatedValueI, 700, Easing.ease, 3900),
      createAnimation(this.animatedValueP, 700, Easing.ease, 4700),
      createAnimation(this.animatedValueI2, 700, Easing.ease, 5500),
      createAnimation(this.animatedValueButton, 500, Easing.linear, 6500)
    ]).start(({ finished }) => {
      this.rotate.play();
      if (finished == true) this.setState({ disabled: false });
    });
  }
  render() {
    //this is for background images
    const posSky = this.animatedValueSky.interpolate({
      inputRange: [0, 1],
      outputRange: [this.height, this.height * 0.2]
    });

    const posHill = this.animatedValueHill.interpolate({
      inputRange: [0, 1],
      outputRange: [-100, 0]
    });

    //this is for star movement
    const marginLeft = this.animatedValueLogo.interpolate({
      inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
      outputRange: [
        -100,
        this.width * 0.25,
        this.width / 2,
        this.width * 0.75,
        this.width,
        this.width * 0.75
      ]
    });
    const top = this.animatedValueLogo.interpolate({
      inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
      outputRange: [50, this.height * 0.7, 150, this.height * 0.7, 150, 50]
    });

    // this is for sun movement
    const sunLeft = this.animatedValueSun.interpolate({
      inputRange: [0, 1],
      outputRange: [-120, this.width * 0.12]
    });
    const sunTop = this.animatedValueSun.interpolate({
      inputRange: [0, 1],
      outputRange: [this.height / 2, this.height * 0.1]
    });

    // this is for moon movement
    const moonLeft = this.animatedValueMoon.interpolate({
      inputRange: [0, 1],
      outputRange: [this.width + 100, this.width * 0.7]
    });
    const moonTop = this.animatedValueMoon.interpolate({
      inputRange: [0, 1],
      outputRange: [this.height / 2, this.height * 0.24]
    });

    // this is for house movement
    const houseLeft = this.animatedValueHouse.interpolate({
      inputRange: [0, 1],
      outputRange: [-this.width, 0]
    });

    //this for moving L
    const opacityL = this.animatedValueL.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1]
    });

    //this for moving I
    const opacityI = this.animatedValueI.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1]
    });

    //this for moving P
    const opacityP = this.animatedValueP.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1]
    });

    //this for moving I2
    const opacityI2 = this.animatedValueI2.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1]
    });

    //this is for button
    const showButton = this.animatedValueButton.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1]
    });

    return (
      <View style={styles.container}>
        {/* sky */}
        <Animated.Image
          style={{
            width: this.width,
            height: this.height,
            bottom: posSky,
            zIndex: 0,
            resizeMode: 'cover'
          }}
          source={require('../assets/splash/splashbg.png')}
        />
        {/* house */}
        <Animated.Image
          style={{
            width: this.width + 2,
            height: this.height * 0.14,
            top: this.height * 0.715,
            zIndex: 1,
            position: 'absolute',
            marginLeft: houseLeft,
            resizeMode: 'stretch'
          }}
          source={require('../assets/splash/house.png')}
        />
        {/* hills */}
        <Animated.Image
          style={{
            width: this.width,
            height: this.height * 0.21,
            bottom: posHill,
            zIndex: 2,
            position: 'absolute',
            resizeMode: 'stretch'
          }}
          source={require('../assets/splash/groundbg.png')}
        />
        <LottieView 
          source={require('./final.json')}
          autoPlay={true}
          loop={false}
        />
        {/* bouncer */}
        {/* <Animated.View
          style={{
            marginLeft,
            top,
            width: this.width * 0.1,
            height: this.height * 0.1,
            zIndex: 1,
            position: 'absolute'
          }}
        >
          <LottieView
            source={require('../assets/splash/twinkle.json')}
            autoPlay={true}
            style={{ height: 150, width: 150 }}
          />
        </Animated.View> */}
        {/* sun */}
        <Animated.View
          style={{
            marginLeft: sunLeft,
            top: sunTop,
            width: this.width * 0.3,
            height: this.height * 0.2,
            zIndex: 1,
            position: 'absolute'
          }}
        >
          <LottieView
            source={require('../assets/splash/sun.json')}
            ref={rotate => {
              this.rotate = rotate;
            }}
          />
        </Animated.View>
        {/* moon */}
        <Animated.Image
          style={{
            marginLeft: moonLeft,
            top: moonTop,
            width: this.width * 0.2,
            height: this.height * 0.15,
            zIndex: 1,
            position: 'absolute',
            resizeMode: 'contain'
          }}
          source={require('../assets/splash/moon.png')}
        />
        {/* this is for L */}
        <Animated.Image
          style={{
            width: this.width * 0.15,
            height: this.height * 0.2,
            zIndex: 1,
            position: 'absolute',
            opacity: opacityL,
            top: this.height * 0.35,
            marginLeft: this.width * 0.24,
            resizeMode: 'contain'
          }}
          source={require('../assets/splash/L.png')}
        />
        {/* this is for I */}
        <Animated.Image
          style={{
            width: this.width * 0.15,
            height: this.height * 0.2,
            zIndex: 1,
            position: 'absolute',
            opacity: opacityI,
            top: this.height * 0.35,
            marginLeft: this.width * 0.36,
            resizeMode: 'contain'
          }}
          source={require('../assets/splash/I.png')}
        />
        {/* this is for P */}
        <Animated.Image
          style={{
            width: this.width * 0.15,
            height: this.height * 0.2,
            zIndex: 1,
            position: 'absolute',
            opacity: opacityP,
            top: this.height * 0.35,
            marginLeft: this.width * 0.49,
            resizeMode: 'contain'
          }}
          source={require('../assets/splash/P.png')}
        />
        {/* this is for I2 */}
        <Animated.Image
          style={{
            width: this.width * 0.15,
            height: this.height * 0.2,
            zIndex: 1,
            position: 'absolute',
            opacity: opacityI2,
            top: this.height * 0.35,
            marginLeft: this.width * 0.6,
            resizeMode: 'contain'
          }}
          source={require('../assets/splash/I2.png')}
        />
        <Animated.View
          style={{
            zIndex: 2,
            position: 'absolute',
            opacity: showButton,
            top: this.height * 0.8,
            marginLeft: this.width * 0.35,
            alignSelf: 'center'
          }}
        >
          <TouchableOpacity
            disabled={this.state.disabled}
            onPress={() => this.props.navigation.navigate('ChoicePage')}
          >
            <Image
              style={{
                width: this.width * 0.45,
                height: this.height * 0.2,
                resizeMode: 'contain'
              }}
              source={require('../assets/splash/start.png')}
            />
          </TouchableOpacity>
        </Animated.View>
      </View>
    );
  }
}
const styles = {
  container: {
    height: this.height,
    width: this.width
  }
};

export { Splash };

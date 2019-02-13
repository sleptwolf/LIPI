import React from 'react';
import {
  Image,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  View,
  Dimensions,
  Text,
  Easing,
  Animated
} from 'react-native';
import Header from './Header';

const { width, height } = Dimensions.get('window');

const words = [
  'Head / टाउको',
  'Eye / आँखा',
  'Nose / आँखा',
  'Mouth / मुख्',
  'Ears / कान',
  'Body / जीउ',
  'Hand / हात',
  'Feet / खुट्टा'
];

class Body extends React.Component {
  constructor() {
    super();
    this.animatedvalue = new Animated.Value(0);
    this.state = {
      initialHeight: height * 0.5,
      initialWidth: width,
      initial: true,
      newWidth: null,
      newHeight: null,
      newLeft: 0,
      newTop: 0,
      showing: null,
      width: width,
      height: height * 0.5,
      left: 0,
      top: 0,
      i: null
    };
  }

  static navigationOptions = {
    headerVisible: false,
    gesturesEnabled: false,
    header: null
  };

  componentDidMount() {
    StatusBar.setHidden(true);
  }

  animate(a, b, c, d, e, f) {
    if (this.state.initial === true) this.setState({ initial: false });
    this.setState({
      newWidth: a,
      newHeight: b,
      newLeft: c,
      newTop: d,
      showing: e,
      i: f
    });
    this.animatedvalue.setValue(0);
    Animated.timing(this.animatedvalue, {
      toValue: 1,
      duration: 500,
      easing: Easing.ease
    }).start(() =>
      this.setState({
        width: this.state.newWidth,
        height: this.state.newHeight,
        left: this.state.newLeft,
        top: this.state.newTop
      })
    );
  }

  render() {
    const { bg, top, back, home } = styles;
    const { goBack } = this.props.navigation;
    const imgW = this.animatedvalue.interpolate({
      inputRange: [0, 1],
      outputRange: [this.state.width, this.state.newWidth]
    });
    const imgH = this.animatedvalue.interpolate({
      inputRange: [0, 1],
      outputRange: [this.state.height, this.state.newHeight]
    });
    const imgL = this.animatedvalue.interpolate({
      inputRange: [0, 1],
      outputRange: [this.state.left, this.state.newLeft]
    });
    const imgT = this.animatedvalue.interpolate({
      inputRange: [0, 1],
      outputRange: [this.state.top, this.state.newTop]
    });

    return (
      <ImageBackground style={[bg, { backgroundColor: 'white' }]}>
        <Header
          onPressHome={() => this.props.navigation.navigate('ChoicePage')}
          onPressBack={() => goBack()}
        />
        <View
          style={{
            width,
            height: '5%',
            zIndex: 1,
            backgroundColor: 'white',
            alignItems: 'center'
          }}
        >
          <Text style={{ fontSize: 20, textAlign: 'center' }}>
            {words[this.state.i]}
          </Text>
        </View>
        <View style={styles.container}>
          <Animated.Image
            source={require('../assets/body/body.png')}
            style={{
              height:
                this.state.initial === true ? this.state.initialHeight : imgH,
              width:
                this.state.initial === true ? this.state.initialWidth : imgW,
              resizeMode: 'contain',
              top: this.state.initial === true ? 0 : imgT,
              left: this.state.initial === true ? 0 : imgL
            }}
          />
        </View>
        <View style={styles.buttons}>
          <View style={styles.buttonsTop}>
            <TouchableOpacity
              onPress={() => {
                if (this.state.showing !== 'head')
                  this.animate(width * 2, height * 1.6, 0, -100, 'head', 0);
              }}
            >
              <Image
                source={require('../assets/body/headico.png')}
                style={styles.button}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (this.state.showing !== 'eyes')
                  this.animate(width * 3.3, height * 3.3, 10, -450, 'eyes', 1);
              }}
            >
              <Image
                source={require('../assets/body/eyesico.png')}
                style={styles.button}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (this.state.showing !== 'nose')
                  this.animate(width * 4.8, height * 4.8, 10, -950, 'nose', 2);
              }}
            >
              <Image
                source={require('../assets/body/noseico.png')}
                style={styles.button}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (this.state.showing !== 'mouth')
                  this.animate(
                    width * 4.5,
                    height * 4.4,
                    10,
                    -1100,
                    'mouth',
                    3
                  );
              }}
            >
              <Image
                source={require('../assets/body/mouthico.png')}
                style={styles.button}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonsTop}>
            <TouchableOpacity
              onPress={() => {
                if (this.state.showing !== 'ear')
                  this.animate(width * 4.5, height * 4.4, 400, -850, 'ear', 4);
              }}
            >
              <Image
                source={require('../assets/body/earico.png')}
                style={styles.button}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (this.state.showing !== 'body')
                  this.animate(width * 2, height * 1, 10, -300, 'body', 5);
              }}
            >
              <Image
                source={require('../assets/body/bodyico.png')}
                style={styles.button}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (this.state.showing !== 'hand')
                  this.animate(
                    width * 3.2,
                    height * 3.2,
                    200,
                    -1000,
                    'hand',
                    6
                  );
              }}
            >
              <Image
                source={require('../assets/body/handico.png')}
                style={styles.button}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (this.state.showing !== 'feet')
                  this.animate(width * 3, height * 3.2, 0, -1300, 'feet', 7);
              }}
            >
              <Image
                source={require('../assets/body/legico.png')}
                style={styles.button}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export { Body };

const styles = {
  bg: {
    flex: 1
  },
  top: {
    flexDirection: 'row',
    padding: 10,
    height: 65,
    backgroundColor: 'white',
    zIndex: 1
  },
  home: {
    flex: 1,
    marginLeft: '70%'
  },
  back: {
    flex: 1
  },
  container: {
    alignItems: 'center',
    width: '100%',
    height: '60%',
    marginTop: 1
  },
  buttons: {
    width: '100%',
    height: '25%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'white'
  },
  buttonsTop: {
    height: '48%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  button: {
    height: '100%',
    width: 80,
    resizeMode: 'stretch'
  }
};

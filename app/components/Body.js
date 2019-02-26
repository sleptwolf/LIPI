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
      easing: Easing.linear
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
      <ImageBackground style={bg}>
        <Header
          style={{ backgroundColor: 'white', zIndex: 1 }}
          onPressHome={() => this.props.navigation.navigate('ChoicePage')}
          onPressBack={() => goBack()}
        />
        <View style={{ backgroundColor: 'white', flex: 1 }}>
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
                    this.animate(
                      width * 2,
                      height * 1.6,
                      0,
                      -height * 0.15,
                      'head',
                      0
                    );
                  else if (this.state.showing === 'head')
                    this.animate(
                      this.state.initialWidth,
                      this.state.initialHeight,
                      0,
                      0,
                      null,
                      true
                    );
                }}
              >
                <Image
                  source={this.state.showing === 'head' ?require('../assets/family/black.png'):require('../assets/body/headico.png')}
                  style={[
                    styles.button,
                    this.state.showing === 'head'
                      ? {
                          borderRadius: 30,
                          borderWidth: 3,
                          borderColor: 'red'
                        }
                      : null
                  ]}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  if (this.state.showing !== 'eyes')
                    this.animate(
                      width * 3.3,
                      height * 3.3,
                      width * 0.01,
                      -height * 0.7,
                      'eyes',
                      1
                    );
                    else if (this.state.showing === 'eyes')
                    this.animate(
                      this.state.initialWidth,
                      this.state.initialHeight,
                      0,
                      0,
                      null,
                      true
                    );
                }}
              >
                <Image
                  source={this.state.showing === 'eyes' ?require('../assets/family/black.png'):require('../assets/body/eyesico.png')}
                  style={[
                    styles.button,
                    this.state.showing === 'eyes'
                      ? {
                          borderRadius: 30,
                          borderWidth: 3,
                          borderColor: 'red'
                        }
                      : null
                  ]}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  if (this.state.showing !== 'nose')
                    this.animate(
                      width * 5.2,
                      height * 5.2,
                      width * 0.01,
                      -height * 1.6,
                      'nose',
                      2
                    );
                    else if (this.state.showing === 'nose')
                    this.animate(
                      this.state.initialWidth,
                      this.state.initialHeight,
                      0,
                      0,
                      null,
                      true
                    );
                }}
              >
                <Image
                  source={this.state.showing === 'nose' ?require('../assets/family/black.png'):require('../assets/body/noseico.png')}
                  style={[
                    styles.button,
                    this.state.showing === 'nose'
                      ? {
                          borderRadius: 30,
                          borderWidth: 3,
                          borderColor: 'red'
                        }
                      : null
                  ]}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  if (this.state.showing !== 'mouth')
                    this.animate(
                      width * 5.2,
                      height * 5.2,
                      width * 0.01,
                      -height * 2,
                      'mouth',
                      3
                    );
                    else if (this.state.showing === 'mouth')
                    this.animate(
                      this.state.initialWidth,
                      this.state.initialHeight,
                      0,
                      0,
                      null,
                      true
                    );
                }}
              >
                <Image
                  source={this.state.showing === 'mouth' ?require('../assets/family/black.png'):require('../assets/body/mouthico.png')}
                  style={[
                    styles.button,
                    this.state.showing === 'mouth'
                      ? {
                          borderRadius: 30,
                          borderWidth: 3,
                          borderColor: 'red'
                        }
                      : null
                  ]}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.buttonsTop}>
              <TouchableOpacity
                onPress={() => {
                  if (this.state.showing !== 'ear')
                    this.animate(
                      width * 5.5,
                      height * 5.4,
                      width * 1.2,
                      -height * 1.65,
                      'ear',
                      4
                    );
                    else if (this.state.showing === 'ear')
                    this.animate(
                      this.state.initialWidth,
                      this.state.initialHeight,
                      0,
                      0,
                      null,
                      true
                    );
                }}
              >
                <Image
                  source={this.state.showing === 'ear' ?require('../assets/family/black.png'):require('../assets/body/earico.png')}
                  style={[
                    styles.button,
                    this.state.showing === 'ear'
                      ? {
                          borderRadius: 30,
                          borderWidth: 3,
                          borderColor: 'red'
                        }
                      : null
                  ]}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  if (this.state.showing !== 'body')
                    this.animate(
                      width * 2,
                      height * 1,
                      10,
                      -height * 0.47,
                      'body',
                      5
                    );
                    else if (this.state.showing === 'body')
                    this.animate(
                      this.state.initialWidth,
                      this.state.initialHeight,
                      0,
                      0,
                      null,
                      true
                    );
                }}
              >
                <Image
                  source={this.state.showing === 'body' ?require('../assets/family/black.png'):require('../assets/body/bodyico.png')}
                  style={[
                    styles.button,
                    this.state.showing === 'body'
                      ? {
                          borderRadius: 30,
                          borderWidth: 3,
                          borderColor: 'red'
                        }
                      : null
                  ]}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  if (this.state.showing !== 'hand')
                    this.animate(
                      width * 3.2,
                      height * 3.2,
                      width * 0.5,
                      -height * 1.65,
                      'hand',
                      6
                    );
                    else if (this.state.showing === 'hand')
                    this.animate(
                      this.state.initialWidth,
                      this.state.initialHeight,
                      0,
                      0,
                      null,
                      true
                    );
                }}
              >
                <Image
                  source={this.state.showing === 'hand' ?require('../assets/family/black.png'):require('../assets/body/handico.png')}
                  style={[
                    styles.button,
                    this.state.showing === 'hand'
                      ? {
                          borderRadius: 30,
                          borderWidth: 3,
                          borderColor: 'red'
                        }
                      : null
                  ]}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  if (this.state.showing !== 'feet')
                    this.animate(
                      width * 3,
                      height * 3.2,
                      0,
                      -height * 2,
                      'feet',
                      7
                    );
                    else if (this.state.showing === 'feet')
                    this.animate(
                      this.state.initialWidth,
                      this.state.initialHeight,
                      0,
                      0,
                      null,
                      true
                    );
                }}
              >
                <Image
                  source={this.state.showing === 'feet' ?require('../assets/family/black.png'):require('../assets/body/legico.png')}
                  style={[
                    styles.button,
                    this.state.showing === 'feet'
                      ? {
                          borderRadius: 30,
                          borderWidth: 3,
                          borderColor: 'red'
                        }
                      : null
                  ]}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export { Body };

const styles = {
  bg: {
    height,
    width
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
    height: '70%'
  },
  buttons: {
    width: '100%',
    height: '25%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
    alignSelf: 'flex-end'
  },
  buttonsTop: {
    height: '48%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  button: {
    height: 60,
    width: 60,
    // resizeMode: 'stretch'
  }
};

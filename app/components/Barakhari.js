import React from 'react';
import {
  View,
  TouchableOpacity,
  Animated,
  Easing,
  Text,
  ImageBackground,
  StatusBar,
  Dimensions
} from 'react-native';
import Header from './Header';

const { width, height } = Dimensions.get('window');

class Barakhari extends React.Component {
  constructor() {
    super();
    this.animatedValue = new Animated.Value(0);
    this.drop = this.drop.bind(this);
    this.state = {
      i: null,
      topCharLeft: null
    };
  }

  static navigationOptions = {
    headerVisible: false,
    header: null
  };

  componentDidMount() {
    StatusBar.setHidden(true);
  }

  drop(x, y) {
    console.log('b4 press:', this.state.i);
    this.animatedValue.setValue(0);
    this.setState({ i: x, topCharLeft: y }, () => {
      Animated.timing(this.animatedValue, {
        toValue: 1,
        duration: 500,
        easing: Easing.ease
      }).start(() => console.log('after press:', this.state.i));
    });
  }

  render() {
    const top = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, height * 0.3]
    });

    const left = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, this.state.topCharLeft]
    });
    return (
      <ImageBackground
        source={require('../assets/bg/bg_display.png')}
        style={{ width: '100%', height: '100%' }}
      >
        <Header
          onPressHome={() => this.props.navigation.navigate('ChoicePage')}
          onPressBack={() => goBack()}
        />
        <View
          style={{
            height: '100%',
            width: '100%'
            // borderWidth: 1,
            // borderColor: 'red'
          }}
        >
          <View
            style={{
              height: '10%',
              width: '100%',
              borderWidth: 1,
              borderColor: 'green',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly'
            }}
          >
            <Animated.View
              style={
                this.state.i == 1
                  ? {
                      top,
                      left
                    }
                  : {}
              }
            >
              <TouchableOpacity onPress={() => this.drop(1, 0)}>
                <Animated.View
                  style={{ height: 50, width: 50, backgroundColor: 'red' }}
                />
              </TouchableOpacity>
            </Animated.View>

            <Animated.View
              style={
                this.state.i == 2
                  ? {
                      top,
                      left
                    }
                  : {}
              }
            >
              <TouchableOpacity onPress={() => this.drop(2, -82)}>
                <Animated.View
                  style={{ height: 50, width: 50, backgroundColor: 'green' }}
                />
              </TouchableOpacity>
            </Animated.View>

            <Animated.View
              style={
                this.state.i == 3
                  ? {
                      top,
                      left
                    }
                  : {}
              }
            >
              <TouchableOpacity onPress={() => this.drop(3, -164)}>
                <Animated.View
                  style={{ height: 50, width: 50, backgroundColor: 'blue' }}
                />
              </TouchableOpacity>
            </Animated.View>

            <Animated.View
              style={
                this.state.i == 4
                  ? {
                      top,
                      left
                    }
                  : {}
              }
            >
              <TouchableOpacity onPress={() => this.drop(4, -246)}>
                <Animated.View
                  style={{ height: 50, width: 50, backgroundColor: 'yellow' }}
                />
              </TouchableOpacity>
            </Animated.View>
          </View>
          {/* middle container */}
          <View
            style={{
              height: '50%',
              width: '100%',
              borderColor: 'red',
              borderWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly'
            }}
          >
            <View style={{ height: 51, width: 51, borderWidth: 1,  }}/>
            <View style={{ height: 51, width: 51, borderWidth: 1,  }}/>
            <View style={{ height: 51, width: 51, borderWidth: 1,  }}/>
            <View style={{ height: 51, width: 51, borderWidth: 1,  }}/>
          </View>
          {/* bottom container */}
          <View
            style={{
              height: '30%',
              width: '100%',
              borderColor: 'blue',
              borderWidth: 1
            }}
          >
            <View
              style={{
                height: '50%',
                width: '98%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly'
              }}
            >
              <Animated.View style={{}}>
                <TouchableOpacity>
                  <Animated.View
                    style={{ height: 50, width: 50, backgroundColor: 'yellow' }}
                  />
                </TouchableOpacity>
              </Animated.View>
              <Animated.View style={{}}>
                <TouchableOpacity>
                  <Animated.View
                    style={{ height: 50, width: 50, backgroundColor: 'yellow' }}
                  />
                </TouchableOpacity>
              </Animated.View>
              <Animated.View style={{}}>
                <TouchableOpacity>
                  <Animated.View
                    style={{ height: 50, width: 50, backgroundColor: 'yellow' }}
                  />
                </TouchableOpacity>
              </Animated.View>
              <Animated.View style={{}}>
                <TouchableOpacity>
                  <Animated.View
                    style={{ height: 50, width: 50, backgroundColor: 'yellow' }}
                  />
                </TouchableOpacity>
              </Animated.View>
              <Animated.View>
                <TouchableOpacity>
                  <Animated.View
                    style={{ height: 50, width: 50, backgroundColor: 'yellow' }}
                  />
                </TouchableOpacity>
              </Animated.View>
              <Animated.View style={{}}>
                <TouchableOpacity>
                  <Animated.View
                    style={{ height: 50, width: 50, backgroundColor: 'yellow' }}
                  />
                </TouchableOpacity>
              </Animated.View>
            </View>
            <View
              style={{
                height: '50%',
                width: '98%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly'
              }}
            >
              <Animated.View style={{}}>
                <TouchableOpacity>
                  <Animated.View
                    style={{ height: 50, width: 50, backgroundColor: 'yellow' }}
                  />
                </TouchableOpacity>
              </Animated.View>
              <Animated.View style={{}}>
                <TouchableOpacity>
                  <Animated.View
                    style={{ height: 50, width: 50, backgroundColor: 'yellow' }}
                  />
                </TouchableOpacity>
              </Animated.View>
              <Animated.View style={{}}>
                <TouchableOpacity>
                  <Animated.View
                    style={{ height: 50, width: 50, backgroundColor: 'yellow' }}
                  />
                </TouchableOpacity>
              </Animated.View>
              <Animated.View style={{}}>
                <TouchableOpacity>
                  <Animated.View
                    style={{ height: 50, width: 50, backgroundColor: 'yellow' }}
                  />
                </TouchableOpacity>
              </Animated.View>
              <Animated.View style={{}}>
                <TouchableOpacity>
                  <Animated.View
                    style={{ height: 50, width: 50, backgroundColor: 'yellow' }}
                  />
                </TouchableOpacity>
              </Animated.View>
              <Animated.View style={{}}>
                <TouchableOpacity>
                  <Animated.View
                    style={{ height: 50, width: 50, backgroundColor: 'yellow' }}
                  />
                </TouchableOpacity>
              </Animated.View>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export { Barakhari };

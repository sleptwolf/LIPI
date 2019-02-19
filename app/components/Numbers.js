import React, { Component } from 'react';
import {
  View,
  StatusBar,
  ImageBackground,
  Text,
  TouchableOpacity,
  Dimensions,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from './Header';

const { width, height } = Dimensions.get('window');

class Numbers extends Component {
  constructor() {
    super();
    this.state = {
      sizeL: 22,
      sizeH: 50,
      pressed: null,
      color: 'white'
    };
  }

  static navigationOptions = {
    headerVisible: false,
    header: null,
    gesturesEnabled: false
  };
  componentDidMount() {
    StatusBar.setHidden(true);
    this.setState({ isHidden: false });
  }
  render() {
    const { goBack } = this.props.navigation;
    const {
      number0,
      number1,
      number2,
      number3,
      number4,
      number5,
      number6,
      number7,
      number8,
      number9,
      text,
      top,
      back,
      home
    } = styles;
    return (
      <ImageBackground
        source={require('../assets/bg/nightbg.png')}
        style={{
          width,
          height,
          padding: 1,
          top: -1,
          left: -1
        }}
        imageStyle={{ resizeMode: 'stretch', width: width + 2, height: height + 2 }}
      >
        <Header
          onPressHome={() => this.props.navigation.navigate('ChoicePage')}
          onPressBack={() => goBack()}
        />

        {/* view for stars */}
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            padding: 5
          }}
        >
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'space-evenly',
              margin: 2
            }}
          >
            {/* view for 1 ,3, 5 */}
            <View
              style={{
                height: 60,
                width: 60,
                alignItems: 'center',
                justifyContent: 'center',
                opacity:
                  this.state.pressed >= 1 || this.state.pressed === null ? 1 : 0
              }}
            >
              <Icon
                name='md-star'
                size={
                  this.state.pressed >= 1 ? this.state.sizeH : this.state.sizeL
                }
                color='#7C4DFF'
              />
            </View>
            <View style={{ height: 60, width: 60 }} />
            <View
              style={{
                height: 60,
                width: 60,
                alignItems: 'center',
                justifyContent: 'center',
                opacity:
                  this.state.pressed >= 3 || this.state.pressed === null ? 1 : 0
              }}
            >
              <Icon
                name='md-star'
                size={
                  this.state.pressed >= 3 ? this.state.sizeH : this.state.sizeL
                }
                color='green'
              />
            </View>
            <View style={{ height: 60, width: 60 }} />
            <View
              style={{
                height: 60,
                width: 60,
                alignItems: 'center',
                justifyContent: 'center',
                opacity:
                  this.state.pressed >= 5 || this.state.pressed === null ? 1 : 0
              }}
            >
              <Icon
                name='md-star'
                size={
                  this.state.pressed >= 5 ? this.state.sizeH : this.state.sizeL
                }
                color='brown'
              />
            </View>
            {/* view for 1 ,3, 5 */}
          </View>

          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'space-evenly',
              margin: 2
            }}
          >
            {/* view for 2n 4 */}
            <View style={{ height: 60, width: 60 }} />
            <View
              style={{
                height: 60,
                width: 60,
                alignItems: 'center',
                justifyContent: 'center',
                opacity:
                  this.state.pressed >= 2 || this.state.pressed === null ? 1 : 0
              }}
            >
              <Icon
                name='md-star'
                size={
                  this.state.pressed >= 2 ? this.state.sizeH : this.state.sizeL
                }
                color='yellow'
              />
            </View>
            <View style={{ height: 60, width: 60 }} />
            <View
              style={{
                height: 60,
                width: 60,
                alignItems: 'center',
                justifyContent: 'center',
                opacity:
                  this.state.pressed >= 4 || this.state.pressed === null ? 1 : 0
              }}
            >
              <Icon
                name='md-star'
                size={
                  this.state.pressed >= 4 ? this.state.sizeH : this.state.sizeL
                }
                color='orange'
              />
            </View>
            <View style={{ height: 60, width: 60 }} />
            {/* view for 2n 4 */}
          </View>

          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'space-evenly',
              margin: 2
            }}
          >
            {/* view for 6 and 7 */}
            <View style={{ height: 60, width: 60 }} />
            <View style={{ height: 60, width: 60 }} />
            <View
              style={{
                height: 60,
                width: 60,
                alignItems: 'center',
                justifyContent: 'center',
                opacity:
                  this.state.pressed >= 6 || this.state.pressed === null ? 1 : 0
              }}
            >
              <Icon
                name='md-star'
                size={
                  this.state.pressed >= 6 ? this.state.sizeH : this.state.sizeL
                }
                color='pink'
              />
            </View>
            <View style={{ height: 60, width: 60 }} />
            <View
              style={{
                height: 60,
                width: 60,
                alignItems: 'center',
                justifyContent: 'center',
                opacity:
                  this.state.pressed >= 7 || this.state.pressed === null ? 1 : 0
              }}
            >
              <Icon
                name='md-star'
                size={
                  this.state.pressed >= 7 ? this.state.sizeH : this.state.sizeL
                }
                color='white'
              />
            </View>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'space-evenly',
              margin: 2
            }}
          >
            {/* view for 8 */}
            <View style={{ height: 60, width: 60 }} />
            <View style={{ height: 60, width: 60 }} />
            <View style={{ height: 60, width: 60 }} />
            <View
              style={{
                height: 60,
                width: 60,
                alignItems: 'center',
                justifyContent: 'center',
                opacity:
                  this.state.pressed >= 8 || this.state.pressed === null ? 1 : 0
              }}
            >
              <Icon
                name='md-star'
                size={
                  this.state.pressed >= 8 ? this.state.sizeH : this.state.sizeL
                }
                color='blue'
              />
            </View>
            <View style={{ height: 60, width: 60 }} />
            {/* view for 8 */}
          </View>

          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'space-evenly',
              margin: 2
            }}
          >
            {/* for 9 */}
            <View style={{ height: 60, width: 60 }} />
            <View style={{ height: 60, width: 60 }} />
            <View style={{ height: 60, width: 60 }} />
            <View style={{ height: 60, width: 60 }} />
            <View
              style={{
                height: 60,
                width: 60,
                alignItems: 'center',
                justifyContent: 'center',
                opacity:
                  this.state.pressed >= 9 || this.state.pressed === null ? 1 : 0
              }}
            >
              <Icon
                name='md-star'
                size={
                  this.state.pressed >= 9 ? this.state.sizeH : this.state.sizeL
                }
                color='cyan'
              />
            </View>
          </View>
        </View>

        {/* view for buttons */}
        <View
          style={{
            alignSelf: 'center',
            flex: 1,
            width: '98%',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Text
              style={{
                fontSize: 80,
                color: this.state.color,
                fontWeight: 'bold'
              }}
            >
              {this.state.pressed}
            </Text>
          </View>
          <View
            style={{
              flex: 2
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                marginVertical: 5
              }}
            >
              <TouchableOpacity
                onPress={() => this.setState({ pressed: 0, color: '#7B1FA2' })}
              >
                <View style={number0}>
                  <Text style={text}>0</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.setState({ pressed: 1, color: '#7C4DFF' })}
              >
                <View style={number1}>
                  <Text style={text}> १</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.setState({ pressed: 2, color: '#00796B' })}
              >
                <View style={number2}>
                  <Text style={text}>२</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.setState({ pressed: 3, color: '#1976D2' })}
              >
                <View style={number3}>
                  <Text style={text}>३</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.setState({ pressed: 4, color: '#4CAF50' })}
              >
                <View style={number4}>
                  <Text style={text}>४</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                marginVertical: 5
              }}
            >
              <TouchableOpacity
                onPress={() => this.setState({ pressed: 5, color: '#E64A19' })}
              >
                <View style={number5}>
                  <Text style={text}>५</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.setState({ pressed: 6, color: '#795548' })}
              >
                <View style={number6}>
                  <Text style={text}>६</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.setState({ pressed: 7, color: '#F57C00' })}
              >
                <View style={number7}>
                  <Text style={text}>७</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.setState({ pressed: 8, color: '#00BCD4' })}
              >
                <View style={number8}>
                  <Text style={text}>८</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.setState({ pressed: 9, color: '#FFC107' })}
              >
                <View style={number9}>
                  <Text style={text}>९</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export { Numbers };

const styles = {
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
  number0: {
    width: width * 0.15,
    height: height * 0.09,
    margin: 5,
    borderRadius: 30,
    backgroundColor: '#7B1FA2',
    justifyContent: 'center',
    alignItems: 'center'
  },
  number1: {
    width: width * 0.15,
    height: height * 0.09,
    margin: 5,
    borderRadius: 30,
    backgroundColor: '#7C4DFF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  number2: {
    width: width * 0.15,
    height: height * 0.09,
    margin: 5,
    borderRadius: 30,
    backgroundColor: '#00796B',
    justifyContent: 'center',
    alignItems: 'center'
  },
  number3: {
    width: width * 0.15,
    height: height * 0.09,
    margin: 5,
    borderRadius: 30,
    backgroundColor: '#1976D2',
    justifyContent: 'center',
    alignItems: 'center'
  },
  number4: {
    width: width * 0.15,
    height: height * 0.09,
    margin: 5,
    borderRadius: 30,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center'
  },
  number5: {
    width: width * 0.15,
    height: height * 0.09,
    margin: 5,
    borderRadius: 30,
    backgroundColor: '#E64A19',
    justifyContent: 'center',
    alignItems: 'center'
  },
  number6: {
    width: width * 0.15,
    height: height * 0.09,
    margin: 5,
    borderRadius: 30,
    backgroundColor: '#795548',
    justifyContent: 'center',
    alignItems: 'center'
  },
  number7: {
    width: width * 0.15,
    height: height * 0.09,
    margin: 5,
    borderRadius: 30,
    backgroundColor: '#F57C00',
    justifyContent: 'center',
    alignItems: 'center'
  },
  number8: {
    width: width * 0.15,
    height: height * 0.09,
    margin: 5,
    borderRadius: 30,
    backgroundColor: '#00BCD4',
    justifyContent: 'center',
    alignItems: 'center'
  },
  number9: {
    width: width * 0.15,
    height: height * 0.09,
    margin: 5,
    borderRadius: 30,
    backgroundColor: '#FFC107',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold'
  }
};

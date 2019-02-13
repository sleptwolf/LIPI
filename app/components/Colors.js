import React from 'react';
import {
  StatusBar,
  View,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';
import Header from './Header';

const colors = [
  'RED / रातो',
  'YELLOW / पहेंलो',
  'BLUE / नीलो',
  'GREEN / हरियो',
  'PINK / गुलाबी',
  'WHITE / सेतो',
  'BLACK / कालो',
  'PURPLE / प्याजी',
  'BROWN / खैरो',
  'GREY / खरानी'
];

const colorImage = [
  require('../assets/color/red.png'),
  require('../assets/color/yellow.png'),
  require('../assets/color/blue.png'),
  require('../assets/color/green.png'),
  require('../assets/color/pink.png'),
  require('../assets/color/white.png'),
  require('../assets/color/black.png'),
  require('../assets/color/purple.png'),
  require('../assets/color/brown.png'),
  require('../assets/color/grey.png')
];

class Colors extends React.Component {
  constructor() {
    super();
    this.state = {
      bgColor: null,
      colorId: null
    };
  }
  static navigationOptions = {
    headerVisible: false,
    header: null
  };

  componentDidMount() {
    StatusBar.setHidden(true);
    this.setState({ isHidden: false });
  }

  render() {
    const { top, home, back } = styles;
    const { goBack } = this.props.navigation;
    return (
      <ImageBackground
        source={require('../assets/bg/rainbg.png')}
        style={styles.bg}
      >
        <Header
          onPressHome={() => this.props.navigation.navigate('ChoicePage')}
          onPressBack={() => goBack()}
        />

        {/* this is for color heart */}
        <View
          style={{
            flex: 1,
            width: '99%',
            paddingTop: 20
          }}
        >
          <View
            style={{
              height: 60,
              width: '98%',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'flex-end'
            }}
          >
            <TouchableOpacity
              onPress={() => this.setState({ bgColor: '#cf122a', colorId: 0 })}
            >
              <View style={[styles.RAT1, { borderColor: '#cf122a' }]} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.setState({ bgColor: '#fce60e', colorId: 1 })}
            >
              <View style={[styles.RAT, { borderColor: '#fce60e' }]} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.setState({ bgColor: '#2e3aa5', colorId: 2 })}
            >
              <View style={[styles.RAT1, { borderColor: '#2e3aa5' }]} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.setState({ bgColor: '#00b300', colorId: 3 })}
            >
              <View style={[styles.RAT, { borderColor: '#00b300' }]} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: 60,
              width: '98%',
              flexDirection: 'row',
              justifyContent: 'center'
            }}
          >
            <TouchableOpacity
              onPress={() => this.setState({ bgColor: '#fc7ab5', colorId: 4 })}
            >
              <View style={[styles.RAT2, { borderColor: '#fc7ab5' }]} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.setState({ bgColor: '#ffffff', colorId: 5 })}
            >
              <View
                style={{
                  height: 60,
                  width: 60,
                  backgroundColor: '#ffffff'
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.setState({ bgColor: '#000000', colorId: 6 })}
            >
              <View
                style={{
                  height: 60,
                  width: 60,
                  backgroundColor: '#000000'
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.setState({ bgColor: '#800080', colorId: 7 })}
            >
              <View style={[styles.RAT3, { borderColor: '#800080' }]} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: 60,
              width: '98%',
              flexDirection: 'row',
              justifyContent: 'center'
            }}
          >
            <TouchableOpacity
              onPress={() => this.setState({ bgColor: '#b5651d', colorId: 8 })}
            >
              <View style={[styles.RAT2, { borderColor: '#b5651d' }]} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.setState({ bgColor: '#808080', colorId: 9 })}
            >
              <View style={[styles.RAT3, { borderColor: '#808080' }]} />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            width: '99%'
          }}
        >
          <View
            style={{
              height: '75%',
              flexDirection: 'row'
            }}
          >
            <View
              style={{
                height: '98%',
                flex: 1,
                backgroundColor: this.state.bgColor,
                marginRight: 5
              }}
            />
            <Image
              source={colorImage[this.state.colorId]}
              style={{
                height: '98%',
                flex: 1,
                resizeMode: 'stretch',
                marginLeft: 5
              }}
            />
          </View>
          <View
            style={{
              height: '25%'
            }}
          >
            <Text
              style={{
                textAlign: 'center',
                fontSize: 25,
                fontWeight: 'bold',
                color: 'white'
              }}
            >
              {colors[this.state.colorId]}
            </Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export { Colors };

const styles = {
  bg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 1
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
  RAT: {
    height: 0,
    width: 0,
    borderTopWidth: 60,
    borderLeftWidth: 60,
    backgroundColor: 'transparent',
    borderTopColor: 'transparent'
  },
  RAT1: {
    height: 0,
    width: 0,
    borderTopWidth: 60,
    borderRightWidth: 60,
    backgroundColor: 'transparent',
    borderTopColor: 'transparent'
  },
  RAT2: {
    height: 0,
    width: 0,
    borderBottomWidth: 60,
    borderRightWidth: 60,
    backgroundColor: 'transparent',
    borderBottomColor: 'transparent'
  },
  RAT3: {
    height: 0,
    width: 0,
    borderBottomWidth: 60,
    borderLeftWidth: 60,
    backgroundColor: 'transparent',
    borderBottomColor: 'transparent'
  }
};

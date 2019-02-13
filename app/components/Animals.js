import React from 'react';
import {
  StatusBar,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  Modal,
  Text,
  ImageBackground
} from 'react-native';
import Header from './Header';

const { width, height } = Dimensions.get('window');

const names = [
  'Monkey / बाँदर',
  'Cat / बिरालो',
  'Dog / कुकुर',
  'Snake / सांप',
  'Sheep / भेडा',
  'Pig / सुँगुर',
  'Chicken / कुखुरा',
  'Cow / गाई',
  'Rhino / गैंडा',
  'Tiger / बाघ',
  'Lion / सिंह',
  'Elephant / हात्ती'
];

const images = [
  require('../assets/animal/monkey.png'),
  require('../assets/animal/cat.png'),
  require('../assets/animal/dog.png'),
  require('../assets/animal/snake.png'),
  require('../assets/animal/sheep.png'),
  require('../assets/animal/pig.png'),
  require('../assets/animal/chicken.png'),
  require('../assets/animal/cow.png'),
  require('../assets/animal/rhino.png'),
  require('../assets/animal/tiger.png'),
  require('../assets/animal/lion.png'),
  require('../assets/animal/elephant.png')
];

const bgimg = [
  require('../assets/animal/pet.png'),
  require('../assets/animal/farmbg.png'),
  require('../assets/animal/wildbg.png')
];

const imgTop = [8, 260, 490, -60, 340, 515, 320, 370, 420, 515, 315, 365];

const imgLeft = [-15, -25, 20, -50, 30, 55, -15, -10, 90, 140, -75, -30];

class Animals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      i: 0,
      j: 0,
      k: 0,
      visible: false
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

  next() {
    if (this.state.i !== 2) {
      this.setState({ i: this.state.i + 1, j: this.state.j + 4 });
    }
  }

  prev() {
    if (this.state.i !== 0) {
      this.setState({ i: this.state.i - 1, j: this.state.j - 4 });
    }
  }

  showModal(x, y) {
    this.setState({ visible: x, k: this.state.j + y });
  }

  renderModal() {
    const { width, height } = Dimensions.get('window');
    return (
      <Modal
        animationType='slide'
        onRequestClose={() => this.showModal(false)}
        visible={this.state.visible}
        transparent
      >
        <View
          style={{
            height: height * 0.4,
            width: width * 0.8,
            left: width * 0.1,
            top: height * 0.3,
            alignItems: 'center',
            backgroundColor: 'white',
            borderRadius: 30
          }}
        >
          <View
            style={{
              height: '85%',
              width: '95%',
              alignItems: 'center',
              justifyContent: 'space-evenly'
            }}
          >
            <Text
              style={{
                fontSize: 25,
                fontWeight: '500',
                color: 'black'
              }}
            >
              {names[this.state.k]}
            </Text>

            <Image
              source={images[this.state.k]}
              style={{
                width: 80,
                height: 80,
                resizeMode: 'contain'
              }}
            />
          </View>
          <TouchableOpacity onPress={() => this.showModal(false)}>
            <View
              style={{
                height: 30,
                width: 30,
                backgroundColor: 'red',
                borderRadius: 90,
                justifyContent: 'center'
              }}
            >
              <Text
                style={{ color: 'white', textAlign: 'center', fontSize: 30 }}
              >
                X
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }

  render() {
    const { bg, top, home, back } = styles;
    const { goBack } = this.props.navigation;
    return (
      <ImageBackground source={bgimg[this.state.i]} style={bg}>
        <Header
          onPressHome={() => this.props.navigation.navigate('ChoicePage')}
          onPressBack={() => goBack()}
        />
        <View
          style={{
            flexDirection: 'row'
          }}
        >
          <View
            style={{
              height: 100,
              width: 100,
              borderRadius: 45,
              left: imgLeft[this.state.j],
              top: imgTop[this.state.j]
            }}
          >
            <TouchableOpacity
              onPress={() => this.showModal(true, 0)}
              style={{ height: '100%', width: '100%' }}
            />
          </View>
          <View
            style={{
              height: 100,
              width: 100,
              borderRadius: 45,
              left: imgLeft[this.state.j + 1],
              top: imgTop[this.state.j + 1]
            }}
          >
            <TouchableOpacity
              onPress={() => this.showModal(true, 1)}
              style={{ height: '100%', width: '100%' }}
            />
          </View>
          <View
            style={{
              height: 100,
              width: 100,
              borderRadius: 45,
              left: imgLeft[this.state.j + 2],
              top: imgTop[this.state.j + 2]
            }}
          >
            <TouchableOpacity
              onPress={() => this.showModal(true, 2)}
              style={{ height: '100%', width: '100%' }}
            />
          </View>
          <View
            style={{
              height: 100,
              width: 100,
              borderRadius: 45,
              left: imgLeft[this.state.j + 3],
              top: imgTop[this.state.j + 3]
            }}
          >
            <TouchableOpacity
              onPress={() => this.showModal(true, 3)}
              style={{ height: '100%', width: '100%' }}
            />
          </View>
        </View>

        {this.renderModal()}
        <View
          style={{
            width,
            height: 50,
            marginTop: 50,
            flexDirection: 'row',
            paddingHorizontal: 10,
            top: height * 0.58
          }}
        >
          <View style={{ flex: 1 }}>
            {/* should change the shown texts */}
            <TouchableOpacity
              onPress={() => this.prev()}
              disabled={this.state.i === 0 ? true : false}
            >
              <Image
                source={require('../assets/buttons/previous.png')}
                style={{
                  height: 45,
                  width: 45,
                  resizeMode: 'stretch',
                  opacity: this.state.i == 0 ? 0 : 1
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, marginLeft: '80%' }}>
            <TouchableOpacity
              onPress={() => this.next()}
              disabled={this.state.i === 2 ? true : false}
            >
              <Image
                source={require('../assets/buttons/next.png')}
                style={{
                  height: 45,
                  width: 45,
                  resizeMode: 'stretch',
                  opacity: this.state.i == 2 ? 0 : 1
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export { Animals };

const styles = {
  bg: {
    flex: 1,
    alignItems: 'center'
  },
  top: {
    flexDirection: 'row',
    padding: 10,
    height: 65,
    width: '100%'
    // borderWidth: 1,
  },
  home: {
    flex: 1,
    marginLeft: '80%'
    // borderWidth: 1,
  },
  back: {
    flex: 1
    // borderWidth: 1,
  }
};

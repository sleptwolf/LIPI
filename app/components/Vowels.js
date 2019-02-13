import React from "react";
import {
  Image,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  View,
  Text,
  Modal,
  Dimensions,
  Animated,
  Easing
} from "react-native";
import Header from './Header'

import SoundPlayer from "react-native-sound-player";
import Icon from "react-native-vector-icons/Entypo";

const { width, height } = Dimensions.get("window");

const data = [
  require("../assets/vowels/1.png"),
  require("../assets/vowels/2.png"),
  require("../assets/vowels/3.png"),
  require("../assets/vowels/4.png"),
  require("../assets/vowels/5.png"),
  require("../assets/vowels/6.png"),
  require("../assets/vowels/7.png"),
  require("../assets/vowels/8.png"),
  require("../assets/vowels/9.png"),
  require("../assets/vowels/10.png"),
  require("../assets/vowels/11.png"),
  require("../assets/vowels/12.png")
];

const word = [
  require("../assets/vowels/words/1.png"),
  require("../assets/vowels/words/2.png"),
  require("../assets/vowels/words/3.png"),
  require("../assets/vowels/words/4.png"),
  require("../assets/vowels/words/5.png"),
  require("../assets/vowels/words/6.png"),
  require("../assets/vowels/words/7.png"),
  require("../assets/vowels/words/8.png"),
  require("../assets/vowels/words/9.png"),
  require("../assets/vowels/words/10.png"),
  require("../assets/vowels/words/11.png"),
  require("../assets/vowels/words/pic.png")
];

const image = [
  require("../assets/vowels/pic/1.png"),
  require("../assets/vowels/pic/2.png"),
  require("../assets/vowels/pic/3.png"),
  require("../assets/vowels/pic/4.png"),
  require("../assets/vowels/pic/5.png"),
  require("../assets/vowels/pic/6.png"),
  require("../assets/vowels/pic/7.png"),
  require("../assets/vowels/pic/8.png"),
  require("../assets/vowels/pic/9.png"),
  require("../assets/vowels/pic/10.png"),
  require("../assets/vowels/pic/11.png"),
  require("../assets/vowels/pic/pic.png")
];

const audio = [
  "v1",
  "v2",
  "v3",
  "v3",
  "v4",
  "v4",
  "v5",
  "v6",
  "v7",
  "v8",
  "v9",
  "v10"
];

class Vowels extends React.Component {
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0);
    this.state = {
      visible: false,
      i: 0,
      disableNp: false,
      selected: 0,
      audio: null
    };
  }
  static navigationOptions = {
    headerVisible: false,
    gesturesEnabled: false,
    header: null
  };
  componentDidMount() {
    StatusBar.setHidden(true);
    this.setState({ isHidden: false });
    this.animate();
  }
  showModal(x, y, z) {
    this.setState({ visible: x, selected: y, audio: z });
  }
  animate() {
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.ease
    }).start();
  }

  next() {
    if (this.state.i !== 6) this.setState({ i: this.state.i + 6 });
  }

  prev() {
    if (this.state.i !== 0) this.setState({ i: this.state.i - 6 });
  }
  play() {
    try {
      SoundPlayer.playSoundFile(this.state.audio, "m4a");
    } catch (e) {
      console.log("error:", e);
    }
  }

  RenderModal() {
    return (
      <Modal
        animationType="fade"
        transparent
        visible={this.state.visible}
        onRequestClose={() => this.showModal(false)}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(52, 52, 52, 0.8)"
          }}
        >
          <TouchableOpacity
            onPress={() => this.showModal(false, 0)}
            style={{ height: "100%", width: "100%" }}
          />
        </View>
        {/* <ImageBackground
                    source={require('../assets/bg/bg-2.jpg')}
                    imageStyle={{ borderRadius: 30, resizeMode: 'stretch', margin: 5 }}
                    style={{ flex: 3, justifyContent: 'center', alignItems: 'center', paddingVertical: 10 }}
                > */}
        <View
          style={{
            flex: 3,
            paddingVertical: 10,
            backgroundColor: "rgba(52, 52, 52, 0.8)"
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 30,
              width: "95%",
              alignSelf: "center"
            }}
          >
            <View style={{ height: "90%", width: "95%", flexDirection: "row" }}>
              <View
                style={{
                  flex: 1,
                  margin: 3,
                  alignItems: "center",
                  paddingTop: "35%"
                }}
              >
                <Image
                  source={data[this.state.selected]}
                  style={{ resizeMode: "stretch", height: 100, width: 100 }}
                />
                <TouchableOpacity onPress={() => this.play()}>
                  <Icon
                    name="sound"
                    color="black"
                    size={32}
                    style={{ marginTop: 15 }}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flex: 1,
                  margin: 3,
                  alignItems: "center",
                  paddingVertical: "30%"
                }}
              >
                <Image
                  source={image[this.state.selected]}
                  style={{ resizeMode: "stretch", height: 100, width: 100 }}
                />
                <Image
                  source={word[this.state.selected]}
                  style={{ resizeMode: "contain", height: 40, width: 100 }}
                />
              </View>
            </View>

            <TouchableOpacity onPress={() => this.showModal(false, 0)}>
              <View
                style={{
                  height: height * 0.05,
                  marginTop: 5,
                  width: "40%",
                  backgroundColor: "red",
                  borderRadius: 90,
                  padding: 5,
                  justifyContent: "center"
                }}
              >
                <Text
                  style={{ color: "white", textAlign: "center", fontSize: 30 }}
                >
                  X
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        {/* </ImageBackground> */}
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(52, 52, 52, 0.8)"
          }}
        >
          <TouchableOpacity
            onPress={() => this.showModal(false, 0)}
            style={{ height: "100%", width: "100%" }}
          />
        </View>
      </Modal>
    );
  }

  render() {
    const { bg, top, home, back } = styles;
    const { goBack } = this.props.navigation;

    const left = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [-width, 0]
    });

    return (
      <ImageBackground source={require("../assets/bg/bg3.png")} style={bg}>
        <Header
          onPressHome={() => this.props.navigation.navigate('ChoicePage')}
          onPressBack={() => goBack()}
        />
        <Animated.View
          style={{
            left,
            top: height * 0.03,
            backgroundColor: "white",
            height: height * 0.65,
            width: width - 70,
            flexDirection: "row",
            paddingHorizontal: 5,
            borderRadius: 30,
            marginTop: 20
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "space-around",
              alignItems: "center",
              marginBottom: 45
            }}
          >
            <TouchableOpacity
              onPress={() =>
                this.showModal(true, this.state.i, audio[this.state.i])
              }
            >
              <Image
                source={data[this.state.i]}
                style={{
                  height: height * 0.1,
                  width: width * 0.25,
                  resizeMode: "contain"
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.showModal(true, this.state.i + 2, audio[this.state.i + 2])
              }
            >
              <Image
                source={data[this.state.i + 2]}
                style={{
                  height: this.state.i === 6 ? height * 0.13 : height * 0.1,
                  width: width * 0.25,
                  resizeMode: "contain"
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.showModal(true, this.state.i + 4, audio[this.state.i + 4])
              }
            >
              <Image
                source={data[this.state.i + 4]}
                style={{
                  height: this.state.i === 6 ? height * 0.13 : height * 0.1,
                  width: width * 0.25,
                  resizeMode: "contain"
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "space-around",
              alignItems: "center",
              marginTop: 45
            }}
          >
            <TouchableOpacity
              onPress={() =>
                this.showModal(true, this.state.i + 1, audio[this.state.i + 1])
              }
            >
              <Image
                source={data[this.state.i + 1]}
                style={{
                  height: this.state.i === 6 ? height * 0.13 : height * 0.1,
                  width: width * 0.25,
                  resizeMode: "contain"
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.showModal(true, this.state.i + 3, audio[this.state.i + 3])
              }
            >
              <Image
                source={data[this.state.i + 3]}
                style={{
                  height: height * 0.13,
                  width: width * 0.25,
                  resizeMode: "contain"
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.showModal(true, this.state.i + 5, audio[this.state.i + 5])
              }
            >
              <Image
                source={data[this.state.i + 5]}
                style={{
                  height: height * 0.1,
                  width: width * 0.25,
                  resizeMode: "contain"
                }}
              />
            </TouchableOpacity>
          </View>
        </Animated.View>
        <View
          style={{
            width,
            height: 50,
            marginTop: 50,
            flexDirection: "row",
            paddingHorizontal: 10
          }}
        >
          <View style={{ flex: 1 }}>
            {/* should change the shown texts */}
            <TouchableOpacity onPress={() => this.prev()}>
              <Animated.Image
                source={require("../assets/buttons/previous.png")}
                style={{
                  height: 45,
                  width: 45,
                  resizeMode: "stretch",
                  opacity: this.state.i == 0 ? 0 : 1
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, marginLeft: "75%" }}>
            <TouchableOpacity onPress={() => this.next()}>
              <Animated.Image
                source={require("../assets/buttons/next.png")}
                style={{
                  height: 45,
                  width: 45,
                  resizeMode: "stretch",
                  opacity: this.state.i == 6 ? 0 : 1
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        {this.RenderModal()}
      </ImageBackground>
    );
  }
}

export { Vowels };

const styles = {
  bg: {
    flex: 1,

    alignItems: "center"
  },
  top: {
    flexDirection: "row",
    padding: 10,
    height: 65
  },
  home: {
    flex: 1,
    marginLeft: "70%"
  },
  back: {
    flex: 1
  },
  container: {
    margin: 10,
    borderRadius: 20,
    height: "40%",
    justifyContent: "center",
    alignItems: "center",
    padding: 5
  },
  img: {
    height: 200,
    width: 200
  },
  closeButton: {
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    width: 100
  },
  textStyle: {
    textAlign: "center",
    fontSize: 20
  },
  topContainer: {
    flex: 4,
    flexDirection: "row",
    margin: 5
  },
  leftTop: {
    flex: 1,
    padding: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  rightTop: {
    flex: 1,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "space-around"
  },
  pronounciationText: {
    textAlign: "center",
    fontSize: 30
  }
};

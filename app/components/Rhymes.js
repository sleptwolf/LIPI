import React, { Component } from 'react';
import {
	View,
	Modal,
	ImageBackground,
	StatusBar,
	TouchableOpacity,
	Image,
	Dimensions,
	Text,
	Animated,
	Easing,
	ViewPagerAndroid
} from 'react-native';
import Header from './Header';
import LottieView from 'lottie-react-native';

const { width, height } = Dimensions.get('window');
const rhymeHeight = 175;
const rhymeWidth = 193;

const rhymeJson = [
	require('../assets/json/rhyme/kukhuri ka/rh1.json'),
	require('../assets/json/rhyme/kukhuri ka/rh2.json'),
	require('../assets/json/rhyme/kukhuri ka/rh3.json'),
	require('../assets/json/rhyme/kukhuri ka/rh4.json'),
	require('../assets/json/rhyme/kukhuri ka/rh5.json'),
	require('../assets/json/rhyme/kukhuri ka/rh6.json'),
	require('../assets/json/rhyme/kukhuri ka/rh7.json')
];

class Rhymes extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false,
			i: 0,
			page: 0
		};
		this.animatedValue = new Animated.Value(0);
		this.animateRhyme = this.animateRhyme.bind(this);
	}
	componentDidMount() {
		StatusBar.setHidden(true);
	}

	showModal(x) {
		this.setState({ visible: x });
		this.animatedValue.setValue(0);
		if (x === true) {
			this.animateRhyme(0);
		}
	}

	animateRhyme(x) {
		this.animatedValue.setValue(0);
		this.setState({ i: x });
		Animated.timing(this.animatedValue, {
			toValue: 1,
			duration: 4000,
			easing: Easing.linear
		}).start(() => {
			if (this.state.i < 6) this.animateRhyme(this.state.i + 1);
		});
	}

	nextPage() {
		return this.state.page;
	}
	renderModal() {
		const rhymeTimer = this.animatedValue.interpolate({
			inputRange: [0, 1],
			outputRange: [0, 1]
		});
		return (
			<Modal
				visible={this.state.visible}
				onRequestClose={() => {
					this.showModal(false);
					this.setState({ i: 0 });
				}}
				animationType='slide'
				style={{
					margin: 0
				}}
			>
				<View style={{ width: '100%', height: '100%' }}>
					{/* title */}
					<View
						style={{
							width: '98%',
							height: '10%',
							borderWidth: 1,
							alignSelf: 'center'
						}}
					>
						<Text> {this.state.i}</Text>
					</View>
					{/* rhyme animation */}
					<ViewPagerAndroid
						style={{
							width: '100%',
							height: '52.35%',
							borderWidth: 1,
							borderColor: 'red',
							justifyContent: 'center'
						}}
						scrollEnabled={false}
						initialPage={0}
						ref={(viewpager) => {this.viewpager = viewpager}}
					>
						<LottieView
							source={rhymeJson[0]}
							style={{
								width,
								height: (width * rhymeHeight) / rhymeWidth
							}}
							resizeMode='cover'
							onAnimationFinish={() => this.viewpager.setPageWithoutAnimation(1)}
							autoPlay
							loop={false}
							key='1'
						/>
						<LottieView
							source={rhymeJson[1]}
							style={{
								width,
								height: (width * rhymeHeight) / rhymeWidth
							}}
							resizeMode='cover'
							onAnimationFinish={() => this.viewpager.setPageWithoutAnimation(1)}
							autoPlay
							loop={false}
							key='1'
						/>
					</ViewPagerAndroid>
					{/* rhyme text */}
					<View style={{ width: '100%', height: '38%', borderWidth: 1 }}>
						<Text> rhyme text </Text>
					</View>
				</View>
			</Modal>
		);
	}

	render() {
		return (
			<ImageBackground
				source={require('../assets/bg/bg3.png')}
				style={{ width: '100%', height: '100%' }}
				imageStyle={{ width: '100%', height: '100%', resizeMode: 'stretch' }}
			>
				<Header
					onPressHome={() => this.props.navigation.navigate('ChoicePage')}
					onPressBack={() => goBack()}
				/>
				<View
					style={{
						width: '100%',
						height: '100%',
						borderWidth: 1,
						alignItems: 'center',
						// justifyContent: 'space-evenly',
						paddingVertical: 50
					}}
				>
					<View
						style={{
							height: '25%',
							width: '60%',
							borderWidth: 1,
							justifyContent: 'center'
						}}
					>
						<TouchableOpacity onPress={() => this.showModal(true)}>
							<Image
								source={require('../assets/buttons/rh1button.png')}
								style={{ width: '100%', height: '90%', resizeMode: 'stretch' }}
							/>
						</TouchableOpacity>
					</View>
					<View
						style={{
							height: '25%',
							width: '60%',
							borderWidth: 1,
							justifyContent: 'center'
						}}
					>
						<TouchableOpacity onPress={() => this.showModal(true)}>
							<Image
								source={require('../assets/char/C1.png')}
								style={{ width: '100%', height: '90%', resizeMode: 'stretch' }}
							/>
						</TouchableOpacity>
					</View>
					<View
						style={{
							height: '25%',
							width: '60%',
							borderWidth: 1,
							justifyContent: 'center'
						}}
					>
						<TouchableOpacity onPress={() => this.showModal(true)}>
							<Image
								source={require('../assets/char/C1.png')}
								style={{ width: '100%', height: '90%', resizeMode: 'stretch' }}
							/>
						</TouchableOpacity>
					</View>
				</View>
				{this.renderModal()}
			</ImageBackground>
		);
	}
}

export { Rhymes };

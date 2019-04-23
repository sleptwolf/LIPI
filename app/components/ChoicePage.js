import React from 'react';
import {
	View,
	ImageBackground,
	StatusBar,
	TouchableOpacity,
	Image,
	Dimensions,
	Animated,
	Easing
} from 'react-native';

const { width, height } = Dimensions.get('window');

class ChoicePage extends React.Component {
	constructor(props) {
		super(props);
		this.animate = this.animate.bind(this);
		this.animate2 = this.animate2.bind(this);
		this.animatedValue = new Animated.Value(0);
		this.animatedValue1 = new Animated.Value(0);
		this.animatedValue2 = new Animated.Value(0);
		this.animatedValue3 = new Animated.Value(0);
		this.animatedValue4 = new Animated.Value(0);
	}

	static navigationOptions = {
		headerStyle: {
			backgroundColor: 'transparent'
		}
	};
	state = {};

	componentDidMount() {
		StatusBar.setHidden(true);
		this.setState({ isHidden: false });
		this.animate();
		this.animate2();
		this.animate3();
		this.animate4();
	}

	animate() {
		this.animatedValue.setValue(0);
		Animated.timing(this.animatedValue, {
			toValue: 1,
			duration: 800,
			easing: Easing.linear
		}).start(() => this.animate());
	}

	animate2() {
		this.animatedValue1.setValue(0);
		Animated.timing(this.animatedValue1, {
			toValue: 1,
			duration: 1000,
			easing: Easing.linear
		}).start(() => this.animate2());
	}

	animate3() {
		this.animatedValue3.setValue(0);
		Animated.timing(this.animatedValue3, {
			toValue: 1,
			duration: 800,
			delay: 1000,
			easing: Easing.linear
		}).start();
	}

	animate4() {
		this.animatedValue4.setValue(0);
		Animated.timing(this.animatedValue4, {
			toValue: 1,
			duration: 800,
			delay: 200,
			easing: Easing.linear
		}).start();
	}

	render() {
		const { containerStyle, bg } = styles;

		// this is for top part of the page
		const rotate = this.animatedValue.interpolate({
			inputRange: [0, 0.25, 0.5, 0.75, 1],
			outputRange: ['0deg', '-15deg', '0deg', '15deg', '0deg']
		});

		const jump = this.animatedValue.interpolate({
			inputRange: [0, 0.25, 0.5, 0.75, 1],
			outputRange: [0, -10, 0, -10, 0]
		});

		const left = this.animatedValue.interpolate({
			inputRange: [0, 0.25, 0.5, 0.75, 1],
			outputRange: [0, -5, 0, 5, 0]
		});

		//this is for bottom part of the page
		const leftHorse = this.animatedValue1.interpolate({
			inputRange: [0, 0.25, 0.5, 0.75, 1],
			outputRange: [0, -2, 0, 2, 0]
		});

		const rotateHorse = this.animatedValue1.interpolate({
			inputRange: [0, 0.25, 0.5, 0.75, 1],
			outputRange: ['0deg', '-5deg', '0deg', '5deg', '0deg']
		});

		const fruit1Top = this.animatedValue3.interpolate({
			inputRange: [0, 1],
			outputRange: [20, height * 0.135]
		});

		const fruit2Top = this.animatedValue4.interpolate({
			inputRange: [0, 1],
			outputRange: [30, height * 0.135]
		});

		return (
			<View style={containerStyle}>
				<ImageBackground
					source={require('../assets/bg/mainbg.png')}
					style={bg}
					imageStyle={{
						width: width + 4,
						height: height + 2,
						resizeMode: 'stretch'
					}}
				>
					<View
						style={{
							height: '30%',
							width
							//  alignItems: 'flex-end'
						}}
					>
						<View
							style={{
								// borderColor: 'red',
								// borderWidth: 1,
								height: height * 0.16,
								width: width * 0.45,
								alignSelf: 'center',
								marginTop: 50
							}}
						>
							<TouchableOpacity
								style={{}}
								onPress={() => {
									this.props.navigation.navigate('MainPage');
								}}
							>
								<Image
									source={require('../assets/buttons/learn.png')}
									style={{
										height: height * 0.16,
										width: width * 0.45,
										resizeMode: 'stretch',
										alignSelf: 'center'
										// borderWidth: 1,
										// borderColor: 'white'
									}}
								/>
							</TouchableOpacity>
						</View>
					</View>
					<View
						style={{
							flexDirection: 'row',
							height: '20%',
							paddingVertical: 30,
							justifyContent: 'space-between',
							width: '98%'
						}}
					>
						<View style={{ height: 50, width: 50, marginTop: 10, left: 20 }}>
							<Animated.Image
								source={require('../assets/char/C3.png')}
								style={{
									height: 50,
									width: 50,
									transform: [{ rotate: rotate }],
									resizeMode: 'contain',
									top: jump,
									left
								}}
							/>
						</View>
						<View style={{ height: 50, width: 50, left: 0 }}>
							<Animated.Image
								source={require('../assets/char/C2.png')}
								style={{
									height: 50,
									width: 50,
									transform: [{ rotate: rotate }],
									resizeMode: 'contain',
									top: jump,
									left
								}}
							/>
						</View>
						<View style={{ height: 50, width: 50, marginTop: -5, left: -5 }}>
							<Animated.Image
								source={require('../assets/char/C6.png')}
								style={{
									height: 50,
									width: 50,
									transform: [{ rotate: rotate }],
									resizeMode: 'contain',
									top: jump,
									left
								}}
							/>
						</View>
						<View style={{ height: 50, width: 50, marginTop: -5 }}>
							<Animated.Image
								source={require('../assets/char/C5.png')}
								style={{
									height: 50,
									width: 50,
									transform: [{ rotate: rotate }],
									resizeMode: 'contain',
									top: jump,
									left
								}}
							/>
						</View>
						<View style={{ height: 50, width: 50 }}>
							<Animated.Image
								source={require('../assets/char/C4.png')}
								style={{
									height: 50,
									width: 50,
									transform: [{ rotate: rotate }],
									resizeMode: 'contain',
									top: jump,
									left
								}}
							/>
						</View>
						<View style={{ height: 50, width: 50, marginTop: 10, left: -5 }}>
							<Animated.Image
								source={require('../assets/char/C1.png')}
								style={{
									height: 50,
									width: 50,
									transform: [{ rotate: rotate }],
									resizeMode: 'contain',
									top: jump,
									left
								}}
							/>
						</View>
					</View>
					<View style={{ height: '50%', width }}>
						<View
							style={{
								// borderColor: 'red',
								// borderWidth: 1,
								height: height * 0.16,
								width: width * 0.45,
								alignSelf: 'center',
								marginTop: 50
							}}
						>
							<TouchableOpacity
								style={{}}
								onPress={() => {
									this.props.navigation.navigate('Quiz');
								}}
							>
								<Image
									source={require('../assets/buttons/play.png')}
									style={{
										height: height * 0.16,
										width: width * 0.45,
										resizeMode: 'stretch',
										alignSelf: 'center'
									}}
								/>
							</TouchableOpacity>
						</View>
						<View
							style={{
								// borderWidth: 1,
								height: '100%',
								width,
								borderColor: 'white',
								flexDirection: 'row',
								padding: 10
							}}
						>
							<View
								style={{
									// borderWidth: 1,
									height: height * 0.1,
									width: width * 0.15,
									borderColor: 'red',
									position: 'absolute',
									top: -30,
									left: 35
								}}
							>
								<Animated.Image
									style={{
										height: height * 0.025,
										width: height * 0.025,
										resizeMode: 'stretch',
										top: fruit1Top,
										position: 'absolute'
									}}
									source={require('../assets/fruit1.png')}
								/>
								<Animated.Image
									style={{
										height: height * 0.025,
										width: height * 0.025,
										resizeMode: 'stretch',
										top: fruit2Top,
										position: 'absolute',
										left: 20
									}}
									source={require('../assets/fruit2.png')}
								/>
							</View>
							<View
								style={{
									// borderWidth: 1,
									height: height * 0.055,
									width: width * 0.15,
									borderColor: 'yellow',
									left: width * 0.24,
									top: height * 0.115
								}}
							>
								<Animated.Image
									source={require('../assets/horse.png')}
									style={{
										width: width * 0.15,
										height: height * 0.055,
										resizeMode: 'stretch',
										left: leftHorse,
										transform: [{ rotate: rotateHorse }]
									}}
								/>
							</View>
						</View>
					</View>
				</ImageBackground>
			</View>
		);
	}
}

export { ChoicePage };

const styles = {
	containerStyle: {
		flex: 1
	},
	bg: {
		flex: 1,
		alignItems: 'center',
		left: -1
	}
};

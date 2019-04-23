import React from 'react';
import {
	ImageBackground,
	StatusBar,
	Text,
	View,
	TouchableOpacity,
	Image,
	Animated,
	Easing,
	Dimensions
} from 'react-native';
import Header from './Header';

const { width, height } = Dimensions.get('window');

class Family extends React.Component {
	constructor(props) {
		super(props);
		this.animatedvalue = new Animated.Value(0);
		this.state = {
			initialHeight: height * 0.6,
			initialWidth: width,
			initial: true,
			newWidth: null,
			newHeight: null,
			newLeft: 0,
			newTop: 0,
			showing: null,
			width: width,
			height: height * 0.6,
			left: 0,
			top: 0
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

	animate(a, b, c, d, e, f) {
		if (this.state.initial === true) this.setState({ initial: false });
		this.setState({
			newWidth: a,
			newHeight: b,
			newLeft: c,
			newTop: d,
			showing: e,
			initial: f
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
		const { top, home, back, bg } = styles;
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
				<View style={styles.container}>
					{/* Main tree image */}
					<Animated.Image
						source={require('../assets/family/familytree.png')}
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
					{/*  invisible back button on image */}
					<View
						style={{
							position: 'absolute',
							width: '100%',
							height: '100%',
							zIndex: this.state.initial === true ? 0 : 1
						}}
					>
						<TouchableOpacity
							onPress={() =>
								this.animate(
									this.state.initialWidth,
									this.state.initialHeight,
									0,
									0,
									null,
									true
								)
							}
							disabled={this.state.initial === true ? true : false}
						>
							<View
								style={{
									width: '100%',
									height: '100%'
								}}
							/>
						</TouchableOpacity>
					</View>
					{/* invisible buttons for family heads that zooms  */}
					<View
						style={{
							position: 'absolute',
							width: 300,
							height: 320,
							top: 42,
							left: 28,
							zIndex: this.state.initial === true ? 1 : 0
						}}
					>
						<View
							style={{
								flexDirection: 'row',
								position: 'absolute',
								width: '100%',
								alignSelf: 'flex-end',
								top: 7
							}}
						>
							<TouchableOpacity
								onPress={() => {
									if (this.state.showing !== 'grandpa')
										this.animate(
											width * 3.5,
											height * 3.5,
											200,
											-350,
											'grandpa'
										);
								}}
								disabled={this.state.initial === true ? false : true}
							>
								<View
									style={{
										width: 50,
										height: 50,
										borderRadius: 25,
										marginLeft: 85
									}}
								/>
							</TouchableOpacity>
							<TouchableOpacity
								onPress={() => {
									if (this.state.showing !== 'grandma')
										this.animate(
											width * 3.5,
											height * 3.5,
											-200,
											-350,
											'grandma'
										);
								}}
								disabled={this.state.initial === true ? false : true}
							>
								<View
									style={{
										width: 50,
										height: 50,
										borderRadius: 25,
										marginLeft: 30
									}}
								/>
							</TouchableOpacity>
						</View>
						<View
							style={{
								flexDirection: 'row',
								position: 'absolute',
								width: '100%',
								alignSelf: 'flex-end',
								top: 145
							}}
						>
							<TouchableOpacity
								onPress={() => {
									if (this.state.showing !== 'dad')
										this.animate(width * 3.5, height * 3.5, 500, -1000, 'dad');
								}}
								disabled={this.state.initial === true ? false : true}
							>
								<View
									style={{
										width: 50,
										height: 50,
										borderRadius: 25,
										marginLeft: 20
									}}
								/>
							</TouchableOpacity>
							<TouchableOpacity
								onPress={() => {
									if (this.state.showing !== 'mom')
										this.animate(width * 3.5, height * 3.5, 160, -1000, 'mom');
								}}
								disabled={this.state.initial === true ? false : true}
							>
								<View
									style={{
										width: 50,
										height: 50,
										borderRadius: 25,
										marginLeft: 20
									}}
								/>
							</TouchableOpacity>
							<TouchableOpacity
								onPress={() => {
									if (this.state.showing !== 'aunt')
										this.animate(
											width * 3.5,
											height * 3.5,
											-140,
											-1000,
											'aunt'
										);
								}}
								disabled={this.state.initial === true ? false : true}
							>
								<View
									style={{
										width: 50,
										height: 50,
										borderRadius: 25,
										marginLeft: 15
									}}
								/>
							</TouchableOpacity>
							<TouchableOpacity
								onPress={() => {
									if (this.state.showing !== 'uncle')
										this.animate(
											width * 3.5,
											height * 3.5,
											-500,
											-1000,
											'uncle'
										);
								}}
								disabled={this.state.initial === true ? false : true}
							>
								<View
									style={{
										width: 50,
										height: 50,
										borderRadius: 25,
										marginLeft: 22
									}}
								/>
							</TouchableOpacity>
						</View>
						<View
							style={{
								flexDirection: 'row',
								position: 'absolute',
								width: '100%',
								justifyContent: 'space-evenly',
								alignSelf: 'flex-end',
								top: 255
							}}
						>
							<TouchableOpacity
								onPress={() => {
									if (this.state.showing !== 'bbro')
										this.animate(width * 3.5, height * 3.5, 500, -1550, 'bbro');
								}}
								disabled={this.state.initial === true ? false : true}
							>
								<View
									style={{
										width: 50,
										height: 50,
										position: 'relative',
										borderRadius: 25
									}}
								/>
							</TouchableOpacity>
							<TouchableOpacity
								onPress={() => {
									if (this.state.showing !== 'bsis')
										this.animate(width * 3.5, height * 3.5, 160, -1550, 'bsis');
								}}
								disabled={this.state.initial === true ? false : true}
							>
								<View
									style={{
										width: 50,
										height: 50,
										position: 'relative',
										borderRadius: 25
									}}
								/>
							</TouchableOpacity>
							<TouchableOpacity
								onPress={() => {
									if (this.state.showing !== 'lbro')
										this.animate(
											width * 3.5,
											height * 3.5,
											-140,
											-1550,
											'lbro'
										);
								}}
								disabled={this.state.initial === true ? false : true}
							>
								<View
									style={{
										width: 50,
										height: 50,
										position: 'relative',
										borderRadius: 25
									}}
								/>
							</TouchableOpacity>
							<TouchableOpacity
								onPress={() => {
									if (this.state.showing !== 'lsis')
										this.animate(
											width * 3.5,
											height * 3.5,
											-500,
											-1550,
											'lsis'
										);
								}}
								disabled={this.state.initial === true ? false : true}
							>
								<View
									style={{
										width: 50,
										height: 50,
										position: 'relative',
										borderRadius: 25
									}}
								/>
							</TouchableOpacity>
						</View>
					</View>
				</View>
				<View style={styles.buttons}>
					<View style={styles.buttonsTop}>
						<TouchableOpacity
							onPress={() => {
								if (this.state.showing !== 'grandpa')
									this.animate(width * 3.5, height * 3.5, 200, -350, 'grandpa');
								else if (this.state.showing === 'grandpa')
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
								source={
									this.state.showing === 'grandpa'
										? require('../assets/family/black.png')
										: require('../assets/family/grandfather.png')
								}
								style={[
									styles.button,
									this.state.showing === 'grandpa'
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
								if (this.state.showing !== 'grandma')
									this.animate(
										width * 3.5,
										height * 3.5,
										-200,
										-350,
										'grandma'
									);
								else if (this.state.showing === 'grandma')
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
								source={
									this.state.showing === 'grandma'
										? require('../assets/family/black.png')
										: require('../assets/family/grandmother.png')
								}
								style={[
									styles.button,
									this.state.showing === 'grandma'
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
								if (this.state.showing !== 'dad')
									this.animate(width * 3.5, height * 3.5, 500, -1000, 'dad');
								else if (this.state.showing === 'dad')
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
								source={
									this.state.showing === 'dad'
										? require('../assets/family/black.png')
										: require('../assets/family/father.png')
								}
								style={[
									styles.button,
									this.state.showing === 'dad'
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
								if (this.state.showing !== 'mom')
									this.animate(width * 3.5, height * 3.5, 160, -1000, 'mom');
								else if (this.state.showing === 'mom')
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
								source={
									this.state.showing === 'mom'
										? require('../assets/family/black.png')
										: require('../assets/family/mother.png')
								}
								style={[
									styles.button,
									this.state.showing === 'mom'
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
								if (this.state.showing !== 'aunt')
									this.animate(width * 3.5, height * 3.5, -140, -1000, 'aunt');
								else if (this.state.showing === 'aunt')
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
								source={
									this.state.showing === 'aunt'
										? require('../assets/family/black.png')
										: require('../assets/family/aunty.png')
								}
								style={[
									styles.button,
									this.state.showing === 'aunt'
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
								if (this.state.showing !== 'uncle')
									this.animate(width * 3.5, height * 3.5, -500, -1000, 'uncle');
								else if (this.state.showing === 'uncle')
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
								source={
									this.state.showing === 'uncle'
										? require('../assets/family/black.png')
										: require('../assets/family/uncle.png')
								}
								style={[
									styles.button,
									this.state.showing === 'uncle'
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
								if (this.state.showing !== 'bbro')
									this.animate(width * 3.5, height * 3.5, 500, -1550, 'bbro');
								else if (this.state.showing === 'bbro')
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
								source={
									this.state.showing === 'bbro'
										? require('../assets/family/black.png')
										: require('../assets/family/bigbrother.png')
								}
								style={[
									styles.button,
									this.state.showing === 'bbro'
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
								if (this.state.showing !== 'bsis')
									this.animate(width * 3.5, height * 3.5, 160, -1550, 'bsis');
								else if (this.state.showing === 'bsis')
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
								source={
									this.state.showing === 'bsis'
										? require('../assets/family/black.png')
										: require('../assets/family/bigsister.png')
								}
								style={[
									styles.button,
									this.state.showing === 'bsis'
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
								if (this.state.showing !== 'lbro')
									this.animate(width * 3.5, height * 3.5, -140, -1550, 'lbro');
								else if (this.state.showing === 'lbro')
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
								source={
									this.state.showing === 'lbro'
										? require('../assets/family/black.png')
										: require('../assets/family/boy.png')
								}
								style={[
									styles.button,
									this.state.showing === 'lbro'
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
								if (this.state.showing !== 'lsis')
									this.animate(width * 3.5, height * 3.5, -500, -1550, 'lsis');
								else if (this.state.showing === 'lsis')
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
								source={
									this.state.showing === 'lsis'
										? require('../assets/family/black.png')
										: require('../assets/family/girl.png')
								}
								style={[
									styles.button,
									this.state.showing === 'lsis'
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
			</ImageBackground>
		);
	}
}

export { Family };

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
		// borderWidth: 1,
		// borderColor: 'blue',
		alignItems: 'center',
		width: '100%',
		height: '65%',
		marginTop: 1
	},
	buttons: {
		// borderWidth: 1,
		// borderColor: 'yellow',
		width: '100%',
		height: '25%',
		alignItems: 'center',
		justifyContent: 'space-evenly',
		backgroundColor: 'white'
		// borderRadius: 25,
	},
	buttonsTop: {
		height: '48%',
		width: '100%',
		// borderWidth: 1,
		// borderColor: 'red',
		flexDirection: 'row',
		justifyContent: 'space-evenly'
		// borderRadius: 25,
	},
	button: {
		height: 60,
		width: 60
		// resizeMode: 'stretch',
	}
};

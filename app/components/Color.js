import React from 'react';
import {
	View,
	Text,
	ImageBackground,
	Dimensions,
	StatusBar,
	TouchableOpacity,
	Animated,
	Easing
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Header from './Header';

const { width, height } = Dimensions.get('window');

class Color extends React.Component {
	constructor(props) {
		super(props);
		this.animatedColorTop = new Animated.Value(0);
		this.state = {
			color: null,
			waterColor: null
		};
	}
	componentDidMount() {
		StatusBar.setHidden(true);
	}
	dropWater(x) {
		this.animatedColorTop.setValue(0);
		this.setState({ waterColor: x})
		Animated.timing(this.animatedColorTop, {
			toValue: 1,
			duration: 1000,
			easing: Easing.linear
		}).start(() => this.setState({ color: x, waterColor: null }));
	}
	render() {
		const { goBack } = this.props.navigation;

		const waterTop = this.animatedColorTop.interpolate({
			inputRange: [0, 1],
			outputRange: [135, 273]
		});
		return (
			<ImageBackground
				source={require('../assets/bg/colorbg.png')}
				imageStyle={{
					resizeMode: 'stretch',
					width: '100%',
					height: '100%'
				}}
				style={{ width: '100%', height: '100%' }}
			>
				<Header
					onPressHome={() => this.props.navigation.navigate('ChoicePage')}
					onPressBack={() => goBack()}
				/>
				{/* container */}
				<View
					style={{
						height: '100%',
						width: '100%',
						// borderWidth: 1,
						// borderColor: 'red'
					}}
				>
					{/* container for color buttons */}
					<View style={{ width: '100%', height: '20%' }}>
						<View
							style={{
								width: '100%',
								height: '50%',
								// borderWidth: 1,
								// backgroundColor: 'blue',
								flexDirection: 'row',
								alignItems: 'center',
								justifyContent: 'space-evenly'
							}}
						>
							<TouchableOpacity onPress={() => this.dropWater('#cf122a')}>
								<View
									style={{
										height: 50,
										width: 50,
										borderWidth: 1,
										borderRadius: 25,
										backgroundColor: '#cf122a'
									}}
								/>
							</TouchableOpacity>
							<TouchableOpacity onPress={() => this.dropWater('#fce60e')}>
								<View
									style={{
										height: 50,
										width: 50,
										borderWidth: 1,
										borderRadius: 25,
										backgroundColor: '#fce60e'
									}}
								/>
							</TouchableOpacity>
							<TouchableOpacity onPress={() => this.dropWater('#2e3aa5')}>
								<View
									style={{
										height: 50,
										width: 50,
										borderWidth: 1,
										borderRadius: 25,
										backgroundColor: '#2e3aa5'
									}}
								/>
							</TouchableOpacity>
							<TouchableOpacity onPress={() => this.dropWater('#00b300')}>
								<View
									style={{
										height: 50,
										width: 50,
										borderWidth: 1,
										borderRadius: 25,
										backgroundColor: '#00b300'
									}}
								/>
							</TouchableOpacity>
							<TouchableOpacity onPress={() => this.dropWater('#fc7ab5')}>
								<View
									style={{
										height: 50,
										width: 50,
										borderWidth: 1,
										borderRadius: 25,
										backgroundColor: '#fc7ab5'
									}}
								/>
							</TouchableOpacity>
						</View>
						<View
							style={{
								width: '100%',
								height: '50%',
								// borderWidth: 1,
								// backgroundColor: 'green',
								flexDirection: 'row',
								alignItems: 'center',
								justifyContent: 'space-evenly'
							}}
						>
							<TouchableOpacity onPress={() => this.dropWater('#ffffff')}>
								<View
									style={{
										height: 50,
										width: 50,
										borderWidth: 1,
										borderRadius: 25,
										backgroundColor: '#ffffff'
									}}
								/>
							</TouchableOpacity>
							<TouchableOpacity onPress={() => this.dropWater('#000000')}>
								<View
									style={{
										height: 50,
										width: 50,
										borderWidth: 1,
										borderRadius: 25,
										backgroundColor: '#000000'
									}}
								/>
							</TouchableOpacity>
							<TouchableOpacity onPress={() => this.dropWater('#800080')}>
								<View
									style={{
										height: 50,
										width: 50,
										borderWidth: 1,
										borderRadius: 25,
										backgroundColor: '#800080'
									}}
								/>
							</TouchableOpacity>
							<TouchableOpacity onPress={() => this.dropWater('#b5651d')}>
								<View
									style={{
										height: 50,
										width: 50,
										borderWidth: 1,
										borderRadius: 25,
										backgroundColor: '#b5651d'
									}}
								/>
							</TouchableOpacity>
							<TouchableOpacity onPress={() => this.dropWater('#808080')}>
								<View
									style={{
										height: 50,
										width: 50,
										borderWidth: 1,
										borderRadius: 25,
										backgroundColor: '#808080'
									}}
								/>
							</TouchableOpacity>
						</View>
					</View>
					{/* end of container for color buttons */}
					{/* continer for water icon and color view of beaker */}
					<View
						style={{
							height: '60%',
							width: '98%',
							// borderWidth: 1,
							// borderColor: 'cyan',
							alignSelf: 'center'
						}}
					>
						<Animated.View
							style={{
								height: 30,
								width: 30,
								// borderWidth: 1,
								alignItems: 'center',
								justifyContent: 'center',
								position: 'absolute',
								alignSelf: 'center',
								top: waterTop,
								opacity: (this.state.waterColor === null) ? 0 : 1
							}}
						>
							<Icon name='ios-water' size={35} color={this.state.waterColor} />
						</Animated.View>
						<Animated.View
							style={{
								width: 94,
								height: 82,
								// borderWidth: 1,
								alignSelf: 'center',
								position: 'absolute',
								zIndex: 1,
								top: 271,
								borderBottomLeftRadius: 3,
								borderBottomRightRadius: 3,
								backgroundColor: this.state.color,
							}}
						/>
					</View>
					{/* end of container for water icon and color view of beaker */}
				</View>
				{/* end of main container */}
			</ImageBackground>
		);
	}
}

export { Color };

import React, { Component } from 'react';
import {
	View,
	Text,
	ImageBackground,
	TouchableOpacity,
	StatusBar,
	Image
} from 'react-native';
import Header from './Header';

class Quiz extends Component {
	componentDidMount() {
		StatusBar.setHidden(true);
	}

	render() {
		return (
			<ImageBackground
				source={require('../assets/bg/bg3.png')}
				imageStyle={{ height: '100%', width: '100%' }}
				style={{ height: '100%', width: '100%' }}
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
						justifyContent: 'space-evenly',
						alignItems: 'center',
						paddingBottom: 80
					}}
				>
					{/* buttons */}
					<View
						style={{
							width: '40%',
							height: '10%',
							borderWidth: 1,
							justifyContent: 'center'
						}}
					>
						<TouchableOpacity style={{}}>
							<Image
								source={require('../assets/buttons/barakhari.png')}
								style={{
									width: '100%',
									height: '100%',
									alignSelf: 'center',
									resizeMode: 'stretch'
								}}
							/>
						</TouchableOpacity>
					</View>

					<View
						style={{
							width: '40%',
							height: '10%',
							borderWidth: 1,
							justifyContent: 'center'
						}}
					>
						<TouchableOpacity style={{}}>
							<Image
								source={require('../assets/buttons/barakhari.png')}
								style={{
									width: '100%',
									height: '100%',
									alignSelf: 'center',
									resizeMode: 'stretch'
								}}
							/>
						</TouchableOpacity>
					</View>

					<View
						style={{
							width: '40%',
							height: '10%',
							borderWidth: 1,
							justifyContent: 'center'
						}}
					>
						<TouchableOpacity style={{}}>
							<Image
								source={require('../assets/buttons/barakhari.png')}
								style={{
									width: '100%',
									height: '100%',
									alignSelf: 'center',
									resizeMode: 'stretch'
								}}
							/>
						</TouchableOpacity>
					</View>
				</View>
			</ImageBackground>
		);
	}
}

export { Quiz };

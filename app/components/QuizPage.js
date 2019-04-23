import React, { Component } from 'react';
import {
	View,
	ImageBackground,
	Text,
	Image,
	StatusBar,
	Animated,
	Easing,
	TouchableOpacity
} from 'react-native';
import Header from './Header';
import questions from './quizData/ConsonantQuiz';

class QuizPage extends Component {
	constructor() {
		super();
		this.state = {
			QNo: 0,
			score: 0,
			i: 0,
			isWrong: false
		};
	}

	componentDidMount() {
		StatusBar.setHidden(true);
	}

	checkAnswer(selected) {
		if (selected === questions[this.state.i].correctoption) {
			this.setState({ score: this.state.score + 1 });
		} else {
			this.setState({ score: this.state.score - 1 });
		}
	}

	render() {
		const options = questions[this.state.i].options;
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
				{/* main container */}
				<View
					style={{
						height: '100%',
						width: '100%',
						backgroundColor: 'white'
					}}
				>
					{/* question no and score */}
					<View
						style={{
							width: '100%',
							height: '10%',
							borderWidth: 1,
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'space-between',
							padding: 10
						}}
					>
						<Text>Question No: {questions[this.state.i].id}</Text>
						<Text style={{}}>Score: {this.state.score}</Text>
					</View>
					{/* question */}
					<View
						style={{
							width: '100%',
							height: '30%',
							borderWidth: 1,
							justifyContent: 'center'
						}}
					>
						<Text style={{ fontSize: 20, textAlign: 'center' }}>
							{questions[this.state.i].question}
						</Text>
					</View>
					{/* options */}
					<View style={{ width: '100%', height: '50%', borderWidth: 1 }}>
						{/* row 1st */}
						<View
							style={{ flexDirection: 'row', width: '100%', height: '50%' }}
						>
							<View
								style={{
									height: '100%',
									width: '50%',
									backgroundColor: 'red',
									justifyContent: 'center',
									alignItems: 'center'
								}}
							>
								<TouchableOpacity
									style={{ width: '80%', height: '50%' }}
									onPress={() => this.checkAnswer(options.option1)}
								>
									<View
										style={{
											width: '100%',
											height: '100%',
											backgroundColor: 'green',
											justifyContent: 'center',
											alignItems: 'center'
										}}
									>
										<Text>{options.option1}</Text>
									</View>
								</TouchableOpacity>
							</View>
							<View
								style={{
									height: '100%',
									width: '50%',
									backgroundColor: 'green',
									justifyContent: 'center',
									alignItems: 'center'
								}}
							>
								<TouchableOpacity
									style={{ width: '80%', height: '50%' }}
									onPress={() => this.checkAnswer(options.option2)}
								>
									<View
										style={{
											width: '100%',
											height: '100%',
											backgroundColor: 'red',
											justifyContent: 'center',
											alignItems: 'center'
										}}
									>
										<Text>{options.option2}</Text>
									</View>
								</TouchableOpacity>
							</View>
						</View>
						{/* row 2nd */}
						<View
							style={{ flexDirection: 'row', width: '100%', height: '50%' }}
						>
							<View
								style={{
									height: '100%',
									width: '50%',
									backgroundColor: 'green',
									justifyContent: 'center',
									alignItems: 'center'
								}}
							>
								<TouchableOpacity
									style={{ width: '80%', height: '50%' }}
									onPress={() => this.checkAnswer(options.option3)}
								>
									<View
										style={{
											width: '100%',
											height: '100%',
											backgroundColor: 'red',
											justifyContent: 'center',
											alignItems: 'center'
										}}
									>
										<Text>{options.option3}</Text>
									</View>
								</TouchableOpacity>
							</View>
							<View
								style={{
									height: '100%',
									width: '50%',
									backgroundColor: 'red',
									justifyContent: 'center',
									alignItems: 'center'
								}}
							>
								<TouchableOpacity
									style={{ width: '80%', height: '50%' }}
									onPress={() => this.checkAnswer(options.option4)}
								>
									<View
										style={{
											width: '100%',
											height: '100%',
											backgroundColor: 'green',
											justifyContent: 'center',
											alignItems: 'center'
										}}
									>
										<Text>{options.option4}</Text>
									</View>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</View>
			</ImageBackground>
		);
	}
}

export { QuizPage };

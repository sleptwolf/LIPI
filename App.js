import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";

import {
  Splash,
  MainPage,
  ChoicePage,
  Letters,
  Vowels,
  Consonants,
  Barakhari,
  Numbers,
  Words,
  Animals,
  Body,
  Colors,
  Color,
  Family,
  Rhymes,
  Quiz,
  QuizPage
} from './app/components';

const AppNavigator = createStackNavigator(
  {
    Splash: {
      screen: Splash
    },
    MainPage: {
      screen: MainPage
    },
    ChoicePage: {
      screen: ChoicePage
    },
    Letters: {
      screen: Letters
    },
    Vowels: {
      screen: Vowels
    },
    Consonants: {
      screen: Consonants,
    },
    Barakhari: {
      screen: Barakhari,
    },
    Numbers: {
      screen: Numbers
    },
    Words: {
      screen: Words
    },
    Animals: {
      screen: Animals
    },
    Body: {
      screen: Body
    },
    Colors: {
      screen: Colors
    },
    Color: {
      screen: Color
    },
    Family: {
      screen: Family
    },
    Rhymes: {
      screen: Rhymes
    },
    Quiz: {
      screen: Quiz
    },
    QuizPage: {
      screen: QuizPage
    }
  },
  {
    initialRouteName: 'Splash',
    defaultNavigationOptions: {
      header: null
    }
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

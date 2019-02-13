import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

const Header = props => {
  return (
    <View style={styles.top}>
      <View style={styles.back}>
        <TouchableOpacity onPress={props.onPressBack}>
          <Image
            source={require('../assets/buttons/back.png')}
            style={{ height: 45, width: 45, resizeMode: 'stretch' }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.home}>
        <TouchableOpacity
          onPress={props.onPressHome}
        >
          <Image
            source={require('../assets/buttons/home.png')}
            style={{ height: 45, width: 45, resizeMode: 'stretch' }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = {
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
  }
};

import React from 'react';
import { Animated, View, Image, TouchableOpacity } from 'react-native';

const BarakhariButton = props => {
  return (
    <Animated.View style={props.style}>
      <TouchableOpacity onPress={props.onPress} disabled={props.disabled}>
        <Image
          style={{ height: 50, width: 50, resizeMode: 'stretch' }}
          source={props.source}
        />
      </TouchableOpacity>
    </Animated.View>
  );
};

export default BarakhariButton;


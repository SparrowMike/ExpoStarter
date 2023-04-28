import React, { useState } from 'react';
import { Animated, View, StyleSheet, Button } from 'react-native';

const ScalingElement = () => {
  const [animation] = useState(new Animated.Value(1));

  const handlePress = () => {
    Animated.timing(animation, {
      toValue: 2,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const animatedStyle = {
    transform: [{ scale: animation }],
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyle]} />
      <Button title="Scale" onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
});

export default ScalingElement;

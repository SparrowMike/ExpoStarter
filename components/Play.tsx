import React, { useState } from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, Animated } from 'react-native';
import { Audio } from 'expo-av';
import { audioPaths } from '../sounds/notes';

interface Props {
  data: { note: string, color: string };
  scale: string;
}

const Play: React.FC<Props> = ({ data, scale }) => {
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [animation] = useState(new Animated.Value(1));
  
  const loadSound = async () => {
    await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });
    const soundObject = new Audio.Sound();
    const soundPath = audioPaths[data.note];
    try {
      await soundObject.loadAsync(soundPath, { positionMillis: 200 });
      setSound(soundObject);
    } catch (error) {
      console.warn(error);
    }
  };

  const playSound = async () => {
    if (!sound) {
      await loadSound();
    }

    if (sound) {
      try {
        await sound.replayAsync();
      } catch (error) {
        console.log('Failed to play the sound', error);
      }
    }
  };

  const handlePressIn = () => {
    Animated.spring(animation, {
      toValue: 0.4,
      useNativeDriver: true,
    }).start(() => playSound());
  };

  const handlePressOut = () => {
    Animated.spring(animation, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  const animatedStyle = {
    transform: [{ scale: animation }],
    backgroundColor: data.color
  };

  return (
    <TouchableWithoutFeedback onPressIn={handlePressIn} onPressOut={handlePressOut} >
      <Animated.View style={[styles.button, animatedStyle]}>
        <Text style={styles.buttonText}>{data.note}</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Play;
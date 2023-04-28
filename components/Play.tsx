import React, { useState } from 'react';
import { View, Button } from 'react-native';
import { Audio } from 'expo-av';
import { audioPaths } from '../sounds/notes';

interface PlayProps {
  note: string;
  currentNote: string;
}

const Play: React.FC<PlayProps> = ({ note, currentNote }) => {
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  
  const loadSound = async () => {
    await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });
    const soundObject = new Audio.Sound();
    const soundPath = audioPaths[note];
    try {
      await soundObject.loadAsync(soundPath);
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

  const isCurrentNote = currentNote === note;

  return (
    <View style={{ opacity: isCurrentNote ? 1 : 0.5 }}>
      <Button title={note} onPress={playSound} />
    </View>
  );
};

export default Play;
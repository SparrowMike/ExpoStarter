import { Asset } from 'expo-asset';
import { Audio } from 'expo-av';

interface SoundAsset extends Asset {
  sound: Audio.Sound;
}

export const audioPaths: Record<string, SoundAsset> = {
  C: require('./Piano.mf.C4.mp3'),
  D: require('./Piano.mf.D4.mp3'),
  E: require('./Piano.mf.E4.mp3'),
  F: require('./Piano.mf.F4.mp3'),
  G: require('./Piano.mf.G4.mp3'),
};
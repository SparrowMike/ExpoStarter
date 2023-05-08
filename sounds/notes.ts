import { Asset } from 'expo-asset';
import { Audio } from 'expo-av';

export interface SoundAsset extends Asset {
  sound: Audio.Sound;
}

export const audioPaths: Record<string, SoundAsset> = {
  // C: require('./Piano.mf.C4.mp3'),
  // D: require('./Piano.mf.D4.mp3'),
  // E: require('./Piano.mf.E4.mp3'),
  // F: require('./Piano.mf.F4.mp3'),
  // G: require('./Piano.mf.G4.mp3'),

  C: require('./Piano/c4.mp3'),
  D: require('./Piano/d4.mp3'),
  E: require('./Piano/e4.mp3'),
  F: require('./Piano/f4.mp3'),
  G: require('./Piano/g4.mp3'),
};
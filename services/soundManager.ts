import { Audio } from 'expo-av';

interface SoundFile {
  [key: string]: any;
}

interface LoadedSounds {
  [key: string]: Audio.Sound;
}

interface SoundManagerOptions {
  onLoaded?: () => void;
}

class SoundManager {
  private sounds: LoadedSounds = {};

  public async loadSounds(soundFiles: SoundFile, options?: SoundManagerOptions): Promise<void> {
    const promises = [];
    for (const key in soundFiles) {
      const soundObject = new Audio.Sound();
      const soundPath = soundFiles[key];
      const promise = soundObject.loadAsync(soundPath).then(() => {
        this.sounds[key] = soundObject;
      }).catch((error) => {
        console.warn(`Failed to load sound ${key}:`, error);
      });
      promises.push(promise);
    }
    await Promise.all(promises);
    if (options?.onLoaded) {
      options.onLoaded();
    }
  }

  public async playSound(sound: string): Promise<void> {
    if (this.sounds[sound]) {
      try {
        await this.sounds[sound].replayAsync();
      } catch (error) {
        console.warn(`Failed to play sound ${sound}:`, error);
      }
    }
  }
}

export default SoundManager;

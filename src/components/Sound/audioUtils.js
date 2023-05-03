import { useEffect, useState } from 'react';
import { Audio } from 'expo-av';

export const loadSound = async () => {
  const { sound } = await Audio.Sound.createAsync(
    require('../../assets/Sound/sound.mp3')
  );
  return sound;
};

export const useAudioEffect = () => {
  const [sound, setSound] = useState();

  useEffect(() => {
    const loadSoundAsync = async () => {
      const loadedSound = await loadSound();
      setSound(loadedSound);
    };
    loadSoundAsync();
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, []);

  return sound;
};

import * as Font from 'expo-font'

export async function loadFonts() {
  await Font.loadAsync({
    'Roboto-Light': require('../../assets/Fonts/Roboto-Light.ttf'),
  })
}

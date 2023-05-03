import { Alert, BackHandler } from 'react-native';
import { useEffect } from 'react';

export const useExitConfirmation = () => {
  function confirmExit() {
    Alert.alert(
      'Sair do aplicativo',
      'Tem certeza que deseja sair do aplicativo?',
      [
        { text: 'Cancelar', onPress: () => {} },
        { text: 'Sair', onPress: () => BackHandler.exitApp() }
      ]
    );
    return true;
  }

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      confirmExit();
      return true;
    });
  
    return () => backHandler.remove();
  }, []);

  return {};
};

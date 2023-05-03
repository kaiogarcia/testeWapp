/*import { Alert } from 'react-native';
import { useAudioEffect } from '../Sound/audioUtils';

export const excluirItem = (id, listaCompras, setListaCompras) => {
  const sound = useAudioEffect();

  Alert.alert(
    'Excluir item',
    'Tem certeza que deseja excluir este item da lista?',
    [
      {
        text: 'Cancelar',
        style: 'cancel'
      },
      {
        text: 'Excluir',
        style: 'destructive',
        onPress: () => {
          // Toca o som quando um item é excluído
          sound.replayAsync();
          const novoArrayCompras = listaCompras.filter((item) => item.id !== id);
          setListaCompras(novoArrayCompras);
        }
      }
    ]
  );
};
*/
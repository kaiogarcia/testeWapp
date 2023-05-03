import { useState } from 'react';
import { Alert } from 'react-native';
import { useExitConfirmation } from '../Confirmation/exitConfirmation';
import { useAudioEffect } from '../Sound/audioUtils';


export const useListaCompras = () => {
  const [inputText, setInputText] = useState('');
  const [listaCompras, setListaCompras] = useState([]);
  const sound = useAudioEffect();
  const confirmExit = useExitConfirmation();

  function marcarItem(id) {
    const novoArrayCompras = listaCompras.map(item => {
      if (item.id === id) {
        // Toca o som quando um item é marcado
        sound.replayAsync();
        return { ...item, marcado: !item.marcado };
      } else {
        return item;
      }
    });
    setListaCompras(novoArrayCompras);
  }

  function excluirItem(id) {
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
  }  

  const totalItens = listaCompras.length;
  const itensMarcados = listaCompras.filter(item => item.marcado).length;

  return {
    inputText,
    setInputText,
    listaCompras,
    setListaCompras,
    marcarItem,
    excluirItem,
    totalItens,
    itensMarcados
  };
};

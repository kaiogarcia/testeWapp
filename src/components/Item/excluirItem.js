import { Alert } from 'react-native';


const excluirItem = (id, listaCompras, setListaCompras, sound) => {
  Alert.alert(
    'Excluir item',
    'Tem certeza que deseja excluir este item da lista?',
    [
      {
        text: 'Cancelar',
        style: 'cancel',
      },
      {
        text: 'Excluir',
        style: 'destructive',
        onPress: () => {
          sound.replayAsync();
          const novoArrayCompras = listaCompras.filter(
            (item) => item.id !== id
          );
          setListaCompras(novoArrayCompras);
        },
      },
    ]
  );
};

export default excluirItem;

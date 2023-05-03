import { useState } from 'react';

export const adicionarItem = (inputText, listaCompras, setListaCompras, setInputText) => {
  if (inputText !== '') {
    const novoItem = {
      id: Date.now().toString(),
      nome: inputText,
      marcado: false,
    };
    setListaCompras([...listaCompras, novoItem]);
    setInputText('');
  }
};

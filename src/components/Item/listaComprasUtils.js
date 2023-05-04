import { useState } from 'react';
import { useExitConfirmation } from '../Confirmation/exitConfirmation';
import { useAudioEffect } from '../Sound/audioUtils';
import marcarItem from './marcarItem';
import excluirItem from './excluirItem';
import adicionarItem from './adicionarItem';

export const useListaCompras = () => {
  const [inputText, setInputText] = useState('');
  const [listaCompras, setListaCompras] = useState([]);
  const sound = useAudioEffect();
  const confirmExit = useExitConfirmation();

  const handleAdicionarItem = (id) => {
    adicionarItem(inputText, listaCompras, setListaCompras, setInputText);
  };

  const handleMarcarItem = (id) => {
    marcarItem(id, listaCompras, setListaCompras, sound);
  };

  const handleExcluirItem = (id) => {
    excluirItem(id, listaCompras, setListaCompras, sound);
  };

  const totalItens = listaCompras.length;
  const itensMarcados = listaCompras.filter((item) => item.marcado).length;

  return {
    inputText,
    setInputText,
    listaCompras,
    setListaCompras,
    handleAdicionarItem,
    handleMarcarItem,
    handleExcluirItem,
    totalItens,
    itensMarcados,
  };
};
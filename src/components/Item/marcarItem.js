/*import { useState } from 'react';

export const useMarcarItem = (listaCompras, setListaCompras, sound) => {

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

  return {
    marcarItem
  };
};*/

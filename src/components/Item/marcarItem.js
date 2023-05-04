const marcarItem = (id, listaCompras, setListaCompras, sound) => {
  const novoArrayCompras = listaCompras.map((item) =>
    item.id === id
      ? { ...item, marcado: !item.marcado }
      : item
  );
  sound.replayAsync();
  setListaCompras(novoArrayCompras);
};

export default marcarItem;

import React, { useState, useEffect } from 'react'
import { useListaCompras } from './src/components/Item/listaComprasUtils'
import LoadingScreen from './src/components/Screen/LoadingScreen'
import { loadFonts } from './src/components/Fonts/customFonts'
import Header from './src/components/Header'
import Footer from './src/components/Footer'
import ListContainer from './src/components/Container'

export default function App() {
  const {
    inputText,
    setInputText,
    listaCompras,
    handleAdicionarItem,
    handleMarcarItem,
    handleExcluirItem,
    totalItens,
    itensMarcados,
  } = useListaCompras()

  const [fontsLoaded, setFontsLoaded] = useState(false)

  useEffect(() => {
    async function loadApp() {
      await loadFonts()
      setFontsLoaded(true)
    }
    loadApp()
  }, [])

  return (
    <LoadingScreen>
      <Header totalItens={totalItens} itensMarcados={itensMarcados} />
      <ListContainer
        listaCompras={listaCompras}
        handleMarcarItem={handleMarcarItem}
        handleExcluirItem={handleExcluirItem}
      />
      <Footer inputText={inputText} setInputText={setInputText} handleAdicionarItem={handleAdicionarItem} />
    </LoadingScreen>
  )
}

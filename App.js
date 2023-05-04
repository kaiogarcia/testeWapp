import React, { useState, useEffect } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useListaCompras } from './src/components/Item/listaComprasUtils';
import styles from './src/style/styles';
import LoadingScreen from './src/components/Screen/LoadingScreen';
import { loadFonts } from './src/components/Fonts/customFonts';

export default function App() {
  const {
    inputText,
    setInputText,
    listaCompras,
    setListaCompras,
    handleAdicionarItem,
    handleMarcarItem,
    handleExcluirItem,
    totalItens,
    itensMarcados
  } = useListaCompras();

  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadApp() {
      await loadFonts();
      setFontsLoaded(true);
    }
    loadApp();
  }, []);
  
  return (
    <LoadingScreen>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Lista de Compras</Text>
          <Text style={styles.headerNum}>{itensMarcados}/{totalItens}</Text>
        </View>
        {listaCompras.length > 0 ? (
          <View style={styles.content}>
            {listaCompras.map(item => (
              <TouchableOpacity
                key={item.id}
                style={[styles.item, item.marcado && styles.itemMarked]}
                onPress={() => handleMarcarItem(item.id)}
              >
                <View style={styles.itemCheckbox}>
                  {item.marcado && (
                    <FontAwesome name="check" size={18} color="#fff" style={styles.itemCheckboxMarked} />
                  )}
                </View>
                <Text style={[styles.itemText, item.marcado && styles.itemTextMarked]}>
                  {item.nome}
                </Text>
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => handleExcluirItem(item.id)}
                >
                  <Text style={styles.deleteButtonText}>X</Text>
                </TouchableOpacity>
              </TouchableOpacity>        
            ))}
          </View>
        ) : (
          <View style={styles.content}>
            <Text style={styles.noItemsText}>Nenhum item na lista</Text>
          </View>
        )}
        <View style={styles.footer}>
          <TextInput
            style={styles.input}
            placeholder="Novo item da lista"
            value={inputText}
            onChangeText={setInputText}
          />
          <TouchableOpacity style={styles.addButton} onPress={handleAdicionarItem}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LoadingScreen>
  );
}

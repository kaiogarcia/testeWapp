import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from './src/style/styles';
import { useListaCompras } from './src/components/Item/listaComprasUtils';
import { adicionarItem } from './src/components/Item/adicionarItem';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  
  const {
    inputText,
    setInputText,
    listaCompras,
    setListaCompras,
    marcarItem,
    excluirItem,
    totalItens,
    itensMarcados
  } = useListaCompras();

  function handleAdicionarItem() {
    adicionarItem(inputText, listaCompras, setListaCompras, setInputText);
  }
  
  return (
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
          onPress={() => marcarItem(item.id)}
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
            onPress={() => excluirItem(item.id)}
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
  );
}

import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './styles'

export default function Footer({ inputText, setInputText, handleAdicionarItem }) {
  return (
    <View style={styles.footer}>
      <TextInput style={styles.input} placeholder="Novo item da lista" value={inputText} onChangeText={setInputText} />
      <TouchableOpacity style={styles.addButton} onPress={handleAdicionarItem}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  )
}

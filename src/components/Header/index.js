import React from 'react'
import { Text, View } from 'react-native'
import styles from './styles'

export default function Header({ totalItens, itensMarcados }) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Lista de Compras</Text>
      <Text style={styles.headerNum}>
        {itensMarcados}/{totalItens}
      </Text>
    </View>
  )
}

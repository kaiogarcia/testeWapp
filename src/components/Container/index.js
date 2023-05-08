import React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from './styles'

export default function ListContainer({ listaCompras, handleMarcarItem, handleExcluirItem }) {
  return (
    <View style={styles.container}>
      {listaCompras.length > 0 ? (
        <View style={styles.content}>
          {listaCompras.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={[styles.item, item.marcado && styles.itemMarked]}
              onPress={() => handleMarcarItem(item.id)}
            >
              <View style={styles.itemCheckbox}>
                {item.marcado && <FontAwesome name="check" size={18} color="#fff" style={styles.itemCheckboxMarked} />}
              </View>
              <Text style={[styles.itemText, item.marcado && styles.itemTextMarked]}>{item.nome}</Text>
              <TouchableOpacity style={styles.deleteButton} onPress={() => handleExcluirItem(item.id)}>
                {styles.deleteButtonText && <FontAwesome name="close" color="#FFFFFF" /> }
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </View>
      ) : (
        <View style={styles.content}>
          <Text style={styles.noItemsText}>Nenhum item na lista</Text>
        </View>
      )}
    </View>
  )
}

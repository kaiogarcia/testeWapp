import { StyleSheet } from 'react-native';
import * as Font from 'expo-font';

const customFonts = {
  'Roboto-Light': require('../assets/Fonts/Roboto-Light.ttf'),
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
      backgroundColor: '#2980B9',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      height: 90,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    headerText: {
      paddingTop: 25,
      fontSize: 20,
      color: 'white',
    },
    headerNum: {
        paddingTop: 25,
        fontSize: 20,
        color: 'white',
        marginLeft: 100,
    },
    content: {
      flex: 1,
      padding: 5,    
    },
    item: {
     flexWrap: 'wrap',
     flexDirection: 'row',
     padding: 22,
     borderWidth: 1,
     //height: 70,
     borderRadius: 2,
     borderColor: '#E6e6e6',
     alignItems: 'center',
     marginBottom: 5,
    },
    itemMarked: {
      backgroundColor: 'rgba(63, 175, 71, .1)',
    },
    itemCheckbox: {
        marginLeft: 30,
        position: 'absolute',
        flexDirection: 'row',
        width: 20,
        height: 20,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'normal',
    },
    itemCheckboxMarked: {
      backgroundColor: '#3FAF47',
      fontSize: 18,
    },
    itemText: {
      marginHorizontal:20,
      marginLeft: 70,
      flex: 1,
      fontSize: 18,
      color: '#6E6E6E',
    },
    itemTextMarked: {
      textDecorationLine: 'line-through',
      color: '#3FAF47',
    },
    noItemsText: {
      color: 'gray',
      fontSize: 14,
      textAlign: 'center',
    },
    deleteButton: {
      backgroundColor: "#FF8888",
      borderRadius: 50,
      width: 18,
      height: 18,
      alignItems: "center",
      justifyContent: "center",
      marginRight: 20,
    },
    deleteButtonText: {
      justifyContent: 'space-between',
      color: "#fff",
      fontSize: 10,
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: '#2980B9',
      padding: 15,
      width: '100%',
    },
    input: {
        fontSize: 16,
        borderRadius: 3,
        width: 280,
        height: 60,
        backgroundColor: 'white',
        paddingHorizontal: 10,
      },
      addButton: {
          backgroundColor: 'rgba(227, 238, 253, 1)',
          width: 90,
          height: 60,
          borderRadius: 3,
          justifyContent: 'center',
          alignItems: 'center',
        },
        addButtonText: {
            fontSize: 30,
            color: '#2980b9',
        },
  })

export default styles;

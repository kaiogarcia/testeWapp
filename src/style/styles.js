import { StyleSheet } from 'react-native';

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
     padding: 5,
     borderWidth: 1,
     height: 70,
     borderRadius: 2,
     borderColor: '#E6e6e6',
     flexDirection: 'row',
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
    },
    itemText: {
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
      color: "#fff",
      fontSize: 10,
    },
    footer: {
      flexDirection: 'row',
      backgroundColor: '#2980B9',
      padding: 15,
      width: '100%',
      justifyContent: 'space-between',
    },
    input: {
        borderRadius: 3,
        width: '70%',
        height: 50,
        backgroundColor: 'white',
        paddingHorizontal: 10,
      },
      addButton: {
          backgroundColor: 'white',
          width: 20,
          color: 'white',
          width: 100,
          borderRadius: 4,
          justifyContent: 'center',
          alignItems: 'center',
        },
        addButtonText: {
            fontSize: 30,
            color: '#2980b9',
        },
  })

export default styles;

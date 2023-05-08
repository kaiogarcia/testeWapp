import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 5,
  },
  deleteButton: {
    backgroundColor: '#FF8888',
    borderRadius: 50,
    width: 18,
    height: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
  },
  deleteButtonText: {
    justifyContent: 'space-between',
    color: '#fff',
    fontSize: 10,
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
    marginHorizontal: 20,
    marginLeft: 50,
    flex: 1,
    fontSize: 16,
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
})

export default styles

import { StyleSheet, Text, View, Button, FlatList} from 'react-native';

import Pizzaitem from './components/Pizzaitem.js';

export default function App() {


  const pizzaData = [{}, {}, {}, {}, {}, {}];


  return (
    <View style={styles.container}>
      <Text style={styles.text}>PIZZALATOR</Text>
      
      <View style={styles.pizza_container}>
      <FlatList
          data={pizzaData}
          renderItem={() => <Pizzaitem />}
          // Add keyExtractor for unique keys, here using index
          keyExtractor={(item, index) => index.toString()}
          // Additional FlatList properties for layout
          numColumns={2} // Number of columns
        />
      </View>

      <View style={styles.button_container}>
        <Button title="Add pizza" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    flex: 2,
    marginTop: 20,
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlignVertical: 'center',
  },
  pizza_container:
  {
    flex: 7,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  button_container:
  {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

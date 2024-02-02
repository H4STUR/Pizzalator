import { StyleSheet, Text, View } from "react-native";

function Pizzaitem()
{

    return(
        <View style={styles.pizza}>
          <Text style={styles.pizza_title}>Picka 1</Text>
          <Text style={styles.pizza_text}>Size:</Text>
          <Text style={styles.pizza_text}>Price:</Text>
          <Text style={styles.pizza_text}>Amount of pizza:</Text>
          <Text style={styles.pizza_text}>Price to amount:</Text>
        </View>
    )
}

export default Pizzaitem;

const styles = StyleSheet.create({
    pizza: {
        width: '46%',
        height: 200,
        backgroundColor: '#2b2b2b',
        margin: '2%',
        borderRadius: 10,
        padding: 10,
      },
      pizza_title: {
        color: 'white',
        fontSize: 16,
        margin: 10,
        textAlign: 'center',
      },
      pizza_text: {
        color: 'white',
        fontSize: 14,
        margin: 2,
      },
})
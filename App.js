import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from "react-native";
import Products from './components/Products';
import AddProduct from './components/AddProducts';

export default function App() {

  const [myProducts, setMyProducts] = useState([]);

  const submitHandler = (product) => {
    const idString = Date.now().toString();
setMyProducts( currentMyProducts => [{key: idString, name: product}, ...currentMyProducts]);
setProduct('');

  }

  
  return (
    <View style={styles.container}>
<AddProduct submitHandler={submitHandler}
/>       
      

      <FlatList
      data={myProducts}
      renderItem={( {item}) => <Products name={item.name}/> }
      />

    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    paddingTop: 60,
  },
  
  
});

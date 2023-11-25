import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";


const Products = ({name}) => {
    return (
<View style={styles.items}>
    <Text style={styles.element}> { item.name}</Text>
</View>
    )
}


const styles = StyleSheet.create({
   
    items: {
  marginTop: 10
    },
    element: {
      backgroundColor: "#ffb6c1",
  fontSize: 17,
  padding: 20,
  marginVertical: 6
    }
  });
  


export default Products
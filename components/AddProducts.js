import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

const [product, setProduct] = useState('');

const inputHandler = (val) => {
    setProduct(val)
  }

const AddProduct = ({ submitHandler }) => {
    return (
        <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} 
        placeholder="nouveau produit"
        onChangeText={inputHandler}
        value={product}
        />
        <Button 
        title="valider"
        onPress={ () => submitHandler(text)}
        />
      </View>
    )
}



const styles = StyleSheet.create({

   
      inputContainer: {
        flexDirection: "row",
        marginBottom: 15
      },
      textInput: {
        borderColor: "grey",
        borderWidth: 1,
        padding: 5,
        paddingLeft: 9,
        fontSize: 18,
        flexGrow:1
      },
     
})


export default AddProduct
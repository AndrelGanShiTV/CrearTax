import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Menu({ navigation }) {
  return (
    <>
      <View style={styles.container}>
        <Text>Estamos en el Menu</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Menu;

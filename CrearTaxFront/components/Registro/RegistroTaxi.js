import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Image,
} from "react-native";

const RegistroTaxi = ({ navigation }) => {
  const [placa, setPlaca] = useState("");
  const [modeloCarro, setModeloCarro] = useState("");
  const [marca, setMarca] = useState("");
  const [kilometraje, setKilometraje] = useState("");

  const handleRegistrarse = () => {
    // Aquí puedes realizar la lógica para registrar la información del taxi.
    console.log("Placa:", placa);
    console.log("Modelo de Carro:", modeloCarro);
    console.log("Marca:", marca);
    console.log("Kilometraje:", kilometraje);
  };

  const handleNavMenu = () => {
    navigation.navigate("Menu"); // Navega a la pantalla de inicio de sesión
  };

  const ejecutarRegistro = () => {
    handleRegistrarse();
    handleNavMenu();
  };

  return (
    <View style={styles.container}>
      <Image source={require("../../img/creartax.jpg")} style={styles.imagen} />
      <Text style={styles.titulo}>Información del Taxi</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Placa:</Text>
        <TextInput
          style={styles.input}
          placeholder="Placa"
          value={placa}
          onChangeText={(text) => setPlaca(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Modelo de Carro:</Text>
        <TextInput
          style={styles.input}
          placeholder="Modelo de Carro"
          value={modeloCarro}
          onChangeText={(text) => setModeloCarro(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Marca:</Text>
        <TextInput
          style={styles.input}
          placeholder="Marca"
          value={marca}
          onChangeText={(text) => setMarca(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Kilometraje:</Text>
        <TextInput
          style={styles.input}
          placeholder="Kilometraje"
          value={kilometraje}
          onChangeText={(text) => setKilometraje(text)}
        />
      </View>
      <Pressable style={styles.registrarseButton} onPress={ejecutarRegistro}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
  imagen: {
    width: 100, // Ajusta el ancho de la imagen según tus necesidades
    height: 100, // Ajusta el alto de la imagen según tus necesidades
    marginBottom: 20,
    alignSelf: "center",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1a1a1a",
    marginBottom: 20,
    textAlign: "center",
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  registrarseButton: {
    backgroundColor: "#1a1a1a",
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default RegistroTaxi;

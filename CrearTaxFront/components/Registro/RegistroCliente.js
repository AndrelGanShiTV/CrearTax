import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Pressable,
  StyleSheet,
  Image,
} from "react-native";

const RegistroCliente = ({ navigation }) => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [telefono, setTelefono] = useState("");

  const handleRegistro = () => {
    // Aquí puedes realizar la lógica de registro, como enviar los datos al servidor.
    console.log("Nombre:", nombre);
    console.log("Correo:", correo);
    console.log("Contraseña:", contrasena);
    console.log("Teléfono:", telefono);
  };

  const handleNavMenu = () => {
    navigation.navigate("Menu"); // Navega a la pantalla de inicio de sesión
  };

  const ejecutarRegistro = () => {
    handleRegistro();
    handleNavMenu();
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../img/creartax.jpg")} // Reemplaza 'ruta-de-tu-imagen.jpg' con la ruta de tu imagen
        style={styles.imagen}
      />
      <Text style={styles.titulo}>Bienvenidos a CrearTax.{"\n"}Cliente</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nombre:</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          value={nombre}
          onChangeText={(text) => setNombre(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Correo Electrónico:</Text>
        <TextInput
          style={styles.input}
          placeholder="Correo Electrónico"
          value={correo}
          onChangeText={(text) => setCorreo(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Contraseña:</Text>
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry={true}
          value={contrasena}
          onChangeText={(text) => setContrasena(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Teléfono:</Text>
        <TextInput
          style={styles.input}
          placeholder="Teléfono"
          value={telefono}
          onChangeText={(text) => setTelefono(text)}
        />
      </View>
      <Pressable style={styles.button} onPress={ejecutarRegistro}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  imagen: {
    width: 100, // Ajusta el ancho de la imagen según tus necesidades
    height: 100, // Ajusta el alto de la imagen según tus necesidades
    marginBottom: 20,
    alignSelf: "center",
  },
  titulo: {
    fontSize: 30, // Tamaño de fuente más grande
    fontWeight: "bold", // Texto en negrita
    color: "#ffb004", // Color amarillo
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
  button: {
    backgroundColor: "#ffb004",
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default RegistroCliente;

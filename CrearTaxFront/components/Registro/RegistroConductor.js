import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Image,
} from "react-native";

const RegistroConductor = ({ navigation }) => {
  const [nombre, setNombre] = useState("");
  const [documento, setDocumento] = useState("");
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [telefono, setTelefono] = useState("");

  const handleSiguiente = () => {
    // Aquí puedes realizar la lógica para continuar con el registro del conductor.
    console.log("Nombre:", nombre);
    console.log("Documento:", documento);
    console.log("Email:", email);
    console.log("Contraseña:", contrasena);
    console.log("Teléfono:", telefono);
  };

  const handleNavTaxi = () => {
    navigation.navigate("Registro_Taxi"); // Navega a la pantalla de inicio de sesión
  };

  ejecutarSiguiente = () => {
    handleSiguiente();
    handleNavTaxi();
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../img/creartax.jpg")} // Reemplaza 'ruta-de-tu-imagen.jpg' con la ruta de tu imagen
        style={styles.imagen}
      />
      <Text style={styles.titulo}>Bienvenido a CrearTax. Conductor</Text>
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
        <Text style={styles.label}>Documento de Identidad:</Text>
        <TextInput
          style={styles.input}
          placeholder="Documento de Identidad"
          value={documento}
          onChangeText={(text) => setDocumento(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
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
      <Pressable style={styles.siguienteButton} onPress={ejecutarSiguiente}>
        <Text style={styles.buttonText}>Siguiente</Text>
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
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffb004",
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
  siguienteButton: {
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

export default RegistroConductor;

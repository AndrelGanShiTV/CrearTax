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

const LoginComponent = ({ navigation }) => {
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");

  const handleLogin = () => {
    // Aquí puedes realizar la lógica de inicio de sesión, como validar las credenciales.
    console.log("Correo:", correo);
    console.log("Contraseña:", contrasena);
  };

  const handleNavConductor = () => {
    navigation.navigate("Registro_Conductor"); // Navega a la pantalla de inicio de sesión
  };

  const handleNavCliente = () => {
    navigation.navigate("Registro_Cliente"); // Navega a la pantalla de inicio de sesión
  };

  const handleNavMenu = () => {
    navigation.navigate("Menu"); // Navega a la pantalla de inicio de sesión
  };

  const ejecutarInicio = () => {
    handleLogin();
    handleNavMenu();
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../img/creartax.jpg")} // Reemplaza 'ruta-de-tu-imagen.jpg' con la ruta de tu imagen
        style={styles.imagen}
      />
      <Text style={styles.titulo}>
        Bienvenido a CrearTax{"\n"}Inicia Sesión
      </Text>
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
      <Pressable style={styles.button} onPress={ejecutarInicio}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </Pressable>
      <View style={styles.buttonRow}>
        <Pressable
          style={[styles.button, styles.darkerButton]}
          onPress={handleNavCliente}
        >
          <Text style={styles.buttonText}>Registrar Cliente</Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.darkerButton]}
          onPress={handleNavConductor}
        >
          <Text style={styles.buttonText}>Registrar Conductor</Text>
        </Pressable>
      </View>
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
    fontSize: 24, // Tamaño de fuente más grande
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
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  darkerButton: {
    backgroundColor: "darkorange", // Color más oscuro
  },
});

export default LoginComponent;

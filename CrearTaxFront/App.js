import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import RegistroCliente from "./components/Registro/RegistroCliente";
import LoginComponent from "./components/LoginComponent";
import RegistroConductor from "./components/Registro/RegistroConductor";
import Navegacion from "./navigation/Navegacion";

const Stack = createStackNavigator();

export default function App() {
  return <Navegacion />;
}

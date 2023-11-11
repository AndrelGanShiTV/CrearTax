import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import RegistroCliente from "../components/Registro/RegistroCliente";
import LoginComponent from "../components/LoginComponent";
import RegistroConductor from "../components/Registro/RegistroConductor";
import RegistroTaxi from "../components/Registro/RegistroTaxi";
import Menu from "../components/Menu";

const Stack = createStackNavigator();

function Navegacion() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerStyle: {
              backgroundColor: "#FFDA00",
            },
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >
          <Stack.Screen
            name="Login"
            component={LoginComponent}
            options={{ title: "Iniciar Sesión" }}
          />
          <Stack.Screen
            name="Registro_Cliente"
            component={RegistroCliente}
            options={{ title: "Registro Cliente" }}
          />
          <Stack.Screen
            name="Registro_Conductor"
            component={RegistroConductor}
            options={{ title: "Registro Conductor" }}
          />
          <Stack.Screen
            name="Registro_Taxi"
            component={RegistroTaxi}
            options={{ title: "Registro Taxi" }}
          />
          <Stack.Screen
            name="Menu"
            component={Menu}
            options={{ title: "Menu" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default Navegacion;

import React, { useState } from "react";
import { StyleSheet, View, Text} from "react-native";
import ListScreen from "./list";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  return (
    <View style={styles.inputContainer}>
      <Text>Login</Text>
      <ListScreen/>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    width: 300,
    height: 50,
    backgroundColor: "#a3bcfc",
    borderRadius: 10,
  },
  inputContainer: {
    alignItems: "center",
  },
});

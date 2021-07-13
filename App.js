import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LoginScreen} from "./src/screens/login";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { reducer } from "./src/reducers/retucers";
import thunk from "redux-thunk"; 

const store = createStore(reducer, applyMiddleware(thunk));
export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <LoginScreen />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2e72a1",
    alignItems: "center",
    justifyContent: "center",
  },
});

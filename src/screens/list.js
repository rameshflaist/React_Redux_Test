import React from "react";
import {  StyleSheet,  View,  Text,  FlatList,  TouchableOpacity,} from "react-native";
import { connect } from "react-redux";
import * as actionCreators from "../action/actions";
import { IconButton, Colors, Button } from "react-native-paper";
import { TextInput } from "react-native-gesture-handler";

class ListScreen extends React.Component {
  getData() {
    this.props.GetText();
  }

  renderItemComponent = (data) => (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.data}>{data.item.body}</Text>
    </TouchableOpacity>
  );

  ItemSeparator = () => (
    <View
      style={{
        height: 1,
      }}
    />
  );

  render() {
    let data = [...this.props.Text];

    return (
      <>
        {/* <TextInput
          style={styles.input}
          placeholder="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          onChangeText={(u) => setEmail(u)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          textContentType="password"
          secureTextEntry
          onChangeText={(p) => setPassword(p)}
        /> */}
        <View style={styles.buttons}>
          {/* <IconButton
            icon="login"
            color={Colors.red200}
            size={20}
            onPress={() => this.getData()}
          /> */}
          <IconButton
            icon="download"
            color={Colors.red200}
            size={20}
            onPress={() => this.getData()}
          />
        </View>
        <FlatList
          data={data}
          renderItem={(item) => this.renderItemComponent(item)}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={this.ItemSeparator}
        />
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: "90%",
    margin: 10,
    backgroundColor: "#fff",
    borderRadius: 6,
  },
  data: {
    color: "black",
    textDecorationColor: "yellow",
    textShadowColor: "red",
    textShadowRadius: 10,
    margin: 10,
    justifyContent: "left",
  },
  submit: {
    height: "10%",
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: "#03fcfc",
  },
  buttons: {
    flex: 1,
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    width: 300,
    height: 50,
    backgroundColor: "#a3bcfc",
    borderRadius: 10,
  },
});

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps, actionCreators)(ListScreen);

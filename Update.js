import { Component } from "react";
import { useState } from "react";
import { Button, StyleSheet, Text, View, TextInput } from "react-native";

const App = (props) => {
  const { student } = props.route.params;
  const [ten, setTen] = useState("");
  const [lop, setLop] = useState("");
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={(text) => setTen(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Class"
        onChangeText={(text) => setLop(text)}
      />

      <Button title="Lưu" onPress={() => Save(props, student, ten, lop)} />
      <Text>Class: {student.name}</Text>
      <Text>Class: {student.class}</Text>
    </View>
  );
};
const Save = (props, student, ten, lop) => {
  Edit(student, ten, lop);
  props.navigation.navigate("Home", { student });
};

const Edit = (student, ten, lop) => {
  student.name = ten;
  student.class = lop;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
export default App;

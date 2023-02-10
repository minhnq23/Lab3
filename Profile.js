import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Component, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const App = (props) => {
    const { student } = props.route.params;
    
    return (
      <View>
        <Text> Name: {student.name}</Text>
        <Text>Class: {student.class}</Text>
        <Button
          title="sửa"
          onPress={() => props.navigation.navigate("Update", { student })}
        />
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default App;

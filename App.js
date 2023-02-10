import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Profile from "./Profile";
import Update from "./Update";

const Stack = createNativeStackNavigator();

const student = {
  name: "Nguyen Quang Minh",
  class: "CP17301",
};

const Home = (props) => {
  const nav = props.navigation;
  return (
    <View>
      <Button
        title="Thông tin ca nhân"
        onPress={() => nav.navigate("Profile", { name: "user" }, { nav })}
      />
      <Text>Class: {student.name}</Text>
      <Text>Class: {student.class}</Text>
    </View>
  );
};

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="Profile"
            component={Profile}
            initialParams={{ student }}
          />
          <Stack.Screen name="Update" component={Update} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

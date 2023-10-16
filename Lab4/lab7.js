import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Camera } from "expo-camera";
import * as Location from "expo-location";

const Lab7 = () => {
  const [initialPosition, setInitialPosition] = useState("unknown");
  const [lastPosition, setLastPosition] = useState("unknown");
  const [name, setName] = useState("");
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [permission, setPermission] = useState(null);

  useEffect(() => {
    const requestLocationPermission = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        alert("Permission to access location was denied");
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      setInitialPosition(JSON.stringify(location));

      const locationSubscription = Location.watchPositionAsync(
        {},
        (location) => {
          setLastPosition(JSON.stringify(location));
        }
      );

      return locationSubscription.remove;
    };

    requestLocationPermission();
  }, []);

  useEffect(() => {
    AsyncStorage.getItem("name").then((value) => {
      if (value) {
        setName(value);
      }
    });
  }, []);

  const handleNameChange = (value) => {
    AsyncStorage.setItem("name", value);
    setName(value);
  };

  const showAlert = () => {
    Alert.alert("You need to...");
  };

  const toggleCameraType = () => {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.boldText}>Initial position:</Text>
      <Text>{initialPosition}</Text>
      <Text style={styles.boldText}>Current position:</Text>
      <Text>{lastPosition}</Text>
      <TouchableOpacity onPress={showAlert} style={styles.button}>
        <Text>Alert</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.textInput}
        autoCapitalize="none"
        onChangeText={handleNameChange}
      />
      <Text>{name}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
          <Text style={styles.text}>Flip Camera</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Lab7;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#4ba37b",
    width: 100,
    borderRadius: 50,
    alignItems: "center",
    marginTop: 10,
  },
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
  },
  boldText: {
    fontSize: 30,
    color: "red",
  },
  textInput: {
    margin: 15,
    height: 35,
    borderWidth: 1,
    width: "80%",
    backgroundColor: "#7685ed",
    color: "white",
  },
});

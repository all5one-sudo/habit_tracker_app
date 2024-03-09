import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Pressable,
  Alert
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import axios from 'axios';

const createHabit = () => {
  const [selectedColor, setSelectedColor] = useState("");
  const [title, setTitle] = useState("");
  const colors = [
    "#FFBE0B",
    "#FB5607",
    "#FF006E",
    "#8338EC",
    "#3A86FF",
    "#8AC926",
    "#06D6A0",
  ];
  const days = ["L", "M", "M", "J", "V", "S", "D"];
  async function createHabit() {
    try {
      const habitDetails = {
        title: title,
        color: selectedColor,
        repeatMode: "daily",
        reminder: true,
      };
      const response = await axios.post(
        "http://localhost:3000/habits",
        habitDetails
      );
      if (response.status === 200) {
        setTitle("");
        Alert.alert("Hábito creado", "El hábito se ha creado correctamente");
      }
      console.log("Hábito creado correctamente", response);
    } catch (error) {
      console.log("error añadiendo un hábito", error);
    }
  }
  return (
    <View style={{ padding: 10 }}>
      <Ionicons name="arrow-back" size={24} color="black" />
      <Text style={{ fontSize: 22, marginTop: 10 }}>Crear hábito</Text>
      <TextInput
        value={title}
        onChangeText={(text) => setTitle(text)}
        style={{
          width: "95%",
          marginTop: 15,
          padding: 15,
          borderRadius: 10,
          backgroundColor: "#E1EBEE",
        }}
        placeholder="Título"
      ></TextInput>
      <View style={{ marginVertical: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: "500" }}>Color</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            marginTop: 10,
          }}
        >
          {colors?.map((item, index) => (
            <TouchableOpacity
              onPress={() => setSelectedColor(item)}
              key={index}
              activeOpacity={0.8}
            >
              {selectedColor === item ? (
                <AntDesign name="checksquare" size={30} color={item} />
              ) : (
                <FontAwesome name="square" size={30} color={item} />
              )}
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <Text style={{ fontSize: 18, fontWeight: "500" }}>Repetir</Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          marginVertical: 10,
        }}
      >
        <Pressable
          style={{
            backgroundColor: "#AFDBF5",
            padding: 10,
            borderRadius: 6,
            flex: 1,
          }}
        >
          <Text style={{ textAlign: "center" }}>Diariamente</Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: "#AFDBF5",
            padding: 10,
            borderRadius: 6,
            flex: 1,
          }}
        >
          <Text style={{ textAlign: "center" }}>Semanalmente</Text>
        </Pressable>
      </View>
      <Text style={{ fontSize: 18, fontWeight: "500" }}>Estos días</Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          marginTop: 10,
        }}
      >
        {days?.map((item, index) => (
          <Pressable
            style={{
              width: 40,
              height: 40,
              borderRadius: 5,
              backgroundColor: "#E0E0E0",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>{item}</Text>
          </Pressable>
        ))}
      </View>
      <View
        style={{
          marginTop: 20,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "500" }}>Recordatorio</Text>
        <Text style={{ fontSize: 18, fontWeight: "500", color: "#2774AE" }}>
          Si
        </Text>
      </View>
      <Pressable
        onPress={createHabit}
        style={{
          marginTop: 25,
          backgroundColor: "#00428c",
          padding: 10,
          borderRadius: 8,
        }}
      >
        <Text
          style={{ textAlign: "center", color: "white", fontWeight: "bold" }}
        >
          GUARDAR
        </Text>
      </Pressable>
    </View>
  );
};

export default createHabit;

const styles = StyleSheet.create({});

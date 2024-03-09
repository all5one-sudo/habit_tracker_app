import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native'
import { FontAwesome6 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import React, { useState } from 'react'
import { useRouter } from 'expo-router'

const index = () => {
    const [option, setOption] = useState("Hoy");
    const router = useRouter();
    return (
        <ScrollView style={{ flex: 1, backgroundColor: "white", padding: 10 }}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <FontAwesome6 name="person" size={30} color="black" />
                <Entypo onPress={() => router.push("/home/createHabit")} name="plus" size={30} color="black" />
            </View>
            <Text style={{ marginTop: 5, fontSize: 25, fontWeight: "600" }}>Hábitos</Text>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 10, marginVertical: 8 }}>
                <Pressable onPress={() => setOption("Hoy")} style={{ backgroundColor: option == "Hoy" ? "#E0FFFF" : "transparent", paddingHorizontal: 10, paddingVertical: 8, borderRadius: 25 }}>
                    <Text style={{ textAlign: "center", color: "gray", fontSize: 15 }}>
                        Hoy
                    </Text>
                </Pressable>
                <Pressable onPress={() => setOption("Esta semana")} style={{ backgroundColor: option == "Esta semana" ? "#E0FFFF" : "transparent", paddingHorizontal: 10, paddingVertical: 8, borderRadius: 25 }}>
                    <Text style={{ textAlign: "center", color: "gray", fontSize: 15 }}>
                        Esta semana
                    </Text>
                </Pressable>
                <Pressable onPress={() => setOption("General")} style={{ backgroundColor: option == "General" ? "#E0FFFF" : "transparent", paddingHorizontal: 10, paddingVertical: 8, borderRadius: 25 }}>
                    <Text style={{ textAlign: "center", color: "gray", fontSize: 15 }}>
                        General
                    </Text>
                </Pressable>
            </View>
        </ScrollView>
    )
}

export default index

const styles = StyleSheet.create({})
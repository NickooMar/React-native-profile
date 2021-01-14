import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export function FilledButton({ title, style, onPress }) {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={styles.text}>{title.toUpperCase()}</Text>
    </TouchableOpacity>
  );
}

export default FilledButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "purple",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    borderRadius: 8,
  },
  text: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
  },
});

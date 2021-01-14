import React, { useContext } from "react";
import "react-native-gesture-handler";
import Context from "./src/context/AuthContext";
import Index from "./index";

export default function App() {
  return (
    <Context>
      <Index />
    </Context>
  );
}


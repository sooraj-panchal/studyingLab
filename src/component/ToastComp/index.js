import React, { memo } from "react";
import { Snackbar } from "react-native-paper";
import { StyleSheet, View, Text } from "react-native";
import * as globals from "../../utils/globals";

const Toast = ({ type = type ? type :"error", message, onDismiss }) => (
  <View style={styles.container}>
    <Snackbar
      visible={!!message}
      duration={2000}
      onDismiss={onDismiss}
      style={{
        backgroundColor:
          type === "error" ? "rgb(200,10,0)" : "rgb(20,140,50)"
      }}
    >
      <Text style={styles.content}>{message}</Text>
    </Snackbar>
  </View>
);

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom:20,
    width:globals.screenWidth * 0.83,
    alignSelf: 'center'
  },
  content: {
    fontWeight: "500",
    textAlign: 'center'
  }
});

export default memo(Toast);

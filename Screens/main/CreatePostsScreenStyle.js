import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  box: {
    display: "flex",
    alignItems: "center",
    paddingTop: 32,
  },

  container: {
    width: 343,
    height: 267,
  },
  camera: {
    width: 343,
    height: 240,
    borderRadius: 8,
  },

  button: {
    marginTop: 60,
    alignItems: "center",

    borderRadius: 50,
  },

  takePhotoOut: {
    backgroundColor: "white",
    opacity: 0.2,
    height: 50,
    width: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },

  camersSvg: {
    top: 13,

    position: "absolute",
  },

  inputPost: {
    width: 343,
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
  },
  buttonPost: {
    width: 343,
    height: 51,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F6F6F6",
    marginTop: 32,
    borderRadius: 100,
    marginHorizontal: 16,
  },
  buttonText: {
    color: "#BDBDBD",

    paddingHorizontal: 32,
    paddingVertical: 16,
    fontFamily: "Roboto_400Regular",
  },
  downloadText: {
    paddingVertical: 8,
    color: "#BDBDBD",
    fontFamily: "Roboto_400Regular",
  },
  takePhoto: {
    position: "absolute",
    top: 0,
    left: 0,
  },
});

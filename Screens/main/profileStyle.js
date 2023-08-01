import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  bgrView: {
    // justifyContent: "center",
    width: "100%",
    height: 550,
    paddingTop: 95,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  avatar: {
    position: "absolute",
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    top: -55,
    left: 145,
  },
  avatarIcon: {
    position: "absolute",
    top: 80,
    left: 105,
  },
  registrationText: {
    // fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    color: "#212121",

    textAlign: "center",

    fontFamily: "Roboto_500Medium",
  },
  logUot: {
    position: "absolute",
    right: 15,
    top: 15,
  },
});

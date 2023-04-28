import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  input: {
    fontFamily: "Roboto_400Regular",
    // width: 343,
    height: 50,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    color: "#0881eb",
    paddingLeft: 16,
    backgroundColor: "#F6F6F6",
    // position: "relative",
    marginTop: 16,
    marginHorizontal: 16,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  bgrView: {
    justifyContent: "center",
    width: "100%",
    height: 550,
    backgroundColor: "#fff",

    // left: 0,
    // top: 150,
    // paddingLeft: 16,
    // paddingRight: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,

    // // ...Platform.select({
    // //   ios: {
    // //     height: 580,
    // //   },
    // //   android: {
    // //     height: 580,
    // //   },
    // }),

    // position: "relative",
  },
  registrationText: {
    // fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    color: "#212121",
    marginTop: 92,
    textAlign: "center",
    marginBottom: 16,
    fontFamily: "Roboto_500Medium",
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 43,
    // width: "100%",
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    marginHorizontal: 16,
  },
  btnTitle: {
    color: "#FFFFFF",
    borderRadius: 100,
    paddingHorizontal: 32,
    paddingVertical: 16,
    fontFamily: "Roboto_400Regular",
  },
  btnJoin: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  btnJoinTitle: {
    color: "#1B4371",
    fontFamily: "Roboto_400Regular",
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
  passShowBtn: {
    position: "absolute",
    top: 30,
    right: 35,
  },
  showBtn: {
    color: "#1B4371",
    fontFamily: "Roboto_400Regular",
  },
});

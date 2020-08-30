import { StyleSheet } from "react-native";
import { colors } from "../../styles";

export default StyleSheet.create({
  root: {
    justifyContent: "flex-start",
    marginTop: 50,
    marginHorizontal: 15,
    shadowColor: colors.gray,
    shadowOpacity: 0.25,
    shadowRadius: 12,
    shadowOffset: { height: 5, width: 0 },
  },
  title: {
    fontSize: 16,
  },
  errorText: {
    color: colors.white,
  },
  pushText: {
    color: colors.black,
  },
  snackbar: {
    borderRadius: 20,
    paddingVertical: 12,
    color: colors.white,
    paddingHorizontal: 30,
  },
  error: {
    textAlign: "center",
    backgroundColor: colors.red,
  },
  push: {
    backgroundColor: colors.white,
    paddingLeft: 0,
  },
  text: {
    flexWrap: "wrap",
    fontSize: 16,
  },
  notificationIcon: {
    width: 45,
    height: 45,
  },
});

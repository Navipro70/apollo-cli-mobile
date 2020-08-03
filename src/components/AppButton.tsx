import React, { FC } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TouchableOpacityProps,
} from "react-native";
import { Spinner } from "./Progress";
import { colors } from "../styles";

interface TProps extends TouchableOpacityProps {
  onPress: () => void;
  title: string;
  style?: object;
  loading?: boolean;
}

export const AppButton: FC<TProps> = ({
  onPress,
  title,
  style,
  loading,
  ...rest
}) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.5}
    disabled={loading}
    style={styles.container}
    {...rest}
  >
    {loading && <Spinner style={styles.spinner} size={30} color={colors.red} />}
    <View style={[styles.appButtonWrapper, style, loading && { opacity: 0.2 }]}>
      <Text style={styles.appButtonText}>{title}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  appButtonWrapper: {
    minHeight: 60,
    elevation: 8,
    backgroundColor: "#0190F9",
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  spinner: {
    position: "absolute",
    zIndex: 100,
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
});

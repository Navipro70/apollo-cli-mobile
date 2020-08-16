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
  spinnerStyle?: object;
  loading?: boolean;
}

export const AppButton: FC<TProps> = ({
  onPress,
  title,
  style,
  loading,
  spinnerStyle,
  ...rest
}) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.5}
    disabled={loading}
    style={styles.container}
    {...rest}
  >
    {loading && <Spinner size={30} color={colors.red} style={spinnerStyle} />}
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
    elevation: 8,
    height: 60,
    backgroundColor: "#0190F9",
    borderRadius: 30,
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
});

import React, { useState } from "react";
import { TextField, View } from "react-native-ui-lib";
import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { TextFieldProps } from "react-native-ui-lib/typings";

interface Props extends TextFieldProps {
  value: string;
  onChangeText: (text: string) => void;
  color?: string;
  error?: string;
  inputIcon?: string;
  style?: object;
  secure?: boolean;
}

export const Input = ({
  style,
  onChangeText,
  value,
  color,
  secure,
  inputIcon,
  error,
  ...rest
}: Props) => {
  const [securePassword, setSecurePassword] = useState<boolean>(
    secure ?? false
  );
  let iconName: string = securePassword ? "eye-off-outline" : "eye-outline";

  return (
    <View row centerV marginV-5>
      {Boolean(inputIcon) && (
        <Icon
          style={styles.inputIcon}
          name={inputIcon as string}
          size={35}
          color={color}
        />
      )}
      <TextField
        onChangeText={onChangeText}
        value={value}
        style={[styles.textField, style]}
        secureTextEntry={securePassword}
        color={color}
        error={error}
        {...rest}
      />
      <View right centerV>
        {secure && (
          <Icon
            style={styles.visibleIcon}
            onPress={() => setSecurePassword((prevState) => !prevState)}
            name={iconName}
            size={30}
            color={color}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textField: {
    fontSize: 20,
    color: "#fff",
  },
  inputIcon: {
    paddingRight: 10,
    marginBottom: 30,
  },
  visibleIcon: {
    position: "absolute",
    paddingBottom: 30,
  },
});

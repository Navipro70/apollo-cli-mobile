import React from "react";
import { Text, View } from "react-native-ui-lib";

import { AppNotification } from "./Snackbar";

import styles from "./styles";

interface Props {
  notification: AppNotification | null;
}

export const ErrorSnackbarContent = ({ notification }: Props) => {
  return (
    <View style={[styles.snackbar, notification && styles.error]}>
      {notification?.title ? (
        <Text h3 style={[styles.title, notification && styles.errorText]}>
          {notification?.title}
        </Text>
      ) : null}
      <Text style={[styles.text, notification && styles.error]}>
        {notification?.text}
      </Text>
    </View>
  );
};

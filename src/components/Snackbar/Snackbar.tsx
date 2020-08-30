import React from "react";
import Modal from "react-native-modal";

import { ErrorSnackbarContent } from "./ErrorSnackbarContent";
import styles from "./styles";

export const SNACKBAR_ANIMATION_OUT_TIMING = 500;

export type AppNotification = {
  show: boolean;
  text: string;
  title?: string;
  onClick?: () => void;
};

interface Props {
  notification: AppNotification | null;
  onClose: () => void;
}

export const Snackbar: React.FC<Props> = ({ notification, onClose }) => {
  return (
    <Modal
      useNativeDriver
      animationIn="slideInDown"
      animationOut="slideOutUp"
      animationOutTiming={SNACKBAR_ANIMATION_OUT_TIMING}
      coverScreen={false}
      hasBackdrop={false}
      isVisible={Boolean(notification)}
      style={styles.root}
      swipeDirection={["up"]}
      swipeThreshold={30}
      onModalHide={onClose}
      onSwipeComplete={onClose}
    >
      {notification?.show && (
        <ErrorSnackbarContent notification={notification} />
      )}
    </Modal>
  );
};

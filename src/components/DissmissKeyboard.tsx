import React, { FC, ReactNode } from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";

type Props = {
  children: ReactNode;
};

export const DismissKeyboard: FC<Props> = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

import React from "react";
import * as Progress from "react-native-progress";

interface Props {
  color?: string;
  size?: number;
  style?: object;
}

export const Spinner = ({ color = "#990000", size = 21, style }: Props) => (
  <Progress.Circle
    indeterminate
    borderColor={color}
    borderWidth={1.5}
    size={size}
    style={{
      position: "absolute",
      justifyContent: "center",
      alignItems: "center",
      top: 20,
      bottom: 0,
      left: 0,
      right: 0,
      ...style,
    }}
  />
);

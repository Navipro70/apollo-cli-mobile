import React from "react";
import * as Progress from "react-native-progress";
import { View } from "react-native-ui-lib";

interface Props {
  color?: string;
  size?: number;
  style?: object;
}

export const Spinner = ({ color = "#990000", size = 21, style }: Props) => (
  <View center style={style}>
    <Progress.Circle
      indeterminate
      borderColor={color}
      borderWidth={1.5}
      size={size}
    />
  </View>
);

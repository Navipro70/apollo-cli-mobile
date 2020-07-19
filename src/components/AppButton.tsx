import React, {FC} from 'react'
import {StyleSheet, TouchableOpacity, Text, ViewStyle} from "react-native"

type TProps = {
    onPress: () => void,
    title: string,
    extraStyles?: ViewStyle
}

export const AppButton: FC<TProps> = ({onPress, title, extraStyles}) => (
    <TouchableOpacity onPress={onPress} style={{...styles.appButtonContainer, ...extraStyles}} activeOpacity={0.5}>
        <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#0190F9",
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 12,
        alignItems: 'center',
        justifyContent: 'center'
    },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
});

import React, {FC} from 'react'
import {StyleSheet, TouchableOpacity, Text, TouchableOpacityProps} from "react-native"

interface TProps extends TouchableOpacityProps {
    onPress: () => void,
    title: string,
    style?: object
}

export const AppButton: FC<TProps> = ({onPress, title, style, ...rest}) => (
    <TouchableOpacity onPress={onPress} style={{...styles.appButtonContainer, ...style}} activeOpacity={0.5} {...rest}>
        <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    appButtonContainer: {
        minHeight: 60,
        elevation: 8,
        backgroundColor: "#0190F9",
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
});

import React, {FC} from "react";
import {StyleSheet} from 'react-native'
import {Text, View} from "react-native-ui-lib";

export const Item: FC<{ postItem: any }> = ({postItem}) => (
    <View marginV-5 padding-5 style={styles.postView}>
        <Text style={styles.text}>{postItem?.body}</Text>
    </View>
);

const styles = StyleSheet.create({
    postView: {
        borderWidth: 1,
        borderColor: 'pink'
    },
    text: {
        fontSize: 16
    }
})

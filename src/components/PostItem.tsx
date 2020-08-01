import React, { FC } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { Text, View } from "react-native-ui-lib";
import { Post } from "../generated/graphql";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Icon from "react-native-vector-icons/EvilIcons";

interface Props extends TouchableOpacityProps {
  postItem: Post;
  onPress: () => void;
}

export const PostItem = ({ postItem, onPress, ...rest }: Props) => {
  dayjs.extend(relativeTime);
  const formatString = dayjs(postItem.createdAt).fromNow();
  return (
    <TouchableOpacity onPress={onPress} {...rest}>
      <View marginV-15 padding-15 spread style={styles.postView}>
        <Text style={styles.username} children={postItem.username} />
        <Text style={styles.date} children={formatString} />
        <Text style={styles.body} children={postItem.body} />
        <View row spread>
          <View row center paddingR-10 style={styles.buttonGroup}>
            <TouchableOpacity children={<Icon name="like" size={40} />} />
            <Text children={postItem?.commentCount || 0} />
          </View>
          <View row center paddingL-10 style={styles.buttonGroup}>
            <Text children={postItem.commentCount} />
            <TouchableOpacity children={<Icon name="comment" size={40} />} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  postView: {
    borderWidth: 1,
    borderColor: "pink",
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#ababab",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 5,
  },
  date: {
    color: "#a8a8a8",
    marginVertical: 10,
  },
  username: {
    fontSize: 18,
  },
  body: {
    fontSize: 20,
    color: "#919191",
    marginBottom: 10,
  },
  buttonGroup: {
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10,
  },
});

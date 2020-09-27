import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import React, { FC } from 'react'
import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { Text, View } from 'react-native-ui-lib'
import Icon from 'react-native-vector-icons/EvilIcons'

import { colors } from '~/styles'

import { Post } from '../generated/graphql'

interface Props extends TouchableOpacityProps {
  postItem: Post
  onPress: () => void
}

export const PostItem: FC<Props> = ({ postItem, onPress, ...rest }) => {
  dayjs.extend(relativeTime)
  return (
    <TouchableOpacity onPress={onPress} {...rest}>
      <View marginV-15 padding-15 spread style={styles.postView}>
        <Text children={postItem.username} style={styles.username} />
        <Text children={dayjs(postItem.createdAt).fromNow()} style={styles.date} />
        <Text children={postItem.body} style={styles.body} />
        <View row spread>
          <View center paddingR-10 row style={styles.buttonGroup}>
            <TouchableOpacity children={<Icon name="like" size={40} />} />
            <Text children={postItem?.commentCount || 0} />
          </View>
          <View center paddingL-10 row style={styles.buttonGroup}>
            <Text children={postItem.commentCount} />
            <TouchableOpacity children={<Icon name="comment" size={40} />} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  postView: {
    borderWidth: 1,
    borderColor: colors.pink,
    borderRadius: 10,
    backgroundColor: colors.white,
    shadowColor: colors.lightGray,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 5,
  },
  date: {
    color: colors.pink,
    marginVertical: 10,
  },
  username: {
    fontSize: 18,
  },
  body: {
    fontSize: 20,
    color: colors.red,
    marginBottom: 10,
  },
  buttonGroup: {
    borderWidth: 2,
    borderColor: colors.black,
    borderRadius: 10,
  },
})

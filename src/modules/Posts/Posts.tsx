import React, { useCallback } from 'react'
import { SafeAreaView, StyleSheet, FlatList, ListRenderItem } from 'react-native'

import { PostItem, Spinner } from '~/components'
import { Post, useFetchAllPostsQuery } from '~/generated/graphql'

export const Posts = () => {
  const { loading, data } = useFetchAllPostsQuery()

  const renderItem: ListRenderItem<Post> = useCallback(
    ({ item }) => <PostItem postItem={item} onPress={() => {}} />,
    [],
  )

  if (loading) return <Spinner size={50} style={styles.spinner} />
  //TODO add ItemSeparator
  return (
    <SafeAreaView>
      <FlatList
        data={data?.getPosts as Post[]}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        style={styles.flatList}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  flatList: {
    padding: 10,
  },
  spinner: {
    flex: 1,
  },
})

import React from "react";
import {SafeAreaView} from 'react-native'
import {Post, useFetchAllPostsQuery} from "../../generated/graphql";
import {FlatList, ListRenderItem} from "react-native";
import {PostItem} from "../../components/PostItem";
import {Spinner} from "../../components/Progress";

export const Posts = () => {
    const {loading, data} = useFetchAllPostsQuery()

    if (loading) return <Spinner style={{flex: 1}} size={50} />
    const renderItem: ListRenderItem<Post> = ({item}) => {
        return (<PostItem onPress={() => console.log('qwe')} postItem={item} />)
    }

    return (
        <SafeAreaView>
                <FlatList
                    style={{padding: 10}}
                    data={data?.getPosts as Post[]}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
        </SafeAreaView>
    );
}

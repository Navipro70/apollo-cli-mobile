import React, {FC} from "react";
import {View, Text} from "react-native-ui-lib";
import {BOTTOM_ROUTES} from "../../constants/routes";
import {StackNavigationProp} from "@react-navigation/stack";
import {TBottomScreens} from "../App/App";
import {SafeAreaView} from "react-native-safe-area-context";
import {useFetchAllPostsQuery} from "../../generated/graphql";
import {FlatList} from "react-native";
import {Item} from "../../components/PostItem";

type BottomScreensProp = StackNavigationProp<TBottomScreens,
    BOTTOM_ROUTES.Home>;

type TProps = {
    navigation: BottomScreensProp;
};

export const Home: FC<TProps> = () => {
    const {loading, data} = useFetchAllPostsQuery()
    if (loading) return <View center><Text>Loading...</Text></View>
    return (
        <SafeAreaView>
            <FlatList
                style={{padding: 10}}
                data={data?.getPosts}
                renderItem={({item}) => <Item postItem={item}/>}
                keyExtractor={item => item!.id}
            />
        </SafeAreaView>
    );
}

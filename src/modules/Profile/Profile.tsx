import React, { FC } from "react";
import { Button, View, Text } from "react-native-ui-lib";
import { BOTTOM_ROUTES } from "../../constants/routes";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "../../lib/hooks/navigation/useNavigation";
import { useCurrentUser } from "../../lib/hooks/useCurrentUser";

export const Profile: FC = () => {
  const navigation = useNavigation();
  const { user, logout } = useCurrentUser();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View flex center>
        <Text children={user?.email} />
        <Text children={user?.createdAt} />
        <Text children={user?.username} />
        <Text children={user?.id} />
        <Button
          label="Hello Profile"
          onPress={() => navigation.navigate(BOTTOM_ROUTES.Posts)}
        />
        <Button label="Logout" onPress={logout} />
      </View>
    </SafeAreaView>
  );
};

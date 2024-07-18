import { View, Text, Image } from "react-native";
import React from "react";
import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList,
} from "@react-navigation/drawer";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

export function CustomDrawerContent(props: any) {
    const { bottom } = useSafeAreaInsets();
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props} scrollEnabled={false}>
                <View
                    style={{
                        padding: 20,
                        flexDirection: "row",
                        gap: 20,
                        flex: 1,
                    }}
                >
                    <Image
                        source={require("../assets/images/react-logo.png")}
                        style={{
                            width: 50,
                            height: 50,
                            alignSelf: "center",
                            borderRadius: 99999,
                        }}
                    />
                    <Text style={{ alignSelf: "center", color: "#c4c4cd" }}>
                        Jon Doe
                    </Text>
                </View>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <View
                style={{
                    borderTopColor: "#c4c4cd",
                    borderTopWidth: 1,
                    paddingBottom: bottom,
                }}
            >
                <DrawerItem
                    label={"Sign Out"}
                    onPress={() => void 0}
                    icon={({ size, color }) => (
                        <Ionicons name="log-out" size={size} color={color} />
                    )}
                />
            </View>
        </View>
    );
}

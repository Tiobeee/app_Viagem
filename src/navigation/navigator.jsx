import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import openCamera from "../screens/openCamera";

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function AppNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="TabNavigator"
                component={TabNavigator}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}

function TabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Camera"
                component={openCamera}
                options={{
                    title: "Camera",
                    tabBarIcon: "camera",
                }}
            />
            {/* <Tab.Screen
                name="album"
                component={albumScreen}
                options={{
                    title: "Album de memorias",
                    tabBarIcon: "book",
                }}
            /> */}
        </Tab.Navigator>
    );
}
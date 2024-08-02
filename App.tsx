import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import HomeScreenController from './src/HomeScreen/HomeScreenController'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
import CamerasScreenController from './src/CamerasScreen/CamerasScreenController'

const Tab = createBottomTabNavigator()

const App = (): React.JSX.Element => {
    return (
        <NavigationContainer>
            <SafeAreaView style={{ flex: 1 }}>
                <Tab.Navigator
                    screenOptions={{
                        tabBarStyle: {
                            height: 70,
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingVertical: 15,
                        },
                        tabBarLabelStyle: {
                            height: '50%',
                            fontSize: 11,
                            fontWeight: '500',
                        },
                        tabBarActiveTintColor: 'black',
                        tabBarLabelPosition: 'below-icon',
                        headerShown: false,
                    }}
                >
                    <Tab.Screen
                        name="Home"
                        options={{
                            title: 'Дом',
                            tabBarIcon: (tabInfo) => <Icon name="home-outline" size={tabInfo.size} color={tabInfo.color} />,
                        }}
                        component={HomeScreenController}
                    />
                    <Tab.Screen
                        name="Cameras"
                        options={{
                            tabBarLabel: 'Камеры',
                            tabBarIcon: (tabInfo) => <Icon name="camera-outline" size={tabInfo.size} color={tabInfo.color} />,
                        }}
                        component={CamerasScreenController}
                    />
                    <Tab.Screen
                        name="Settings"
                        options={{
                            tabBarLabel: 'Настройки',
                            tabBarIcon: (tabInfo) => <Icon name="settings-outline" size={tabInfo.size} color={tabInfo.color} />,
                        }}
                        component={CamerasScreenController}
                    />
                </Tab.Navigator>
            </SafeAreaView>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})

export default App

import { Text, View, StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { TabButton } from '../../components'
import Employee from './BottomTabBar/Employee';
import SignUpRequest from './BottomTabBar/SignUpRequest';
import SignUpDetail from './BottomTabBar/SignUpDetail';

const Stack = createNativeStackNavigator();

const SignUpStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="SignUpRequest" component={SignUpRequest} options={{ headerShown: false }} />
    <Stack.Screen name="SignUpDetail" component={SignUpDetail} options={{ headerShown: false }} />
  </Stack.Navigator>
);

const ChairmanHome = () => {
  const Tab = createBottomTabNavigator()
  const tabs = [
    {
      id: 1,
      title: 'Employee',
      screen: 'Chat',
      icon: 'human-male-female',
      Component: Employee
    },
    {
      id: 2,
      title: 'Sign up request',
      screen: 'Likes',
      icon: 'account',
      Component: SignUpStack
    }]

  return (
    <Tab.Navigator
      initialRouteName={'Employee'}
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar
      }}>
      {tabs.map((item, index) =>
        <Tab.Screen
          key={item.id}
          name={item.screen}
          component={item.Component}
          options={{
            tabBarShowLabel: false,
            tabBarButton: (props) => <TabButton item={item} {...props} />
          }} />)}
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    height: 70,
    position: 'absolute',
    bottom: 25,
    marginHorizontal: 16,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#ffffff',
    backgroundColor: '#ff9c01'
  }
})

export default ChairmanHome

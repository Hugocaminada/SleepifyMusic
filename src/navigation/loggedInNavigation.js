import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FeatherIcon from 'react-native-vector-icons/Feather'

import SleepScreen from '../screens/SleepScreen/SleepScreen'
import WakeupScreen from '../screens/WakeupScreen/WakeupScreen'
import PlaybackScreen from '../screens/Playback/PlaybackScreen'
import { Color } from '../styles'

const Tab = createBottomTabNavigator()

export default function LoggedInNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: Color.Pink,
        }}
      >
        <Tab.Screen
          name="Fall asleep"
          component={SleepScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FeatherIcon name="sunset" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Playback"
          component={PlaybackScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FeatherIcon name="play" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Wake up"
          component={WakeupScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FeatherIcon name="sunrise" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

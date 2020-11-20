import React, { } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Grupos from '../pages/Grupos';
import Chat from '../pages/Chat';
import Settings from '../pages/Settings';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function StackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Grupos"
        component={Grupos}
      />
      <Stack.Screen
        name="Chat"
        component={Chat}
        initialParams={{ grupo: 'grupo1' }}
      /> 
    </Stack.Navigator>
  );
}

const AppRoutes = () => {
  return (

    <Tab.Navigator
      initialRouteName="Grupos"
      tabBarOptions={
        {
          activeTintColor: 'tomato',
          inactiveTintColor: '#ccc'
        }
      }
    >
      <Tab.Screen
        name="Grupos"
        component={StackScreen}
        options={
          {
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="chat"
                color={color}
                size={32}
              />
            )
          }
        }
      />
      <Tab.Screen
        name="Configurações"
        component={Settings}
        options={
          {
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="settings"
                size={32}
                color={color}
              />
            )
          }
        }
      />
    </Tab.Navigator>

  )
}

export default AppRoutes;
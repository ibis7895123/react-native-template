import { createStackNavigator } from '@react-navigation/stack'
import { screens, screenNames, screenComponents } from '@src/constants/screens'
import React from 'react'

const Stack = createStackNavigator()

const StackContainer = () => (
  <React.Fragment>
    <Stack.Navigator>
      <Stack.Screen
        name={screenNames[screens.Home]}
        component={screenComponents[screens.Home]}
      />
    </Stack.Navigator>
  </React.Fragment>
)

export default StackContainer

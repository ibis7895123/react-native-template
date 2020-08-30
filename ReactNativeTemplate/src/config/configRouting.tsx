import { createStackNavigator } from '@react-navigation/stack'
import { screens } from '@src/constants/screens'
import React from 'react'

const Stack = createStackNavigator()

const StackContainer = () => (
  <React.Fragment>
    <Stack.Navigator>
      {Object.values(screens).map((screen) => (
        <Stack.Screen
          key={screen.routeName}
          name={screen.displayName}
          component={screen.component}
        />
      ))}
    </Stack.Navigator>
  </React.Fragment>
)

export default StackContainer

import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { store } from '@src/config/configStore'
import StackContainer from '@src/config/configRouting'

export default class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <StackContainer />
        </NavigationContainer>
      </Provider>
    )
  }
}

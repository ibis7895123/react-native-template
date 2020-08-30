import React, { PureComponent } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export interface StateProps {}

export interface DispatchProps {}

type Props = StateProps & DispatchProps

export default class HomeScreen extends PureComponent<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello Home</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

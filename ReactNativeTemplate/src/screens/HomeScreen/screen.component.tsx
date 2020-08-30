import React, { PureComponent } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export interface StateProps {}

export interface DispatchProps {}

type Props = StateProps & DispatchProps

export default class HomeScreen extends PureComponent<Props> {
  render(): JSX.Element {
    return (
      <View>
        <Text style={styles.container}>Hello Home</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

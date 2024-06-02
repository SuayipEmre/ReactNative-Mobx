import { ActivityIndicator, StyleSheet,  View } from 'react-native'
import React from 'react'

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
  container:{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' },
})
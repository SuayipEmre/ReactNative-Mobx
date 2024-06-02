import { Text, View } from 'react-native'
import React from 'react'
import SortIcon from '../../../icons/SortIcon'
import FilterIcon from '../../../icons/FilterIcon'
import styles from './styles'

const CustomHeaderBottomContent = () => {
  return (
    <View style={styles.top_content}>

      <View style={styles.top_content_item}>
        <SortIcon />
        <Text style={styles.top_content_item_text}>Sırala</Text>
      </View>

      <View style={styles.top_content_item}>
        <FilterIcon />
        <Text style={styles.top_content_item_text}>Filtrele</Text>
      </View>
    </View>
  )
}

export default CustomHeaderBottomContent


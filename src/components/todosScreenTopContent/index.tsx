import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SortIcon from '../../icons/SortIcon'
import FilterIcon from '../../icons/FilterIcon'

const TodosScreenTopContent = () => {
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

export default TodosScreenTopContent

const styles = StyleSheet.create({
  
    top_content: {
        flexDirection: 'row',
        width: 385,
        borderWidth: 1,
        borderColor: '#0000001F',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 32,
        borderRadius: 8,
    },
    top_content_item: {
        width: 192.5,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 12,

    },
    top_content_item_text: {
        fontSize: 12,
        fontWeight: '400',
        textAlign: 'center',
    },

})
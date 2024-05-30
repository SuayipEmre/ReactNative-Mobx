import {  TextInput, View } from 'react-native'
import React from 'react'
import SearchIcon from '../../icons/SearchIcon'
import { COLORS } from '../../styles/colors'
import styles from './styles'

const SearchInput = () => {
    return (
        <View style={styles.container}>
            <SearchIcon />
            <TextInput
                placeholder='Post Ara'
                placeholderTextColor={COLORS.text.primary}
            />

        </View>
    )
}

export default SearchInput


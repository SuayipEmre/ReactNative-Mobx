import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import SearchIcon from '../../icons/SearchIcon'
import { COLORS } from '../../styles/colors'

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

const styles = StyleSheet.create({
    container: {
        width: 310,
        height: 40,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        gap:10,
        paddingLeft:6,
        backgroundColor: COLORS.background.primary,
    },
    input: {

    },
})
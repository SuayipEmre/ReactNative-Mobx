import {  TextInput, View } from 'react-native'
import React from 'react'
import SearchIcon from '../../icons/SearchIcon'
import { COLORS } from '../../styles/colors'
import styles from './styles'


type SearchInputProps = {
    searchValue : string
    setSearchValue : (value : string) => void,
    placeholder : string
}
const SearchInput : React.FC<SearchInputProps> = ({searchValue, setSearchValue, placeholder}) => {
    return (
        <View style={styles.container}>
            <SearchIcon />
            <TextInput
                value={searchValue}
                onChangeText={setSearchValue}
                placeholder={placeholder}
                placeholderTextColor={COLORS.text.primary}
            />

        </View>
    )
}

export default SearchInput


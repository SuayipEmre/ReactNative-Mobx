import AsyncStorage from "@react-native-async-storage/async-storage"



export const getFavoriteCharactersFromStorage = async () => {
    try {
        const favoriteUsers  = await AsyncStorage.getItem('favoriteUsers')
        return favoriteUsers ? JSON.parse(favoriteUsers) : []
        
    } catch (e) {
        console.log(e)
        return null

    }

}
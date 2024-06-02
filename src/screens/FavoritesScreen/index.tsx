import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import favoriteUsersStore from '../../store/FavoriteUsers'
import { observer } from 'mobx-react'
import UserCard from '../../components/userCard'
import MainLayout from '../../layouts/MainLayout'
import { TEXT_SIZE } from '../../styles/ConstantValues'
import { COLORS } from '../../styles/colors'

const FavoritesScreen = observer(() => {
    return (
        <SafeAreaView style={styles.container}>
            <MainLayout>
                {
                    favoriteUsersStore.favoriteUsers.length > 0 ? (
                        <>
                            <Text style={styles.title}>Favori Kullanıcıların</Text>
                            {
                                favoriteUsersStore.favoriteUsers.map((item, index) => <View key={item.id}>
                                    <UserCard user={item} index={index} />
                                </View>)
                            }</>
                    ) : <Text>Hiç favori kullanıcın yok.</Text>
                }
            </MainLayout>
        </SafeAreaView>
    )
})

export default FavoritesScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background.white,
    },
    title : {
        fontSize:TEXT_SIZE.large,
        fontWeight :'bold',
    },
})
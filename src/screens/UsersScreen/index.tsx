import { StyleSheet, SafeAreaView, ListRenderItem, FlatList } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import CustomScreenHeader from '../../components/customScreenHeader'
import { useNavigation } from '@react-navigation/native'
import { DrawerNavigationProp } from '@react-navigation/drawer'
import { DrawerMenuStackParamList } from '../../types/DrawerMenuStackParamList'
import { User } from '../../types/UsersTypes'
import { apiCall } from '../../services/ApiRequest'
import Pagination from '../../components/pagination'
import UserCard from '../../components/userCard'
import MainLayout from '../../layouts/MainLayout'
import CustomFlatList from '../../components/customFlatList'

const UsersScreen = () => {
    const listRef = useRef<FlatList>(null)
    const navigation = useNavigation<DrawerNavigationProp<DrawerMenuStackParamList>>()
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [searchUser, setSearchUser] = useState('')
    const [users, setUsers] = useState<[User] | []>([])

    const renderUsers: ListRenderItem<User> = ({ item, index }) => <UserCard user={item} />

    const totalPages = Math.ceil(users.length / 10)

    const currentUsers = users.slice(
        (currentPage - 1) * 10,
        currentPage * 10
    )

    const getUsers = async () => {
        const users = await apiCall('users')
        if (users) setUsers(users)
    }

    const filteredUsers = currentUsers.filter(item => item.name.toLowerCase().includes(searchUser.toLowerCase()))


    useEffect(() => {
        getUsers()
    }, [])

    return (
        <SafeAreaView style={styles.container}>

            <MainLayout>

                {
                    users.length > 0 &&
                    <CustomFlatList
                        listRef={listRef}
                        data={filteredUsers}
                        renderItem={renderUsers}
                        ListHeaderComponent={<CustomScreenHeader
                            inputPlaceHolder='Kullanıcı ara'
                            inputValue={searchUser}
                            setInputValue={setSearchUser}
                            navigation={navigation}
                        />}
                        ListFooterComponent={<Pagination currentPage={currentPage} listRef={listRef} onPageChange={setCurrentPage} totalPages={totalPages} />}
                    />
                }
            </MainLayout>
        </SafeAreaView>
    )
}

export default UsersScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },


})
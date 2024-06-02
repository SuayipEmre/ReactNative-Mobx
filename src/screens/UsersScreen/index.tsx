import { FlatList, ListRenderItem, SafeAreaView, StyleSheet, Text } from 'react-native';
import React, { useEffect, useRef } from 'react';
import CustomScreenHeader from '../../components/customScreenHeader';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { DrawerMenuStackParamList } from '../../types/DrawerMenuStackParamList';
import Pagination from '../../components/pagination';
import UserCard from '../../components/userCard';
import MainLayout from '../../layouts/MainLayout';
import CustomFlatList from '../../components/customFlatList';
import { observer } from 'mobx-react';
import usersStore from '../../store/Users';
import { COLORS } from '../../styles/colors';
import { GAP } from '../../styles/ConstantValues';
import Loading from '../../components/loading';

const UsersScreen: React.FC = observer(() => {
    const navigation = useNavigation<DrawerNavigationProp<DrawerMenuStackParamList>>();
    const listRef = useRef<FlatList>(null);

    useEffect(() => {
        usersStore.fetchUsers()
    }, []);

    const renderUsers: ListRenderItem<typeof usersStore.users[0]> = ({ item, index }) => <UserCard user={item} index={index} />

    const renderContent = () => {
        if (usersStore.loading) return <Loading />

        else if (usersStore.error) return <Text>{usersStore.error}</Text>


        return (
            <CustomFlatList
                listRef={listRef}
                data={usersStore.filteredUsers}
                ListHeaderComponent={
                    <CustomScreenHeader
                        inputPlaceHolder='Kullanıcı ara'
                        inputValue={usersStore.searchUser}
                        setInputValue={usersStore.setSearchUser}
                        navigation={navigation}
                    />
                }
                renderItem={renderUsers}
                ListFooterComponent={usersStore.searchUser.length > 0 ? <></> : <Pagination
                    currentPage={usersStore.currentPage}
                    listRef={listRef}
                    onPageChange={usersStore.setCurrentPage}
                    totalPages={usersStore.totalPages}
                />}
                contentContainerStyle={{ gap: GAP.medium }}
            />
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <MainLayout>
                {renderContent()}
            </MainLayout>
        </SafeAreaView>
    );
})

export default UsersScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background.white,
    },
});

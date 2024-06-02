import { FlatList, ListRenderItem, SafeAreaView, StyleSheet, Text } from 'react-native'
import React, { useEffect, useRef } from 'react'
import Pagination from '../../components/pagination'
import { TodosTypes } from '../../types/TodosTypes'
import { DrawerMenuStackParamList } from '../../types/DrawerMenuStackParamList'
import CustomScreenHeader from '../../components/customScreenHeader'
import { useNavigation } from '@react-navigation/native'
import { DrawerNavigationProp } from '@react-navigation/drawer'
import MainLayout from '../../layouts/MainLayout'
import CustomFlatList from '../../components/customFlatList'
import TodoCard from '../../components/todoCard'
import todosStore from '../../store/Todos'
import { observer } from 'mobx-react'
import { COLORS } from '../../styles/colors'
import { GAP } from '../../styles/ConstantValues'
import Loading from '../../components/loading'

const TodosScreen: React.FC = observer(() => {
    const navigation = useNavigation<DrawerNavigationProp<DrawerMenuStackParamList>>()
    const listRef = useRef<FlatList>(null)

    useEffect(() => {
        todosStore.fetchTodos()
    }, [])

    const renderTodos: ListRenderItem<TodosTypes> = ({ item, index }) => <TodoCard index={index} todo={item} />

    const renderContent = () => {
        if (todosStore.loading) return <Loading />
        else if (todosStore.error) return <Text>{todosStore.error}</Text>;


        return (
            <CustomFlatList
                listRef={listRef}
                data={todosStore.filteredTodos}
                ListHeaderComponent={
                    <CustomScreenHeader
                        navigation={navigation}
                        inputPlaceHolder='Görev Ara'
                        inputValue={todosStore.searchTodos}
                        setInputValue={todosStore.setSearchTodos}
                    />
                }
                renderItem={renderTodos}
                ListFooterComponent={todosStore.searchTodos.length > 0 ? <></> : <Pagination
                    currentPage={todosStore.currentPage}
                    listRef={listRef}
                    onPageChange={todosStore.setCurrentPage}
                    totalPages={todosStore.totalPages}
                />}
                contentContainerStyle={{ gap: GAP.medium }}
            />
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <MainLayout>
                {renderContent()}
            </MainLayout>
        </SafeAreaView>
    )
})

export default TodosScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background.white,
    },
});

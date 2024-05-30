import { FlatList, ListRenderItem, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { apiCall } from '../../services/ApiRequest'
import CheckBox from '@react-native-community/checkbox'
import TodosScreenTopContent from '../../components/todosScreenTopContent'
import Pagination from '../../components/pagination'
import { TodosTypes } from '../../types/TodosTypes'
import CheckboxUncheckedIcon from '../../icons/CheckboxUncheckedIcon'
import CheckboxCheckedIcon from '../../icons/CheckboxCheckedIcon'



const ITEMS_PER_PAGE = 30;


const TodosScreen = () => {
    const [todos, setTodos] = useState<[TodosTypes] | []>([])
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [currentPage, setCurrentPage] = useState<number>(1)

    const listRef = useRef<FlatList>(null)


    const getTodos = async () => {
        const todoData = await apiCall('todos')
        if (todoData) setTodos(todoData)
    }
    useEffect(() => {
        getTodos()
    }, [])

    const totalPages = Math.ceil(todos.length / ITEMS_PER_PAGE);


    const currentTodos = todos.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    )

    const renderTodos: ListRenderItem<TodosTypes> = ({ item, index }) => (
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, }}>
            {
                item.completed ? <CheckboxCheckedIcon /> : <CheckboxUncheckedIcon />
            }
            <Text style={{ fontSize: 14, fontWeight: 400, }}>{item.title}</Text>
        </View>
    )


    return (
        <SafeAreaView style={styles.container}>

            <View style={{
                width: '90%',
                alignSelf: 'center'
            }}>

                {
                    todos.length > 0 && <FlatList
                        ref={listRef}
                        data={currentTodos}
                        ListHeaderComponent={<TodosScreenTopContent />}
                        renderItem={renderTodos}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ gap: 12 }}
                        ListFooterComponent={<Pagination currentPage={currentPage} listRef={listRef} onPageChange={setCurrentPage} totalPages={totalPages} />}
                    />

                }

            </View>

        </SafeAreaView>
    )
}

export default TodosScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
    },

})
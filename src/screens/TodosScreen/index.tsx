import { FlatList, ListRenderItem, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SortIcon from '../../icons/SortIcon'
import FilterIcon from '../../icons/FilterIcon'
import { apiCall } from '../../services/ApiRequest'
import CheckBox from '@react-native-community/checkbox'
import TodosScreenTopContent from '../../components/todosScreenTopContent'


type todosTypes = {
    userId: number,
    id: number,
    title: string,
    completed: boolean,
}
const TodosScreen = () => {
    const [todos, setTodos] = useState<[todosTypes] | []>([])
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    const getTodos = async () => {
        const todoData = await apiCall('todos')
        if (todoData) setTodos(todoData)
    }
    useEffect(() => {
        getTodos()
    }, [])



    const renderTodos: ListRenderItem<todosTypes> = ({ item, index }) => (
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, }}>
            <CheckBox
                disabled={false}
                value={item.completed}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
            />
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
                        data={todos}
                        ListHeaderComponent={<TodosScreenTopContent />}
                        renderItem={renderTodos}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ gap: 12 }}
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
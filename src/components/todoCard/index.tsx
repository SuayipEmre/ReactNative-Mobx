import {Text} from 'react-native'
import React from 'react'
import Animated, { FadeInUp } from 'react-native-reanimated'
import { TodosTypes } from '../../types/TodosTypes'
import CheckboxCheckedIcon from '../../icons/CheckboxCheckedIcon'
import CheckboxUncheckedIcon from '../../icons/CheckboxUncheckedIcon'
import styles from './styles'

type TodoCardProps = {
    todo: TodosTypes,
    index: number
}
const TodoCard: React.FC<TodoCardProps> = ({ todo, index }) => {
    return (
        <Animated.View
            style={styles.container}
            entering={FadeInUp.delay(100 * index).duration(100).springify().damping(12)}>
            {
                todo.completed ? <CheckboxCheckedIcon /> : <CheckboxUncheckedIcon />
            }
            <Text style={styles.title}>{todo.title}</Text>
        </Animated.View>
    )
}

export default TodoCard


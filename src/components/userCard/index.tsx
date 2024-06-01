import { Text, View } from 'react-native'
import React, { useState } from 'react'
import DefaultUserIcon from '../../icons/DefaultUserIcon'
import MoreVerticalIcon from '../../icons/MoreVerticalIcon'
import { User } from '../../types/UsersTypes'
import styles from './styles'
import UserInformationModal from '../userInformationModal'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Animated, { FadeInLeft } from 'react-native-reanimated'

type UserCardProps = {
    user: User,
    index : number
}
const UserCard: React.FC<UserCardProps> = ({ user, index }) => {
    const [modalVisible, setModalVisible] = useState(false)
    
    return (
        <TouchableOpacity style={styles.container} >

            <Animated.View
            entering={FadeInLeft.delay(100 * index).duration(100).springify().damping(12)}
            style={styles.left_side_content}>
                <DefaultUserIcon />
                <View>

                    <View>
                        <Text style={styles.name}>{user.name}</Text>
                        <Text style={styles.email}>{user.email}</Text>
                    </View>

                    <Text style={styles.phone}>{user.phone}</Text>

                </View>
            </Animated.View>
            <UserInformationModal modalVisible={modalVisible} user={user} setModalVisible={setModalVisible} />

            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <MoreVerticalIcon />
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

export default UserCard


import { Text, View } from 'react-native'
import React, { useState } from 'react'
import DefaultUserIcon from '../../icons/DefaultUserIcon'
import MoreVerticalIcon from '../../icons/MoreVerticalIcon'
import { User } from '../../types/UsersTypes'
import styles from './styles'
import UserInformationModal from '../userInformationModal'
import { TouchableOpacity } from 'react-native-gesture-handler'

type UserCardProps = {
    user: User
}
const UserCard: React.FC<UserCardProps> = ({ user }) => {
    const [modalVisible, setModalVisible] = useState(false)
    return (
        <View style={styles.container}>

            <View style={styles.left_side_content}>
                <DefaultUserIcon />
                <View>

                    <View>
                        <Text style={styles.name}>{user.name}</Text>
                        <Text style={styles.email}>{user.email}</Text>
                    </View>

                    <Text style={styles.phone}>{user.phone}</Text>

                </View>
            </View>
            <UserInformationModal modalVisible={modalVisible} user={user} />

            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <MoreVerticalIcon />
            </TouchableOpacity>
        </View>
    )
}

export default UserCard


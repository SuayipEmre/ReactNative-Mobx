import { Text, View } from 'react-native'
import React from 'react'
import DefaultUserIcon from '../../icons/DefaultUserIcon'
import MoreVerticalIcon from '../../icons/MoreVerticalIcon'
import { User } from '../../types/UsersTypes'
import styles from './styles'

type UserCardProps = {
    user: User
}
const UserCard: React.FC<UserCardProps> = ({ user }) => {
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
            <MoreVerticalIcon />
        </View>
    )
}

export default UserCard


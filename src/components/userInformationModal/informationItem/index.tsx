import { Text, View } from 'react-native'
import React from 'react'
import styles from './styles'

type UserInformationItemProps = {
    title : string,
    subText : string,
    icon :  React.JSX.Element,
}
const UserInformationItem : React.FC<UserInformationItemProps> = ({icon, subText, title}) => {
    return (
            <View style={styles.content_item}>
                <View style={styles.content_item_header}>
                    {icon}
                    <Text style={styles.title}>{title}</Text>
                </View>
                <Text style={styles.subtext}>{subText}</Text>
            </View>

    )
}

export default UserInformationItem

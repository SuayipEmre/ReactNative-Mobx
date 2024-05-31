import { Text, View } from 'react-native'
import React from 'react'
import NoUserProfilePhotoIcon from '../../icons/NoUserProfilePhotoIcon'
import { Comment } from '../../types/CommentsTypes'
import styles from './styles'
type CommentCardProps = {
    comment : Comment,
    index:number
}
const CommentCard : React.FC<CommentCardProps> = ({comment, index}) => {
    return (
        <View key={index} style={styles.container}>
            <NoUserProfilePhotoIcon />
            <View style={styles.text_container}>
                <Text style={styles.name}>{comment.name}</Text>
                <Text style={styles.body}>{comment.body}</Text>
            </View>
        </View>
    )
}

export default CommentCard

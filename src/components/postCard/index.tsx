import {  Text, View } from 'react-native'
import React from 'react'
import SeeMoreIcon from '../../icons/SeeMoreIcon'
import { PostsTypes } from '../../types/PostsTypes'
import styles from './styles'


type PostCardProps = {
    post : PostsTypes
}
const PostCard : React.FC<PostCardProps> = ({post}) => {
  return (
    <View style={styles.container}>

        <Text style={styles.title}>{post.title}</Text>
        <Text style={styles.body}>{post.body}</Text>

        <View style={styles.bottom_content}>
            <Text style={styles.seemore}>See More</Text>
            <SeeMoreIcon />
        </View>
    </View>
  )
}

export default PostCard


import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import SeeMoreIcon from '../../icons/SeeMoreIcon'
import { PostsTypes } from '../../types/PostsTypes'
import styles from './styles'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { PostsNavigatorStackParamList } from '../../types/PostsNavigatorStackParamLists'
import Animated, { FadeInRight, FadeInUp } from 'react-native-reanimated'


type PostCardProps = {
  post: PostsTypes,
  index: number
}
const PostCard: React.FC<PostCardProps> = ({ post, index }) => {
  const navigation = useNavigation<NavigationProp<PostsNavigatorStackParamList>>()
  return (

    <Animated.View 
    entering={FadeInRight.delay(100 * index).duration(100).springify().damping(12)}
    >

      <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('PostDetailScreen', { post: post })}>

        <Text style={styles.title}>{post.title}</Text>
        <Text style={styles.body}>{post.body}</Text>

        <View style={styles.bottom_content}>
          <Text style={styles.seemore}>See More</Text>
          <SeeMoreIcon />
        </View>

      </TouchableOpacity>
    </Animated.View>
  )
}

export default PostCard


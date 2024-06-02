import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { PostsNavigatorStackParamList } from '../../types/PostsNavigatorStackParamLists'
import { Comment } from '../../types/CommentsTypes'
import MainLayout from '../../layouts/MainLayout'
import CommentCard from '../../components/commentCard'
import { MARGIN, TEXT_SIZE } from '../../styles/ConstantValues'
import Animated, { FadeInUp } from 'react-native-reanimated'
import { COLORS } from '../../styles/colors'
import { apiCall } from '../../services/ApiRequest'

type PostDetailScreenProps = NativeStackScreenProps<PostsNavigatorStackParamList, 'PostDetailScreen'>
const PostDetailScreen: React.FC<PostDetailScreenProps> = ({ route }) => {
    const [comments, setComments] = useState<[Comment] | []>([])
    const post = route.params.post

    const getPostComments = async () => {
        const comments = await apiCall(`comments?postId=${post.id}`)
        if (comments) setComments(comments)
    }
    useEffect(() => {
        getPostComments()
    }, [])

    return (
        <Animated.View
            entering={FadeInUp.delay(100).duration(100).springify()}
            style={styles.container}>
            <MainLayout>
                <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                    <Text style={styles.title}>{post.title}</Text>
                    <Text style={styles.body}>{post.body}</Text>


                    <View style={styles.comments_container}>
                        <Text style={styles.comment_title}>Comments</Text>
                        <View style={{ gap: 20 }}>
                            {
                                comments?.map((item, index) => <View key={item.id}>
                                    <CommentCard comment={item} />
                                </View>)
                            }
                        </View>

                    </View>
                </ScrollView>
            </MainLayout>
        </Animated.View>
    )
}

export default PostDetailScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background.white,
    },
    content: {
        marginTop: MARGIN.large,
    },
    title: {
        fontWeight: '600',
        fontSize: TEXT_SIZE.medium,
        lineHeight: 16,
        letterSpacing: 0.4,
        color: COLORS.text.primary,
    },
    body: {
        fontWeight: '400',
        fontSize: TEXT_SIZE.normal,
        lineHeight: 20,
        letterSpacing: 0.2,
        color: COLORS.text.primary,
        marginTop: MARGIN.medium,
    },
    comments_container:{ marginTop: MARGIN.xLarge, gap: 10},
    comment_title: {
        fontSize: TEXT_SIZE.xLarge,
        fontWeight: '600',
        lineHeight: 32,
    },

})

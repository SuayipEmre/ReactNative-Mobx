import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { PostsNavigatorStackParamList } from '../../types/PostsNavigatorStackParamLists'
import { apiCall } from '../../services/ApiRequest'
import { Comment } from '../../types/CommentsTypes'
import MainLayout from '../../layouts/MainLayout'
import CommentCard from '../../components/commentCard'
import { MARGIN, TEXT_SIZE } from '../../styles/ConstantValues'
import Animated, { FadeInUp } from 'react-native-reanimated'

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


                    <View style={{marginTop:MARGIN.xLarge, gap:10}}>
                    <Text style={styles.comment_title}>Comments</Text>
                        <View style={{ gap: 20 }}>
                            {
                                comments?.map((item, index) => <View>
                                    <CommentCard comment={item} />
                                </View>)
                            }
                        </View>
                        {
                            //
                        }
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
        backgroundColor: '#ffffff',
    },
    content: {
        marginTop: MARGIN.large,
    },
    title: {
        fontWeight: '600',
        fontSize: TEXT_SIZE.medium,
        lineHeight: 16,
        letterSpacing: 0.4,
        color: '#26303E',
    },
    body: {
        fontWeight: '400',
        fontSize: TEXT_SIZE.normal,
        lineHeight: 20,
        letterSpacing: 0.2,
        color: '#000000',
        marginTop: MARGIN.medium,
    },
    comment_title: {
        fontSize: TEXT_SIZE.xLarge,
        fontWeight: '600',
        lineHeight: 32,
    },
 
})

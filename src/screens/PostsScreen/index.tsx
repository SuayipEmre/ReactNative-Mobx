import { FlatList, ListRenderItem, SafeAreaView, StyleSheet } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { apiCall } from '../../services/ApiRequest'
import CustomScreenHeader from '../../components/customScreenHeader'
import { useNavigation } from '@react-navigation/native'
import { DrawerNavigationProp } from '@react-navigation/drawer'
import { DrawerMenuStackParamList } from '../../types/DrawerMenuStackParamList'
import Pagination from '../../components/pagination'
import { ITEMS_PER_PAGE } from '../../constants/itemsPerPage'
import PostCard from '../../components/postCard'
import MainLayout from '../../layouts/MainLayout'


type PostsTypes = {
    userId: string,
    id: number,
    title: string,
    body: string
}
const PostsScreen = () => {
    const navigation = useNavigation<DrawerNavigationProp<DrawerMenuStackParamList>>()
    const [posts, setPosts] = useState<[PostsTypes] | []>([])
    const [searchPostValue, setSearchPostValue] = useState('')
    const listRef = useRef<FlatList>(null)
    const [currentPage, setCurrentPage] = useState<number>(1)

    const getPosts = async () => {
        const posts = await apiCall('posts')
        if (posts) setPosts(posts)
    }

    const renderPosts: ListRenderItem<PostsTypes> = ({ item, index }) => <PostCard post={item} />

    const totalPages = Math.ceil(posts.length / ITEMS_PER_PAGE)

    const currentPosts = posts.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    )
    const filteredPosts = currentPosts.filter(item => item.title.toLowerCase().includes(searchPostValue.toLowerCase()))

    useEffect(() => {
        getPosts()
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <MainLayout>
                {
                    posts.length > 0 && (
                        <FlatList
                            ref={listRef}
                            ListHeaderComponent={
                                <CustomScreenHeader
                                    inputPlaceHolder='Post Ara'
                                    inputValue={searchPostValue}
                                    setInputValue={setSearchPostValue}
                                    navigation={navigation}
                                />}
                            data={filteredPosts}
                            renderItem={renderPosts}
                            showsVerticalScrollIndicator={false}
                            ListFooterComponent={<Pagination
                                currentPage={currentPage}
                                listRef={listRef}
                                onPageChange={setCurrentPage}
                                totalPages={totalPages} />}
                        />
                    )
                }
            </MainLayout>
        </SafeAreaView>
    )
}

export default PostsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },


})
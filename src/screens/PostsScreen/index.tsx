import { ActivityIndicator, FlatList, ListRenderItem, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useRef } from 'react';
import CustomScreenHeader from '../../components/customScreenHeader';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { DrawerMenuStackParamList } from '../../types/DrawerMenuStackParamList';
import Pagination from '../../components/pagination';
import PostCard from '../../components/postCard';
import MainLayout from '../../layouts/MainLayout';
import CustomFlatList from '../../components/customFlatList';
import { observer } from 'mobx-react';
import postsStore from '../../store/Posts';
import { COLORS } from '../../styles/colors';

const PostsScreen: React.FC = observer(() => {
    const navigation = useNavigation<DrawerNavigationProp<DrawerMenuStackParamList>>();
    const listRef = useRef<FlatList>(null);

    useEffect(() => {
        postsStore.fetchPosts();
    }, []);

    const renderPosts: ListRenderItem<typeof postsStore.posts[0]> = ({ item, index }) => <PostCard post={item} index={index} />

    const renderContent = () => {
        if (postsStore.loading) {
            return (
                <View style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                    <ActivityIndicator />
                </View>
            );
        } else if (postsStore.error) {
            return <Text>{postsStore.error}</Text>;
        }

        return (
            <CustomFlatList
                listRef={listRef}
                data={postsStore.filteredPosts}
                ListHeaderComponent={
                    <CustomScreenHeader
                        inputPlaceHolder='Post Ara'
                        inputValue={postsStore.searchPostValue}
                        setInputValue={postsStore.setSearchPostValue}
                        navigation={navigation}
                    />
                }
                renderItem={renderPosts}
                ListFooterComponent={postsStore.searchPostValue.length > 0 ? <></> : <Pagination
                    currentPage={postsStore.currentPage}
                    listRef={listRef}
                    onPageChange={postsStore.setCurrentPage}
                    totalPages={postsStore.totalPages}
                />}
                contentContainerStyle={{ gap: 12 }}
            />
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <MainLayout>
                {renderContent()}
            </MainLayout>
        </SafeAreaView>
    );
})

export default PostsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background.white,
    },
});

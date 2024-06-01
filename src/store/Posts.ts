import { makeAutoObservable, runInAction } from 'mobx';
import { apiCall } from '../services/ApiRequest';
import { ITEMS_PER_PAGE } from '../constants/itemsPerPage';
import { PostsTypes } from '../types/PostsTypes';


class PostsStore {
    posts: PostsTypes[] = [];
    loading: boolean = false;
    error: string | null = null;
    currentPage: number = 1;
    searchPostValue: string = '';

    constructor() {
        makeAutoObservable(this);
    }

    fetchPosts = async () => {
        this.loading = true;
        try {
            const postData = await apiCall('posts');
            runInAction(() => {
                if (postData) {
                    this.posts = postData;
                } else {
                    this.error = 'Failed to load posts';
                }
                this.loading = false;
            });
        } catch (e) {
            runInAction(() => {
                this.error = 'Failed to load posts';
                this.loading = false;
            });
        }
    }

    setCurrentPage = (page: number) => {
        this.currentPage = page;
    }

    setSearchPostValue = (searchTerm: string) => {
        this.searchPostValue = searchTerm;
    }

    get totalPages() {
        return Math.ceil(this.posts.length / ITEMS_PER_PAGE);
    }

    get filteredPosts() {
        const currentPosts = this.posts.slice(
            (this.currentPage - 1) * ITEMS_PER_PAGE,
            this.currentPage * ITEMS_PER_PAGE
        );

        return currentPosts.filter(item => item.title.toLowerCase().includes(this.searchPostValue.toLowerCase()));
    }
}

const postsStore = new PostsStore();
export default postsStore;

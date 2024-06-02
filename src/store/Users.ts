import { makeAutoObservable, runInAction } from 'mobx';
import { User } from '../types/UsersTypes';
import { apiCall } from '../services/ApiRequest';


class UsersStore {
    users: User[] = [];
    loading: boolean = false;
    error: string | null = null;
    currentPage: number = 1;
    searchUser: string = '';

    constructor() {
        makeAutoObservable(this);
    }

    fetchUsers = async () => {
        this.loading = true;
        try {
            const userData = await apiCall('users');
            runInAction(() => {
                if (userData) {
                    this.users = userData;
                } else {
                    this.error = 'Failed to load users';
                }
                this.loading = false;
            });
        } catch (e) {
            runInAction(() => {
                this.error = 'Failed to load users';
                this.loading = false;
            });
        }
    }

    setCurrentPage = (page: number) => {
        this.currentPage = page;
    }

    setSearchUser = (searchTerm: string) => {
        this.searchUser = searchTerm;
    }
  
    get totalPages() {
        return Math.ceil(this.users.length / 10)
    }

    get filteredUsers() {
        const currentUsers = this.users.slice(
            (this.currentPage - 1) * 10,
            this.currentPage * 10
        );

        return currentUsers.filter(item => item.name.toLowerCase().includes(this.searchUser.toLowerCase()));
    }
}

const usersStore = new UsersStore();
export default usersStore;

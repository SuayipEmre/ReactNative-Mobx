import { makeAutoObservable, runInAction } from 'mobx';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { User } from '../types/UsersTypes';
import { getFavoriteCharactersFromStorage } from '../utils/getFavoriteUsersFromStorage';

class FavoriteUsersStore {
    favoriteUsers: User[] = [];
    loading: boolean = false;
    error: string | null = null;

    constructor() {
        makeAutoObservable(this)
    }

    addFavoriteUser = async (user: User) => {
        this.loading = true
        this.error = null
        try {
            const existingFavorites = await getFavoriteCharactersFromStorage()


            if (existingFavorites) {
                const newFavorites = [...existingFavorites, { ...user }]
                await AsyncStorage.setItem('favoriteUsers', JSON.stringify(newFavorites))

                runInAction(() => {
                    this.favoriteUsers = newFavorites;
                    this.loading = false;
                });
            }

        } catch (error) {
            runInAction(() => {
                this.error = 'Failed to add favorite user'
                this.loading = false;
            });
            console.error('Failed to add favorite user:', error)
        }
    }

    removeFavoriteUser = async (user: User) => {
        this.loading = true;
        this.error = null;
        try {
            const existingFavorites: User[] = await getFavoriteCharactersFromStorage();

            if (existingFavorites) {
                const newFavorites = existingFavorites.filter(item => item.id !== user.id);
                await AsyncStorage.setItem('favoriteUsers', JSON.stringify(newFavorites));

                runInAction(() => {
                    this.favoriteUsers = newFavorites;
                    this.loading = false;
                });
            }

        } catch (error) {
            runInAction(() => {
                this.error = 'Failed to remove favorite user';
                this.loading = false;
            });
            console.error('Failed to remove favorite user:', error);
        }
    }


    loadFavoriteUsers = async () => {
        this.loading = true;
        this.error = null;
        try {
            const existingFavorites = await getFavoriteCharactersFromStorage()

            if (existingFavorites) {
                runInAction(() => {
                    this.favoriteUsers = existingFavorites;
                    this.loading = false
                });
            }


        } catch (error) {
            runInAction(() => {
                this.error = 'Failed to load favorite users'
                this.loading = false
            });
            console.error('Failed to load favorite users:', error)
        }
    }

    clearAllFavoriteUsers = async () => {
        this.loading = true;
        this.error = null;
        try {
            await AsyncStorage.removeItem('favoriteUsers');

            runInAction(() => {
                this.favoriteUsers = [];
                this.loading = false;
            });

        } catch (error) {
            runInAction(() => {
                this.error = 'Failed to clear favorite users';
                this.loading = false;
            });
            console.error('Failed to clear favorite users:', error);
        }
    }
}

const favoriteUsersStore = new FavoriteUsersStore()
export default favoriteUsersStore;
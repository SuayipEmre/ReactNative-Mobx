import { makeAutoObservable, runInAction } from 'mobx';
import { TodosTypes } from '../types/TodosTypes';
import { ITEMS_PER_PAGE } from '../constants/itemsPerPage';
import { apiCall } from '../services/ApiRequest';

class TodosStore {
    todos: TodosTypes[] = []
    loading: boolean = false
    error: string | null = null
    currentPage: number = 1
    searchTodos: string = ''
    

    constructor() {
        makeAutoObservable(this);
    }

    fetchTodos = async () => {
        this.loading = true;
        try {
            const todoData = await apiCall('todos');
            runInAction(() => {
                if (todoData) {
                    this.todos = todoData;
                } else {
                    this.error = 'Failed to load todos';
                }
                this.loading = false;
            });
        } catch (e) {
            runInAction(() => {
                this.error = 'Failed to load todos';
                this.loading = false;
            });
        }
    }

    setCurrentPage = (page: number) => {
        this.currentPage = page;
    }

    setSearchTodos = (searchTerm: string) => {
        this.searchTodos = searchTerm;
    }

    get filteredTodos() {
        const currentTodos = this.todos.slice(
            (this.currentPage - 1) * ITEMS_PER_PAGE,
            this.currentPage * ITEMS_PER_PAGE
        );

        return currentTodos.filter(item => item.title.toLowerCase().includes(this.searchTodos.toLowerCase()));
    }

    get totalPages() {
        return Math.ceil(this.todos.length / ITEMS_PER_PAGE);
    }
}

const todosStore = new TodosStore();
export default todosStore;

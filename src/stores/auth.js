import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAuth = defineStore('auth', () => {
    const user = ref(null);


    const token = computed(() => {
        return localStorage.getItem('token');
    });

    const setUser = (newUser) => {
        user.value = newUser;
    };

    const setToken = (newToken) => {
        localStorage.setItem('token', newToken);
    };    

    const logout = () => {
        token.value = null;
        user.value = null;
        localStorage.removeItem('token');
    };

    return {
        token,
        user,
        setUser,
        setToken,
        logout
    };
});

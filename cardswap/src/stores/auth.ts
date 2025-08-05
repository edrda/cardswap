// src/stores/auth.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';

const API_URL = 'https://cards-marketplace-api-2fjj.onrender.com';

export const useAuthStore = defineStore('auth', () => {
  // Estado
  const token = ref<string | null>(localStorage.getItem('token'));
  const user = ref<any>(null);
  const loading = ref(false);
  const error = ref<string | null>(null);

  // Se já existe token salvo, injeta no axios
  if (token.value) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token.value}`;
  }

  // Define token e salva no localStorage
  function setToken(newToken: string) {
    token.value = newToken;
    localStorage.setItem('token', newToken);
    axios.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
  }

  // Login
  async function login(email: string, password: string) {
    try {
      loading.value = true;
      error.value = null;
      const res = await axios.post(`${API_URL}/login`, { email, password });
      setToken(res.data.token);
      await fetchUser();
    } catch (err: any) {
      error.value = err.response?.data?.message || 'Login failed';
    } finally {
      loading.value = false;
    }
  }

  // Registro
  async function register(name: string, email: string, password: string) {
    try {
      loading.value = true;
      error.value = null;
      const res = await axios.post(`${API_URL}/register`, { name, email, password });
      setToken(res.data.token);
      await fetchUser();
    } catch (err: any) {
      error.value = err.response?.data?.message || 'Registration failed';
    } finally {
      loading.value = false;
    }
  }

  // Busca o usuário logado
  async function fetchUser() {
    if (!token.value) return;
    try {
      const res = await axios.get(`${API_URL}/me`);
      user.value = res.data;
    } catch {
      logout();
    }
  }

  // Logout
  function logout() {
    token.value = null;
    user.value = null;
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
  }

  return {
    token,
    user,
    loading,
    error,
    login,
    register,
    fetchUser,
    logout
  };
});

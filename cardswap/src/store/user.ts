// src/store/user.ts
import { defineStore } from 'pinia'
import api from '../services/api'

interface User {
  id: string
  name: string
  email: string
}

interface AuthResponse {
  token: string
  user: User
}

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null as User | null,
    token: localStorage.getItem('token') || ''
  }),

  actions: {
    async login(email: string, password: string) {
      const { data } = await api.post<AuthResponse>('/login', { email, password })
      this.user = data.user
      this.token = data.token
      localStorage.setItem('token', data.token)
    },

    async register(name: string, email: string, password: string) {
      await api.post('/register', { name, email, password })
    },

    async fetchUser() {
      if (!this.token) return
      const { data } = await api.get<User>('/me')
      this.user = data
    },

    logout() {
      this.user = null
      this.token = ''
      localStorage.removeItem('token')
    }
  }
})

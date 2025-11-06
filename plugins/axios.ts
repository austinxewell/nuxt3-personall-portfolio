// plugins/axios.ts
import axios from 'axios'

export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig()
    const api = axios.create({ baseURL: config.public.apiBase })

    api.interceptors.response.use(
        (res) => res,
        (err) => {
            console.error('API Error:', err)
            return Promise.reject(err)
        }
    )

    return { provide: { axios: api } }
})
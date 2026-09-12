import axios from 'axios'

export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig()
    const router = useRouter()

    const api = axios.create({ baseURL: config.public.apiBase })

    // Attach token on every request
    api.interceptors.request.use((req) => {
        if (import.meta.client) {
            const token = localStorage.getItem('accessToken')
            if (token) 
                req.headers.Authorization = `Bearer ${token}`
        }

        return req
    })

    // Handle expired / invalid tokens
    api.interceptors.response.use(
        (res) => res,
        (err) => {
            const status = err.response?.status
            const UNAUTHORIZED_ERROR = 401
            const FORBIDDEN_ERROR = 403

            if (status === UNAUTHORIZED_ERROR || status === FORBIDDEN_ERROR) 
                if (import.meta.client) {
                    localStorage.removeItem('accessToken')
                    router.push('/login')
                }

            return Promise.reject(err)
        }
    )

    return { provide: { axios: api } }
})
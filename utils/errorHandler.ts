import type { AxiosError } from 'axios'

export function handleApiError(error: unknown): string {
    const err = error as AxiosError<{ message?: string }>

    if (err.response) {
        const { status, data } = err.response
        console.error(`API Error (${status}):`, data?.message || data)
        return data?.message || 'Server error'
    } else if (err.request) {
        console.error('No response from server')
        return 'No response from server'
    } else {
        console.error('Error setting up request:', (err as Error).message)
        return (err as Error).message
    }
}

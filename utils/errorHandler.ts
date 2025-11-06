// utils/errorHandler.ts
export function handleApiError(error: any) {
    if (error.response) {
        const { status, data } = error.response
        console.error(`API Error (${status}):`, data.message || data)
        return data.message || 'Server error'
    } else if (error.request) {
        console.error('No response from server')
        return 'No response from server'
    } else {
        console.error('Error setting up request:', error.message)
        return error.message
    }
}
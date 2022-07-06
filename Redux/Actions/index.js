export const addlocation = (data) => {
    return {
        type: 'ADD_LOCATION',
        payload: {
            data: data
        }
    }
}
export const login = (data) => {
    return {
        type: 'LOGIN_USER',
        payload: {
            data: data
        }
    }
}
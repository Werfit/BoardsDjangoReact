export default getState => {
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }

    const token = getState().accounts.token
    if (token)
        config.headers['Authorization'] = `Token ${token}`

    return config
}
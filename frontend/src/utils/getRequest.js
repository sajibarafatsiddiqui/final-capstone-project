const getRequest = async (url) => {
    try {
       const response =  await fetch(url)
       const { status } = response
       const data = await response.json()
       console.log(data)
       return { data, status }
    } catch (error) {
        return error
    }
}

export default getRequest
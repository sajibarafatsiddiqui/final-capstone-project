const postRequest = async (url, options) => {
        try {
           const response =  await fetch(url, options)
           const { status } = response
           const data = await response.json()
           console.log(data)
           return { data, status }
        } catch (error) {
            return error
        }
}

export default postRequest
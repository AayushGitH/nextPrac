import { httpAxios } from "@/helper/httpHelper"

export const addUser = async(user) => {
    const result = await httpAxios.post('/api/user', user)
                    .then((response)=> response.data)
    return result
}

export const loginUser = async(loginData) => {
    const result = await httpAxios.post('/api/login', loginData)
                    .then((response)=> response.data)
    return result
}
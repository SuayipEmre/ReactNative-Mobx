
import axios from 'axios'
import { API_BASE_URL } from '../constants/baseUrl'



export const apiCall = async(path : string) => {
    try {
        const {data} = await axios.get(`${API_BASE_URL}/${path}`)
        return data
    } catch (error) {
        console.log('err' , error)
        return null
    }
}


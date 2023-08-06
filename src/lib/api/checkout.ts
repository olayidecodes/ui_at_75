import axios from "axios"
import { publicApiInstance } from "."

export const getCheckouts = async () => {
    const data = await publicApiInstance.get('/checkout')
    console.log(data)
    return data
}

export const checkout = async (formData: any) => {
    const data = await publicApiInstance.post('/transaction/initialize', formData)
    console.log(data)
    return data
}
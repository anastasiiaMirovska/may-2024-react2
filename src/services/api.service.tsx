import axios from "axios";
import {IProduct} from "../models/IProduct.ts";
import {BaseResponseType} from "../models/BaseResponseType.ts";


const axiosInstance = axios.create(
    {
        baseURL: "https://dummyjson.com"
    }
)

export const getProducts = async(): Promise<IProduct[]> =>{
    const {data: {products}}= await axiosInstance.get<BaseResponseType & {products: IProduct[]}>("/products")
    return products
}

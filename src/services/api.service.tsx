import axios from "axios";
import {IProduct} from "../models/IProduct.ts";
import {BaseResponseType} from "../models/BaseResponseType.ts";
import {IRecipe} from "../models/IRecipe.ts";


const axiosInstance = axios.create(
    {
        baseURL: "https://dummyjson.com"
    }
)

export const getProducts = async(): Promise<IProduct[]> =>{
    const {data: {products}}= await axiosInstance.get<BaseResponseType & {products: IProduct[]}>("/products")
    return products
}


export const getProduct = async(id:string):Promise<IProduct> =>{
    const {data} = await axiosInstance.get<IProduct>("/products/"+id)
    return data
}


export const getRecipes = async():Promise<IRecipe[]>=>{
    const {data:{recipes}} = await axiosInstance.get<BaseResponseType & {recipes:IRecipe[]}>("/recipes")
    return recipes
}

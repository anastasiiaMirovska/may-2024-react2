import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getProduct} from "../services/api.service.tsx";
import {IProduct} from "../models/IProduct.ts";

const ProductDetailsPage = () => {
    const [product, setProduct] = useState<IProduct|null>(null)

    const {id} = useParams()

    useEffect(() => {
        if(id){
            getProduct(id).then(value=> {
                setProduct(value);
                console.log(value)
            })
        }

    }, []);

    return (
        <div>
            Product details page
            <p>{product?.description}</p>
        </div>
    );
};

export default ProductDetailsPage;

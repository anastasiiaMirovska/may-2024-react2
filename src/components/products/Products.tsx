import React, {useEffect, useState} from 'react';
import {IProduct} from "../../models/IProduct.ts";
import {getProducts} from "../../services/api.service.tsx";
import Product from "../product/Product.tsx";


const Products = () => {
    const [products, setProducts] = useState<IProduct[]>([])
    useEffect(() => {
        getProducts().then(res=> setProducts(res))
    }, []);

    return (
        <div>
            {
                products.map(product=><Product key={product.id} item={product}/> )
            }
        </div>
    );
};

export default Products;

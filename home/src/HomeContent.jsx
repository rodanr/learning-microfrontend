import React from "react";

import {getProducts, getProductById} from "./products";

export default function HomeContent() {
    const [products, setProducts] = React.useState([]);

    React.useEffect(async () => {
            const products = await getProducts()
            setProducts(products);
        }
        , []);

    return <div className="my-10 grid grid-cols-4 gap-5 ">
        {
            products.map((product) => (
                <div key={product.id}>
                    <img src={product.image} alt={product.name}/>
                </div>
            ))
        }
    </div>
}
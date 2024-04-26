import React from "react";

import {getProducts, getProductById, currency} from "./products";

export default function HomeContent() {
    const [products, setProducts] = React.useState([]);

    React.useEffect(async () => {
            const products = await getProducts()
            setProducts(products);
        }
        , []);

    return <div className="grid grid-cols-4 gap-5 ">
        {
            products.map((product) => (
                <div key={product.id}>
                    <img src={product.image} alt={product.name}/>
                    <div className="flex">
                        <div className="flex-grow font-bold">
                            <a>{product.name}</a>
                        </div>
                        <div className="flex-end">
                            {currency.format(product.price)}
                        </div>
                    </div>
                    <div className="text-sm mt-4">
                        {product.description}
                    </div>
                </div>
            ))
        }
    </div>
}
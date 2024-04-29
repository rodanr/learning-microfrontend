import React from "react";

import {getProductById, currency} from "home/products";

export default function PDPContent() {
    const id = 1;

    const [product, setProduct] = React.useState(null);

    React.useEffect(async () => {
        if (!id) {
            setProduct(null);
            return;
        }

        const product = await getProductById(id);
        setProduct(product);
    }, [id]);

    if (!product) return null;

    return (
        <div className="grid grid-cols-2 gap-5">
            <div>
                <img src={product.image} alt={product.name}/>
            </div>
        </div>
    )
}
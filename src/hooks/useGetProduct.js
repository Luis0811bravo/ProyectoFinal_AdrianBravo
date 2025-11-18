import { useState, useEffect } from 'react';
import local_products from '../data/products.json';

export function useGetProduct(productId) {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (productId == null) return;

        const getProductById = () => {
            const found = local_products.find((p) => p.id === Number(productId));
            return new Promise((resolve) => {
                setTimeout(() => resolve(found || null), 500);
            });
        };

        setLoading(true);
        getProductById()
            .then((response) => setProduct(response))
            .finally(() => setLoading(false));
    }, [productId]);

    return { product, loading };
}
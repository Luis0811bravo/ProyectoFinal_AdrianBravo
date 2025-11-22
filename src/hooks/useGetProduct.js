import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../services/firebase';

export function useGetProduct(productId) {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (productId == null) return;

        const getProductById = async () => {
            try {
                const productRef = doc(db, 'products', productId);
                const productSnap = await getDoc(productRef);
                
                if (productSnap.exists()) {
                    return {
                        id: productSnap.id,
                        ...productSnap.data()
                    };
                } else {
                    console.log('No se encontró el producto');
                    return null;
                }
            } catch (error) {
                console.error('Error al obtener el producto:', error);
                return null;
            }
        };

        setLoading(true);
        getProductById()
            .then((response) => setProduct(response))
            .finally(() => setLoading(false));
    }, [productId]);

    return { product, loading };
}
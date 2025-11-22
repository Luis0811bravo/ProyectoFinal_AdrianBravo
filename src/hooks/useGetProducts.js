import {useState, useEffect} from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../services/firebase';

export function useGetProducts(categoryId) {
    const [productsFilteredByCategory, setProductsFilteredByCategory] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        const prodCollection = categoryId 
        ? query(collection(db, 'products'), where('categoriaId', '==', Number(categoryId)))
        : collection(db, 'products');

        getDocs(prodCollection)
        .then((res) => {
            let products = res.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));

            setProductsFilteredByCategory(products);
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }, [categoryId]);

    return { productsFilteredByCategory, loading };
}
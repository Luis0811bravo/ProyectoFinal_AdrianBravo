import {useState, useEffect} from 'react';
import local_categories from '../data/categories.json';

export function useGetCategories() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getCategories = () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(local_categories);
                }, 1000);
            });
        }

        getCategories()
            .then((response) => setCategories(response))
            .finally(() => setLoading(false));
    }, []);

    return { categories, loading };
}
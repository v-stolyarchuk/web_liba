import { useState } from 'react';
import './ProductsPage.scss';
import { ProductsList } from '../../components/ProductsList';
import { ProductsFilter } from '../../components/ProductsFilter';
import products from '../../data/products.json';

export const ProductsPage = () => {
    const [filteredProducts, setFilteredProducts] = useState(products);

    const handleFilterChange = (filters) => {
        let filtered = [...products];

        if (filters.category !== 'all') {
            filtered = filtered.filter(product => {
                const productCategory = product.category.toLowerCase();
                const filterCategory = filters.category.toLowerCase();
                return productCategory === filterCategory || 
                       (filterCategory === 'electronics' && productCategory === 'електроніка') ||
                       (filterCategory === 'home' && productCategory === 'для дому') ||
                       (filterCategory === 'office' && productCategory === 'офіс') ||
                       (filterCategory === 'lifestyle' && productCategory === 'стиль життя');
            });
        }

        if (filters.minPrice) {
            filtered = filtered.filter(product => product.price >= Number(filters.minPrice));
        }

        if (filters.maxPrice) {
            filtered = filtered.filter(product => product.price <= Number(filters.maxPrice));
        }

        if (filters.brand !== 'all') {
            filtered = filtered.filter(product => product.brand === filters.brand);
        }

        if (filters.inStock) {
            filtered = filtered.filter(product => product.stock > 0);
        }

        if (filters.isNew) {
            filtered = filtered.filter(product => product.isNew);
        }

        if (filters.isPopular) {
            filtered = filtered.filter(product => product.isPopular);
        }

        if (filters.isFeatured) {
            filtered = filtered.filter(product => product.isFeatured);
        }

        setFilteredProducts(filtered);
    };

    return (
        <div className="products-page">
            <h1>Products Page</h1>
            <ProductsFilter onFilterChange={handleFilterChange} />
            <ProductsList products={filteredProducts}/>
        </div>
    );
};
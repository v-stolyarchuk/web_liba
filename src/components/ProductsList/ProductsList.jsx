import { useState } from 'react';
import './ProductsList.scss';
import { ProductItem } from '../ProductItem/ProductItem';
import { ProductModal } from '../ProductModal/ProductModal';

export const ProductsList = ({ products }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleImageClick = (product) => {
        setSelectedProduct(product);
    };

    const handleCloseModal = () => {
        setSelectedProduct(null);
    };

    return (
        <section className="products-list">
            <div className="products-grid">
                {products.map(product => (
                    <ProductItem
                        key={product.id}
                        product={product}
                        onImageClick={handleImageClick}
                    />
                ))}
            </div>
            {selectedProduct && (
                <ProductModal
                    product={selectedProduct}
                    onClose={handleCloseModal}
                />
            )}
        </section>
    );
};
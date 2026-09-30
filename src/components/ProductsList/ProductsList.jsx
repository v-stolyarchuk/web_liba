import './ProductsList.scss';
import { ProductItem } from '../ProductItem/ProductItem';

export const ProductsList = ({ products }) => {
    return (
        <section className="products-list">
            <div className="products-grid">
                {products.map(product => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
};
import { useState } from 'react';
import './ProductItem.scss';

export const ProductItem = ({ product }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleSpecifications = () => {
        setIsExpanded(!isExpanded);
    };

    const renderSpecifications = (specifications) => {
        if (!specifications) return null;

        return (
            <table className="specifications-table">
                <tbody>
                    {Object.entries(specifications).map(([key, value]) => (
                        <tr key={key}>
                            <th className="spec-key">{key}</th>
                            <td className="spec-value">
                                {Array.isArray(value) ? value.join(', ') : String(value)}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    };

    return (
        <div className="product-card">
            <div className="product-image">
                <img
                    src={`images/products/${product.sku}/${product.images[0]}`}
                    alt={product.name}
                />
            </div>
            <div className="product-info">
                <h3 className="product-name">
                    {product.name}
                </h3>
                <p className="product-price">
                    {product.oldPrice ? (
                        <>
                            <span className="price-current">{product.price} ₴</span>
                            <span className="price-old">{product.oldPrice} ₴</span>
                        </>
                    ) : (
                        <span className="price-current">{product.price} ₴</span>
                    )}
                </p>
                <button
                    className="show-more-button"
                    onClick={toggleSpecifications}
                >
                    {isExpanded ? 'Show Less' : 'Show More'}
                </button>
                {isExpanded && product.specifications && (
                    <div className="specifications-container">
                        {renderSpecifications(product.specifications)}
                    </div>
                )}
                <a href={`/product/${product.slug}`} className="product-button">
                    View Details
                </a>
            </div>
        </div>
    );
};
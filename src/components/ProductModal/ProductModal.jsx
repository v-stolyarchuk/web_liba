import SliderImport from 'react-slick';
const Slider = SliderImport.default ?? SliderImport;
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ProductModal.scss';

export const ProductModal = ({ product, onClose }) => {
    if (!product) return null;

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        adaptiveHeight: true
    };

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const images = product.images.map(img => `images/products/${product.sku}/${img}`);

    return (
        <div className="product-modal" onClick={handleBackdropClick}>
            <div className="product-modal__content">
                <button className="product-modal__close" onClick={onClose}>
                    ×
                </button>
                <div className="product-modal__slider">
                    <Slider {...settings}>
                        {images.map((image, index) => (
                            <div key={index} className="product-modal__slide">
                                <img
                                    src={image}
                                    alt={`${product.name} - Image ${index + 1}`}
                                    className="product-modal__image"
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="product-modal__info">
                    <h2 className="product-modal__title">{product.name}</h2>
                    <p className="product-modal__price">
                        {product.oldPrice ? (
                            <>
                                <span className="price-current">{product.price} ₴</span>
                                <span className="price-old">{product.oldPrice} ₴</span>
                            </>
                        ) : (
                            <span className="price-current">{product.price} ₴</span>
                        )}
                    </p>
                    <p className="product-modal__description">{product.description}</p>
                </div>
            </div>
        </div>
    );
};
import { useState } from 'react';
import './ProductsFilter.scss';

export const ProductsFilter = ({ onFilterChange }) => {
    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: '',
        maxPrice: '',
        brand: 'all',
        inStock: false,
        isNew: false,
        isPopular: false,
        isFeatured: false
    });

    const categories = [
        { value: 'all', label: 'Всі категорії' },
        { value: 'electronics', label: 'Електроніка' },
        { value: 'home', label: 'Для дому' },
        { value: 'office', label: 'Офіс' },
        { value: 'lifestyle', label: 'Стиль життя' },
        { value: 'Електроніка', label: 'Електроніка' }
    ];
    const brands = [
        { value: 'all', label: 'Всі бренди' },
        { value: 'Z2', label: 'Z2' },
        { value: 'SoundGo', label: 'SoundGo' },
        { value: 'Luma', label: 'Luma' },
        { value: 'SmartLight', label: 'SmartLight' },
        { value: 'PowerX', label: 'PowerX' },
        { value: 'HomeSmart', label: 'HomeSmart' },
        { value: 'WorkPro', label: 'WorkPro' },
        { value: 'ThermoLife', label: 'ThermoLife' },
        { value: 'HomeBox', label: 'HomeBox' }
    ];

    const handleFilterChange = (filterName, value) => {
        const newFilters = { ...filters, [filterName]: value };
        setFilters(newFilters);
        if (onFilterChange) {
            onFilterChange(newFilters);
        }
    };

    const handleCheckboxChange = (filterName) => {
        const newFilters = { ...filters, [filterName]: !filters[filterName] };
        setFilters(newFilters);
        if (onFilterChange) {
            onFilterChange(newFilters);
        }
    };

    const resetFilters = () => {
        const resetFilters = {
            category: 'all',
            minPrice: '',
            maxPrice: '',
            brand: 'all',
            inStock: false,
            isNew: false,
            isPopular: false,
            isFeatured: false
        };
        setFilters(resetFilters);
        if (onFilterChange) {
            onFilterChange(resetFilters);
        }
    };

    return (
        <div className="products-filter">
            <h2 className="filter-title">Фільтри</h2>

            <div className="filter-content">
                <div className="filter-section">
                    <h3 className="filter-section-title">Категорія</h3>
                    <select
                        className="filter-select"
                        value={filters.category}
                        onChange={(e) => handleFilterChange('category', e.target.value)}
                    >
                        {categories.map(category => (
                            <option key={category.value} value={category.value}>
                                {category.label}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="filter-section">
                    <h3 className="filter-section-title">Ціна</h3>
                    <div className="price-range">
                        <input
                            type="number"
                            className="filter-input"
                            placeholder="Від"
                            value={filters.minPrice}
                            onChange={(e) => handleFilterChange('minPrice', e.target.value)}
                        />
                        <span className="price-separator">-</span>
                        <input
                            type="number"
                            className="filter-input"
                            placeholder="До"
                            value={filters.maxPrice}
                            onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
                        />
                    </div>
                </div>

                <div className="filter-section">
                    <h3 className="filter-section-title">Бренд</h3>
                    <select
                        className="filter-select"
                        value={filters.brand}
                        onChange={(e) => handleFilterChange('brand', e.target.value)}
                    >
                        {brands.map(brand => (
                            <option key={brand.value} value={brand.value}>
                                {brand.label}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="filter-section">
                    <h3 className="filter-section-title">Статус</h3>
                    <div className="checkbox-group">
                        <label className="checkbox-label">
                            <input
                                type="checkbox"
                                checked={filters.inStock}
                                onChange={() => handleCheckboxChange('inStock')}
                            />
                            <span>В наявності</span>
                        </label>
                        <label className="checkbox-label">
                            <input
                                type="checkbox"
                                checked={filters.isNew}
                                onChange={() => handleCheckboxChange('isNew')}
                            />
                            <span>Новинки</span>
                        </label>
                        <label className="checkbox-label">
                            <input
                                type="checkbox"
                                checked={filters.isPopular}
                                onChange={() => handleCheckboxChange('isPopular')}
                            />
                            <span>Популярні</span>
                        </label>
                        <label className="checkbox-label">
                            <input
                                type="checkbox"
                                checked={filters.isFeatured}
                                onChange={() => handleCheckboxChange('isFeatured')}
                            />
                            <span>Рекомендовані</span>
                        </label>
                    </div>
                </div>
            </div>

            <button className="reset-button" onClick={resetFilters}>
                Скинути фільтри
            </button>
        </div>
    );
};
// ProductCardSkeleton.jsx
import './ProductCardSkeleton.css';

export default function ProductCardSkeleton() {
  return (
    <div className="product-card skeleton">
      {/* Скелетон за изображението */}
      <div className="skeleton-image phone-image"></div>
      
      <div className="product-info">
        {/* Скелетон за заглавието */}
        <div className="skeleton-title"></div>
        
        {/* Скелетон за цената */}
        <div className="price-container skeleton">
          <div className="skeleton-icon"></div>
          <div className="skeleton-price"></div>
        </div>
        
        {/* Скелетон за спецификациите */}
        <div className="specs">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="spec-item skeleton">
              <div className="skeleton-icon"></div>
              <div className="skeleton-text"></div>
            </div>
          ))}
        </div>
        
        {/* Скелетон за бутона */}
        <div className="skeleton-button"></div>
      </div>
    </div>
  );
}
import React from 'react';
import './ProductCard.css'; // 필요한 경우 CSS 파일 import

const ProductCard = ({name, category, price, image}) => {
  return (
    <div className="productcard">
      <img src={image} />
      <p>{name}</p>
      <p>{category}</p>
      <p>{price}원</p>
    </div>
  );
}

export default ProductCard;

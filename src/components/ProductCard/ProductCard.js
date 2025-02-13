import React from 'react';
import './ProductCard.css'; // 필요한 경우 CSS 파일 import

const ProductCard = ({name, category, price, image, customClass}) => {
  return (
    <div className={`productcard ${customClass}`}>
      <img src={image} />
      <p className='pname'>{name}</p>
      <p className='pcategory'>{category}</p>
      <p className='pprice'>{price}원</p>
    </div>
  );
}

export default ProductCard;

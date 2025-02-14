import React from 'react';
import './AdiColor.css'; // 필요한 경우 CSS 파일 import

const AdiColor = ({name, sub, buy, image, customClass}) => {
  return (
    <div className={`adicolored ${customClass}`}>
      <img src={image} />
      <p className='aname'>{name}</p>
      <p className='asub'>{sub}</p>
      <p className='abuy'>{buy}</p>
    </div>
  );
}

export default AdiColor;

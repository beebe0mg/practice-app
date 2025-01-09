import React from 'react';
import './BorderBottom.css';  // 필요한 경우 CSS 파일 import

// 컴포넌트 정의: 함수형 컴포넌트
function BorderBottom() {
  return (
    <div className="borderbottom">
        <div className="scrollborderbottom_white"></div>
        <div className="scrollborderbottom_black"></div>
    </div>
  );
}

// 컴포넌트를 export
export default BorderBottom;

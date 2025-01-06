import React from 'react';
import './MainImage.css';  // 필요한 경우 CSS 파일 import

// 컴포넌트 정의: 함수형 컴포넌트
function MainImage() {
  return (
    <div className="mainimage">
      <img src="/image/mainpagecenter.png" alt="Main" className="mainpagecenter" />
      <div className="sorting">
        <p className="blue">BLUE</p>
        <p className="blueex">스트릿 전세계 패션 스타일 정말 좋고 멋지고 대박이다.</p>
        <div className="buybutton">
          <button className="buybuttonex">구매하기</button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

// 컴포넌트를 export
export default MainImage;

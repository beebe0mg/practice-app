import React from "react";
import NavBar from "./components/NavBar/NavBar";
import ProductCard from "./components/ProductCard/ProductCard";
import AdiColor from "./components/AdiColor/AdiColor";
import "./App.css";

const products = [
  {name: "Samos Shoes", category: "Shoes", price: 99000, image: "/image/samosshoes.png"},
  {name: "R71", category: "Shoes", price: 107000, image: "/image/r72shoes.png"},
  {name: "STADT", category: "Shoes", price: 10000, image: "/image/stadtshoes.png"},
  {name: "Samoa Shoes", category: "Shoes", price: 104000, image: "/image/samoashoes.png"},
  {name: "Samos Shoes", category: "Shoes", price: 99000, image: "/image/samosshoes.png"},
  {name: "R71", category: "Shoes", price: 107000, image: "/image/r72shoes.png"},
  {name: "STADT", category: "Shoes", price: 10000, image: "/image/stadtshoes.png"}
]

const adicolors = [
  {name: "SAMBA, SPEZIAL & GAZELLE", sub: "하나의 슈퍼스타", buy: "지금 구매하기", image: "/image/adicolor1.png"},
  {name: "SAMBA, SPEZIAL & GAZELLE", sub: "슈퍼그립에서 슈퍼스타로의 진화", buy: "지금 구매하기", image: "/image/adicolor2.png"},
  {name: "SAMBA, SPEZIAL & GAZELLE", sub: "아이다스 오리지널스 슈퍼스타의 첫 출발은 초기 모델", buy: "지금 구매하기", image: "/image/adicolor3.png"},
  {name: "SAMBA, SPEZIAL & GAZELLE", sub: "하나의 슈퍼스타", buy: "지금 구매하기", image: "/image/adicolor1.png"},
  {name: "SAMBA, SPEZIAL & GAZELLE", sub: "슈퍼그립에서 슈퍼스타로의 진화", buy: "지금 구매하기", image: "/image/adicolor2.png"},
  {name: "SAMBA, SPEZIAL & GAZELLE", sub: "아이다스 오리지널스 슈퍼스타의 첫 출발은 초기 모델", buy: "지금 구매하기", image: "/image/adicolor3.png"},
]

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="Bigborderbottom"></div>
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
      <div className="borderbottom">
        <div className="scrollborderbottom_white"></div>
        <div className="scrollborderbottom_black"></div>
      </div>
      <div className="trenddiv">
        <p className="trend">TREND</p>
        <div className="product-list">
          {products.map((product, index) => {
            return (
              <ProductCard
                key={index}
                name={product.name}
                category={product.category}
                price={product.price}
                image={product.image}
                customClass={`product-${index}`}
              />
            );
          })}
        </div>
      </div>
      <div className="adicolordiv">
        <p className="adicolor">ADICOLOR</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 58 58" fill="none" className="rightarrow">
  <path d="M19.5025 27.6878L39.7046 8.43901C40.0417 8.11767 40.4895 7.93841 40.9552 7.93841C41.4209 7.93841 41.8688 8.11767 42.2059 8.43901L42.2276 8.46076C42.3916 8.61654 42.5222 8.80405 42.6114 9.01188C42.7006 9.21971 42.7466 9.44352 42.7466 9.6697C42.7466 9.89587 42.7006 10.1197 42.6114 10.3275C42.5222 10.5353 42.3916 10.7229 42.2276 10.8786L23.2036 29.0036L42.2276 47.1214C42.3916 47.2772 42.5222 47.4647 42.6114 47.6725C42.7006 47.8803 42.7466 48.1041 42.7466 48.3303C42.7466 48.5565 42.7006 48.7803 42.6114 48.9881C42.5222 49.196 42.3916 49.3835 42.2276 49.5393L42.2059 49.561C41.8688 49.8823 41.4209 50.0616 40.9552 50.0616C40.4895 50.0616 40.0417 49.8823 39.7046 49.561L19.5025 30.3123C19.3248 30.143 19.1834 29.9394 19.0867 29.7138C18.9901 29.4883 18.9402 29.2454 18.9402 29C18.9402 28.7546 18.9901 28.5118 19.0867 28.2862C19.1834 28.0606 19.3248 27.857 19.5025 27.6878Z" fill="#E0E0E0"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 58 58" fill="none" className="leftarrow">
  <path d="M38.4975 27.6878L18.2954 8.43901C17.9583 8.11767 17.5105 7.93841 17.0448 7.93841C16.5791 7.93841 16.1312 8.11767 15.7941 8.43901L15.7724 8.46076C15.6084 8.61654 15.4778 8.80405 15.3886 9.01188C15.2994 9.21971 15.2534 9.44352 15.2534 9.6697C15.2534 9.89587 15.2994 10.1197 15.3886 10.3275C15.4778 10.5353 15.6084 10.7229 15.7724 10.8786L34.7964 29.0036L15.7724 47.1214C15.6084 47.2772 15.4778 47.4647 15.3886 47.6725C15.2994 47.8803 15.2534 48.1041 15.2534 48.3303C15.2534 48.5565 15.2994 48.7803 15.3886 48.9881C15.4778 49.196 15.6084 49.3835 15.7724 49.5393L15.7941 49.561C16.1312 49.8823 16.5791 50.0616 17.0448 50.0616C17.5105 50.0616 17.9583 49.8823 18.2954 49.561L38.4975 30.3123C38.6752 30.143 38.8166 29.9394 38.9133 29.7138C39.0099 29.4883 39.0598 29.2454 39.0598 29C39.0598 28.7546 39.0099 28.5118 38.9133 28.2862C38.8166 28.0606 38.6752 27.857 38.4975 27.6878Z" fill="#E0E0E0"/>
</svg>
        <div className="adicolor-list">
          {adicolors.map((adicolor, index) => {
            return (
              <AdiColor
                key={index}
                name={adicolor.name}
                sub={adicolor.sub}
                buy={adicolor.buy}
                image={adicolor.image}
                customClass={`adicolor-${index}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

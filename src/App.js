import React from "react";
import NavBar from "./components/NavBar/NavBar";
import ProductCard from "./components/ProductCard/ProductCard";
import "./App.css";

const products = [
  {name: "Samos Shoes", category: "Shoes", price: 99000, image: "/image/samosshoes.png"},
  {name: "R71", category: "Shoes", price: 107000, image: "/image/r72shoes.png"},
  {name: "STADT", category: "Shoes", price: 10000, image: "/image/stadtshoes.png"},
  {name: "Samoa Shoes", category: "Shoes", price: 104000, image: "/image/samoashoes.png"},
  {name: "Samos Shoes", category: "Shoes", price: 99000, image: "/image/samosshoes.png"},
  {name: "R71", category: "Shoes", price: 107000, image: "/image/r72shoes.png"}
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
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

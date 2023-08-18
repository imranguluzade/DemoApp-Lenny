import React from "react";
import Header from "../Header";
import Footer from "src/components/Footer";
import Button from "../Button";
import ArcticleCard from "../ArcticleCard";
import PopularProdCart from "../PopularProdCart";
import FeaturedCategCard from "../FeaturedCategCard";
import HeroImage from "src/assets/image4.png";
import CardsArrow from "src/assets/Frame 46.png";
import CardsWay from "src/assets/Frame 48.png";
import advertProduct from "src/assets/iPad Air 2020.png";
import { Carousel } from "antd";
const Home = () => {
  return (
    <>
      <Header />
      <div className="home-page-container">
        <div className="carousel">
          <Carousel className="container" autoplay>
            <div className="carousel-page-container">
              <div className="background-image-container">
                <div className="helper-left"></div>
                <div
                  className="hero-image"
                  style={{
                    backgroundImage: `url(${HeroImage})`,
                  }}
                >
                  <img className="hero-cards-arrow" src={CardsArrow} />
                  <img className="hero-cards-way" src={CardsWay} />
                  <PopularProdCart />
                </div>
              </div>
              <div className="hero-content">
                <div className="left-hero-container">
                  <h1>Upgrade Your Wardrobe With Our Collection</h1>
                  <p>
                    Eget neque aenean viverra aliquam tortor diam nunc. Dis
                    pellentesque lectus quis velit fusce aenean nunc dui
                    consectetur. Eu lorem est ullamcorper nisl amet non mollis.
                  </p>
                  <div className="hero-buttons">
                    <Button text="Buy Now" variant="fill" />
                    <Button text="View Detail" variant="outline" />
                  </div>
                </div>
                <div className="right-hero-container"></div>
              </div>
            </div>
            <div className="carousel-page"></div>
          </Carousel>
        </div>
        <div className="featured-category container">
          <div className="category-cards-heading">
            <h2>Featured Category</h2>
            <Button text="View Detail" variant="outline" size="sm" />
          </div>
          <div className="categories-cards">
            <FeaturedCategCard />
            <FeaturedCategCard />
            <FeaturedCategCard />
            <FeaturedCategCard />
            <FeaturedCategCard />
            <FeaturedCategCard />
            <FeaturedCategCard />
            <FeaturedCategCard />
            <FeaturedCategCard />
            <FeaturedCategCard />
          </div>
        </div>
        <div className="pop-products container">
          <h2 className="pop-products-heading">Popular Product on Lenny</h2>
          <p className="pop-products-paragraph">
            Lorem ipsum dolor sit amet consectetur. Integer cursus cursus in
          </p>

          <div className="pop-products-cards">
            <PopularProdCart className="pop-card" />
            <PopularProdCart className="pop-card" />
            <PopularProdCart className="pop-card" />
            <PopularProdCart className="pop-card" />
            <PopularProdCart className="pop-card" />
            <PopularProdCart className="pop-card" />
            <PopularProdCart className="pop-card" />
            <PopularProdCart className="pop-card" />
          </div>
          <div className="load-more-product">
            <Button text="Load More" variant="outline" />
          </div>
        </div>
        <div className="advertising-product container">
          <img src={advertProduct} />
          <div className="adverting-product-rigth-container">
            <h2 className="product-name">Ipad Air Gen 5</h2>
            <p className="product-info">
              Lorem ipsum dolor sit amet consectetur. Integer cursus cursus in
              sapien quam risus sed diam.
            </p>
            <div className="button-box">
              <Button text="Buy $900" variant="fill" />
              <Button text="View Detail" variant="outline" />
            </div>
          </div>
        </div>
        <div className="lennys-article container">
          <div className="article-heading">
            <h2>Lenny’s Article</h2>
            <Button text="View Detail" variant="outline" size="sm" />
          </div>
          <div className="article-cards-container">
            <ArcticleCard />
            <ArcticleCard />
            <ArcticleCard />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
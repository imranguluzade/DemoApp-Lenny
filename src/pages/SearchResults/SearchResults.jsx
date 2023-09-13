import React, { useState, useEffect, useContext } from "react";
import { Pagination as AntPagination } from "antd";
import "src/components/Pagination/Pagination.scss";
import "src/pages/SearchResults/SearchResults.scss";
import ProductCart from "src/components/Cart/ProductCart";
import { Breadcrumb } from "antd";
import { SelectFilter } from "src/components/Cascader/SelectFilter";
import axios from "axios";
import { useParams } from "react-router-dom";
import { modalContext } from "src/context/ModalProvider";

const SearchResults = () => {
  const { filteredItems, handleUrl } = useContext(modalContext);
  const catID = useParams().id;
  const [isFavorite, setIsFavorite] = useState(false);
  const [products, setProducts] = useState([]);
  const [data, setData] = useState([]);
  const [current, setCurrent] = useState(1);
  console.log(filteredItems);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // const categories = useFetch(
  //   `${
  //     import.meta.env.VITE_APP_STRAPI_BASE_URL
  //   }/api/products?pagination[page]=${current}&pagination[pageSize]=9&populate=*&[filters][categories][id][$eq]=${catID}`
  // );

  useEffect(() => {
    const getProducts = async () => {
      try {
        if (catID) {
          const { data } = await axios.get(
            `${
              import.meta.env.VITE_APP_STRAPI_BASE_URL
            }/api/products?pagination[page]=${current}&pagination[pageSize]=9&populate=*&[filters][categories][id][$eq]=${catID}`
          );
          setProducts(data.data);
          setData(data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    if (catID) {
      getProducts();
      scrollToTop();
    }
  }, [current, catID]);

  const onChange = (page) => {
    setCurrent(page);
  };

  const toggleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    !isFavorite ? setIsFavorite(true) : setIsFavorite(false);
  };
  return (
    <div className="pop-products">
      <div className="bread-crumb container">
        <Breadcrumb
          separator=">"
          items={[
            {
              title: "Home",
              href: "/",
            },
            {
              title: "Search-Results",
            },
          ]}
        />
      </div>
      {/* <div className="product-info container">
        <div>
          <p>Showing products for {}</p>
        </div>
      </div> */}
      <div className="filter-and-products">
        <div className="filter-option">
          <h6 className="filter-heading">Filter Option</h6>
          <div className="filter-category">
            <SelectFilter />
          </div>
        </div>
        <div className="products-cards">
          {catID &&
            filteredItems.length === 0 &&
            products.map((product) => (
              <ProductCart
                product={product}
                isFavorite={isFavorite}
                toggleClick={toggleClick}
                key={product.id}
              />
            ))}
          {!catID &&
            filteredItems.length > 0 &&
            filteredItems.map((product) => (
              <ProductCart
                product={product}
                isFavorite={isFavorite}
                toggleClick={toggleClick}
                key={product.id}
              />
            ))}
        </div>
      </div>
      <div className="pagination">
        <AntPagination
          current={current}
          onChange={onChange}
          total={data?.meta?.pagination?.total}
        />
      </div>
    </div>
  );
};

export default SearchResults;

import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import cardcover9 from "../design/cardcover9.jpg";
import cardcover8 from "../design/cardcover8.jpg";
import cardcover7 from "../design/cardcover7.jpg";
import cardcover6 from "../design/cardcover6.jpg";
import cardcover5 from "../design/cardcover5.jpg";
import productcover13 from "../design/productcover13.png";
import productcover12 from "../design/productcover12.png";
import productcover11 from "../design/productcover11.png";
import productcover10 from "../design/productcover10.png";
import productcover9 from "../design/productcover9.png";
import productcover8 from "../design/productcover8.png";
import productcover7 from "../design/productcover7.png";
import productcover6 from "../design/productcover6.png";
import productcover5 from "../design/productcover5.png";
import productcover4 from "../design/productcover4.png";
import productcover3 from "../design/productcover3.png";
import productcover2 from "../design/productcover2.png";
import productcover1 from "../design/productcover1.png";
import productcover0 from "../design/productcover0.png";
import productcover from "../design/productcover.png";
import FilterBar from '../layout/FilterBar';
import Pagination from '../layout/Pagination';
import Clients from '../layout/Clients';
import { useSelector, useDispatch } from 'react-redux';
import { getCategoryPath } from '../utils/categoryHelpers';
import { fetchProducts } from '../actions/productActions';

const localCategoryImages = [cardcover5, cardcover6, cardcover7, cardcover8, cardcover9];

const localProductImages = [
  productcover, productcover0, productcover1, productcover2,
  productcover3, productcover4, productcover5, productcover6,
  productcover7, productcover8, productcover9, productcover10,
  productcover11, productcover12, productcover13
];

const PRODUCTS_PER_PAGE = 24;

function ShopPage() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  
  const [sort, setSort] = useState("");
  const [filterText, setFilterText] = useState("");

  const { gender, categoryName, categoryId } = useParams();
  const categories = useSelector((state) => state.product.categories) || [];
  const productList = useSelector((state) => state.product.productList) || [];
  const total = useSelector((state) => state.product.total);
  const fetchState = useSelector((state) => state.product.fetchState);

  const top5Categories = [...categories]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  const getSortedProducts = (products, sortValue) => {
    if (!sortValue) return products;
    const sorted = [...products];
    switch (sortValue) {
      case "price:asc":
        return sorted.sort((a, b) => a.price - b.price);
      case "price:desc":
        return sorted.sort((a, b) => b.price - a.price);
      case "rating:asc":
        return sorted.sort((a, b) => a.rating - b.rating);
      case "rating:desc":
        return sorted.sort((a, b) => b.rating - a.rating);
      default:
        return sorted;
    }
  };

  const sortedProducts = getSortedProducts(productList, sort);
  const productsPerPage = 12;
  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const totalPages = Math.ceil(total / PRODUCTS_PER_PAGE);

  const buildAndFetch = (page, currentFilterText, currentCategoryId) => {
    const offset = (page - 1) * PRODUCTS_PER_PAGE;
    const params = { limit: PRODUCTS_PER_PAGE };
    if (offset > 0) params.offset = offset;
    if (currentCategoryId) params.category = currentCategoryId;
    if (currentFilterText) params.filter = currentFilterText;
    dispatch(fetchProducts(params));
  }

  useEffect(() => {
    setCurrentPage(1);
    buildAndFetch(1, filterText, categoryId);
  }, [categoryId]);

  const handleFilter = () => {
    setCurrentPage(1);
    buildAndFetch(1, filterText, categoryId);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    buildAndFetch(page, filterText, categoryId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  const handleSortChange = (newSort) => {
    setSortBy(newSort);
    setCurrentPage(1);
  };

  const getProductPath = (product, gender, categoryName, categoryId) => {
    const slug = product.name.toLowerCase()
      .replace(/ş/g, "s").replace(/ı/g, "i").replace(/ğ/g, "g")
      .replace(/ü/g, "u").replace(/ö/g, "o").replace(/ç/g, "c")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
    const genderSlug = gender || "genel";
    const catName = categoryName || "kategori";
    const catId = categoryId || "0";
    return `/shop/${genderSlug}/${catName}/${catId}/${slug}/${product.id}`;
  }

  const renderStars = (rating) => {
    const full = Math.floor(rating);
    const empty = 5 - full;
    return (
      <span className='text-[#F3CD03] text-[14px]'>
        {"★".repeat(full)}{"☆".repeat(empty)}
      </span>
    )
  };

  console.log("fetchState:", fetchState);
  console.log("productList:", productList);

  console.log("sort:", sort, "sortedProducts count:", sortedProducts.length, "first price:", sortedProducts[0]?.price);

  return (
    <main>
      <section>
        <div class='flex flex-col w-[400px] h-[154px] py-[24px] bg-[#FAFAFA] gap-[30px] justify-center
                [@media(min-width:1024px)]:flex [@media(min-width:1024px)]:flex-row [@media(min-width:1024px)]:w-[1024px]
                [@media(min-width:1024px)]:h-[92px] [@media(min-width:1024px)]:gap-[30%]
                [@media(min-width:1024px)]:items-center'>
          <div class='flex w-[400px] h-[80px] py-[24px] justify-center'>
            <h3 class='w-[63px] h-[32px] font-[700] text-[24px] text-[#252B42] leading-[32px] 
                        tracking-[0.2px] text-center'>
              Shop
            </h3>
          </div>
          <div class='flex flex-row w-[400px] h-[44px] gap-[5px] justify-center'>
            <div class='flex flex-row w-[117px] h-[44px] py-[10px] gap-[15px]'>
              <Link to='/' class='w-[42px] h-[24px] font-[700] text-[14px] leading-[24px] tracking-[0.2px]'>
                Home
              </Link>
              <span className='text-[#BDBDBD]'>{'>'}</span>
              <span className='font-[700] text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]'>Shop</span>
              {categoryName && (
                <>
                  <span className='text-[#BDBDBD]'>{'>'}</span>
                  <span className='font-[700] text-[14px] leading-[24px] tracking-[0.2px] text-[#737373] capitalize'>
                    {categoryName}
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
      <section class='w-[400px] bg-[#FAFAFA] [@media(min-width:1024px)]:h-[360px]'>
        <div class='flex flex-col w-[319px] ml-[34px] py-[24px] gap-[18px]'>
          <div class='flex flex-col w-[319px] gap-[15px] [@media(min-width:1024px)]:flex
                    [@media(min-width:1024px)]:flex-row [@media(min-width:1024px)]:w-[960px] 
                    [@media(min-width:1024px)]:justify-center'>
            {top5Categories.map((cat, index) => (
              <Link
                key={cat.id}
                to={getCategoryPath(cat)}
                style={{ backgroundImage: `url(${localCategoryImages[index]})` }}
                className='relative flex flex-col w-[318px] h-[300px] justify-center
                                items-center bg-cover bg-center overflow-hidden'
              >
                <div className="absolute inset-0 bg-black/50"></div>
                <h5 className='relative z-10 w-[120px] h-[24px] mt-[14px] font-[700] text-[16px]
                                leading-[24px] tracking-[0.1px] text-[#FFFFFF] text-center'>
                  {cat.title.toUpperCase()}
                </h5>
                <h6 className='relative z-10 w-[54px] h-[24px] mt-[18px] font-[700] text-[14px]
                                leading-[24px] tracking-[0.2px] text-[#FFFFFF] text-center'>
                  {cat.rating} ★
                </h6>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section>
        <FilterBar
          totalResults={total}
          sort={sort} onSortChange={setSort}
          filterText={filterText}
          onFilterTextChange={setFilterText}
          onFilter={handleFilter}
        />
      </section>
      <section class='w-[400px] mt-[90px] gap-[48px]  
        [@media(min-width:1024px)]:w-[1024px] [@media(min-width:1024px)]:gap-[20px]'>

        {fetchState === "FETCHING" && (
          <div className='flex justify-center items-center w-full py-[60px]'>
            <div className='w-[48px] h-[48px] border-[4px] border-[#23A6F0] border-t-transparent
                        rounded-full animate-spin'>
            </div>
          </div>
        )}

        {fetchState === "FAILED" && (
          <div className='flex justify-center items-center w-full py-[60px]'>
            <p className='text-red-500 font-bold text-[16px]'>
              Failed to load products. Please try again later.
            </p>
          </div>
        )}

        {fetchState === "FETCHED" && (
          <div className='flex flex-col gap-[48px] [@media(min-width:1024px)]:gap-[20px]'>
            <div className='[@media(min-width:1024px)]:flex [@media(min-width:1024px)]:flex-wrap
                        [@media(min-width:1024px)]:gap-[16px] [@media(min-width:1024px)]:justify-center'>
              {sortedProducts.map((product) => (
                <Link
                  key={product.id}
                  to={getProductPath(product, gender, categoryName, categoryId)}
                  className='flex flex-col items-center w-[348px]
        [@media(min-width:1024px)]:w-[238px] mb-[35px]
        cursor-pointer hover:shadow-lg transition-shadow duration-200'
                >
                  <div
                    className='w-[348px] h-[427px] bg-center bg-cover
                    [@media(min-width:1024px)]:w-[238px]'
                    style={{
                      backgroundImage: product.images?.[0]?.url
                        ? `url(${product.images[0].url})`
                        : `url(${localProductImages[product.id % localProductImages.length]})`
                    }}
                  />
                  <div className='flex flex-col items-center w-full mt-[25px] gap-[10px] px-[10px]'>
                    <h5 className='font-bold text-[16px] leading-[24px] tracking-[0.1px]
                    text-[#252B42] text-center'>
                      {product.name}
                    </h5>
                    <p className='text-[14px] leading-[20px] text-[#737373] text-center line-clamp-2'>
                      {product.description}
                    </p>
                    <div className='flex flex-row items-center gap-[5px]'>
                      {renderStars(product.rating)}
                    </div>
                    <div className='flex flex-row items-center gap-[5px]'>
                      <span className='font-[700] text-[16px] leading-[24px] text-[#BDBDBD]'>
                        ${(product.price * 1.2).toFixed(2)}
                      </span>
                      <span className='font-[700] text-[16px] leading-[24px] text-[#23856D]'>
                        ${product.price.toFixed(2)}
                      </span>
                    </div>
                    <div className='flex justify-center gap-[6px]'>
                      <button className='w-[16px] h-[16px] rounded-full bg-[#23A6F0] hover:ring-2 hover:ring-black'></button>
                      <button className='w-[16px] h-[16px] rounded-full bg-[#23856D] hover:ring-2 hover:ring-black'></button>
                      <button className='w-[16px] h-[16px] rounded-full bg-[#E77C40] hover:ring-2 hover:ring-black'></button>
                      <button className='w-[16px] h-[16px] rounded-full bg-[#252B42] hover:ring-2 hover:ring-black'></button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </section>
      <section>
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </section>
      <section class='w-[400px] h-[952px] [@media(min-width:1024px)]:w-[920px] [@media(min-width:1024px)]:h-[120px]'>
        <Clients />
      </section>
    </main>
  )
}

export default ShopPage;
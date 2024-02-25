import { Navbar } from "../components/Navbar";
// import {Helmet} from "react-helmet";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { BsArrowsAngleExpand } from "react-icons/bs";
import { CgArrowsExpandRight } from "react-icons/cg";
import { FaStar } from "react-icons/fa";


import "../../public/assets/css/shop.css";
import "../../public/assets/js/jquery-3.3.1.min.js";
import "../../public/assets/js/bootstrap.min.js";
import { useEffect } from "react";

export const Shop = () => {
    useEffect(() => {
        // Select all elements with the class 'set-bg' and set background image using React state
        const elements = document.querySelectorAll('.set-bg');
        
        elements.forEach(element => {
          const bg = element.getAttribute('data-setbg');
          element.style.backgroundImage = `url(${bg})`;
        });
      }, []); // Empty dependency array ensures this effect runs only once, similar to componentDidMount
    
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <script src="../../public/assets/js/test.js" type="text/javascript" />
                </Helmet>
            </HelmetProvider>

            {/* <Helmet>
                <script src="../../public/assets/js/test.js" type="text/javascript" />
            </Helmet> */}

            <Navbar />
            {/* Breadcrumb Begin */}
            <div className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__links">
                                <a href="./index.html">
                                    <i className="fa fa-home" /> Home
                                </a>
                                <span>Shop</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Breadcrumb End */}
            {/* Shop Section Begin */}
            <div className="container">
                <div className="row">
                    <div className="col-md-11 mx-auto">



                        <section className="shop spad">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-3 col-md-3">
                                        <div className="shop__sidebar">
                                            <div className="sidebar__categories">
                                                <div className="section-title">
                                                    <h4>Categories</h4>
                                                </div>
                                                <div className="categories__accordion">
                                                    <div className="accordion" id="accordionExample">
                                                        <div className="card">
                                                            <div className="card-heading active">
                                                                <a data-bs-toggle="collapse" data-bs-target="#collapseOne">
                                                                    Women
                                                                </a>
                                                            </div>
                                                            <div
                                                                id="collapseOne"
                                                                className="collapse"
                                                                data-parent="#accordionExample"
                                                            >
                                                                <div className="card-body">
                                                                    <ul>
                                                                        <li>
                                                                            <a href="#">Coats</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">Jackets</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">Dresses</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">Shirts</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">T-shirts</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">Jeans</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card">
                                                            <div className="card-heading">
                                                                <a data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                                                                    Men
                                                                </a>
                                                            </div>
                                                            <div
                                                                id="collapseTwo"
                                                                className="collapse"
                                                                data-parent="#accordionExample"
                                                            >
                                                                <div className="card-body">
                                                                    <ul>
                                                                        <li>
                                                                            <a href="#">Coats</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">Jackets</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">Dresses</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">Shirts</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">T-shirts</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">Jeans</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card">
                                                            <div className="card-heading">
                                                                <a data-bs-toggle="collapse" data-bs-target="#collapseThree">
                                                                    Kids
                                                                </a>
                                                            </div>
                                                            <div
                                                                id="collapseThree"
                                                                className="collapse"
                                                                data-parent="#accordionExample"
                                                            >
                                                                <div className="card-body">
                                                                    <ul>
                                                                        <li>
                                                                            <a href="#">Coats</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">Jackets</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">Dresses</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">Shirts</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">T-shirts</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">Jeans</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card">
                                                            <div className="card-heading">
                                                                <a data-bs-toggle="collapse" data-bs-target="#collapseFour">
                                                                    Accessories
                                                                </a>
                                                            </div>
                                                            <div
                                                                id="collapseFour"
                                                                className="collapse"
                                                                data-parent="#accordionExample"
                                                            >
                                                                <div className="card-body">
                                                                    <ul>
                                                                        <li>
                                                                            <a href="#">Coats</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">Jackets</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">Dresses</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">Shirts</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">T-shirts</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">Jeans</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card">
                                                            <div className="card-heading">
                                                                <a data-bs-toggle="collapse" data-bs-target="#collapseFive">
                                                                    Cosmetic
                                                                </a>
                                                            </div>
                                                            <div
                                                                id="collapseFive"
                                                                className="collapse"
                                                                data-parent="#accordionExample"
                                                            >
                                                                <div className="card-body">
                                                                    <ul>
                                                                        <li>
                                                                            <a href="#">Coats</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">Jackets</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">Dresses</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">Shirts</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">T-shirts</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">Jeans</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="sidebar__filter">
                                                <div className="section-title">
                                                    <h4>Shop by price</h4>
                                                </div>
                                                <div className="filter-range-wrap">
                                                    <div
                                                        className="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                                                        data-min={33}
                                                        data-max={99}
                                                    />
                                                    <div className="range-slider">
                                                        <div className="price-input">
                                                            <p>Price:</p>
                                                            <input type="text" id="minamount" />
                                                            <input type="text" id="maxamount" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <a href="#">Filter</a>
                                            </div>
                                            <div className="sidebar__sizes">
                                                <div className="section-title">
                                                    <h4>Shop by size</h4>
                                                </div>
                                                <div className="size__list">
                                                    <label htmlFor="xxs">
                                                        xxs
                                                        <input type="checkbox" id="xxs" />
                                                        <span className="checkmark" />
                                                    </label>
                                                    <label htmlFor="xs">
                                                        xs
                                                        <input type="checkbox" id="xs" />
                                                        <span className="checkmark" />
                                                    </label>
                                                    <label htmlFor="xss">
                                                        xs-s
                                                        <input type="checkbox" id="xss" />
                                                        <span className="checkmark" />
                                                    </label>
                                                    <label htmlFor="s">
                                                        s
                                                        <input type="checkbox" id="s" />
                                                        <span className="checkmark" />
                                                    </label>
                                                    <label htmlFor="m">
                                                        m
                                                        <input type="checkbox" id="m" />
                                                        <span className="checkmark" />
                                                    </label>
                                                    <label htmlFor="ml">
                                                        m-l
                                                        <input type="checkbox" id="ml" />
                                                        <span className="checkmark" />
                                                    </label>
                                                    <label htmlFor="l">
                                                        l
                                                        <input type="checkbox" id="l" />
                                                        <span className="checkmark" />
                                                    </label>
                                                    <label htmlFor="xl">
                                                        xl
                                                        <input type="checkbox" id="xl" />
                                                        <span className="checkmark" />
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="sidebar__color">
                                                <div className="section-title">
                                                    <h4>Shop by colour</h4>
                                                </div>
                                                <div className="size__list color__list">
                                                    <label htmlFor="black">
                                                        Blacks
                                                        <input type="checkbox" id="black" />
                                                        <span className="checkmark" />
                                                    </label>
                                                    <label htmlFor="whites">
                                                        Whites
                                                        <input type="checkbox" id="whites" />
                                                        <span className="checkmark" />
                                                    </label>
                                                    <label htmlFor="reds">
                                                        Reds
                                                        <input type="checkbox" id="reds" />
                                                        <span className="checkmark" />
                                                    </label>
                                                    <label htmlFor="greys">
                                                        Greys
                                                        <input type="checkbox" id="greys" />
                                                        <span className="checkmark" />
                                                    </label>
                                                    <label htmlFor="blues">
                                                        Blues
                                                        <input type="checkbox" id="blues" />
                                                        <span className="checkmark" />
                                                    </label>
                                                    <label htmlFor="beige">
                                                        Beige Tones
                                                        <input type="checkbox" id="beige" />
                                                        <span className="checkmark" />
                                                    </label>
                                                    <label htmlFor="greens">
                                                        Greens
                                                        <input type="checkbox" id="greens" />
                                                        <span className="checkmark" />
                                                    </label>
                                                    <label htmlFor="yellows">
                                                        Yellows
                                                        <input type="checkbox" id="yellows" />
                                                        <span className="checkmark" />
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-9 col-md-9">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-6">
                                                <div className="product__item">
                                                    <div
                                                        className="product__item__pic set-bg"
                                                        data-setbg="../../public/assets/img/shop/shop-1.jpg">
                                                        <div className="label new">New</div>
                                                        <ul className="product__hover">
                                                            <li>
                                                                <a href="../../public/assets/img/shop/shop-1.jpg" className="image-popup"><CgArrowsExpandRight size={23} /></a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><IoMdHeartEmpty size={23} /></a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><IoCartOutline size={25} /></a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="product__item__text">
                                                        <h6>
                                                            <a href="#">Furry hooded parka</a>
                                                        </h6>
                                                        <div className="rating">
                                                            <FaStar />
                                                            <FaStar />
                                                            <FaStar />
                                                            <FaStar />
                                                            <FaStar />
                                                        </div>
                                                        <div className="product__price">$ 59.0</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6">
                                                <div className="product__item">
                                                    <div
                                                        className="product__item__pic set-bg"
                                                        data-setbg="../../public/assets/img/shop/shop-2.jpg"
                                                    >
                                                        <ul className="product__hover">
                                                            <li>
                                                                <a href="../../public/assets/img/shop/shop-2.jpg" className="image-popup">
                                                                <CgArrowsExpandRight size={23} /></a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><IoMdHeartEmpty size={23} /></a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><IoCartOutline size={25} /></a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="product__item__text">
                                                        <h6>
                                                            <a href="#">Flowy striped skirt</a>
                                                        </h6>
                                                        <div className="rating">
                                                            <FaStar />
                                                            <FaStar />
                                                            <FaStar />
                                                            <FaStar />
                                                            <FaStar />
                                                        </div>
                                                        <div className="product__price">$ 49.0</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6">
                                                <div className="product__item">
                                                    <div
                                                        className="product__item__pic set-bg"
                                                        data-setbg="../../public/assets/img/shop/shop-3.jpg"
                                                    >
                                                        <ul className="product__hover">
                                                            <li>
                                                                <a href="../../public/assets/img/shop/shop-3.jpg" className="image-popup">
                                                                <CgArrowsExpandRight size={23} /></a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><IoMdHeartEmpty size={23} /></a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><IoCartOutline size={25} /></a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="product__item__text">
                                                        <h6>
                                                            <a href="#">Croc-effect bag</a>
                                                        </h6>
                                                        <div className="rating">
                                                            <FaStar />
                                                            <FaStar />
                                                            <FaStar />
                                                            <FaStar />
                                                            <FaStar />
                                                        </div>
                                                        <div className="product__price">$ 59.0</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6">
                                                <div className="product__item">
                                                    <div
                                                        className="product__item__pic set-bg"
                                                        data-setbg="../../public/assets/img/shop/shop-4.jpg"
                                                    >
                                                        <ul className="product__hover">
                                                            <li>
                                                                <a href="../../public/assets/img/shop/shop-4.jpg" className="image-popup">
                                                                <CgArrowsExpandRight size={23} /></a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><IoMdHeartEmpty size={23} /></a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><IoCartOutline size={25} /></a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="product__item__text">
                                                        <h6>
                                                            <a href="#">Dark wash Xavi jeans</a>
                                                        </h6>
                                                        <div className="rating">
                                                        <FaStar />
                                                            <FaStar />
                                                            <FaStar />
                                                            <FaStar />
                                                            <FaStar />
                                                        </div>
                                                        <div className="product__price">$ 59.0</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6">
                                                <div className="product__item sale">
                                                    <div
                                                        className="product__item__pic set-bg"
                                                        data-setbg="../../public/assets/img/shop/shop-5.jpg"
                                                    >
                                                        <div className="label">Sale</div>
                                                        <ul className="product__hover">
                                                            <li>
                                                                <a href="../../public/assets/img/shop/shop-5.jpg" className="image-popup">
                                                                <CgArrowsExpandRight size={23} /></a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><IoMdHeartEmpty size={23} /></a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><IoCartOutline size={25} /></a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="product__item__text">
                                                        <h6>
                                                            <a href="#">Ankle-cuff sandals</a>
                                                        </h6>
                                                        <div className="rating">
                                                        <FaStar />
                                                            <FaStar />
                                                            <FaStar />
                                                            <FaStar />
                                                            <FaStar />
                                                        </div>
                                                        <div className="product__price">
                                                            $ 49.0 <span>$ 59.0</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6">
                                                <div className="product__item">
                                                    <div
                                                        className="product__item__pic set-bg"
                                                        data-setbg="../../public/assets/img/shop/shop-6.jpg"
                                                    >
                                                        <ul className="product__hover">
                                                            <li>
                                                                <a href="../../public/assets/img/shop/shop-6.jpg" className="image-popup">
                                                                <CgArrowsExpandRight size={23} /></a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><IoMdHeartEmpty size={23} /></a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><IoCartOutline size={25} /></a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="product__item__text">
                                                        <h6>
                                                            <a href="#">Contrasting sunglasses</a>
                                                        </h6>
                                                        <div className="rating">
                                                        <FaStar />
                                                            <FaStar />
                                                            <FaStar />
                                                            <FaStar />
                                                            <FaStar />
                                                        </div>
                                                        <div className="product__price">$ 59.0</div>
                                                    </div>
                                                </div>
                                            </div>



                                            <div className="col-lg-12 text-center">
                                                <div className="pagination__option">
                                                    <a href="#">1</a>
                                                    <a href="#">2</a>
                                                    <a href="#">3</a>
                                                    <a href="#">
                                                        <i className="fa fa-angle-right" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            {/* Shop Section End */}
            {/* Instagram Begin */}
            <div className="instagram">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                            <div
                                className="instagram__item set-bg"
                                data-setbg="img/instagram/insta-1.jpg"
                            >
                                <div className="instagram__text">
                                    <i className="fa fa-instagram" />
                                    <a href="#">@ ashion_shop</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                            <div
                                className="instagram__item set-bg"
                                data-setbg="img/instagram/insta-2.jpg"
                            >
                                <div className="instagram__text">
                                    <i className="fa fa-instagram" />
                                    <a href="#">@ ashion_shop</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                            <div
                                className="instagram__item set-bg"
                                data-setbg="img/instagram/insta-3.jpg"
                            >
                                <div className="instagram__text">
                                    <i className="fa fa-instagram" />
                                    <a href="#">@ ashion_shop</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                            <div
                                className="instagram__item set-bg"
                                data-setbg="img/instagram/insta-4.jpg"
                            >
                                <div className="instagram__text">
                                    <i className="fa fa-instagram" />
                                    <a href="#">@ ashion_shop</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                            <div
                                className="instagram__item set-bg"
                                data-setbg="img/instagram/insta-5.jpg"
                            >
                                <div className="instagram__text">
                                    <i className="fa fa-instagram" />
                                    <a href="#">@ ashion_shop</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                            <div
                                className="instagram__item set-bg"
                                data-setbg="img/instagram/insta-6.jpg"
                            >
                                <div className="instagram__text">
                                    <i className="fa fa-instagram" />
                                    <a href="#">@ ashion_shop</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Instagram End */}


            {/* Js Plugins */}
            {/* script tag add thy sake aaya??kadach import j karvu pade rect ma */}
            <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/js/bootstrap.min.js"></script>
        </>

    )
}
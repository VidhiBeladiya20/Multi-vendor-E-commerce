import { Navbar } from "../components/Navbar.jsx";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { BsArrowsAngleExpand } from "react-icons/bs";
import { CgArrowsExpandRight } from "react-icons/cg";
import { FaStar } from "react-icons/fa";
import { Helmet, HelmetProvider } from 'react-helmet-async';

import "../../public/assets/css/home.css";
import "../../public/assets/js/jquery-3.3.1.min.js";
import "../../public/assets/js/bootstrap.min.js";
export const Home = () => {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <script src="../../public/assets/js/test.js" type="text/javascript" />
                </Helmet>
            </HelmetProvider>

            <Navbar />
            <section className="categories">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 p-0">
                            <div className="categories__item categories__large__item set-bg"
                                data-setbg="../../public/assets/img/home/category-1.jpg">
                                <div className="categories__text">
                                    <h1>Women’s fashion</h1>
                                    <p>Sitamet, consectetur adipiscing elit, sed do eiusmod tempor incidid-unt labore
                                        edolore magna aliquapendisse ultrices gravida.</p>
                                    <a href="#">Shop now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                                    <div className="categories__item set-bg" data-setbg="../../public/assets/img/home/category-2.jpg">
                                        <div className="categories__text">
                                            <h4>Men’s fashion</h4>
                                            <p>358 items</p>
                                            <a href="">Shop now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                                    <div className="categories__item set-bg" data-setbg="../../public/assets/img/home/category-3.jpg">
                                        <div className="categories__text">
                                            <h4>Kid’s fashion</h4>
                                            <p>273 items</p>
                                            <a href="#">Shop now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                                    <div className="categories__item set-bg" data-setbg="../../public/assets/img/home/category-4.jpg">
                                        <div className="categories__text">
                                            <h4>Cosmetics</h4>
                                            <p>159 items</p>
                                            <a href="#">Shop now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                                    <div className="categories__item set-bg" data-setbg="../../public/assets/img/home/category-5.jpg">
                                        <div className="categories__text">
                                            <h4>Accessories</h4>
                                            <p>792 items</p>
                                            <a href="#">Shop now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Product Section Begin --> */}
            <section className="product spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4">
                            <div className="section-title">
                                <h4>New product</h4>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-8">
                            <ul className="filter__controls">
                                <li className="active" data-filter="*">All</li>
                                <li data-filter=".women">Women’s</li>
                                <li data-filter=".men">Men’s</li>
                                <li data-filter=".kid">Kid’s</li>
                                <li data-filter=".accessories">Accessories</li>
                                <li data-filter=".cosmetic">Cosmetics</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row property__gallery">
                        <div className="col-lg-3 col-md-4 col-sm-6 mix women">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" data-setbg="../../public/assets/img/home/product-1.jpg">
                                    <div className="label new">New</div>
                                    <ul className="product__hover">
                                        <li><a href="../../public/assets/img/home/product-1.jpg" className="image-popup"><CgArrowsExpandRight size={23} /></a></li>
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
                        <div className="col-lg-3 col-md-4 col-sm-6 mix men">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" data-setbg="../../public/assets/img/home/product-2.jpg">
                                    <ul className="product__hover">
                                        <li><a href="../../public/assets/img/home/product-2.jpg" className="image-popup"><CgArrowsExpandRight size={23} /></a></li>
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
                        <div className="col-lg-3 col-md-4 col-sm-6 mix accessories">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" data-setbg="../../public/assets/img/home/product-3.jpg">
                                    <div className="label stockout">out of stock</div>
                                    <ul className="product__hover">
                                        <li><a href="../../public/assets/img/home/product-3.jpg" className="image-popup"><CgArrowsExpandRight size={23} /></a></li>
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
                        <div className="col-lg-3 col-md-4 col-sm-6 mix cosmetic">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" data-setbg="../../public/assets/img/home/product-4.jpg">
                                    <ul className="product__hover">
                                        <li><a href="../../public/assets/img/home/product-4.jpg" className="image-popup"><CgArrowsExpandRight size={23} /></a></li>
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

                        <div className="col-lg-3 col-md-4 col-sm-6 mix women">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" data-setbg="../../public/assets/img/home/product-1.jpg">
                                    {/* <div className="label new">New</div> */}
                                    <ul className="product__hover">
                                        <li><a href="../../public/assets/img/home/product-1.jpg" className="image-popup"><CgArrowsExpandRight size={23} /></a></li>
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

                        <div className="col-lg-3 col-md-4 col-sm-6 mix women">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" data-setbg="../../public/assets/img/home/product-1.jpg">
                                    <div className="label sale">Sale</div>
                                    <ul className="product__hover">
                                        <li><a href="../../public/assets/img/home/product-1.jpg" className="image-popup"><CgArrowsExpandRight size={23} /></a></li>
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

                        <div className="col-lg-3 col-md-4 col-sm-6 mix women">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" data-setbg="../../public/assets/img/home/product-1.jpg">
                                    <ul className="product__hover">
                                        <li><a href="../../public/assets/img/home/product-1.jpg" className="image-popup"><CgArrowsExpandRight size={23} /></a></li>
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
                        <div className="col-lg-3 col-md-4 col-sm-6 mix women">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" data-setbg="../../public/assets/img/home/product-1.jpg">
                                    <div className="label sale">Sale</div>
                                    <ul className="product__hover">
                                        <li><a href="../../public/assets/img/home/product-1.jpg" className="image-popup"><CgArrowsExpandRight size={23} /></a></li>
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
                    </div>
                </div>
            </section>
            {/* <!-- Product Section End --> */}
        </>
    )
}
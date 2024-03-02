import { HeadFC, PageProps, graphql } from "gatsby";
import * as React from "react";
import PageHead from "../components/page-head/page-head";
import PageBody from "../components/page-body/page-body";

const HomePage: React.FC<
    PageProps<{
        allContentfulProjects: Queries.ContentfulProjectsGroupConnection;
    }>
> = ({ data }) => {
    const projects = data.allContentfulProjects.nodes;

    return (
        <PageBody>
            {/* <!-- Main slider Start --> */}
            <section className="main-slider-two">
                <div
                    className="main-slider-two__carousel ostech-owl__carousel owl-carousel"
                    data-owl-options={JSON.stringify({
                        loop: true,
                        items: 1,
                        autoplay: true,
                        autoplayTimeout: 10000,
                        smartSpeed: 1000,
                        nav: false,
                        dots: true,
                        margin: 0,
                    })}
                >
                    {/* <!-- Item --> */}
                    <div className="item">
                        <div className="main-slider-two__item">
                            <div
                                className="main-slider-two__bg"
                                style={{
                                    backgroundImage: "url(assets/images/backgrounds/slider-1-1.jpg)",
                                }}
                            ></div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="main-slider-two__content">
                                            <h5 className="main-slider-two__sub-title">Giải pháp phần mềm</h5>
                                            <h2 className="main-slider-two__title">
                                                Cung cấp <br /> dịch vụ công nghệ
                                                <span className="main-slider-two__title__overlay-group">
                                                    <span className="main-slider-two__title__overlay"></span>
                                                    <span className="main-slider-two__title__overlay"></span>
                                                    <span className="main-slider-two__title__overlay"></span>
                                                    <span className="main-slider-two__title__overlay"></span>
                                                    <span className="main-slider-two__title__overlay"></span>
                                                    <span className="main-slider-two__title__overlay"></span>
                                                </span>
                                            </h2>
                                            <div className="main-slider-two__link">
                                                <a href="/contact" className="ostech-btn ostech-btn--base">
                                                    Tìm Hiểu Thêm
                                                </a>
                                                <a href="/contact" className="ostech-btn ostech-btn--secondary">
                                                    Liên Hệ
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="main-slider-two__item__shape">
                                <img src="assets/images/shapes/frame-hero-2-1.png" alt="frame-hero" />
                            </div>
                        </div>
                    </div>

                    {/* <!-- Item --> */}
                    <div className="item">
                        <div className="main-slider-two__item">
                            <div
                                className="main-slider-two__bg"
                                style={{
                                    backgroundImage: "url(assets/images/backgrounds/slider-1-2.jpg)",
                                }}
                            ></div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="main-slider-two__content">
                                            <h5 className="main-slider-two__sub-title">Xây dựng sản phẩm</h5>
                                            <h2 className="main-slider-two__title">
                                                Tư vấn & xây dựng <br /> website, ứng dụng
                                                <span className="main-slider-two__title__overlay-group">
                                                    <span className="main-slider-two__title__overlay"></span>
                                                    <span className="main-slider-two__title__overlay"></span>
                                                    <span className="main-slider-two__title__overlay"></span>
                                                    <span className="main-slider-two__title__overlay"></span>
                                                    <span className="main-slider-two__title__overlay"></span>
                                                    <span className="main-slider-two__title__overlay"></span>
                                                </span>
                                            </h2>
                                            <div className="main-slider-two__link">
                                                <a href="/contact" className="ostech-btn ostech-btn--base">
                                                    Tìm Hiểu Thêm
                                                </a>
                                                <a href="/contact" className="ostech-btn ostech-btn--secondary">
                                                    Liên Hệ
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="main-slider-two__item__shape">
                                <img src="assets/images/shapes/frame-hero-2-1.png" alt="frame-hero" />
                            </div>
                        </div>
                    </div>

                    {/* <!-- Item --> */}
                    <div className="item">
                        <div className="main-slider-two__item">
                            <div
                                className="main-slider-two__bg"
                                style={{
                                    backgroundImage: "url(assets/images/backgrounds/slider-1-3.jpg)",
                                }}
                            ></div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="main-slider-two__content">
                                            <h5 className="main-slider-two__sub-title">Thương mại điện tử</h5>
                                            <h2 className="main-slider-two__title">
                                                Listing & đồng bộ <br /> các cửa hàng online
                                                <span className="main-slider-two__title__overlay-group">
                                                    <span className="main-slider-two__title__overlay"></span>
                                                    <span className="main-slider-two__title__overlay"></span>
                                                    <span className="main-slider-two__title__overlay"></span>
                                                    <span className="main-slider-two__title__overlay"></span>
                                                    <span className="main-slider-two__title__overlay"></span>
                                                    <span className="main-slider-two__title__overlay"></span>
                                                </span>
                                            </h2>
                                            <div className="main-slider-two__link">
                                                <a href="/contact" className="ostech-btn ostech-btn--base">
                                                    Tìm Hiểu Thêm
                                                </a>
                                                <a href="/contact" className="ostech-btn ostech-btn--secondary">
                                                    Liên Hệ
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="main-slider-two__item__shape">
                                <img src="assets/images/shapes/frame-hero-2-1.png" alt="frame-hero" />
                            </div>
                        </div>
                    </div>

                    {/* <!-- Item --> */}
                    <div className="item">
                        <div className="main-slider-two__item">
                            <div
                                className="main-slider-two__bg"
                                style={{
                                    backgroundImage: "url(assets/images/backgrounds/slider-1-4.jpg)",
                                }}
                            ></div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="main-slider-two__content">
                                            <h5 className="main-slider-two__sub-title">Agency & các dịch vụ quảng cáo</h5>
                                            <h2 className="main-slider-two__title">
                                                Làm nổi bật <br /> thương hiệu của bạn
                                                <span className="main-slider-two__title__overlay-group">
                                                    <span className="main-slider-two__title__overlay"></span>
                                                    <span className="main-slider-two__title__overlay"></span>
                                                    <span className="main-slider-two__title__overlay"></span>
                                                    <span className="main-slider-two__title__overlay"></span>
                                                    <span className="main-slider-two__title__overlay"></span>
                                                    <span className="main-slider-two__title__overlay"></span>
                                                </span>
                                            </h2>
                                            <div className="main-slider-two__link">
                                                <a href="/contact" className="ostech-btn ostech-btn--base">
                                                    Tìm Hiểu Thêm
                                                </a>
                                                <a href="/contact" className="ostech-btn ostech-btn--secondary">
                                                    Liên Hệ
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="main-slider-two__item__shape">
                                <img src="assets/images/shapes/frame-hero-2-1.png" alt="frame-hero" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Main slider End --> */}

            {/* <!--Funfact Start --> */}
            <div className="funfact-two">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="funfact-two__inner">
                                <div className="funfact-two__item  wow fadeInUp" data-wow-delay="500ms">
                                    <div className="funfact-two__item__funfact__item count-box">
                                        <div className="funfact-two__item__funfact__item__icon">
                                            <i className="icon-expertise-1"></i>
                                        </div>
                                        <h2 className="funfact-two__item__funfact__item__count">
                                            <span className="count-text" data-stop="99" data-speed="1500"></span>
                                            <span>.0K</span>
                                        </h2>
                                        <p className="funfact-two__item__funfact__item__text">Khách hàng</p>
                                    </div>
                                </div>

                                <div className="funfact-two__item wow fadeInUp" data-wow-delay="700ms">
                                    <div className="funfact-two__item__funfact__item count-box">
                                        <div className="funfact-two__item__funfact__item__icon">
                                            <i className="icon-technology-2"></i>
                                        </div>
                                        <h2 className="funfact-two__item__funfact__item__count">
                                            <span className="count-text" data-stop="100" data-speed="1500"></span>
                                            <span>%</span>
                                        </h2>
                                        <p className="funfact-two__item__funfact__item__text">Phản hồi tích cực</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Funfact End --> */}

            {/* <!-- About section Start --> */}
            <section className="about-three">
                <div className="container">
                    <div className="row gutter-y-30">
                        <div className="col-lg-6">
                            <div className="about-three__left wow fadeInLeft" data-wow-duration="1000ms" data-wow-delay="500ms">
                                <div className="about-three__thumb">
                                    <div className="about-three__thumb__item about-three__thumb__item--one">
                                        <img src="assets/images/about/about-s-3-1.png" alt="ostech image" />
                                    </div>
                                    <div className="about-three__thumb__item about-three__thumb__item--two">
                                        <img src="assets/images/about/about-3-1.png" alt="ostech image" />
                                    </div>

                                    <div className="about-three__thumb__call">
                                        <div className="about-three__thumb__call__icon">
                                            <i className="icon-chatting-1"></i>
                                        </div>
                                        <div className="about-three__thumb__call__content">
                                            <span className="about-three__thumb__call__text">Liên hệ ngay</span>
                                            <h5 className="about-three__thumb__call__title">
                                                <a href="tel:+84-946-672-181">+84 946 672 181</a>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-three__right">
                                <div className="about-three__top">
                                    <div className="sec-title wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="000ms">
                                        <div className="d-flex align-items-center justify-content-start">
                                            <img src="assets/images/shapes/sec-title-s-1.png" alt="Về Chúng Tôi" className="sec-title__img" />
                                            <h6 className="sec-title__tagline">Về Chúng Tôi</h6>
                                        </div>
                                        <h3 className="sec-title__title">Chuyên Cung Cấp Các Dịch Vụ Phát Triển Kinh Doanh</h3>
                                    </div>
                                    <p className="about-three__top__text">
                                        Chúng tôi cung cấp các dịch vụ và giải pháp phần mềm kinh doanh, tối ưu hóa quy trình cho doanh nghiệp của bạn, tăng cường sức cạnh tranh và
                                        phát triển.
                                    </p>
                                </div>
                                <div className="about-three__feature wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="300ms">
                                    <div className="about-three__feature__item">
                                        <div className="about-three__feature__top">
                                            <div className="about-three__feature__top__icon">
                                                <i className="icon-nanotechnology-1"></i>
                                            </div>
                                            <h4 className="about-three__feature__top__title">
                                                Giải Pháp
                                                <br />
                                                Phần Mềm
                                            </h4>
                                        </div>
                                        <p className="about-three__feature__item__text">Xây dựng Website với chi phí vận hành thấp.</p>
                                    </div>
                                    <div className="about-three__feature__item">
                                        <div className="about-three__feature__top">
                                            <div className="about-three__feature__top__icon">
                                                <i className="icon-it-service-1"></i>
                                            </div>
                                            <h4 className="about-three__feature__top__title">
                                                Phát Triển
                                                <br />
                                                Kinh Doanh
                                            </h4>
                                        </div>
                                        <p className="about-three__feature__item__text">Tích hợp SEO và bán hàng tự động, thương mại điện tử.</p>
                                    </div>
                                </div>
                                <ul className="about-three__list list-unstyled wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="500ms">
                                    <li className="about-three__list__item">
                                        <i className="fas fa-check-circle"></i>Đa dạng dịch vụ công nghệ
                                    </li>
                                    <li className="about-three__list__item">
                                        <i className="fas fa-check-circle"></i>Phục vụ nhiều mục tiêu kinh doanh
                                    </li>
                                    <li className="about-three__list__item">
                                        <i className="fas fa-check-circle"></i>Đội ngũ lập trình chuyên nghiệp
                                    </li>
                                </ul>
                                <div className="about-three__link wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="500ms">
                                    <a href="/about" className="about-three__link__btn ostech-btn ostech-btn--secondary">
                                        Tìm hiểu hêm
                                    </a>
                                </div>

                                <div className="about-three__award">
                                    <i className="icon-mark"></i>
                                    <p className="about-three__award__text">Miễn Phí Tư Vấn Dịch Vụ</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- About section End --> */}

            {/* <!-- Service section Start --> */}
            <section className="service-three">
                <div
                    className="service-three__bg"
                    style={{
                        backgroundImage: "url(assets/images/shapes/service-shape-2-1.png)",
                    }}
                ></div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="sec-title sec-title--two text-center wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="000ms">
                                <div className="d-flex align-items-center justify-content-center">
                                    <img src="assets/images/shapes/sec-title-s-1.png" alt="Service" className="sec-title__img" />
                                    <h6 className="sec-title__tagline">Chúng tôi cung cấp</h6>
                                </div>
                                <h3 className="sec-title__title">
                                    Các Dịch Vụ Theo Từng Mục Tiêu <br /> Kinh Doanh
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div
                        className="service-three__carousel ostech-owl__carousel owl-theme owl-carousel"
                        data-owl-options='{
			"loop": true,
			"items": 3,
			"autoplay": true,
			"autoplayTimeout": 10000,
			"smartSpeed": 1000,
			"nav": false,
			"dots": true,
			"margin": 0,
			"responsive":{
                "0":{
                    "items":1
                },
                "575":{
                    "items":1
                },
				"767":{
                    "items": 2
                },
                "992":{
                    "items": 2
                },
                "1200":{
                    "items": 3
                }
            }
		}'
                    >
                        <div className="item">
                            <div className="service-three__item">
                                <div className="service-three__item__inner">
                                    <div className="service-three__item__icon">
                                        <div className="service-three__item__icon__inner">
                                            <i className="icon-software-1"></i>
                                        </div>
                                    </div>
                                    <div className="service-three__item__thumb">
                                        <img src="assets/images/service/service-3-1.png" alt="ostech image" />
                                    </div>
                                    <div className="service-three__item__content">
                                        <h4 className="service-three__item__title">
                                            Xây Dựng <br /> Website
                                        </h4>
                                        <a href="service-d-development.html" className="service-three__item__link">
                                            <span className="service-three__item__link__icon"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="service-three__item">
                                <div className="service-three__item__inner">
                                    <div className="service-three__item__icon">
                                        <div className="service-three__item__icon__inner">
                                            <i className="icon-layer-1"></i>
                                        </div>
                                    </div>
                                    <div className="service-three__item__thumb">
                                        <img src="assets/images/service/service-3-2.png" alt="ostech image" />
                                    </div>
                                    <div className="service-three__item__content">
                                        <h4 className="service-three__item__title">
                                            Marketing <br /> Sản Phẩm
                                        </h4>
                                        <a href="service-d-design.html" className="service-three__item__link">
                                            <span className="service-three__item__link__icon"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="service-three__item">
                                <div className="service-three__item__inner">
                                    <div className="service-three__item__icon">
                                        <div className="service-three__item__icon__inner">
                                            <i className="icon-digital-marketing-1"></i>
                                        </div>
                                    </div>
                                    <div className="service-three__item__thumb">
                                        <img src="assets/images/service/service-3-3.png" alt="ostech image" />
                                    </div>
                                    <div className="service-three__item__content">
                                        <h4 className="service-three__item__title">
                                            Phân tích <br /> Khách Hàng
                                        </h4>
                                        <a href="service-d-marketing.html" className="service-three__item__link">
                                            <span className="service-three__item__link__icon"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="service-three__item">
                                <div className="service-three__item__inner">
                                    <div className="service-three__item__icon">
                                        <div className="service-three__item__icon__inner">
                                            <i className="icon-analysis-1"></i>
                                        </div>
                                    </div>
                                    <div className="service-three__item__thumb">
                                        <img src="assets/images/service/service-1-4.png" alt="ostech image" />
                                    </div>
                                    <div className="service-three__item__content">
                                        <h4 className="service-three__item__title">
                                            Bán Hàng <br /> Trực Tuyến
                                        </h4>
                                        <a href="service-d-analysis.html" className="service-three__item__link">
                                            <span className="service-three__item__link__icon"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="service-three__item">
                                <div className="service-three__item__inner">
                                    <div className="service-three__item__icon">
                                        <div className="service-three__item__icon__inner">
                                            <i className="icon-cyber-security"></i>
                                        </div>
                                    </div>
                                    <div className="service-three__item__thumb">
                                        <img src="assets/images/service/service-1-5.png" alt="ostech image" />
                                    </div>
                                    <div className="service-three__item__content">
                                        <h4 className="service-three__item__title">
                                            Hỗ Trợ <br /> Bán Hàng
                                        </h4>
                                        <a href="service-d-security.html" className="service-three__item__link">
                                            <span className="service-three__item__link__icon"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="service-three__item">
                                <div className="service-three__item__inner">
                                    <div className="service-three__item__icon">
                                        <div className="service-three__item__icon__inner">
                                            <i className="icon-cloud-computing"></i>
                                        </div>
                                    </div>
                                    <div className="service-three__item__thumb">
                                        <img src="assets/images/service/service-1-6.png" alt="ostech image" />
                                    </div>
                                    <div className="service-three__item__content">
                                        <h4 className="service-three__item__title">
                                            Mở Rộng <br /> Kinh Doanh
                                        </h4>
                                        <a href="service-experience.html" className="service-three__item__link">
                                            <span className="service-three__item__link__icon"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="service-three__item">
                                <div className="service-three__item__inner">
                                    <div className="service-three__item__icon">
                                        <div className="service-three__item__icon__inner">
                                            <i className="icon-analysis-1"></i>
                                        </div>
                                    </div>
                                    <div className="service-three__item__thumb">
                                        <img src="assets/images/service/service-1-4.png" alt="ostech image" />
                                    </div>
                                    <div className="service-three__item__content">
                                        <h4 className="service-three__item__title">
                                            Tư vấn <br /> Giải Pháp
                                        </h4>
                                        <a href="service-d-analysis.html" className="service-three__item__link">
                                            <span className="service-three__item__link__icon"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Service section End --> */}

            {/* <!-- Client carousel Start --> */}
            <div className="client-carousel client-carousel--one d-none">
                <div className="container">
                    ∂
                    <div
                        className="client-carousel__one ostech-owl__carousel owl-theme owl-carousel"
                        data-owl-options='{
            "items": 5,
            "margin": 60,
            "smartSpeed": 700,
            "loop":true,
            "autoplay": 6000,
            "nav":false,
            "dots":false,
            "responsive":{
                "0":{
                    "items":1,
                    "margin": 0
                },
                "360":{
                    "items":2,
                    "margin": 30
                },
                "575":{
                    "items":3,
                    "margin": 30
                },
                "768":{
                    "items":3,
                    "margin": 40
                },
                "992":{
                    "items": 4,
                    "margin": 40
                },
                "1200":{
                    "items": 5,
                    "margin": 140
                }
            }
            }'
                    >
                        <div className="client-carousel__one__item">
                            <img src="assets/images/resources/brand-2-1.png" alt="ostech" />
                        </div>
                        {/* <!-- /.owl-slide-item--> */}
                        <div className="client-carousel__one__item">
                            <img src="assets/images/resources/brand-2-1.png" alt="ostech" />
                        </div>
                        {/* <!-- /.owl-slide-item--> */}
                        <div className="client-carousel__one__item">
                            <img src="assets/images/resources/brand-2-1.png" alt="ostech" />
                        </div>
                        {/* <!-- /.owl-slide-item--> */}
                        <div className="client-carousel__one__item">
                            <img src="assets/images/resources/brand-2-1.png" alt="ostech" />
                        </div>
                        {/* <!-- /.owl-slide-item--> */}
                        <div className="client-carousel__one__item">
                            <img src="assets/images/resources/brand-2-1.png" alt="ostech" />
                        </div>
                        {/* <!-- /.owl-slide-item--> */}
                        <div className="client-carousel__one__item">
                            <img src="assets/images/resources/brand-2-1.png" alt="ostech" />
                        </div>
                        {/* <!-- /.owl-slide-item--> */}
                        <div className="client-carousel__one__item">
                            <img src="assets/images/resources/brand-2-1.png" alt="ostech" />
                        </div>
                        {/* <!-- /.owl-slide-item--> */}
                        <div className="client-carousel__one__item">
                            <img src="assets/images/resources/brand-2-1.png" alt="ostech" />
                        </div>
                        {/* <!-- /.owl-slide-item--> */}
                        <div className="client-carousel__one__item">
                            <img src="assets/images/resources/brand-2-1.png" alt="ostech" />
                        </div>
                        {/* <!-- /.owl-slide-item--> */}
                        <div className="client-carousel__one__item">
                            <img src="assets/images/resources/brand-2-1.png" alt="ostech" />
                        </div>
                        {/* <!-- /.owl-slide-item--> */}
                    </div>
                    {/* <!-- /.thm-owl__slider --> */}
                </div>
                {/* <!-- /.container --> */}
            </div>
            {/* <!-- Client carousel End --> */}

            {/* <!-- Why Choose section Start --> */}
            <section className="why-choose-one">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="why-choose-one__left wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="500ms">
                                <div className="why-choose-one__top">
                                    <div className="sec-title wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="000ms">
                                        <div className="d-flex align-items-center justify-content-start">
                                            <img src="assets/images/shapes/sec-title-s-1.png" alt="Trách nhiệm & chuyên môn" className="sec-title__img" />
                                            <h6 className="sec-title__tagline">Trách nhiệm & chuyên môn</h6>
                                        </div>
                                        <h3 className="sec-title__title">Nên Chọn Passgenix Solutions Cùng Đồng Hành?</h3>
                                    </div>
                                </div>
                                <div className="why-choose-one__feature">
                                    <div className="why-choose-one__feature__item wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="500ms">
                                        <div className="why-choose-one__feature__item__content">
                                            <div className="why-choose-one__feature__item__icon">
                                                <i className="icon-it-1"></i>
                                            </div>
                                            <h4 className="why-choose-one__feature__item__text">Lộ trình phát triển kinh doanh rõ ràng và đầy đủ.</h4>
                                        </div>
                                        <div className="why-choose-one__feature__item__link">
                                            <a href="contact.html" className="why-choose-one__feature__item__link__btn">
                                                <i className="icon-arrow-left"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="why-choose-one__feature__item wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="500ms">
                                        <div className="why-choose-one__feature__item__content">
                                            <div className="why-choose-one__feature__item__icon">
                                                <i className="icon-future-1"></i>
                                            </div>
                                            <h4 className="why-choose-one__feature__item__text">Giải pháp cụ thể cho các vấn đề kinh doanh của bạn.</h4>
                                        </div>
                                        <div className="why-choose-one__feature__item__link">
                                            <a href="contact.html" className="why-choose-one__feature__item__link__btn">
                                                <i className="icon-arrow-left"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="why-choose-one__link wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="500ms">
                                    <a href="" className="why-choose-one__link__btn ostech-btn">
                                        Liên Hệ Chúng Tôi
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="why-choose-one__right wow fadeInRight" data-wow-duration="1000ms" data-wow-delay="500ms">
                                <div className="why-choose-one__thumb">
                                    <img src="assets/images/resources/why-choos-us-3-1.png" alt="ostech image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="why-choose-one__shape wow fadeInRight" data-wow-duration="1000ms" data-wow-delay="500ms">
                    <img src="assets/images/shapes/why-choose-2-1.png" alt="why-choose" />
                </div>
            </section>
            {/* <!-- Why Choose section End --> */}

            {/* <!-- testimonial-two section start --> */}
            <section className="testimonial-two">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="sec-title text-center wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="000ms">
                                <div className="d-flex align-items-center justify-content-center">
                                    <img src="assets/images/shapes/sec-title-s-1.png" alt="Testimonial" className="sec-title__img" />
                                    <h6 className="sec-title__tagline">Phản hồi</h6>
                                </div>
                                <h3 className="sec-title__title">Khách Hàng Nói Gì?</h3>
                            </div>
                        </div>
                    </div>
                    <div
                        className="testimonial-two__carousel ostech-owl__carousel owl-theme owl-carousel"
                        data-owl-options='{
			"items": 1,
			"margin": 30,
			"smartSpeed": 700,
			"loop":true,
			"autoplay": true,
			"nav":false,
			"dots":false,
			"responsive": {
				"0": {
					"items": 1
				},
				"767": {
					"items": 1
				},
				"1200": {
					"items": 2
				}
			}
			}'
                    >
                        <div className="item">
                            <div className="testimonial-two__item">
                                <div className="testimonial-two__item__star">
                                    <i className="icon-star"></i>
                                    <i className="icon-star"></i>
                                    <i className="icon-star"></i>
                                    <i className="icon-star"></i>
                                    <i className="icon-star"></i>
                                </div>
                                <p className="testimonial-two__item__text">
                                    Nhân viên dịch vụ khách hàng rất nhiệt tình và chu đáo, giải đáp mọi thắc mắc của tôi một cách nhanh chóng và hiệu quả.Tôi rất hài lòng với thái
                                    độ phục vụ chuyên nghiệp và thân thiện của đội ngũ nhân viên.
                                </p>
                                <div className="testimonial-two__item__author">
                                    <div className="testimonial-two__item__author__thumb">
                                        <img src="assets/images/resources/testi-1-5.jpg" alt="ostech image" />
                                    </div>
                                    <div className="testimonial-two__item__author__content">
                                        <h5 className="testimonial-two__item__author__title">Nguyễn Minh Thắng</h5>
                                        <span className="testimonial-two__item__author__deg">Khách hàng thân thiết</span>
                                    </div>
                                </div>
                                <div className="testimonial-two__item__quite">
                                    <i className="icon-quite"></i>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61 38">
                                    <path d="M61 37.6621C43.331 20.1523 12.9713 5.69967 0 0.662109H61V37.6621Z" />
                                </svg>
                            </div>
                        </div>
                        <div className="item">
                            <div className="testimonial-two__item">
                                <div className="testimonial-two__item__star">
                                    <i className="icon-star"></i>
                                    <i className="icon-star"></i>
                                    <i className="icon-star"></i>
                                    <i className="icon-star"></i>
                                    <i className="icon-star"></i>
                                </div>
                                <p className="testimonial-two__item__text">
                                    Website có chất lượng tốt, đáp ứng đầy đủ nhu cầu của công ti tôi. Rất ấn tượng với thiết kế và độ hiệu quả website mang lại.
                                </p>
                                <div className="testimonial-two__item__author">
                                    <div className="testimonial-two__item__author__thumb">
                                        <img src="assets/images/resources/testi-1-6.jpg" alt="ostech image" />
                                    </div>
                                    <div className="testimonial-two__item__author__content">
                                        <h5 className="testimonial-two__item__author__title">Nguyễn Minh Thắng</h5>
                                        <span className="testimonial-two__item__author__deg">Khách hàng</span>
                                    </div>
                                </div>
                                <div className="testimonial-two__item__quite">
                                    <i className="icon-quite"></i>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61 38">
                                    <path d="M61 37.6621C43.331 20.1523 12.9713 5.69967 0 0.662109H61V37.6621Z" />
                                </svg>
                            </div>
                        </div>
                        <div className="item">
                            <div className="testimonial-two__item">
                                <div className="testimonial-two__item__star">
                                    <i className="icon-star"></i>
                                    <i className="icon-star"></i>
                                    <i className="icon-star"></i>
                                    <i className="icon-star"></i>
                                    <i className="icon-star"></i>
                                </div>
                                <p className="testimonial-two__item__text">
                                    Giá cả hợp lý, phù hợp với mục tiêu phát triển của công ti nhỏ lẻ như chúng tôi. Công ty luôn đặt lợi ích của khách hàng lên hàng đầu.
                                </p>
                                <div className="testimonial-two__item__author">
                                    <div className="testimonial-two__item__author__thumb">
                                        <img src="assets/images/resources/testi-1-1.jpg" alt="ostech image" />
                                    </div>
                                    <div className="testimonial-two__item__author__content">
                                        <h5 className="testimonial-two__item__author__title">Nguyễn Minh Thắng</h5>
                                        <span className="testimonial-two__item__author__deg">Customer</span>
                                    </div>
                                </div>
                                <div className="testimonial-two__item__quite">
                                    <i className="icon-quite"></i>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61 38">
                                    <path d="M61 37.6621C43.331 20.1523 12.9713 5.69967 0 0.662109H61V37.6621Z" />
                                </svg>
                            </div>
                        </div>
                        <div className="item">
                            <div className="testimonial-two__item">
                                <div className="testimonial-two__item__star">
                                    <i className="icon-star"></i>
                                    <i className="icon-star"></i>
                                    <i className="icon-star"></i>
                                    <i className="icon-star"></i>
                                    <i className="icon-star"></i>
                                </div>
                                <p className="testimonial-two__item__text">
                                    Chính sách hỗ trợ lâu dài, giúp tôi yên tâm sử dụng dịch vụ. Công ty luôn sẵn sàng hỗ trợ khách hàng khi gặp vấn đề phát sinh.
                                </p>
                                <div className="testimonial-two__item__author">
                                    <div className="testimonial-two__item__author__thumb">
                                        <img src="assets/images/resources/testi-1-2.jpg" alt="ostech image" />
                                    </div>
                                    <div className="testimonial-two__item__author__content">
                                        <h5 className="testimonial-two__item__author__title">Nguyễn Minh Thắng</h5>
                                        <span className="testimonial-two__item__author__deg">Customer</span>
                                    </div>
                                </div>
                                <div className="testimonial-two__item__quite">
                                    <i className="icon-quite"></i>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61 38">
                                    <path d="M61 37.6621C43.331 20.1523 12.9713 5.69967 0 0.662109H61V37.6621Z" />
                                </svg>
                            </div>
                        </div>
                        <div className="item">
                            <div className="testimonial-two__item">
                                <div className="testimonial-two__item__star">
                                    <i className="icon-star"></i>
                                    <i className="icon-star"></i>
                                    <i className="icon-star"></i>
                                    <i className="icon-star"></i>
                                    <i className="icon-star"></i>
                                </div>
                                <p className="testimonial-two__item__text">
                                    Tôi đã sử dụng dịch vụ của công ty này nhiều năm nay và luôn hài lòng với chất lượng dịch vụ. Tôi sẽ giới thiệu dịch vụ của công ty này cho bạn
                                    bè và người thân.
                                </p>
                                <div className="testimonial-two__item__author">
                                    <div className="testimonial-two__item__author__thumb">
                                        <img src="assets/images/resources/testi-1-3.jpg" alt="ostech image" />
                                    </div>
                                    <div className="testimonial-two__item__author__content">
                                        <h5 className="testimonial-two__item__author__title">Nguyễn Minh Thắng</h5>
                                        <span className="testimonial-two__item__author__deg">Khách hàng thân thiết</span>
                                    </div>
                                </div>
                                <div className="testimonial-two__item__quite">
                                    <i className="icon-quite"></i>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61 38">
                                    <path d="M61 37.6621C43.331 20.1523 12.9713 5.69967 0 0.662109H61V37.6621Z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="testimonial-two__author">
                        <div className="testimonial-two__author__image testimonial-two__author__image--one">
                            <img src="assets/images/resources/testi-1-1.jpg" alt=" osthech image" />
                        </div>
                        <div className="testimonial-two__author__image testimonial-two__author__image--two">
                            <img src="assets/images/resources/testi-1-2.jpg" alt=" osthech image" />
                        </div>
                        <div className="testimonial-two__author__image testimonial-two__author__image--three">
                            <img src="assets/images/resources/testi-1-3.jpg" alt=" osthech image" />
                        </div>
                        <div className="testimonial-two__author__image testimonial-two__author__image--fore">
                            <img src="assets/images/resources/testi-1-4.jpg" alt=" osthech image" />
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- testimonial-two section End --> */}

            {/* <!-- testimonial-two section End --> */}
            <section className="project-two">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="sec-title text-center wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="000ms">
                                <div className="d-flex align-items-center justify-content-center">
                                    <img src="assets/images/shapes/sec-title-s-1.png" alt="Latest Project" className="sec-title__img" />
                                    <h6 className="sec-title__tagline">Dự án gần đây</h6>
                                </div>
                                <h3 className="sec-title__title">
                                    Các Dự Án Vừa Mới <br /> Được Phát Hành
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="row gutter-y-30">
                        {projects.map((project) => (
                            <div key={project.id} className="col-lg-3 col-md-4 col-sm-6">
                                <div className="project-two__item wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="500ms">
                                    <div className="project-two__thumb">
                                        <img src={project.thumbnail?.localFile?.publicURL || ""} alt="ostech image" />
                                    </div>
                                    <div className="project-two__content">
                                        <h4 className="project-two__content__title">
                                            <a href="service-d-development.html">{project.title}</a>
                                        </h4>
                                        <p className="project-two__content__text">{project.subtitle}</p>
                                        <a href="service-d-design.html" className="project-two__content__btn">
                                            <span className="project-two__content__btn__icon"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* <!-- testimonial-two section End --> */}

            {/* <!-- Package section start --> */}
            <section className="package-page package-page--two">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="sec-title text-center wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="000ms">
                                <div className="d-flex align-items-center justify-content-center">
                                    <img src="assets/images/shapes/sec-title-s-1.png" alt="Pricing plane" className="sec-title__img" />
                                    <h6 className="sec-title__tagline">Bảng giá</h6>
                                </div>
                                <h3 className="sec-title__title">
                                    Bảng Giá Ước Tính <br /> Cho Các Dịch Vụ Phổ Biến
                                </h3>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /.row --> */}
                    <div className="row gutter-y-30">
                        <div className="col-md-6 col-lg-4">
                            <div className="package-card price wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="200ms">
                                <div className="package-card__head">
                                    <div className="package-card__head__box">
                                        <h2 className="package-card__head__title">Tư Vấn</h2>
                                    </div>
                                    <div className="package-card__head__content">
                                        <p className="package-card__head__price ps-0">Miễn Phí</p>
                                        <p className="package-card__head__month">Cho mọi dịch vụ</p>
                                    </div>
                                </div>
                                <div className="package-card__content">
                                    <ul className="package-card__content__list list-unstyled">
                                        <li className="package-card__content__list__item">
                                            {" "}
                                            <i className="icon-mark"></i>Social Media Marketing
                                        </li>
                                        <li className="package-card__content__list__item">
                                            {" "}
                                            <i className="icon-mark"></i>Digital Analysis
                                        </li>
                                        <li className="package-card__content__list__item">
                                            {" "}
                                            <i className="icon-mark"></i>Web Development
                                        </li>
                                        <li className="package-card__content__list__item">
                                            {" "}
                                            <i className="icon-mark"></i>Technical Support
                                        </li>
                                    </ul>
                                    <div className="package-card__content__link">
                                        <a href="checkout.html" className="package-card__content__link__btn ostech-btn ostech-btn--secondary">
                                            Bắt Đầu Ngay
                                        </a>
                                    </div>
                                </div>
                                <div className="package-card__shape">
                                    <img src="assets/images/shapes/price-1-1.png" alt="price" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="package-card price wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="400ms">
                                <div className="package-card__head">
                                    <p className="package-card__head__top">Dùng Nhiều</p>

                                    <div className="package-card__head__box">
                                        <h2 className="package-card__head__title">Website</h2>
                                    </div>
                                    <div className="package-card__head__content">
                                        <p className="package-card__head__price">
                                            ~4.000.000<span className="sup">VNĐ</span>
                                        </p>
                                        <p className="package-card__head__month">Cho một website</p>
                                    </div>
                                </div>
                                <div className="package-card__content">
                                    <ul className="package-card__content__list list-unstyled">
                                        <li className="package-card__content__list__item">
                                            {" "}
                                            <i className="icon-mark"></i>Social Media Marketing
                                        </li>
                                        <li className="package-card__content__list__item">
                                            {" "}
                                            <i className="icon-mark"></i>Digital Analysis
                                        </li>
                                        <li className="package-card__content__list__item">
                                            {" "}
                                            <i className="icon-mark"></i>Web Development
                                        </li>
                                        <li className="package-card__content__list__item">
                                            {" "}
                                            <i className="icon-mark"></i>Technical Support
                                        </li>
                                    </ul>
                                    <div className="package-card__content__link">
                                        <a href="checkout.html" className="package-card__content__link__btn ostech-btn ostech-btn--secondary">
                                            Bắt Đầu Ngay
                                        </a>
                                    </div>
                                </div>
                                <div className="package-card__shape">
                                    <img src="assets/images/shapes/price-1-1.png" alt="price" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="package-card price wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="600ms">
                                <div className="package-card__head">
                                    <div className="package-card__head__box">
                                        <h2 className="package-card__head__title">Marketing</h2>
                                    </div>
                                    <div className="package-card__head__content">
                                        <p className="package-card__head__price">
                                            ~6.000.000<span className="sup">VNĐ</span>
                                        </p>
                                        <p className="package-card__head__month">Cho tất cả các sản phẩm</p>
                                    </div>
                                </div>
                                <div className="package-card__content">
                                    <ul className="package-card__content__list list-unstyled">
                                        <li className="package-card__content__list__item">
                                            {" "}
                                            <i className="icon-mark"></i>Social Media Marketing
                                        </li>
                                        <li className="package-card__content__list__item">
                                            {" "}
                                            <i className="icon-mark"></i>Digital Analysis
                                        </li>
                                        <li className="package-card__content__list__item">
                                            {" "}
                                            <i className="icon-mark"></i>Web Development
                                        </li>
                                        <li className="package-card__content__list__item">
                                            {" "}
                                            <i className="icon-mark"></i>Technical Support
                                        </li>
                                    </ul>
                                    <div className="package-card__content__link">
                                        <a href="checkout.html" className="package-card__content__link__btn ostech-btn ostech-btn--secondary">
                                            Bắt Đầu Ngay
                                        </a>
                                    </div>
                                </div>
                                <div className="package-card__shape">
                                    <img src="assets/images/shapes/price-1-1.png" alt="price" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /.row --> */}
                </div>
            </section>
            {/* <!-- Package section End --> */}

            {/* <!-- Contact section Start --> */}
            <section className="contact-two">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="contact-two__left">
                                <div className="contact-two__thumb wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="500ms">
                                    <img src="assets/images/resources/contact-1-2.png" alt="ostech image" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="contact-two__right wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="500ms">
                                <div className="contact-two__top">
                                    <div className="contact-two__top__content">
                                        <div className="sec-title sec-title--three text-center wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="000ms">
                                            <div className="d-flex align-items-center justify-content-center">
                                                <img src="assets/images/shapes/sec-title-s-2.png" alt="Contact with us" className="sec-title__img" />
                                                <h6 className="sec-title__tagline">Đối Tác Đáng Tin Cậy</h6>
                                            </div>
                                            <h3 className="sec-title__title">Liên Hệ Với Chúng Tôi Ngay</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="contact-two__content">
                                    <div className="contact-two__form__inner">
                                        <form className="contact-two__form contact-form-validated form-one wow fadeInUp" data-wow-duration="1500ms" action="inc/sendemail.php">
                                            <div className="form-one__group">
                                                <div className="form-one__control form-one__control--full">
                                                    <input type="text" name="name" placeholder="Tên Của Bạn" />
                                                </div>
                                                {/* <!-- /.form-one__control form-one__control__full --> */}
                                                <div className="form-one__control form-one__control--full">
                                                    <input type="email" name="email" placeholder="Địa Chỉ Email" />
                                                </div>
                                                {/* <!-- /.form-one__control form-one__control__full --> */}
                                                <div className="form-one__control form-one__control--full">
                                                    <input type="text" name="subject" placeholder="Tiêu Đề" />
                                                </div>
                                                {/* <!-- /.form-one__control form-one__control__full --> */}
                                                <div className="form-one__control form-one__control--full">
                                                    <textarea name="message" placeholder="Để Lại Lời Nhắn Tại Đây"></textarea>
                                                </div>
                                                {/* <!-- /.form-one__control --> */}
                                                <div className="form-one__control form-one__control--full">
                                                    <button type="submit" className="ostech-btn">
                                                        Hoàn Thành
                                                    </button>
                                                </div>
                                                {/* <!-- /.form-one__control --> */}
                                            </div>
                                            {/* <!-- /.form-one__group --> */}
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-two__shape">
                    <img src="assets/images/shapes/benefit-shape-1-1.png" alt="price" />
                </div>
            </section>
            {/* <!-- Contact section End --> */}

            {/* <!-- Blog section Start --> */}
            <section className="blog-one blog-one--page">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="sec-title text-center wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="000ms">
                                <div className="d-flex align-items-center justify-content-center">
                                    <img src="assets/images/shapes/sec-title-s-1.png" alt="Article" className="sec-title__img" />
                                    <h6 className="sec-title__tagline">Nổi Bật</h6>
                                </div>
                                <h3 className="sec-title__title">
                                    Tin Tức & Bài Viết Mới <br /> Cập Nhật
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="row gutter-y-30">
                        <div className="col-md-6 col-lg-4">
                            <div className="blog-card wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="000ms">
                                <div className="blog-card__image">
                                    <img src="assets/images/blog/blog-1-1.png" alt="@@title" />
                                    <img src="assets/images/blog/blog-1-1.png" alt="@@title" />
                                    <a href="blog-details-right.html" className="blog-card__image__link">
                                        <span className="sr-only">@@title</span>
                                    </a>
                                    <div className="blog-card__date">
                                        <span>08</span>Jun
                                    </div>
                                </div>

                                <div className="blog-card__content">
                                    <ul className="list-unstyled blog-card__meta">
                                        <li>
                                            <a href="#">
                                                <img src="assets/images/blog/blog-author-1-1.jpg" alt="ostech" /> Jane Cooper
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="icon-bubble-chat-1"></i>2 Comments
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="blog-card__content__inner">
                                        <h3 className="blog-card__title">
                                            <a href="blog-details-right.html">Improving Business Growth with New Technology</a>
                                        </h3>
                                        <a href="blog-details-right.html" className="blog-card__link">
                                            Read more<i className="icon-arrow-left"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="blog-card wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="200ms">
                                <div className="blog-card__image">
                                    <img src="assets/images/blog/blog-1-2.png" alt="@@title" />
                                    <img src="assets/images/blog/blog-1-2.png" alt="@@title" />
                                    <a href="blog-details-right.html" className="blog-card__image__link">
                                        <span className="sr-only">@@title</span>
                                    </a>
                                    <div className="blog-card__date">
                                        <span>09</span>DEC
                                    </div>
                                </div>

                                <div className="blog-card__content">
                                    <ul className="list-unstyled blog-card__meta">
                                        <li>
                                            <a href="#">
                                                <img src="assets/images/blog/blog-author-1-2.jpg" alt="ostech" />
                                                Annette Black
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="icon-bubble-chat-1"></i>2 Comments
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="blog-card__content__inner">
                                        <h3 className="blog-card__title">
                                            <a href="blog-details-right.html">Improving Business Growth with New Technology</a>
                                        </h3>
                                        <a href="blog-details-right.html" className="blog-card__link">
                                            Read more<i className="icon-arrow-left"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="blog-card wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="000ms">
                                <div className="blog-card__image">
                                    <img src="assets/images/blog/blog-1-3.png" alt="@@title" />
                                    <img src="assets/images/blog/blog-1-3.png" alt="@@title" />
                                    <a href="blog-details-right.html" className="blog-card__image__link">
                                        <span className="sr-only">@@title</span>
                                    </a>
                                    <div className="blog-card__date">
                                        <span>07</span>AUG
                                    </div>
                                </div>

                                <div className="blog-card__content">
                                    <ul className="list-unstyled blog-card__meta">
                                        <li>
                                            <a href="#">
                                                <img src="assets/images/blog/blog-author-1-3.jpg" alt="ostech" />
                                                Eleanor Pena
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="icon-bubble-chat-1"></i>2 Comments
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="blog-card__content__inner">
                                        <h3 className="blog-card__title">
                                            <a href="blog-details-right.html">Improving Business Growth with New Technology</a>
                                        </h3>
                                        <a href="blog-details-right.html" className="blog-card__link">
                                            Read more<i className="icon-arrow-left"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Blog section End --> */}
        </PageBody>
    );
};

export default HomePage;

export const Head: HeadFC = () => <PageHead />;

export const projects = graphql`
    {
        allContentfulProjects(sort: { updatedAt: DESC }) {
            nodes {
                id
                title
                subtitle
                slug
                thumbnail {
                    localFile {
                        publicURL
                    }
                }
            }
        }
    }
`;

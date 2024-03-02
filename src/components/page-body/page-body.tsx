import * as React from "react";

const PageBody: React.FC<{
    children?: React.ReactNode;
}> = ({ children }) => {
    React.useEffect(() => {
        document.getElementById("custom_js")?.remove();

        const script = document.createElement("script");
        script.id = "custom_js";
        script.src = "/assets/js/ostech.js";
        document.body.appendChild(script);
    }, []);

    return (
        <div className="custom-cursor">
            {/* <!-- Custom Cursor --> */}
            <div className="custom-cursor__cursor"></div>
            <div className="custom-cursor__cursor-two"></div>

            {/* <!-- Preloader Start --> */}
            <div className="preloader">
                <div
                    className="preloader__image"
                    style={{
                        backgroundImage: "url(/assets/images/loader.png)",
                    }}
                ></div>
            </div>

            {/* <!-- Preloader End --> */}
            <div className="page-wrapper">
                <div className="topbar-one">
                    <div className="container-fluid">
                        <div className="topbar-one__inner">
                            <ul className="list-unstyled topbar-one__info">
                                <li className="topbar-one__info__item">
                                    <i className="icon-Pin topbar-one__info__icon"></i>
                                    <span className="topbar-one__info__item__location">102 Nguyễn Minh Chấn, Hoà Khánh Nam, Liên Chiểu, Đà Nẵng</span>
                                </li>
                                <li className="topbar-one__info__item">
                                    <i className="icon-email topbar-one__info__icon"></i>
                                    <a href="mailto:passgenix@solutions.com">passgenix@solutions.com</a>
                                </li>
                            </ul>
                            <div className="topbar-one__right">
                                <a href="tel:+92-3800-8060" className="topbar-one__right__call">
                                    <div className="topbar-one__right__call__icon">
                                        <i className="icon-telephone"></i>
                                    </div>
                                    <p className="topbar-one__right__call__text">+84 946 672 181</p>
                                </a>
                                <div className="topbar-one__social">
                                    <a href="https://facebook.com">
                                        <i className="icon-facebook-f" aria-hidden="true"></i>
                                        <span className="sr-only">Facebook</span>
                                    </a>
                                    <a href="https://twitter.com">
                                        <i className="icon-x-twitter" aria-hidden="true"></i> <span className="sr-only">Twitter</span>
                                    </a>
                                    <a href="https://pinterest.com">
                                        <i className="icon-pinterest-p" aria-hidden="true"></i>
                                        <span className="sr-only">Pinterest</span>
                                    </a>
                                    <a href="https://instagram.com">
                                        <i className="icon-youtube" aria-hidden="true"></i>
                                        <span className="sr-only">Instagram</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <header className="main-header main-header--two sticky-header sticky-header--normal">
                    <div className="container-fluid">
                        <div className="main-header__inner">
                            <div className="main-header__logo logo-ostech">
                                <a href="index.html">
                                    <img src="/assets/images/logo-dark.png" alt="Ostech HTML" width="136" />
                                </a>
                            </div>
                            {/* <!-- /.main-header__logo --> */}
                            <div className="main-header__inner__item">
                                <nav className="main-header__nav main-menu">
                                    <ul className="main-menu__list">
                                        <li>
                                            <a href="/">Khám Phá</a>
                                        </li>
                                        <li>
                                            <a href="/projects">Dự Án</a>
                                        </li>
                                        <li>
                                            <a href="/teams">Thành Viên</a>
                                        </li>
                                    </ul>
                                </nav>
                                {/* <!-- /.main-header__nav --> */}
                                <div className="main-header__right">
                                    <div className="main-header__right__btn">
                                        <a href="/contact" className="ostech-btn main-header__btn">
                                            Liên Hệ Ngay
                                        </a>
                                    </div>
                                    <a href="#" className="search-toggler main-header__right__info__item">
                                        <i className="icon-search" aria-hidden="true"></i>
                                        <span className="sr-only">Search</span>
                                    </a>
                                    <div className="mobile-nav__btn mobile-nav__toggler">
                                        <span></span> <span></span> <span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* <!-- Page Content Start --> */}
                {children}
                {/* <!-- Page Content End --> */}

                <footer className="main-footer">
                    <div className="main-footer__top">
                        <div className="container">
                            <div className="main-footer__top__inner">
                                <div className="main-footer__top__logo">
                                    <a href="index.html" className="footer__logo ostech-logo">
                                        <img src="/assets/images/logo-light.png" width="120" alt="Ostech HTML Template" />
                                    </a>
                                </div>
                                <div className="main-footer__top__social">
                                    <a href="https://facebook.com">
                                        <i className="icon-facebook-f" aria-hidden="true"></i>
                                        <span className="sr-only">Facebook</span>
                                    </a>
                                    <a href="https://twitter.com">
                                        <i className="icon-x-twitter" aria-hidden="true"></i> <span className="sr-only">Twitter</span>
                                    </a>
                                    <a href="https://pinterest.com">
                                        <i className="icon-pinterest-p" aria-hidden="true"></i>
                                        <span className="sr-only">Pinterest</span>
                                    </a>
                                    <a href="https://instagram.com">
                                        <i className="icon-youtube" aria-hidden="true"></i>
                                        <span className="sr-only">Instagram</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="main-footer__middle">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 col-xl-5">
                                    <div className="footer-widget footer-widget--about">
                                        <h2 className="footer-widget__title">Passgenix Solutions</h2>
                                        <p className="footer-widget__text">Great Product For Your Business</p>
                                        <form action="#" data-url="MAILCHIMP_FORM_URL" className="footer-widget__newsletter mc-form">
                                            <input type="email" name="EMAIL" placeholder="Địa chỉ email" />
                                            <button type="submit" className="icon-right-arrow">
                                                <span className="sr-only">submit</span>
                                            </button>
                                        </form>
                                        <div className="mc-form__response"></div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-3">
                                    <div className="footer-widget footer-widget--links">
                                        <h2 className="footer-widget__title">Liên kết</h2>
                                        <ul className="list-unstyled footer-widget__links">
                                            <li className="footer-widget__links__item">
                                                <a href="project.html">Dự Án</a>
                                            </li>
                                            <li className="footer-widget__links__item">
                                                <a href="team.html">Thành Viên</a>
                                            </li>
                                            <li className="footer-widget__links__item">
                                                <a href="blog-list.html">Blogs & Tin Tức</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* <div className="col-md-6 col-xl-3">
                        <div className="footer-widget footer-widget--instagram">
                            <h2 className="footer-widget__title">Gallery</h2>
                            <div className="footer-widget__instagram">
                                <a href="/assets/images/instagram/1-1.jpg" className="img-popup">
                                    <img src="/assets/images/instagram/1.jpg" alt="ostech image" />
                                </a>
                                <a href="/assets/images/instagram/1-2.jpg" className="img-popup">
                                    <img src="/assets/images/instagram/2.jpg" alt="ostech image" />
                                </a>
                                <a href="/assets/images/instagram/1-3.jpg" className="img-popup">
                                    <img src="/assets/images/instagram/3.jpg" alt="ostech image" />
                                </a>
                                <a href="/assets/images/instagram/1-4.jpg" className="img-popup">
                                    <img src="/assets/images/instagram/4.jpg" alt="ostech image" />
                                </a>
                                <a href="/assets/images/instagram/1-5.jpg" className="img-popup">
                                    <img src="/assets/images/instagram/5.jpg" alt="ostech image" />
                                </a>
                                <a href="/assets/images/instagram/1-6.jpg" className="img-popup">
                                    <img src="/assets/images/instagram/6.jpg" alt="ostech image" />
                                </a>
                            </div>
                        </div>
                    </div> */}
                                <div className="col-md-6 col-xl-4">
                                    <div className="footer-widget footer-widget--contact">
                                        <h2 className="footer-widget__title">Thông Tin Liên Hệ</h2>
                                        <ul className="list-unstyled footer-widget__contact">
                                            <li className="footer-widget__contact__item">
                                                <div className="footer-widget__contact__icon">
                                                    <i className="icon-call"></i>
                                                </div>
                                                <div className="footer-widget__contact__inner">
                                                    <a href="tel:+92-3800-8060" className="footer-widget__contact__text">
                                                        +84 946 672 181
                                                    </a>
                                                    <a href="tel:+21-9555-0114" className="footer-widget__contact__text">
                                                        +84 946 672 181
                                                    </a>
                                                </div>
                                            </li>

                                            {/* <li className="footer-widget__contact__item">
                              <div className="footer-widget__contact__icon">
                                  <i className="icon-Earth"></i>
                              </div>
                              <div className="footer-widget__contact__inner">
                                  <a href="https://themeforest.net/user/bracket-web"
                                      className="footer-widget__contact__text">mitc@example.com</a>
                                  <a href="https://themeforest.net/user/bracket-web"
                                      className="footer-widget__contact__text">www.website.com</a>
                              </div>
                          </li> */}
                                            <li className="footer-widget__contact__item">
                                                <div className="footer-widget__contact__icon">
                                                    <i className="icon-Pin"></i>
                                                </div>
                                                <div className="footer-widget__contact__inner">
                                                    <p className="footer-widget__contact__text">
                                                        102 Nguyễn Minh Chấn <br /> Hoà Khánh Nam, Liên Chiểu, Đà Nẵng
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="footer-widget__thumb">
                                            <img src="/assets/images/resources/footer-1-1.png" alt="ostech image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="main-footer__bottom">
                        <div className="container">
                            <div className="main-footer__bottom__inner">
                                <p className="main-footer__copyright">
                                    {" "}
                                    &copy; Copyright <span className="dynamic-year"></span> by Passgenix Solutions.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="main-footer__shape">
                        <img src="/assets/images/shapes/footer-shape.png" alt="footer-shape" />
                    </div>
                    <div className="main-footer__earth">
                        <img src="/assets/images/shapes/earth-footer.png" alt="footer-shape" />
                    </div>
                </footer>
            </div>

            {/* <!-- Mobile Nav Wrapper --> */}
            <div className="mobile-nav__wrapper">
                <div className="mobile-nav__overlay mobile-nav__toggler"></div>

                {/* <!-- /.mobile-nav__overlay --> */}
                <div className="mobile-nav__content">
                    <span className="mobile-nav__close mobile-nav__toggler">
                        <i className="fa fa-times"></i>
                    </span>

                    <div className="logo-box">
                        <a href="index.html" aria-label="logo image">
                            <img src="/assets/images/logo-light.png" width="155" alt="ostech logo" />
                        </a>
                    </div>

                    {/* <!-- /.logo-box --> */}
                    <div className="mobile-nav__container"></div>

                    {/* <!-- /.mobile-nav__container --> */}

                    <ul className="mobile-nav__contact list-unstyled">
                        <li>
                            <i className="fa fa-envelope"></i>
                            <a href="mailto:needhelp@ostech.com">needhelp@ostech.com</a>
                        </li>
                        <li>
                            <i className="fa fa-phone-alt"></i>
                            <a href="tel:666-888-0000">666 888 0000</a>
                        </li>
                    </ul>
                    {/* <!-- /.mobile-nav__contact --> */}
                    <div className="mobile-nav__social">
                        <a href="https://facebook.com">
                            <i className="icon-facebook-f" aria-hidden="true"></i>
                            <span className="sr-only">Facebook</span>
                        </a>
                        <a href="https://twitter.com">
                            <i className="icon-x-twitter" aria-hidden="true"></i> <span className="sr-only">Twitter</span>
                        </a>
                        <a href="https://pinterest.com">
                            <i className="icon-pinterest-p" aria-hidden="true"></i>
                            <span className="sr-only">Pinterest</span>
                        </a>
                        <a href="https://instagram.com">
                            <i className="icon-youtube" aria-hidden="true"></i>
                            <span className="sr-only">Instagram</span>
                        </a>
                    </div>
                    {/* <!-- /.mobile-nav__social --> */}
                </div>

                {/* <!-- /.mobile-nav__content --> */}
            </div>

            {/* <!-- Search Popup --> */}
            <div className="search-popup">
                <div className="search-popup__overlay search-toggler"></div>
                <div className="search-popup__content">
                    <form role="search" method="get" className="search-popup__form" action="#">
                        <input type="text" id="search" placeholder="Search Here..." />
                        <button type="submit" aria-label="search submit" className="ostech-btn">
                            <span>
                                <i className="icon-search"></i>
                            </span>
                        </button>
                    </form>
                </div>
            </div>

            {/* <!-- Scroll To Top --> */}
            <a href="#" data-target="html" className="scroll-to-target scroll-to-top">
                <span className="scroll-to-top__text">Back Top</span>
                <span className="scroll-to-top__wrapper">
                    <span className="scroll-to-top__inner"></span>
                </span>
            </a>
        </div>
    );
};

export default PageBody;

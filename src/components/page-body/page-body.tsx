import * as React from "react";

const PageBody: React.FC<{
    children?: React.ReactNode;
}> = ({ children }) => {
    React.useEffect(() => {
        // Put custom scripts here
        const scriptInfos: Record<string, { path: string } & Record<string, any>> = {
            countdown_js: {
                path: "/assets/js/vendors/countdown.js",
                type: "module",
            },
            counterup_js: {
                path: "/assets/js/vendors/counterup.js",
                type: "module",
            },
            menu_js: {
                path: "/assets/js/vendors/menu.js",
            },
            main_js: {
                path: "/assets/js/main.js",
            },
        };

        Object.keys(scriptInfos).forEach((key) => {
            const scriptInfo = scriptInfos[key];

            document.getElementById(key)?.remove();

            const script = document.createElement("script");
            script.id = key;
            script.src = scriptInfo.path;
            if (scriptInfo.type) script.type = scriptInfo.type;

            document.body.appendChild(script);
        });
    }, []);

    return (
        <div className="page-wrapper relative z-[1] bg-white">
            {/* <!--...::: Header Start :::... --> */}
            <header className="site-header site-header--absolute is--white py-3" id="sticky-menu">
                <div className="container-default">
                    <div className="flex items-center justify-between gap-x-8">
                        {/* <!-- Header Logo --> */}
                        <a href="index.html" className="">
                            <img src="/assets/img/logo-blue-dark.png" alt="Masco" width="109" height="24" />
                        </a>
                        {/* <!-- Header Logo --> */}

                        {/* <!-- Header Navigation --> */}
                        <div className="menu-block-wrapper">
                            <div className="menu-overlay"></div>
                            <nav className="menu-block" id="append-menu-header">
                                <div className="mobile-menu-head">
                                    <div className="go-back">
                                        <i className="fa-solid fa-angle-left"></i>
                                    </div>
                                    <div className="current-menu-title"></div>
                                    <div className="mobile-menu-close">&times;</div>
                                </div>
                                <ul className="site-menu-main">
                                    <li className="nav-item nav-item-has-children">
                                        <a href="#" className="nav-link-item drop-trigger">
                                            Demo <i className="fa-solid fa-angle-down"></i>
                                        </a>
                                        <ul className="sub-menu" id="submenu-1">
                                            <li className="sub-menu--item">
                                                <a href="index.html">Digital agency</a>
                                            </li>
                                            <li className="sub-menu--item">
                                                <a href="index-2.html">Chat software</a>
                                            </li>
                                            <li className="sub-menu--item">
                                                <a href="index-3.html">Fitness App</a>
                                            </li>
                                            <li className="sub-menu--item">
                                                <a href="index-4.html">Online Courses</a>
                                            </li>
                                            <li className="sub-menu--item">
                                                <a href="index-5.html">SEO Agency</a>
                                            </li>
                                            <li className="sub-menu--item">
                                                <a href="index-6.html">Cold Email</a>
                                            </li>
                                            <li className="sub-menu--item">
                                                <a href="index-7.html">Web Hosting</a>
                                            </li>
                                            <li className="sub-menu--item">
                                                <a href="index-8.html">Startup</a>
                                            </li>
                                            <li className="sub-menu--item">
                                                <a href="index-9.html">Tracking Software</a>
                                            </li>
                                            <li className="sub-menu--item">
                                                <a href="index-10.html">AI Writing Tool</a>
                                            </li>
                                            <li className="sub-menu--item">
                                                <a href="index-11.html">Website Builder</a>
                                            </li>
                                            <li className="sub-menu--item">
                                                <a href="index-12.html">AI Photo Editor</a>
                                            </li>
                                            <li className="sub-menu--item">
                                                <a href="index-13.html">initial coin offering (ICO)</a>
                                            </li>
                                            <li className="sub-menu--item">
                                                <a href="index-14.html">AI Content Generator</a>
                                            </li>
                                            <li className="sub-menu--item">
                                                <a href="index-15.html">IT Service</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a href="about.html" className="nav-link-item">
                                            About
                                        </a>
                                    </li>
                                    <li className="nav-item nav-item-has-children">
                                        <a href="#" className="nav-link-item drop-trigger">
                                            Services
                                            <i className="fa-solid fa-angle-down"></i>
                                        </a>
                                        <ul className="sub-menu" id="submenu-2">
                                            <li className="sub-menu--item">
                                                <a href="services.html">Services</a>
                                            </li>
                                            <li className="sub-menu--item">
                                                <a href="service-details.html">Service Details</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item nav-item-has-children">
                                        <a href="#" className="nav-link-item drop-trigger">
                                            Pages <i className="fa-solid fa-angle-down"></i>
                                        </a>
                                        <ul className="sub-menu" id="submenu-3">
                                            <li className="sub-menu--item nav-item-has-children">
                                                <a href="#" data-menu-get="h3" className="drop-trigger">
                                                    blogs <i className="fa-solid fa-angle-right"></i>
                                                </a>
                                                <ul className="sub-menu shape-none" id="submenu-4">
                                                    <li className="sub-menu--item">
                                                        <a href="blog.html">blogs</a>
                                                    </li>
                                                    <li className="sub-menu--item">
                                                        <a href="blog-details.html">blog details</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="sub-menu--item nav-item-has-children">
                                                <a href="#" data-menu-get="h3" className="drop-trigger">
                                                    Team
                                                    <i className="fa-solid fa-angle-right"></i>
                                                </a>
                                                <ul className="sub-menu shape-none" id="submenu-5">
                                                    <li className="sub-menu--item">
                                                        <a href="teams.html">Teams</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="sub-menu--item nav-item-has-children">
                                                <a href="#" data-menu-get="h3" className="drop-trigger">
                                                    FAQ
                                                    <i className="fa-solid fa-angle-right"></i>
                                                </a>
                                                <ul className="sub-menu shape-none" id="submenu-6">
                                                    <li className="sub-menu--item">
                                                        <a href="faq.html">FAQ-1</a>
                                                    </li>
                                                    <li className="sub-menu--item">
                                                        <a href="faq-2.html">FAQ-2</a>
                                                    </li>
                                                    <li className="sub-menu--item">
                                                        <a href="faq-3.html">FAQ-3</a>
                                                    </li>
                                                    <li className="sub-menu--item">
                                                        <a href="faq-4.html">FAQ-4</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="sub-menu--item nav-item-has-children">
                                                <a href="#" data-menu-get="h3" className="drop-trigger">
                                                    Portfolio
                                                    <i className="fa-solid fa-angle-right"></i>
                                                </a>
                                                <ul className="sub-menu shape-none" id="submenu-7">
                                                    <li className="sub-menu--item">
                                                        <a href="portfolio.html">Portfolio Classic</a>
                                                    </li>
                                                    <li className="sub-menu--item">
                                                        <a href="portfolio-2.html">Portfolio Masonry</a>
                                                    </li>
                                                    <li className="sub-menu--item">
                                                        <a href="portfolio-3.html">Portfolio Modern</a>
                                                    </li>
                                                    <li className="sub-menu--item">
                                                        <a href="portfolio-4.html">Portfolio Minimal</a>
                                                    </li>
                                                    <li className="sub-menu--item">
                                                        <a href="portfolio-details.html">Portfolio Details</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="sub-menu--item nav-item-has-children">
                                                <a href="#" data-menu-get="h3" className="drop-trigger">
                                                    Pricing
                                                    <i className="fa-solid fa-angle-right"></i>
                                                </a>
                                                <ul className="sub-menu shape-none" id="submenu-8">
                                                    <li className="sub-menu--item">
                                                        <a href="pricing.html">Pricing-1</a>
                                                    </li>
                                                    <li className="sub-menu--item">
                                                        <a href="pricing-2.html">Pricing-2</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="sub-menu--item nav-item-has-children">
                                                <a href="#" data-menu-get="h3" className="drop-trigger">
                                                    Careers
                                                    <i className="fa-solid fa-angle-right"></i>
                                                </a>
                                                <ul className="sub-menu shape-none" id="submenu-9">
                                                    <li className="sub-menu--item">
                                                        <a href="careers.html">Career</a>
                                                    </li>
                                                    <li className="sub-menu--item">
                                                        <a href="career-details.html">Career Details</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="sub-menu--item nav-item-has-children">
                                                <a href="#" data-menu-get="h3" className="drop-trigger">
                                                    Utilities
                                                    <i className="fa-solid fa-angle-right"></i>
                                                </a>
                                                <ul className="sub-menu shape-none" id="submenu-10">
                                                    <li className="sub-menu--item">
                                                        <a href="login.html">Login</a>
                                                    </li>
                                                    <li className="sub-menu--item">
                                                        <a href="signup.html">Signup</a>
                                                    </li>
                                                    <li className="sub-menu--item">
                                                        <a href="reset-password.html">Reset Password</a>
                                                    </li>
                                                    <li className="sub-menu--item">
                                                        <a href="coming-soon.html">Coming Soon</a>
                                                    </li>
                                                    <li className="sub-menu--item">
                                                        <a href="error-404.html">Error 404</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item nav-item-has-children">
                                        <a href="#" className="nav-link-item drop-trigger">
                                            Contact
                                            <i className="fa-solid fa-angle-down"></i>
                                        </a>
                                        <ul className="sub-menu" id="submenu-11">
                                            <li className="sub-menu--item">
                                                <a href="contact.html">Contact-1</a>
                                            </li>
                                            <li className="sub-menu--item">
                                                <a href="contact-2.html">Contact-2</a>
                                            </li>
                                            <li className="sub-menu--item">
                                                <a href="contact-3.html">Contact-3</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        {/* <!-- Header Navigation --> */}

                        {/* <!-- Header User Event --> */}
                        <div className="flex items-center gap-6">
                            <a href="login.html" className="btn-text hidden hover:text-ColorBlue sm:inline-block">
                                Login
                            </a>
                            <a href="signup.html" className="btn is-blue is-rounded btn-animation group hidden sm:inline-block">
                                <span>Sign up free</span>
                            </a>
                            {/* <!-- Responsive Offcanvas Menu Button --> */}
                            <div className="block lg:hidden">
                                <button id="openBtn" className="hamburger-menu mobile-menu-trigger">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>
                            </div>
                        </div>
                        {/* <!-- Header User Event --> */}
                    </div>
                </div>
            </header>
            {/* <!--...::: Header End :::... --> */}

            <main className="main-wrapper relative overflow-hidden">{children}</main>

            {/* <!--...::: Footer Section Start :::... --> */}
            <footer className="section-footer">
                <div className="bg-ColorBlack">
                    {/* <!-- Footer Area Top --> */}
                    <div className="relative z-10">
                        {/* <!-- Footer Top Spacing --> */}
                        <div className="pb-[60px] pt-20 lg:pb-20 lg:pt-[100px] xl:pt-[120px]">
                            {/* <!-- Section Container --> */}
                            <div className="container-default">
                                {/* <!-- Section Wrapper --> */}
                                <div className="flex flex-wrap items-center justify-center text-center lg:text-left lg:justify-between gap-8">
                                    {/* <!-- Section Block --> */}
                                    <div className="max-w-[400px] md:max-w-[500px] lg:max-w-[550px]">
                                        <h2 className="text-white">Ready to grow your business digitally?</h2>
                                    </div>
                                    {/* <!-- Section Block --> */}
                                    <a href="portfolio.html" className="btn is-blue is-rounded btn-animation is-large group">
                                        <span>Let's start the project</span>
                                    </a>
                                </div>
                                {/* <!-- Section Wrapper --> */}
                            </div>
                            {/* <!-- Section Container --> */}
                        </div>
                        {/* <!-- Footer Top Spacing --> */}

                        {/* <!-- CTA Shape --> */}
                        <div className="absolute right-[9%] top-8 -z-10 hidden xxl:block">
                            <img src="/assets/img/elements/cta-1-shape-1.svg" alt="cta-1-shape-1" width="115" height="130" />
                        </div>
                    </div>
                    {/* <!-- Footer Area Top --> */}

                    {/* <!-- Horizontal Line Separator --> */}
                    <div className="horizontal-line bg-white"></div>
                    {/* <!-- Horizontal Line Separator --> */}

                    {/* <!-- Footer Area Center --> */}
                    <div className="text-white">
                        {/* <!-- Footer Center Spacing --> */}
                        <div className="py-[60px] lg:py-20">
                            {/* <!-- Section Container --> */}
                            <div className="container-default">
                                {/* <!-- Footer Widget List --> */}
                                <div className="grid gap-x-16 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1fr_repeat(3,_auto)] xl:gap-x-24 xxl:gap-x-[134px]">
                                    {/* <!-- Footer Widget Item --> */}
                                    <div className="flex flex-col gap-y-7 md:col-span-3 lg:col-span-1">
                                        {/* <!-- Footer Logo --> */}
                                        <a href="index.html">
                                            <img src="/assets/img/logo-blue-light.png" alt="Masco" width="109" height="24" />
                                        </a>
                                        {/* <!-- Footer Content --> */}
                                        <div>
                                            {/* <!-- Footer About Text --> */}
                                            <div className="lg:max-w-[416px]">
                                                We are strategic & creative digital agency who are focused on user experience, mobile, social, data gathering and promotional
                                                offerings.
                                            </div>
                                            {/* <!-- Footer Mail --> */}
                                            <a href="mailto:yourdemo@email.com" className="my-6 block underline-offset-4 transition-all duration-300 hover:underline">
                                                yourdemo@email.com
                                            </a>
                                            {/* <!-- Footer Social Link --> */}
                                            <div className="flex flex-wrap gap-5">
                                                <a
                                                    href="https://twitter.com"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-white bg-opacity-5 text-sm text-white transition-all duration-300 hover:bg-ColorBlue"
                                                    aria-label="twitter"
                                                >
                                                    <i className="fa-brands fa-x-twitter"></i>
                                                </a>
                                                <a
                                                    href="https://www.facebook.com/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-white bg-opacity-5 text-sm text-white transition-all duration-300 hover:bg-ColorBlue"
                                                    aria-label="facebook"
                                                >
                                                    <i className="fa-brands fa-facebook-f"></i>
                                                </a>
                                                <a
                                                    href="https://www.instagram.com/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-white bg-opacity-5 text-sm text-white transition-all duration-300 hover:bg-ColorBlue"
                                                    aria-label="instagram"
                                                >
                                                    <i className="fa-brands fa-instagram"></i>
                                                </a>
                                                <a
                                                    href="https://www.github.com/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-white bg-opacity-5 text-sm text-white transition-all duration-300 hover:bg-ColorBlue"
                                                    aria-label="github"
                                                >
                                                    <i className="fa-brands fa-github"></i>
                                                </a>
                                            </div>
                                        </div>
                                        {/* <!-- Footer Content --> */}
                                    </div>
                                    {/* <!-- Footer Widget Item --> */}

                                    {/* <!-- Footer Widget Item --> */}
                                    <div className="flex flex-col gap-y-7 md:col-span-1 lg:col-span-1">
                                        {/* <!-- Footer Widget Title --> */}
                                        <div className="text-xl font-semibold capitalize">Primary Pages</div>
                                        {/* <!-- Footer Navbar --> */}
                                        <ul className="flex flex-col gap-y-[10px] capitalize">
                                            <li>
                                                <a
                                                    href="index.html"
                                                    className="hover:opcity-100 underline-offset-4 opacity-80 transition-all duration-300 ease-linear hover:underline"
                                                >
                                                    Home
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="about.html"
                                                    className="hover:opcity-100 underline-offset-4 opacity-80 transition-all duration-300 ease-linear hover:underline"
                                                >
                                                    About Us
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="services.html"
                                                    className="hover:opcity-100 underline-offset-4 opacity-80 transition-all duration-300 ease-linear hover:underline"
                                                >
                                                    Services
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="pricing.html"
                                                    className="hover:opcity-100 underline-offset-4 opacity-80 transition-all duration-300 ease-linear hover:underline"
                                                >
                                                    pricing
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="contact.html"
                                                    className="hover:opcity-100 underline-offset-4 opacity-80 transition-all duration-300 ease-linear hover:underline"
                                                >
                                                    Contact
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <!-- Footer Widget Item --> */}

                                    {/* <!-- Footer Widget Item --> */}
                                    <div className="flex flex-col gap-y-6 md:col-span-1 lg:col-span-1">
                                        {/* <!-- Footer Title --> */}
                                        <div className="text-xl font-semibold capitalize">Utility pages</div>
                                        {/* <!-- Footer Title --> */}

                                        {/* <!-- Footer Navbar --> */}
                                        <ul className="flex flex-col gap-y-[10px] capitalize">
                                            <li>
                                                <a
                                                    href="signup.html"
                                                    className="hover:opcity-100 underline-offset-4 opacity-80 transition-all duration-300 ease-linear hover:underline"
                                                >
                                                    Signup
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="login.html"
                                                    className="hover:opcity-100 underline-offset-4 opacity-80 transition-all duration-300 ease-linear hover:underline"
                                                >
                                                    Login
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="error-404.html"
                                                    className="hover:opcity-100 underline-offset-4 opacity-80 transition-all duration-300 ease-linear hover:underline"
                                                >
                                                    404 Not found
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="reset-password.html"
                                                    className="hover:opcity-100 underline-offset-4 opacity-80 transition-all duration-300 ease-linear hover:underline"
                                                >
                                                    Password Reset
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <!-- Footer Widget Item--> */}

                                    {/* <!-- Footer Widget Item --> */}
                                    <div className="flex flex-col gap-y-6 md:col-span-1 lg:col-span-1">
                                        {/* <!-- Footer Title --> */}
                                        <div className="text-xl font-semibold capitalize">Resources</div>
                                        {/* <!-- Footer Title --> */}

                                        {/* <!-- Footer Navbar --> */}
                                        <ul className="flex flex-col gap-y-[10px] capitalize">
                                            <li>
                                                <a
                                                    href="https://www.example.com/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="hover:opcity-100 underline-offset-4 opacity-80 transition-all duration-300 ease-linear hover:underline"
                                                >
                                                    Support
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="https://www.example.com/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="hover:opcity-100 underline-offset-4 opacity-80 transition-all duration-300 ease-linear hover:underline"
                                                >
                                                    Privacy policy
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="https://www.example.com/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="hover:opcity-100 underline-offset-4 opacity-80 transition-all duration-300 ease-linear hover:underline"
                                                >
                                                    Terms & Conditions
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="https://www.example.com/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="hover:opcity-100 underline-offset-4 opacity-80 transition-all duration-300 ease-linear hover:underline"
                                                >
                                                    Strategic finance
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="https://www.example.com/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="hover:opcity-100 underline-offset-4 opacity-80 transition-all duration-300 ease-linear hover:underline"
                                                >
                                                    Video guide
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <!-- Footer Widget Item --> */}
                                </div>
                                {/* <!-- Footer Widget List --> */}
                            </div>
                            {/* <!-- Section Container --> */}
                        </div>
                        {/* <!-- Footer Center Spacing --> */}
                    </div>
                    {/* <!-- Footer Area Center --> */}

                    {/* <!-- Footer Bottom --> */}
                    <div className="bg-white bg-opacity-5">
                        {/* <!-- Footer Bottom Spacing --> */}
                        <div className="py-[18px]">
                            {/* <!-- Section Container --> */}
                            <div className="container-default">
                                <div className="text-center text-white text-opacity-80">&copy; Copyright 2024, All Rights Reserved by Mthemeus</div>
                            </div>
                            {/* <!-- Section Container --> */}
                        </div>
                        {/* <!-- Footer Bottom Spacing --> */}
                    </div>
                    {/* <!-- Footer Bottom --> */}
                </div>
            </footer>
            {/* <!--...::: Footer Section End :::... --> */}
        </div>
    );
};

export default PageBody;

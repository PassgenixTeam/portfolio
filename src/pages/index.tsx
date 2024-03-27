import { HeadFC, PageProps, graphql } from "gatsby";
import * as React from "react";
import PageHead from "../components/page-head/page-head";
import PageBody from "../components/page-body/page-body";

const HomePage: React.FC<
    PageProps<{
        allContentfulProject: Queries.ContentfulProjectGroupConnection;
        allContentfulService: Queries.ContentfulServiceGroupConnection;
    }>
> = ({ data }) => {
    const projects = data.allContentfulProject.nodes;
    const services = data.allContentfulService.nodes;

    return (
        <PageBody>
            {/* <!--...::: Hero Section Start :::... --> */}
            <section className="section-hero">
                <div className="relative z-10 overflow-hidden bg-[#FAF9F5]">
                    {/* <!-- Section Space --> */}
                    <div className="pb-[60px] pt-28 md:pb-20 md:pt-36 lg:pb-[100px] lg:pt-[150px] xxl:pb-[120px] xxl:pt-[185px]">
                        {/* <!-- Section Container --> */}
                        <div className="container-custom">
                            {/* <!-- Hero Area --> */}
                            <div className="grid gap-10 lg:grid-cols-2 xxl:grid-cols-[1.1fr_minmax(0,_1fr)]">
                                {/* <!-- Hero Content Block --> */}
                                <div className="jos">
                                    <div className="has-container-custom">
                                        <h1 className="mb-6">We bring innovative solutions.</h1>
                                        <p>
                                            Augment your internal development resources with a team of highly skilled technologists. Achieve operational efficiency and
                                            cost-effectiveness while accelerating your time to market.
                                        </p>
                                        <form action="#" method="post" className="relative mx-auto flex w-full items-center sm:w-[80%] lg:mx-0 lg:mt-5 lg:max-w-md">
                                            <input
                                                type="email"
                                                placeholder="Enter your email"
                                                className="w-full rounded-[50px] border border-ColorBlack bg-white px-5 py-[15px] pr-40 text-base font-semibold text-opacity-50 outline-none"
                                            />
                                            <button type="submit" className="btn is-blue is-rounded absolute right-[5px] py-[10px]">
                                                Subscribe
                                            </button>
                                        </form>
                                        <div className="mt-5 text-sm leading-6 md:justify-normal">
                                            <span className="mr-2 inline-block text-lg text-ColorPrimary">
                                                <i className="fa-solid fa-badge-check"></i>
                                            </span>
                                            <span className="opacity-50">No credit card is required. You can cancel anytime</span>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Hero Content Block --> */}

                                {/* <!-- Hero Image Block --> */}
                                <div className="jos">
                                    <div className="relative flex items-center justify-center">
                                        <img src="assets/img/th-1/hero-img.jpg" alt="hero image" width="600" height="579" className="h-auto w-full" />
                                        <a
                                            data-fslightbox="gallery"
                                            href="/https://www.youtube.com/watch?v=3nQNiWdeH2Q"
                                            className="group group absolute flex h-[100px] w-[100px] items-center justify-center rounded-[50%] bg-white text-ColorPrimary"
                                            aria-label="video-play"
                                        >
                                            <span className="text-2xl transition-all duration-300 ease-linear group-hover:scale-110">
                                                <i className="fa-solid fa-play"></i>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                {/* <!-- Hero Image Block --> */}
                            </div>
                            {/* <!-- Hero Area --> */}
                        </div>
                        {/* <!-- Section Container --> */}
                    </div>
                    {/* <!-- Section Space --> */}

                    {/* <!-- Hero Shape - 1 --> */}
                    <div className="absolute left-0 top-0 -z-10">
                        <img src="assets/img/elements/hero-1-shape-1.svg" alt="hero-shape-1" width="607" height="792" className="" />
                    </div>

                    {/* <!-- Hero Shape - 2 --> */}
                    <div className="absolute bottom-0 right-0 -z-[1]">
                        <img src="assets/img/elements/hero-1-shape-2.svg" alt="hero-shape-2" width="607" height="792" />
                    </div>
                </div>
            </section>
            {/* <!--...::: Hero Section End :::... --> */}

            {/* <!--...::: Brand Section Start :::... --> */}
            <div className="section-brand">
                <div className="jos">
                    {/* <!-- Section Space --> */}
                    <div className="py-[60px] md:py-20 lg:py-[100px]">
                        {/* <!-- Section Container --> */}
                        <div className="container-default">
                            <div className="mx-auto mb-10 max-w-[80%] text-center text-xl font-semibold leading-[1.4] opacity-70 md:mb-16 lg:mb-20 lg:max-w-2xl">
                                We are familiar with the latest technologies and frameworks
                            </div>
                            {/* <!-- Brand Slider --> */}
                            <div className="swiper brand-slider">
                                {/* <!-- Additional required wrapper --> */}
                                <div className="swiper-wrapper">
                                    {/* <!-- Slides --> */}
                                    <a href="#" className="swiper-slide">
                                        <img src="assets/img/th-1/brand-1.png" alt="brand-1" width="186" height="46" className="h-auto w-fit" />
                                    </a>
                                    <a href="#" className="swiper-slide">
                                        <img src="assets/img/th-1/brand-2.png" alt="brand-2" width="186" height="46" className="h-auto w-fit" />
                                    </a>
                                    <a href="#" className="swiper-slide">
                                        <img src="assets/img/th-1/brand-3.png" alt="brand-3" width="186" height="46" className="h-auto w-fit" />
                                    </a>
                                    <a href="#" className="swiper-slide">
                                        <img src="assets/img/th-1/brand-4.png" alt="brand-4" width="186" height="46" className="h-auto w-fit" />
                                    </a>
                                    <a href="#" className="swiper-slide">
                                        <img src="assets/img/th-1/brand-5.png" alt="brand-5" width="186" height="46" className="h-auto w-fit" />
                                    </a>
                                    <a href="#" className="swiper-slide">
                                        <img src="assets/img/th-1/brand-1.png" alt="brand-1" width="186" height="46" className="h-auto w-fit" />
                                    </a>
                                    <a href="#" className="swiper-slide">
                                        <img src="assets/img/th-1/brand-2.png" alt="brand-2" width="186" height="46" className="h-auto w-fit" />
                                    </a>
                                    <a href="#" className="swiper-slide">
                                        <img src="assets/img/th-1/brand-3.png" alt="brand-3" width="186" height="46" className="h-auto w-fit" />
                                    </a>
                                    <a href="#" className="swiper-slide">
                                        <img src="assets/img/th-1/brand-4.png" alt="brand-4" width="186" height="46" className="h-auto w-fit" />
                                    </a>
                                    <a href="#" className="swiper-slide">
                                        <img src="assets/img/th-1/brand-5.png" alt="brand-5" width="186" height="46" className="h-auto w-fit" />
                                    </a>
                                </div>
                            </div>
                            {/* <!-- Brand Slider --> */}
                        </div>
                        {/* <!-- Section Container --> */}
                    </div>
                    {/* <!-- Section Space --> */}
                </div>
            </div>
            {/* <!--...::: Brand Section End :::... --> */}

            {/* <!-- Horizontal Line Separator --> */}
            <div className="horizontal-line bg-ColorBlack"></div>
            {/* <!-- Horizontal Line Separator --> */}

            {/* <!--...::: Service Section Start :::... --> */}
            <section className="section-service">
                <div className="relative z-10 overflow-hidden">
                    {/* <!-- Section Space --> */}
                    <div className="section-space">
                        {/* <!-- Section Container --> */}
                        <div className="container-custom">
                            {/* <!-- Section Content Wrapper --> */}
                            <div className="jos mb-[60px] xl:mb-20">
                                {/* <!-- Section Content Block --> */}
                                <div className="mx-auto max-w-[590px]">
                                    <h2 className="text-center">All the common services that are suitable for you</h2>
                                </div>
                                {/* <!-- Section Content Block --> */}
                            </div>
                            {/* <!-- Section Content Wrapper --> */}

                            {/* <!-- Service List --> */}
                            <div className="grid gap-6 sm:grid-cols-2">
                                {/* <!-- Service Item --> */}
                                <div className="jos" data-jos_delay="0">
                                    <div className="group rounded-[10px] border border-[#E6E6E6] bg-white p-8 transition-all duration-300 ease-in-out hover:border-teal-400 hover:bg-teal-50 lg:p-10 h-full">
                                        <div className="flex flex-col gap-x-10 gap-y-6 sm:gap-y-8 lg:flex-row">
                                            <div className="relative mx-auto flex w-16 items-center justify-center lg:w-[98px]">
                                                <img
                                                    src="assets/img/icons/icon-black-service-1.svg"
                                                    alt="icon-service-1"
                                                    width="98"
                                                    height="100"
                                                    className="opcity-100 h-auto w-full transition-all duration-300 ease-in-out group-hover:opacity-0"
                                                />
                                                <img
                                                    src="assets/img/icons/icon-blue-service-1.svg"
                                                    alt="icon-service-1"
                                                    width="98"
                                                    height="100"
                                                    className="absolute h-auto w-full opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100"
                                                />
                                            </div>
                                            <div className="flex-1 text-center lg:text-left">
                                                <div className="mb-4 text-xl font-semibold leading-[1.33] -tracking-[0.5px] text-ColorBlack lg:text-2xl">AI & Machine Learning</div>
                                                <p className="mb-5 line-clamp-2 text-ColorBlack/80">Empower your projects with intelligent automation and data-driven insights.</p>
                                                <a
                                                    href="/service-details"
                                                    className="inline-flex items-center gap-x-2 text-base font-bold text-ColorBlack group-hover:text-ColorPrimary"
                                                >
                                                    Find out more
                                                    <span className="transition-all duration-300 ease-in-out group-hover:translate-x-2">
                                                        <i className="fa-solid fa-arrow-right"></i>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Service Item --> */}
                                {/* <!-- Service Item --> */}
                                <div className="jos" data-jos_delay="0.3">
                                    <div className="group rounded-[10px] border border-[#E6E6E6] bg-white p-8 transition-all duration-300 ease-in-out hover:border-teal-400 hover:bg-teal-50 lg:p-10 h-full">
                                        <div className="flex flex-col gap-x-10 gap-y-6 sm:gap-y-8 lg:flex-row">
                                            <div className="relative mx-auto flex w-16 items-center justify-center lg:w-[98px]">
                                                <img
                                                    src="assets/img/icons/icon-black-service-2.svg"
                                                    alt="icon-service-2"
                                                    width="98"
                                                    height="100"
                                                    className="opcity-100 h-auto w-full transition-all duration-300 ease-in-out group-hover:opacity-0"
                                                />
                                                <img
                                                    src="assets/img/icons/icon-blue-service-2.svg"
                                                    alt="icon-service-2"
                                                    width="98"
                                                    height="100"
                                                    className="absolute h-auto w-full opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100"
                                                />
                                            </div>
                                            <div className="flex-1 text-center lg:text-left">
                                                <div className="mb-4 text-xl font-semibold leading-[1.33] -tracking-[0.5px] text-ColorBlack lg:text-2xl">Web & App Development</div>
                                                <p className="mb-5 line-clamp-2 text-ColorBlack/80">
                                                    Craft exceptional web and mobile applications to bring your digital vision to life.
                                                </p>
                                                <a
                                                    href="/service-details"
                                                    className="inline-flex items-center gap-x-2 text-base font-bold text-ColorBlack group-hover:text-ColorPrimary"
                                                >
                                                    Find out more
                                                    <span className="transition-all duration-300 ease-in-out group-hover:translate-x-2">
                                                        <i className="fa-solid fa-arrow-right"></i>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Service Item --> */}
                                {/* <!-- Service Item --> */}
                                <div className="jos" data-jos_delay="0.6">
                                    <div className="group rounded-[10px] border border-[#E6E6E6] bg-white p-8 transition-all duration-300 ease-in-out hover:border-teal-400 hover:bg-teal-50 lg:p-10 h-full">
                                        <div className="flex flex-col gap-x-10 gap-y-6 sm:gap-y-8 lg:flex-row">
                                            <div className="relative mx-auto flex w-16 items-center justify-center lg:w-[98px]">
                                                <img
                                                    src="assets/img/icons/icon-black-service-3.svg"
                                                    alt="icon-service-3"
                                                    width="98"
                                                    height="100"
                                                    className="opcity-100 h-auto w-full transition-all duration-300 ease-in-out group-hover:opacity-0"
                                                />
                                                <img
                                                    src="assets/img/icons/icon-blue-service-3.svg"
                                                    alt="icon-service-3"
                                                    width="98"
                                                    height="100"
                                                    className="absolute h-auto w-full opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100"
                                                />
                                            </div>
                                            <div className="flex-1 text-center lg:text-left">
                                                <div className="mb-4 text-xl font-semibold leading-[1.33] -tracking-[0.5px] text-ColorBlack lg:text-2xl">Data Solutions</div>
                                                <p className="mb-5 line-clamp-2 text-ColorBlack/80">
                                                    Harness the power of data to unlock actionable insights and inform strategic decision-making.
                                                </p>
                                                <a
                                                    href="/service-details"
                                                    className="inline-flex items-center gap-x-2 text-base font-bold text-ColorBlack group-hover:text-ColorPrimary"
                                                >
                                                    Find out more
                                                    <span className="transition-all duration-300 ease-in-out group-hover:translate-x-2">
                                                        <i className="fa-solid fa-arrow-right"></i>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Service Item --> */}
                                {/* <!-- Service Item --> */}
                                <div className="jos" data-jos_delay="0.9">
                                    <div className="group rounded-[10px] border border-[#E6E6E6] bg-white p-8 transition-all duration-300 ease-in-out hover:border-teal-400 hover:bg-teal-50 lg:p-10 h-full">
                                        <div className="flex flex-col gap-x-10 gap-y-6 sm:gap-y-8 lg:flex-row">
                                            <div className="relative mx-auto flex w-16 items-center justify-center lg:w-[98px]">
                                                <img
                                                    src="assets/img/icons/icon-black-service-4.svg"
                                                    alt="icon-service-4"
                                                    width="98"
                                                    height="100"
                                                    className="opcity-100 h-auto w-full transition-all duration-300 ease-in-out group-hover:opacity-0"
                                                />
                                                <img
                                                    src="assets/img/icons/icon-blue-service-4.svg"
                                                    alt="icon-service-4"
                                                    width="98"
                                                    height="100"
                                                    className="absolute h-auto w-full opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100"
                                                />
                                            </div>
                                            <div className="flex-1 text-center lg:text-left">
                                                <div className="mb-4 text-xl font-semibold leading-[1.33] -tracking-[0.5px] text-ColorBlack lg:text-2xl">Maintenance & Support</div>
                                                <p className="mb-5 line-clamp-2 text-ColorBlack/80">
                                                    Keep your technology running smoothly, maximizing uptime and minimizing disruption.
                                                </p>
                                                <a
                                                    href="/service-details"
                                                    className="inline-flex items-center gap-x-2 text-base font-bold text-ColorBlack group-hover:text-ColorPrimary"
                                                >
                                                    Find out more
                                                    <span className="transition-all duration-300 ease-in-out group-hover:translate-x-2">
                                                        <i className="fa-solid fa-arrow-right"></i>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Service Item --> */}
                            </div>
                            {/* <!-- Service List --> */}
                        </div>
                        {/* <!-- Section Container --> */}
                    </div>
                    {/* <!-- Section Space --> */}

                    {/* <!-- Service Shape --> */}
                    <div className="absolute bottom-0 left-0 -z-10">
                        <img src="assets/img/elements/service-1-shape-1.svg" alt="service-section-shape" width="390" height="507" />
                    </div>
                    {/* <!-- Service Shape --> */}
                </div>
            </section>
            {/* <!--...::: Service Section End :::... --> */}

            {/* <!--...::: Content Section Start :::... --> */}
            <section className="section-content">
                {/* <!-- Section Background --> */}
                <div className="bg-ColorOffWhite">
                    {/* <!-- Section Spacer --> */}
                    <div className="section-space">
                        {/* <!-- Section Container --> */}
                        <div className="container-custom">
                            <div className="flex flex-col gap-y-20 lg:gap-y-[100px] xl:gap-y-[120px]">
                                {/* <!-- Content Area Single --> */}
                                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-24 xl:grid-cols-[1.2fr_minmax(0,_1fr)] xl:gap-[135px]">
                                    {/* <!-- Content Block Left --> */}
                                    <div className="jos" data-jos_animation="fade-right">
                                        {/* <!-- Section Wrapper --> */}
                                        <div>
                                            {/* <!-- Section Block --> */}
                                            <div className="mb-5">
                                                <h2>Amplify Your Brand & Drive Results with Data-Driven Digital Solutions</h2>
                                            </div>
                                            {/* <!-- Section Block --> */}
                                        </div>
                                        {/* <!-- Section Wrapper --> */}
                                        <p>
                                            We've been transforming bold business ideas into market-leading digital products. We go beyond development, solving real business
                                            challenges.
                                        </p>
                                        <p>
                                            <strong>Data-Driven Strategies:</strong> We use data to craft promotions that resonate with your audience and build a strong brand
                                            identity.
                                        </p>
                                        <p>
                                            <strong>Seamless Digital Products:</strong> We design and develop user-centric solutions that meet your business goals and user needs,
                                            delivered on time and budget. identity.
                                        </p>
                                    </div>
                                    {/* <!-- Content Block Left --> */}
                                    {/* <!-- Content Block Right --> */}
                                    <div className="jos relative" data-jos_animation="fade-left">
                                        <div className="rounded-[10px] bg-[#FCEDCF] p-[30px] lg:p-10 xl:p-[50px]">
                                            {/* <!-- Content Image --> */}
                                            <img src="assets/img/th-1/content-img-1.jpg" alt="content-img-1" width="426" height="398" className="h-auto w-full rounded-[10px]" />
                                        </div>
                                        {/* <!-- Content Shape --> */}
                                        <img src="assets/img/elements/content-shape-1.svg" alt="content-shape-1" width="168" height="61" className="absolute -right-16 -top-16" />
                                    </div>
                                    {/* <!-- Content Block Right --> */}
                                </div>
                                {/* <!-- Content Area Single --> */}

                                {/* <!-- Content Area Single --> */}
                                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-24 xl:grid-cols-[1fr_minmax(0,_1.2fr)] xl:gap-[135px]">
                                    {/* <!-- Content Block Left --> */}
                                    <div className="jos lg:order-2" data-jos_animation="fade-left">
                                        {/* <!-- Section Wrapper --> */}
                                        <div>
                                            {/* <!-- Section Block --> */}
                                            <div className="mb-5">
                                                <h2>Discover the latest digital strategies & emerging ideas for business growth</h2>
                                            </div>
                                            {/* <!-- Section Block --> */}
                                        </div>
                                        {/* <!-- Section Wrapper --> */}
                                        <p>
                                            Our team of experienced designers and developers create cutting-edge websites that combine innovative design with the latest
                                            technologies.
                                        </p>
                                        <ul className="flex flex-col gap-5 font-semibold text-ColorBlack">
                                            <li>
                                                <span className="mr-3 inline-block text-xl text-ColorPrimary">
                                                    <i className="fa-solid fa-badge-check"></i>
                                                </span>
                                                Reach new technology trends or implement your product ideas.
                                            </li>
                                            <li>
                                                <span className="mr-3 inline-block text-xl text-ColorPrimary">
                                                    <i className="fa-solid fa-badge-check"></i>
                                                </span>
                                                Automate your processes and get data-driven business insights.
                                            </li>
                                            <li>
                                                <span className="mr-3 inline-block text-xl text-ColorPrimary">
                                                    <i className="fa-solid fa-badge-check"></i>
                                                </span>
                                                Create lightweight, scalable, and easly accessible cloud solution.
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <!-- Content Block Left --> */}
                                    {/* <!-- Content Block Right --> */}
                                    <div className="jos relative lg:order-1" data-jos_animation="fade-right">
                                        <div className="rounded-[10px] bg-[#BEF8FC] p-[30px] lg:p-10 xl:p-[50px]">
                                            {/* <!-- Content Image --> */}
                                            <img src="assets/img/th-1/content-img-2.jpg" alt="content-img-1" width="426" height="398" className="h-auto w-full rounded-[10px]" />
                                        </div>
                                        {/* <!-- Content Shape --> */}
                                        <img src="assets/img/elements/content-shape-2.svg" alt="content-shape-1" width="107" height="105" className="absolute -bottom-1 -left-1" />
                                    </div>
                                    {/* <!-- Content Block Right --> */}
                                </div>
                                {/* <!-- Content Area Single --> */}
                            </div>
                        </div>
                        {/* <!-- Section Container --> */}
                    </div>
                    {/* <!-- Section Spacer --> */}
                </div>
                {/* <!-- Section Background --> */}
            </section>
            {/* <!--...::: Content Section End :::... --> */}

            {/* <!--...::: Portfolio Section Start :::... --> */}
            <section className="section-portfolio">
                <div className="relative z-10 overflow-hidden">
                    {/* <!-- Section Space --> */}
                    <div className="section-space">
                        {/* <!-- Section Container --> */}
                        <div className="container-default">
                            {/* <!-- Section Wrapper --> */}
                            <div className="jos mb-[60px] flex flex-wrap items-end justify-between gap-8 xl:mb-20">
                                {/* <!-- Section Block --> */}
                                <div className="max-w-[550px]">
                                    <h2>Discover our latest project in this year</h2>
                                </div>
                                {/* <!-- Section Block --> */}
                                <a href="/portfolio" className="btn is-blue is-rounded btn-animation is-large group">
                                    <span>See more works</span>
                                </a>
                            </div>
                            {/* <!-- Section Wrapper --> */}

                            {/* <!-- Portfolio List --> */}
                            <div className="grid gap-8 md:grid-cols-2 lg:gap-10 xl:gap-[60px]">
                                {/* <!-- Portfolio Item --> */}
                                <div className="jos" data-jos_delay="0">
                                    <div className="group">
                                        <div className="overflow-hidden rounded-[10px]">
                                            <img
                                                src="assets/img/th-1/portfolio-img-1.jpg"
                                                alt="portfolio-img-1"
                                                width="617"
                                                height="450"
                                                className="h-full w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="mt-6">
                                            <div className="mb-5 flex flex-wrap justify-between gap-5 text-ColorBlack lg:flex-nowrap xl:mb-7">
                                                <a
                                                    href="/portfolio-details"
                                                    className="text-xl font-semibold leading-[1.33] -tracking-[0.5px] group-hover:text-ColorPrimary xl:text-2xl"
                                                >
                                                    App — The power of communication
                                                </a>
                                                <a href="#" className="hover:text-ColorPrimary">
                                                    UI/UX Design
                                                </a>
                                            </div>
                                            <a href="/portfolio-details" className="text-base font-bold capitalize leading-[1.5] group-hover:text-ColorPrimary">
                                                View work
                                                <span className="inline-block transition-all duration-150 group-hover:translate-x-2">
                                                    <i className="fa-solid fa-arrow-right"></i>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Portfolio Item --> */}
                                {/* <!-- Portfolio Item --> */}
                                <div className="jos" data-jos_delay="0.3">
                                    <div className="group">
                                        <div className="overflow-hidden rounded-[10px]">
                                            <img
                                                src="assets/img/th-1/portfolio-img-2.jpg"
                                                alt="portfolio-img-2"
                                                width="617"
                                                height="450"
                                                className="h-full w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="mt-6">
                                            <div className="mb-5 flex flex-wrap justify-between gap-5 text-ColorBlack lg:flex-nowrap xl:mb-7">
                                                <a
                                                    href="/portfolio-details"
                                                    className="text-xl font-semibold leading-[1.33] -tracking-[0.5px] group-hover:text-ColorPrimary xl:text-2xl"
                                                >
                                                    Website — The future lifestyle platform.
                                                </a>
                                                <a href="#" className="hover:text-ColorPrimary">
                                                    Branding
                                                </a>
                                            </div>
                                            <a href="/portfolio-details" className="text-base font-bold capitalize leading-[1.5] group-hover:text-ColorPrimary">
                                                View work
                                                <span className="inline-block transition-all duration-150 group-hover:translate-x-2">
                                                    <i className="fa-solid fa-arrow-right"></i>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Portfolio Item --> */}
                            </div>
                            {/* <!-- Portfolio List --> */}
                        </div>
                        {/* <!-- Section Container --> */}
                    </div>
                    {/* <!-- Section Space --> */}

                    {/* <!-- Portfolio Shape - 2 --> */}
                    <div className="absolute right-0 top-0 -z-10">
                        <img src="assets/img/elements/portfolio-1-shape-1.svg" alt="portfolio-1-shape-1" width="467" height="609" />
                    </div>
                </div>
            </section>
            {/* <!--...::: Portfolio Section End :::... --> */}

            {/* <!--...::: Testimonial Section Start :::... --> */}
            <section className="section-testimonial">
                {/* <!-- Section Background --> */}
                <div className="bg-ColorOffWhite">
                    {/* <!-- Section Space --> */}
                    <div className="section-space">
                        {/* <!-- Section Container --> */}
                        <div className="container-custom">
                            {/* <!-- Section Content Wrapper --> */}
                            <div className="jos mb-[60px] xl:mb-20">
                                {/* <!-- Section Content Block --> */}
                                <div className="mx-auto max-w-[625px]">
                                    <h2 className="text-center">Most of our satisfied clients leave their feedback</h2>
                                </div>
                                {/* <!-- Section Content Block --> */}
                            </div>
                            {/* <!-- Section Content Wrapper --> */}

                            {/* <!-- Testimonial Area --> */}
                            <div className="grid items-center gap-10 lg:grid-cols-2 xl:gap-20 xxl:grid-cols-[1.1fr_minmax(0,_1fr)]">
                                <img
                                    src="assets/img/th-1/testimonial-image-1.jpg"
                                    alt="testimonial-image-1"
                                    width="636"
                                    height="446"
                                    className="jos h-auto w-full rounded-2xl"
                                    data-jos_animation="fade-right"
                                />
                                <div className="jos flex flex-col text-ColorBlack" data-jos_animation="fade-left">
                                    <img
                                        src="assets/img/icons/icon-blue-quote-right-reverse.svg"
                                        alt="icon-blue-quote-right-reverse"
                                        width="90"
                                        height="60"
                                        className="h-auto w-10 xl:w-[90px]"
                                    />
                                    <p className="mt-[30px] text-xl font-semibold leading-[1.33] -tracking-[0.5px] lg:text-2xl">
                                        They’re probably one of the easiest vendors I’ve ever worked with in the digital space. They have our best interests in mind. The team went
                                        the extra mile in negotiating costs and delivering within a flexible scope. They’re customer focused and strong in terms of development
                                        quality.
                                    </p>
                                    <div className="mb-8 lg:mb-[50px]">
                                        <span className="block text-xl font-semibold">Dominika Drońska</span>
                                        <span className="block">Senior Digital Marketing Manager, Abbey Road Studios</span>
                                    </div>
                                    <a href="/portfolio-details" className="group text-base font-bold capitalize leading-[1.5] hover:text-ColorPrimary">
                                        Read more reviews
                                        <span className="inline-block transition-all duration-150 group-hover:translate-x-2">
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            {/* <!-- Testimonial Area --> */}
                        </div>
                        {/* <!-- Section Container --> */}
                    </div>
                    {/* <!-- Section Space --> */}
                </div>
                {/* <!-- Section Background --> */}
            </section>
            {/* <!--...::: Testimonial Section End :::... --> */}

            {/* <!--...::: FAQ Section Start :::... --> */}
            <section className="section-faq">
                <div className="relative z-10 overflow-hidden">
                    {/* <!-- Section Space --> */}
                    <div className="section-space">
                        {/* <!-- Section Container --> */}
                        <div className="container-default">
                            {/* <!-- Section Content Wrapper --> */}
                            <div className="jos mb-[60px] xl:mb-20">
                                {/* <!-- Section Content Block --> */}
                                <div className="mx-auto max-w-[625px]">
                                    <h2 className="text-center">Frequently asked questions about our digital agency</h2>
                                </div>
                                {/* <!-- Section Content Block --> */}
                            </div>
                            {/* <!-- Section Content Wrapper --> */}
                            {/* <!-- FAQ Area --> */}
                            <div className="jos">
                                {/* <!-- Accordion List --> */}
                                <ul className="mx-auto max-w-[1076px] rounded-[10px] border border-ColorBlack">
                                    {/* <!-- Accordion Item --> */}
                                    <li className="accordion-item active overflow-hidden border-b border-ColorBlack p-[30px] last:border-b-0">
                                        {/* <!-- Accordion Header --> */}
                                        <div className="accordion-header flex justify-between gap-6 text-xl font-semibold text-ColorBlack">
                                            <button className="flex-1 text-left">Q. What is a digital agency?</button>
                                            <div className="accordion-icon-1 relative flex h-5 w-5 items-center justify-center rounded-[50%] bg-ColorBlue">
                                                <span className="inline-block h-0.5 w-[10px] rounded-sm bg-white"></span>
                                                <span className="absolute inline-block h-[10px] w-0.5 rotate-0 rounded-sm bg-white"></span>
                                            </div>
                                        </div>
                                        {/* <!-- Accordion Header --> */}
                                        {/* <!-- Accordion Body --> */}
                                        <div className="accordion-body max-w-[826px] opacity-80">
                                            <p className="pt-5">
                                                A digital agency is a company that leverages digital channels to grow their clients’ brands online. ls and technologies such as web
                                                design, digital marketing, creative design and app development.
                                            </p>
                                        </div>
                                        {/* <!-- Accordion Body --> */}
                                    </li>
                                    {/* <!-- Accordion Item --> */}
                                    {/* <!-- Accordion Item --> */}
                                    <li className="accordion-item overflow-hidden border-b border-ColorBlack p-[30px] last:border-b-0">
                                        {/* <!-- Accordion Header --> */}
                                        <div className="accordion-header flex justify-between gap-6 text-xl font-semibold text-ColorBlack">
                                            <button className="flex-1 text-left">Q. What services does a digital agency provide?</button>
                                            <div className="accordion-icon-1 relative flex h-5 w-5 items-center justify-center rounded-[50%] bg-ColorBlue">
                                                <span className="inline-block h-0.5 w-[10px] rounded-sm bg-white"></span>
                                                <span className="absolute inline-block h-[10px] w-0.5 rotate-0 rounded-sm bg-white"></span>
                                            </div>
                                        </div>
                                        {/* <!-- Accordion Header --> */}
                                        {/* <!-- Accordion Body --> */}
                                        <div className="accordion-body max-w-[826px] opacity-80">
                                            <p className="pt-5">
                                                A digital agency is a company that leverages digital channels to grow their clients’ brands online. ls and technologies such as web
                                                design, digital marketing, creative design and app development.
                                            </p>
                                        </div>
                                        {/* <!-- Accordion Body --> */}
                                    </li>
                                    {/* <!-- Accordion Item --> */}
                                    {/* <!-- Accordion Item --> */}
                                    <li className="accordion-item overflow-hidden border-b border-ColorBlack p-[30px] last:border-b-0">
                                        {/* <!-- Accordion Header --> */}
                                        <div className="accordion-header flex justify-between gap-6 text-xl font-semibold text-ColorBlack">
                                            <button className="flex-1 text-left">Q. Hiring a digital agency vs hiring in-house: What is the difference?</button>
                                            <div className="accordion-icon-1 relative flex h-5 w-5 items-center justify-center rounded-[50%] bg-ColorBlue">
                                                <span className="inline-block h-0.5 w-[10px] rounded-sm bg-white"></span>
                                                <span className="absolute inline-block h-[10px] w-0.5 rotate-0 rounded-sm bg-white"></span>
                                            </div>
                                        </div>
                                        {/* <!-- Accordion Header --> */}
                                        {/* <!-- Accordion Body --> */}
                                        <div className="accordion-body max-w-[826px] opacity-80">
                                            <p className="pt-5">
                                                A digital agency is a company that leverages digital channels to grow their clients’ brands online. ls and technologies such as web
                                                design, digital marketing, creative design and app development.
                                            </p>
                                        </div>
                                        {/* <!-- Accordion Body --> */}
                                    </li>
                                    {/* <!-- Accordion Item --> */}
                                    {/* <!-- Accordion Item --> */}
                                    <li className="accordion-item overflow-hidden border-b border-ColorBlack p-[30px] last:border-b-0">
                                        {/* <!-- Accordion Header --> */}
                                        <div className="accordion-header flex justify-between gap-6 text-xl font-semibold text-ColorBlack">
                                            <button className="flex-1 text-left">Q. What questions should you ask when interviewing a digital agency?</button>
                                            <div className="accordion-icon-1 relative flex h-5 w-5 items-center justify-center rounded-[50%] bg-ColorBlue">
                                                <span className="inline-block h-0.5 w-[10px] rounded-sm bg-white"></span>
                                                <span className="absolute inline-block h-[10px] w-0.5 rotate-0 rounded-sm bg-white"></span>
                                            </div>
                                        </div>
                                        {/* <!-- Accordion Header --> */}
                                        {/* <!-- Accordion Body --> */}
                                        <div className="accordion-body max-w-[826px] opacity-80">
                                            <p className="pt-5">
                                                A digital agency is a company that leverages digital channels to grow their clients’ brands online. ls and technologies such as web
                                                design, digital marketing, creative design and app development.
                                            </p>
                                        </div>
                                        {/* <!-- Accordion Body --> */}
                                    </li>
                                    {/* <!-- Accordion Item --> */}
                                    {/* <!-- Accordion Item --> */}
                                    <li className="accordion-item overflow-hidden border-b border-ColorBlack p-[30px] last:border-b-0">
                                        {/* <!-- Accordion Header --> */}
                                        <div className="accordion-header flex justify-between gap-6 text-xl font-semibold text-ColorBlack">
                                            <button className="flex-1 text-left">Q. How do digital agencies charge for their services?</button>
                                            <div className="accordion-icon-1 relative flex h-5 w-5 items-center justify-center rounded-[50%] bg-ColorBlue">
                                                <span className="inline-block h-0.5 w-[10px] rounded-sm bg-white"></span>
                                                <span className="absolute inline-block h-[10px] w-0.5 rotate-0 rounded-sm bg-white"></span>
                                            </div>
                                        </div>
                                        {/* <!-- Accordion Header --> */}
                                        {/* <!-- Accordion Body --> */}
                                        <div className="accordion-body max-w-[826px] opacity-80">
                                            <p className="pt-5">
                                                A digital agency is a company that leverages digital channels to grow their clients’ brands online. ls and technologies such as web
                                                design, digital marketing, creative design and app development.
                                            </p>
                                        </div>
                                        {/* <!-- Accordion Body --> */}
                                    </li>
                                    {/* <!-- Accordion Item --> */}
                                </ul>
                                {/* <!-- Accordion List --> */}

                                <div className="jos mt-[60px] flex justify-center xl:mt-20">
                                    <a href="/contact" className="btn is-blue is-rounded btn-animation is-large group">
                                        <span>Still, have any questions? Contact us</span>
                                    </a>
                                </div>
                            </div>
                            {/* <!-- FAQ Area --> */}
                        </div>
                        {/* <!-- Section Container --> */}
                    </div>
                    {/* <!-- Section Space --> */}

                    {/* <!-- FAQ Shape - 1 --> */}
                    <div className="absolute left-0 top-0 -z-10">
                        <img src="assets/img/elements/faq-1-shape-1.svg" alt="service-section-shape" width="390" height="507" />
                    </div>
                    {/* <!-- FAQ Shape - 2 --> */}
                    <div className="absolute bottom-0 right-0 -z-10">
                        <img src="assets/img/elements/faq-1-shape-2.svg" alt="service-section-shape" width="467" height="609" />
                    </div>
                </div>
            </section>
            {/* <!--...::: FAQ Section End :::... --> */}
        </PageBody>
    );
};

export default HomePage;

export const Head: HeadFC = () => <PageHead />;

export const projects = graphql`
    {
        allContentfulProject(sort: { updatedAt: DESC }) {
            nodes {
                id
                title
                slug
                thumbnail {
                    localFile {
                        publicURL
                    }
                }
                service {
                    title
                }
            }
        }

        allContentfulService {
            nodes {
                id
                title
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

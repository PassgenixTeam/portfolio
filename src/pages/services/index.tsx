import { HeadFC, PageProps, graphql } from "gatsby";
import * as React from "react";
import PageHead from "../../components/page-head/page-head";
import PageBody from "../../components/page-body/page-body";

const ServicePage: React.FC<PageProps> = ({ data }) => {
    return (
        <PageBody>
            {/* <!--...::: Breadcrumb Section Start :::... --> */}
            <section className="section-breadcrumb">
                {/* <!-- Breadcrumb Section Spacer --> */}
                <div className="breadcrumb-wrapper">
                    {/* <!-- Section Container --> */}
                    <div className="container-default">
                        <div className="breadcrumb-block">
                            <h1 className="breadcrumb-title">Our Services</h1>
                            <ul className="breadcrumb-nav">
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                <li>Our Services</li>
                            </ul>
                        </div>
                    </div>
                    {/* <!-- Section Container --> */}

                    {/* <!-- Breadcrumb Shape - 1 --> */}
                    <div className="absolute left-0 top-0 -z-10">
                        <img src="/assets/img/elements/breadcrumb-shape-1.svg" alt="hero-shape-1" width="291" height="380" />
                    </div>

                    {/* <!-- Breadcrumb Shape - 2 --> */}
                    <div className="absolute bottom-0 right-0 -z-[1]">
                        <img src="/assets/img/elements/breadcrumb-shape-2.svg" alt="hero-shape-2" width="291" height="380" />
                    </div>
                </div>
                {/* <!-- Breadcrumb Section Spacer --> */}
            </section>
            {/* <!--...::: Breadcrumb Section End :::... --> */}

            {/* <!--...::: Service Section Start :::... --> */}
            <div className="section-service">
                <div className="relative z-10 overflow-hidden">
                    {/* <!-- Section Space --> */}
                    <div className="section-space">
                        {/* <!-- Section Container --> */}
                        <div className="container-default">
                            {/* <!-- Service List --> */}
                            <div className="grid gap-6 sm:grid-cols-2">
                                {/* <!-- Service Item --> */}
                                <div className="jos" data-jos_delay="0">
                                    <div className="group rounded-[10px] bg-white p-8 transition-all duration-300 ease-in-out hover:shadow-[0_4px_60px_0_rgba(10,16,47,0.06)] lg:p-10">
                                        <div className="flex flex-col gap-x-10 gap-y-6 sm:gap-y-8 lg:flex-row">
                                            <div className="relative mx-auto flex w-16 items-center justify-center lg:w-[98px]">
                                                <img
                                                    src="/assets/img/icons/icon-black-service-1.svg"
                                                    alt="icon-service-1"
                                                    width="98"
                                                    height="100"
                                                    className="opcity-100 h-auto w-full transition-all duration-300 ease-in-out group-hover:opacity-0"
                                                />
                                                <img
                                                    src="/assets/img/icons/icon-blue-service-1.svg"
                                                    alt="icon-service-1"
                                                    width="98"
                                                    height="100"
                                                    className="absolute h-auto w-full opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100"
                                                />
                                            </div>
                                            <div className="flex-1 text-center lg:text-left">
                                                <div className="mb-4 text-xl font-semibold leading-[1.33] -tracking-[0.5px] text-ColorBlack lg:text-2xl">
                                                    Branding & Digital Strategies
                                                </div>
                                                <p className="mb-5 line-clamp-2 text-ColorBlack/80">
                                                    Brand strategy is all about developing a unique identity that distinguishes your business from
                                                </p>
                                                <a href="details" className="inline-flex items-center gap-x-2 text-base font-bold text-ColorBlack group-hover:text-ColorBlue">
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
                                    <div className="group rounded-[10px] bg-white p-8 transition-all duration-300 ease-in-out hover:shadow-[0_4px_60px_0_rgba(10,16,47,0.06)] lg:p-10">
                                        <div className="flex flex-col gap-x-10 gap-y-6 sm:gap-y-8 lg:flex-row">
                                            <div className="relative mx-auto flex w-16 items-center justify-center lg:w-[98px]">
                                                <img
                                                    src="/assets/img/icons/icon-black-service-2.svg"
                                                    alt="icon-service-2"
                                                    width="98"
                                                    height="100"
                                                    className="opcity-100 h-auto w-full transition-all duration-300 ease-in-out group-hover:opacity-0"
                                                />
                                                <img
                                                    src="/assets/img/icons/icon-blue-service-2.svg"
                                                    alt="icon-service-2"
                                                    width="98"
                                                    height="100"
                                                    className="absolute h-auto w-full opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100"
                                                />
                                            </div>
                                            <div className="flex-1 text-center lg:text-left">
                                                <div className="mb-4 text-xl font-semibold leading-[1.33] -tracking-[0.5px] text-ColorBlack lg:text-2xl">
                                                    Web Design & App Development
                                                </div>
                                                <p className="mb-5 line-clamp-2 text-ColorBlack/80">
                                                    Web design & development is an umbrella term that describes the process of creating a website
                                                </p>
                                                <a href="details" className="inline-flex items-center gap-x-2 text-base font-bold text-ColorBlack group-hover:text-ColorBlue">
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
                                    <div className="group rounded-[10px] bg-white p-8 transition-all duration-300 ease-in-out hover:shadow-[0_4px_60px_0_rgba(10,16,47,0.06)] lg:p-10">
                                        <div className="flex flex-col gap-x-10 gap-y-6 sm:gap-y-8 lg:flex-row">
                                            <div className="relative mx-auto flex w-16 items-center justify-center lg:w-[98px]">
                                                <img
                                                    src="/assets/img/icons/icon-black-service-3.svg"
                                                    alt="icon-service-3"
                                                    width="98"
                                                    height="100"
                                                    className="opcity-100 h-auto w-full transition-all duration-300 ease-in-out group-hover:opacity-0"
                                                />
                                                <img
                                                    src="/assets/img/icons/icon-blue-service-3.svg"
                                                    alt="icon-service-3"
                                                    width="98"
                                                    height="100"
                                                    className="absolute h-auto w-full opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100"
                                                />
                                            </div>
                                            <div className="flex-1 text-center lg:text-left">
                                                <div className="mb-4 text-xl font-semibold leading-[1.33] -tracking-[0.5px] text-ColorBlack lg:text-2xl">
                                                    Results-Driven Digital Marketing
                                                </div>
                                                <p className="mb-5 line-clamp-2 text-ColorBlack/80">
                                                    Digital marketing potential customers using the internet & other forms of digital communication
                                                </p>
                                                <a href="details" className="inline-flex items-center gap-x-2 text-base font-bold text-ColorBlack group-hover:text-ColorBlue">
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
                                    <div className="group rounded-[10px] bg-white p-8 transition-all duration-300 ease-in-out hover:shadow-[0_4px_60px_0_rgba(10,16,47,0.06)] lg:p-10">
                                        <div className="flex flex-col gap-x-10 gap-y-6 sm:gap-y-8 lg:flex-row">
                                            <div className="relative mx-auto flex w-16 items-center justify-center lg:w-[98px]">
                                                <img
                                                    src="/assets/img/icons/icon-black-service-4.svg"
                                                    alt="icon-service-4"
                                                    width="98"
                                                    height="100"
                                                    className="opcity-100 h-auto w-full transition-all duration-300 ease-in-out group-hover:opacity-0"
                                                />
                                                <img
                                                    src="/assets/img/icons/icon-blue-service-4.svg"
                                                    alt="icon-service-4"
                                                    width="98"
                                                    height="100"
                                                    className="absolute h-auto w-full opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100"
                                                />
                                            </div>
                                            <div className="flex-1 text-center lg:text-left">
                                                <div className="mb-4 text-xl font-semibold leading-[1.33] -tracking-[0.5px] text-ColorBlack lg:text-2xl">
                                                    Custom Software Development
                                                </div>
                                                <p className="mb-5 line-clamp-2 text-ColorBlack/80">
                                                    Custom Software Development is the process of conceptualizing, designing, building & deploying
                                                </p>
                                                <a href="details" className="inline-flex items-center gap-x-2 text-base font-bold text-ColorBlack group-hover:text-ColorBlue">
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
                                <div className="jos" data-jos_delay="1.2">
                                    <div className="group rounded-[10px] bg-white p-8 transition-all duration-300 ease-in-out hover:shadow-[0_4px_60px_0_rgba(10,16,47,0.06)] lg:p-10">
                                        <div className="flex flex-col gap-x-10 gap-y-6 sm:gap-y-8 lg:flex-row">
                                            <div className="relative mx-auto flex w-16 items-center justify-center lg:w-[98px]">
                                                <img
                                                    src="/assets/img/icons/icon-black-service-5.svg"
                                                    alt="icon-service-5"
                                                    width="98"
                                                    height="100"
                                                    className="opcity-100 h-auto w-full transition-all duration-300 ease-in-out group-hover:opacity-0"
                                                />
                                                <img
                                                    src="/assets/img/icons/icon-blue-service-5.svg"
                                                    alt="icon-service-5"
                                                    width="98"
                                                    height="100"
                                                    className="absolute h-auto w-full opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100"
                                                />
                                            </div>
                                            <div className="flex-1 text-center lg:text-left">
                                                <div className="mb-4 text-xl font-semibold leading-[1.33] -tracking-[0.5px] text-ColorBlack lg:text-2xl">
                                                    Search Engine Optimization
                                                </div>
                                                <p className="mb-5 line-clamp-2 text-ColorBlack/80">
                                                    SEO is the practice of orienting your website to rank higher on a sear engine results more traffic
                                                </p>
                                                <a href="details" className="inline-flex items-center gap-x-2 text-base font-bold text-ColorBlack group-hover:text-ColorBlue">
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
                                <div className="jos" data-jos_delay="1.5">
                                    <div className="group rounded-[10px] bg-white p-8 transition-all duration-300 ease-in-out hover:shadow-[0_4px_60px_0_rgba(10,16,47,0.06)] lg:p-10">
                                        <div className="flex flex-col gap-x-10 gap-y-6 sm:gap-y-8 lg:flex-row">
                                            <div className="relative mx-auto flex w-16 items-center justify-center lg:w-[98px]">
                                                <img
                                                    src="/assets/img/icons/icon-black-service-6.svg"
                                                    alt="icon-service-6"
                                                    width="98"
                                                    height="100"
                                                    className="opcity-100 h-auto w-full transition-all duration-300 ease-in-out group-hover:opacity-0"
                                                />
                                                <img
                                                    src="/assets/img/icons/icon-blue-service-6.svg"
                                                    alt="icon-service-6"
                                                    width="98"
                                                    height="100"
                                                    className="absolute h-auto w-full opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100"
                                                />
                                            </div>
                                            <div className="flex-1 text-center lg:text-left">
                                                <div className="mb-4 text-xl font-semibold leading-[1.33] -tracking-[0.5px] text-ColorBlack lg:text-2xl">
                                                    Social Media Strategies
                                                </div>
                                                <p className="mb-5 line-clamp-2 text-ColorBlack/80">
                                                    A social media strategy is an outline of content that your business will post, the responsibilities
                                                </p>
                                                <a href="details" className="inline-flex items-center gap-x-2 text-base font-bold text-ColorBlack group-hover:text-ColorBlue">
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
                </div>
            </div>
            {/* <!--...::: Service Section End :::... --> */}

            {/* <!-- Horizontal Separator --> */}
            <div className="horizontal-line bg-ColorBlack"></div>

            {/* <!--...::: Service Hero Section Start :::... --> */}
            <section className="section-about-hero">
                {/* <!-- Section Space --> */}
                <div className="section-space">
                    {/* <!-- Section Container --> */}
                    <div className="container-custom has-container-custom">
                        {/* <!-- About Hero Area --> */}
                        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-[60px] xl:gap-[100px] xxl:grid-cols-[1fr_minmax(0,_1.1fr)]">
                            {/* <!-- About Hero Image Block --> */}
                            <div className="jos order-2 lg:order-1" data-jos_animation="fade-left" data-jos_delay="0">
                                <div className="relative flex items-center justify-center mx-auto lg:mx-0 max-w-full sm:max-w-[80%] md:max-w-[70%] lg:max-w-full">
                                    <img src="/assets/img/th-1/about-hero-2.jpg" alt="hero image" width="580" height="550" className="h-auto w-full" />
                                    <a
                                        data-fslightbox="gallery"
                                        href="https://www.youtube.com/watch?v=3nQNiWdeH2Q"
                                        className="group group absolute flex h-[100px] w-[100px] items-center justify-center rounded-[50%] bg-white text-ColorBlue"
                                        aria-label="video-play"
                                    >
                                        <span className="text-2xl transition-all duration-300 ease-linear group-hover:scale-110">
                                            <i className="fa-solid fa-play"></i>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            {/* <!-- About Hero Image Block --> */}
                            {/* <!-- About Hero Content Block --> */}
                            <div className="jos order-1 lg:order-2" data-jos_animation="fade-right" data-jos_delay="0.3">
                                {/* <!-- Section Wrapper --> */}
                                <div>
                                    {/* <!-- Section Block --> */}
                                    <div className="mb-5">
                                        <h2>Our vision is to build brands and provide world-class experiences to our clients</h2>
                                    </div>
                                    {/* <!-- Section Block --> */}
                                    <p>
                                        SINCE 1998, we transform bold business ideas into exceptional digital products. We ideate, design, and develop data-driven digital products
                                        made to answer business challenges.
                                    </p>
                                    {/* <!-- Horizontal Line Separator --> */}
                                    <div className="my-7 h-px w-full bg-ColorBlack opacity-10 xl:my-10 xxl:my-14"></div>
                                    {/* <!-- BlockQuote Block--> */}
                                    <div>
                                        <blockquote className="mb-6 font-semibold italic text-opacity-80">
                                            “We love what we do & create partnerships with our clients to ensure their digital transformation is positioned for long-term success.”
                                        </blockquote>
                                        <div className="flex flex-col items-center gap-4 lg:flex-row">
                                            <img
                                                src="/assets/img/th-1/about-hero-user-blockquote-img.jpg"
                                                alt="about-hero-user-blockquote-img"
                                                width="60"
                                                height="60"
                                                className="mx-auto h-[60px] w-[60px] rounded-[50%] lg:mx-0"
                                            />
                                            <div>
                                                <span className="block font-semibold">Karen Lynn</span>
                                                <span className="text-sm text-opacity-80">CEO & Co-founder @ Company</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Section Wrapper --> */}
                            </div>
                            {/* <!-- About Hero Content Block --> */}
                        </div>
                        {/* <!-- About Hero Area --> */}
                    </div>
                    {/* <!-- Section Container --> */}
                </div>
                {/* <!-- Section Space --> */}
            </section>
            {/* <!--...::: Service Hero Section End :::... --> */}

            {/* <!--...::: Pricing Section Start :::... --> */}
            <section className="section-pricing">
                <div className="bg-ColorOffWhite">
                    {/* <!-- Section Space --> */}
                    <div className="section-space">
                        {/* <!-- Section Container --> */}
                        <div className="container-default">
                            {/* <!-- Section Content Wrapper --> */}
                            <div className="jos mb-[60px] xl:mb-20">
                                {/* <!-- Section Content Block --> */}
                                <div className="mx-auto max-w-[600px]">
                                    <h2 className="text-center">Choice the right pricing plan that suits your need</h2>
                                </div>
                                {/* <!-- Section Content Block --> */}
                            </div>
                            {/* <!-- Section Content Wrapper --> */}

                            {/* <!-- Pricing List --> */}
                            <div className="grid gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
                                {/* <!-- Pricing Item --> */}
                                <div className="jos" data-jos_animation="flip-left" data-jos_delay="0">
                                    <div className="hover-solid-shadow h-full">
                                        <div className="rounded-[10px] border-2 border-ColorBlack bg-white p-7 xl:p-10 h-full">
                                            {/* <!-- Pricing Content Top --> */}
                                            <div className="text-center text-ColorBlack">
                                                <span className="text-xl font-bold">Free Plan</span>
                                                <div className="text-[28px] font-normal leading-[2.85]">
                                                    $<span className="text-[48px] font-bold leading-[1.3] xl:text-[58px]">00</span>/month
                                                </div>
                                                <span className="text-sm text-ColorBlack/70">No credit card required</span>
                                            </div>
                                            {/* <!-- Pricing Content Top --> */}
                                            {/* <!-- Horizontal Line Separator --> */}
                                            <div className="my-10 h-px w-full bg-ColorBlack/10"></div>
                                            {/* <!-- Horizontal Line Separator --> */}
                                            {/* <!-- Pricing Data list --> */}
                                            <ul className="flex flex-col gap-y-6 text-base font-semibold text-ColorBlack xl:px-[18px]">
                                                <li className="flex gap-x-3">
                                                    <span className="text-xl">
                                                        <i className="fa-solid fa-star"></i>
                                                    </span>
                                                    Unlimited chats & websites
                                                </li>
                                                <li className="flex gap-x-3">
                                                    <span className="text-xl">
                                                        <i className="fa-solid fa-star"></i>
                                                    </span>
                                                    60-day conversations history
                                                </li>
                                                <li className="flex gap-x-3">
                                                    <span className="text-xl">
                                                        <i className="fa-solid fa-star"></i>
                                                    </span>
                                                    Basic widget customization
                                                </li>
                                                <li className="flex gap-x-3">
                                                    <span className="text-xl">
                                                        <i className="fa-solid fa-star"></i>
                                                    </span>
                                                    Web, desktop & mobile apps
                                                </li>
                                                <li className="flex gap-x-3 text-ColorBlack/10">
                                                    <span className="text-xl">
                                                        <i className="fa-solid fa-star"></i>
                                                    </span>
                                                    Engage visitors via visitor list
                                                </li>
                                                <li className="flex gap-x-3 text-ColorBlack/10">
                                                    <span className="text-xl">
                                                        <i className="fa-solid fa-star"></i>
                                                    </span>
                                                    Engage with automatic messages
                                                </li>
                                            </ul>
                                            {/* <!-- Pricing Data list --> */}
                                            <div className="mt-10 flex justify-center">
                                                <button className="btn is-white is-rounded is-large group w-full border-2">Purchase now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Pricing Item --> */}
                                {/* <!-- Pricing Item --> */}
                                <div className="jos" data-jos_animation="flip-left" data-jos_delay="0">
                                    <div className="hover-solid-shadow h-full">
                                        <div className="rounded-[10px] border-2 border-ColorBlack bg-white p-7 xl:p-10 h-full">
                                            {/* <!-- Pricing Content Top --> */}
                                            <div className="text-center text-ColorBlack">
                                                <span className="text-xl font-bold">Popular Plan</span>
                                                <div className="text-[28px] font-normal leading-[2.85]">
                                                    $<span className="text-[48px] font-bold leading-[1.3] xl:text-[58px]">199</span>/month
                                                </div>
                                                <span className="text-sm text-ColorBlack/70">No credit card required</span>
                                            </div>
                                            {/* <!-- Pricing Content Top --> */}
                                            {/* <!-- Horizontal Line Separator --> */}
                                            <div className="my-10 h-px w-full bg-ColorBlack/10"></div>
                                            {/* <!-- Horizontal Line Separator --> */}
                                            {/* <!-- Pricing Data list --> */}
                                            <ul className="flex flex-col gap-y-6 text-base font-semibold text-ColorBlack xl:px-[18px]">
                                                <li className="flex gap-x-3">
                                                    <span className="text-xl">
                                                        <i className="fa-solid fa-star"></i>
                                                    </span>
                                                    Live chat + email + FB Messenger
                                                </li>
                                                <li className="flex gap-x-3">
                                                    <span className="text-xl">
                                                        <i className="fa-solid fa-star"></i>
                                                    </span>
                                                    3-year conversations history
                                                </li>
                                                <li className="flex gap-x-3">
                                                    <span className="text-xl">
                                                        <i className="fa-solid fa-star"></i>
                                                    </span>
                                                    Advanced widget customization
                                                </li>
                                                <li className="flex gap-x-3">
                                                    <span className="text-xl">
                                                        <i className="fa-solid fa-star"></i>
                                                    </span>
                                                    24/7 system monitoring facility
                                                </li>
                                                <li className="flex gap-x-3">
                                                    <span className="text-xl">
                                                        <i className="fa-solid fa-star"></i>
                                                    </span>
                                                    Engage visitors via visitor list
                                                </li>
                                                <li className="flex gap-x-3">
                                                    <span className="text-xl">
                                                        <i className="fa-solid fa-star"></i>
                                                    </span>
                                                    Engage with automatic messages
                                                </li>
                                            </ul>
                                            {/* <!-- Pricing Data list --> */}
                                            <div className="mt-10 flex justify-center">
                                                <button className="btn is-blue is-rounded is-large group w-full border-2">Purchase now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Pricing Item --> */}
                                {/* <!-- Pricing Item --> */}
                                <div className="jos" data-jos_animation="flip-left" data-jos_delay="0">
                                    <div className="hover-solid-shadow h-full">
                                        <div className="rounded-[10px] border-2 border-ColorBlack bg-white p-7 xl:p-10 h-full">
                                            {/* <!-- Pricing Content Top --> */}
                                            <div className="text-center text-ColorBlack">
                                                <span className="text-xl font-bold">Standard Plan</span>
                                                <div className="text-[28px] font-normal leading-[2.85]">
                                                    $<span className="text-[48px] font-bold leading-[1.3] xl:text-[58px]">49</span>/month
                                                </div>
                                                <span className="text-sm text-ColorBlack/70">No credit card required</span>
                                            </div>
                                            {/* <!-- Pricing Content Top --> */}
                                            {/* <!-- Horizontal Line Separator --> */}
                                            <div className="my-10 h-px w-full bg-ColorBlack/10"></div>
                                            {/* <!-- Horizontal Line Separator --> */}
                                            {/* <!-- Pricing Data list --> */}
                                            <ul className="flex flex-col gap-y-6 text-base font-semibold text-ColorBlack xl:px-[18px]">
                                                <li className="flex gap-x-3">
                                                    <span className="text-xl">
                                                        <i className="fa-solid fa-star"></i>
                                                    </span>
                                                    Live chat + email + FB Messenger
                                                </li>
                                                <li className="flex gap-x-3">
                                                    <span className="text-xl">
                                                        <i className="fa-solid fa-star"></i>
                                                    </span>
                                                    3-year conversations history
                                                </li>
                                                <li className="flex gap-x-3">
                                                    <span className="text-xl">
                                                        <i className="fa-solid fa-star"></i>
                                                    </span>
                                                    Advanced widget customization
                                                </li>
                                                <li className="flex gap-x-3">
                                                    <span className="text-xl">
                                                        <i className="fa-solid fa-star"></i>
                                                    </span>
                                                    24/7 system monitoring facility
                                                </li>
                                                <li className="flex gap-x-3 text-ColorBlack/10">
                                                    <span className="text-xl">
                                                        <i className="fa-solid fa-star"></i>
                                                    </span>
                                                    Engage visitors via visitor list
                                                </li>
                                                <li className="flex gap-x-3 text-ColorBlack/10">
                                                    <span className="text-xl">
                                                        <i className="fa-solid fa-star"></i>
                                                    </span>
                                                    Engage with automatic messages
                                                </li>
                                            </ul>
                                            {/* <!-- Pricing Data list --> */}
                                            <div className="mt-10 flex justify-center">
                                                <button className="btn is-white is-rounded is-large group w-full border-2">Purchase now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Pricing Item --> */}
                            </div>
                            {/* <!-- Pricing List --> */}
                        </div>
                        {/* <!-- Section Container --> */}
                    </div>
                    {/* <!-- Section Space --> */}
                </div>
            </section>
            {/* <!--...::: Pricing Section Start :::... --> */}

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
                                    <a href="contact" className="btn is-blue is-rounded btn-animation is-large group">
                                        <span>Still, have any questions? Contact us</span>
                                    </a>
                                </div>
                            </div>
                            {/* <!-- FAQ Area --> */}
                        </div>
                        {/* <!-- Section Container --> */}
                    </div>
                    {/* <!-- Section Space --> */}
                </div>
            </section>
            {/* <!--...::: FAQ Section End :::... --> */}
        </PageBody>
    );
};

export default ServicePage;

export const Head: HeadFC = () => <PageHead title="Services" />;

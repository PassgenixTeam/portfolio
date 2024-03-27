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
                {/* <!-- Section Background --> */}
                <div className="relative z-10 overflow-hidden">
                    {/* <!-- Hero Section Space --> */}
                    <div className="pb-[60px] pt-28 md:pb-20 md:pt-36 lg:pb-[100px] lg:pt-[150px] xxl:pb-[120px] xxl:pt-[185px]">
                        {/* <!-- Section Container --> */}
                        <div className="container-default">
                            {/* <!-- Hero Area --> */}
                            <div>
                                {/* <!-- Hero Content Block --> */}
                                <div className="jos mb-6 max-w-xl lg:max-w-2xl xl:max-w-3xl xxl:max-w-[1076px]">
                                    <h1 className="mb-6 font-Syne text-[40px] font-semibold uppercase leading-none -tracking-[2px] text-black sm:text-5xl lg:text-6xl xl:text-[90px]">
                                        Smart Solutions for a Modern era
                                    </h1>
                                </div>
                                {/* <!-- Hero Content Block --> */}

                                {/* <!-- Hero Image Block --> */}
                                <div className="relative mx-auto my-[60px] max-w-[1296px] overflow-hidden rounded-tl-[10px] rounded-tr-[10px]">
                                    <img src="assets/img/th-15/hero-img.jpg" alt="hero-img" width="1296" height="550" data-jos_animation="zoom-in-down" className="h-auto w-full" />
                                </div>
                                {/* <!-- Hero Image Block --> */}

                                <div className="flex flex-col items-start justify-between gap-x-[200px] xl:flex-row xl:items-center">
                                    <p className="text-2xl font-semibold text-[#2C2C2C] xl:max-w-[665px]">
                                        We are dedicated to shaping the future. In the fast-paced world of technology, our company stands as a beacon of innovation and progress.
                                    </p>
                                    <div className="mb-3 flex flex-wrap gap-6">
                                        <a href="#" className="btn is-primary is-transparent btn-animation is-large group inline-block rounded-[3px]">
                                            <span> Talk To Us </span>
                                        </a>
                                        <a href="#" className="btn is-outline-black btn-animation is-large inline-block rounded-[3px]">
                                            <span>View Our Services</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Hero Area --> */}
                        </div>
                        {/* <!-- Section Container --> */}
                    </div>
                    {/* <!-- Hero Section Space --> */}
                </div>
                {/* <!-- Section Background --> */}
            </section>
            {/* <!--...::: Hero Section End :::... --> */}

            {/* <!-- Horizontal Line Separator --> */}
            <div className="horizontal-line bg-ColorBlack"></div>
            {/* <!-- Horizontal Line Separator --> */}

            {/* <!--...::: Fun-fact Section Start :::... --> */}
            <section className="section-fan-fact">
                {/* <!-- Section Space --> */}
                <div className="section-space">
                    {/* <!-- Section Container --> */}
                    <div className="container-default">
                        {/* <!-- Section Wrapper --> */}
                        <div className="jos mb-[60px]">
                            <div className="mx-auto max-w-[843px]">
                                {/* <!-- Section Block --> */}
                                <div className="mb-5">
                                    <h2 className="text-center font-Syne text-4xl font-semibold uppercase leading-[1.07] text-black sm:text-5xl lg:text-6xl xl:text-[65px]">
                                        impactful numbers
                                    </h2>
                                </div>
                                {/* <!-- Section Block --> */}
                            </div>
                        </div>
                        {/* <!-- Section Wrapper --> */}

                        {/* <!-- Fun-fact Area --> */}
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {/* <!-- Fun-fact Single Block --> */}
                            <div className="jos rounded-[10px] bg-white p-10 shadow-[0_4px_80px_0px_rgba(0,0,0,0.06)]" data-jos_delay="0">
                                <div
                                    className="mb-[5px] font-Syne text-6xl font-semibold uppercase leading-[1.5] text-ColorPrimary lg:text-7xl xl:text-[90px]"
                                    data-module="countup"
                                >
                                    <span className="start-number text-black" data-countup-number="15">
                                        15
                                    </span>
                                    +
                                </div>
                                <span className="text-lg text-black lg:text-xl">We have worked with reputation for the last 15 years</span>
                            </div>
                            {/* <!-- Fun-fact Single Block --> */}
                            {/* <!-- Fun-fact Single Block --> */}
                            <div className="jos rounded-[10px] bg-white p-10 shadow-[0_4px_80px_0px_rgba(0,0,0,0.06)]" data-jos_delay="0.3">
                                <div
                                    className="mb-[5px] font-Syne text-6xl font-semibold uppercase leading-[1.5] text-ColorPrimary lg:text-7xl xl:text-[90px]"
                                    data-module="countup"
                                >
                                    <span className="start-number text-black" data-countup-number="2">
                                        2
                                    </span>
                                    M+
                                </div>
                                <span className="text-lg text-black lg:text-xl">Worked with 2M clients in different countries around the world</span>
                            </div>
                            {/* <!-- Fun-fact Single Block --> */}
                            {/* <!-- Fun-fact Single Block --> */}
                            <div className="jos rounded-[10px] bg-white p-10 shadow-[0_4px_80px_0px_rgba(0,0,0,0.06)]" data-jos_delay="0.6">
                                <div
                                    className="mb-[5px] font-Syne text-6xl font-semibold uppercase leading-[1.5] text-ColorPrimary lg:text-7xl xl:text-[90px]"
                                    data-module="countup"
                                >
                                    <span className="start-number text-black" data-countup-number="99">
                                        99
                                    </span>
                                    %
                                </div>
                                <span className="text-lg text-black lg:text-xl">About 99% of our clients express their satisfaction with our work</span>
                            </div>
                            {/* <!-- Fun-fact Single Block --> */}
                        </div>
                        {/* <!-- Fun-fact Area --> */}
                    </div>
                    {/* <!-- Section Container --> */}
                </div>
                {/* <!-- Section Space --> */}
            </section>
            {/* <!--...::: Fun-fact Section End :::... --> */}

            {/* <!--...::: Service Section Start :::... --> */}
            <section className="section-service">
                {/* <!-- Section Background --> */}
                <div className="bg-black">
                    {/* <!-- Section Space --> */}
                    <div className="section-space">
                        {/* <!-- Section Container --> */}
                        <div className="container-default">
                            {/* <!-- Section Wrapper --> */}
                            <div className="jos mb-[60px]">
                                <div className="max-w-[789px]">
                                    {/* <!-- Section Block --> */}
                                    <div className="mb-5">
                                        <h2 className="font-Syne text-4xl font-semibold uppercase leading-[1.07] text-white sm:text-5xl lg:text-6xl xl:text-[65px]">
                                            impactful numbers
                                        </h2>
                                    </div>
                                    {/* <!-- Section Block --> */}
                                </div>
                            </div>
                            {/* <!-- Section Wrapper --> */}

                            {/* <!-- Service List --> */}
                            <div className="grid grid-cols-1 gap-y-6">
                                {/* <!-- Service Item --> */}
                                <div className="jos">
                                    <div className="group flex h-full flex-col items-start justify-between gap-10 gap-x-[50px] rounded-[5px] border border-[#414141] p-10 md:flex-row md:items-center lg:gap-x-10">
                                        <div className="flex-1">
                                            <div className="mb-6 font-Syne text-3xl font-semibold leading-none text-white lg:text-[35px]">Digital Transformation</div>
                                            <p className="max-w-[898px] text-xl leading-[1.33] text-white lg:text-2xl">
                                                We partner with CTOs and CIOs to co-create and execute long-term digital strategies that increase sales, brand awareness, and
                                                operational efficiency.
                                            </p>
                                        </div>
                                        <a href="service-details.html" className="relative flex h-[43px] w-[43px] items-center justify-center overflow-hidden">
                                            <img
                                                src="assets/img/icons/icon-white-top-right.svg"
                                                alt="icon-white-top-right"
                                                width="43"
                                                height="43"
                                                className="absolute inset-0 transition-all duration-300 group-hover:-translate-y-full group-hover:translate-x-full"
                                            />
                                            <img
                                                src="assets/img/icons/icon-blue-top-right.svg"
                                                alt="icon-blue-top-right"
                                                width="43"
                                                height="43"
                                                className="absolute inset-0 -translate-x-full translate-y-full transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0"
                                            />
                                        </a>
                                    </div>
                                </div>
                                {/* <!-- Service Item --> */}
                                {/* <!-- Service Item --> */}
                                <div className="jos">
                                    <div className="group flex h-full flex-col items-start justify-between gap-10 gap-x-[50px] rounded-[5px] border border-[#414141] p-10 md:flex-row md:items-center lg:gap-x-10">
                                        <div className="flex-1">
                                            <div className="mb-6 font-Syne text-3xl font-semibold leading-none text-white lg:text-[35px]">E-Commerce Development</div>
                                            <p className="max-w-[898px] text-xl leading-[1.33] text-white lg:text-2xl">
                                                We build high converting, fast-loading, headless eCommerce websites for enterprise brands, that accelerate growth.
                                            </p>
                                        </div>
                                        <a href="service-details.html" className="relative flex h-[43px] w-[43px] items-center justify-center overflow-hidden">
                                            <img
                                                src="assets/img/icons/icon-white-top-right.svg"
                                                alt="icon-white-top-right"
                                                width="43"
                                                height="43"
                                                className="absolute inset-0 transition-all duration-300 group-hover:-translate-y-full group-hover:translate-x-full"
                                            />
                                            <img
                                                src="assets/img/icons/icon-blue-top-right.svg"
                                                alt="icon-blue-top-right"
                                                width="43"
                                                height="43"
                                                className="absolute inset-0 -translate-x-full translate-y-full transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0"
                                            />
                                        </a>
                                    </div>
                                </div>
                                {/* <!-- Service Item --> */}
                                {/* <!-- Service Item --> */}
                                <div className="jos">
                                    <div className="group flex h-full flex-col items-start justify-between gap-10 gap-x-[50px] rounded-[5px] border border-[#414141] p-10 md:flex-row md:items-center lg:gap-x-10">
                                        <div className="flex-1">
                                            <div className="mb-6 font-Syne text-3xl font-semibold leading-none text-white lg:text-[35px]">Custom Software Development</div>
                                            <p className="max-w-[898px] text-xl leading-[1.33] text-white lg:text-2xl">
                                                We work with startups and global enterprises to design and develop custom web & mobile apps that drive their business forward.
                                            </p>
                                        </div>
                                        <a href="service-details.html" className="relative flex h-[43px] w-[43px] items-center justify-center overflow-hidden">
                                            <img
                                                src="assets/img/icons/icon-white-top-right.svg"
                                                alt="icon-white-top-right"
                                                width="43"
                                                height="43"
                                                className="absolute inset-0 transition-all duration-300 group-hover:-translate-y-full group-hover:translate-x-full"
                                            />
                                            <img
                                                src="assets/img/icons/icon-blue-top-right.svg"
                                                alt="icon-blue-top-right"
                                                width="43"
                                                height="43"
                                                className="absolute inset-0 -translate-x-full translate-y-full transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0"
                                            />
                                        </a>
                                    </div>
                                </div>
                                {/* <!-- Service Item --> */}
                                {/* <!-- Service Item --> */}
                                <div className="jos">
                                    <div className="group flex h-full flex-col items-start justify-between gap-10 gap-x-[50px] rounded-[5px] border border-[#414141] p-10 md:flex-row md:items-center lg:gap-x-10">
                                        <div className="flex-1">
                                            <div className="mb-6 font-Syne text-3xl font-semibold leading-none text-white lg:text-[35px]">Website Design & Development</div>
                                            <p className="max-w-[898px] text-xl leading-[1.33] text-white lg:text-2xl">
                                                We design and develop beautiful websites that deliver best-in-class experiences to your users.
                                            </p>
                                        </div>
                                        <a href="service-details.html" className="relative flex h-[43px] w-[43px] items-center justify-center overflow-hidden">
                                            <img
                                                src="assets/img/icons/icon-white-top-right.svg"
                                                alt="icon-white-top-right"
                                                width="43"
                                                height="43"
                                                className="absolute inset-0 transition-all duration-300 group-hover:-translate-y-full group-hover:translate-x-full"
                                            />
                                            <img
                                                src="assets/img/icons/icon-blue-top-right.svg"
                                                alt="icon-blue-top-right"
                                                width="43"
                                                height="43"
                                                className="absolute inset-0 -translate-x-full translate-y-full transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0"
                                            />
                                        </a>
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
                {/* <!-- Section Background --> */}
            </section>
            {/* <!--...::: Service Section End :::... --> */}

            {/* <!--...::: Content Section Start :::... --> */}
            <section className="section-content">
                {/* <!-- Section Space --> */}
                <div className="section-space">
                    {/* <!-- Section Container --> */}
                    <div className="container-default">
                        <div className="flex flex-col gap-y-20 lg:gap-y-[100px] xl:gap-y-[120px]">
                            {/* <!-- Content Area Single --> */}
                            <div className="grid items-center gap-10 lg:grid-cols-[0.7fr_minmax(0,_1fr)] lg:gap-24 xl:gap-[110px]">
                                {/* <!-- Content Block Left --> */}
                                <div className="jos order-1 lg:order-2" data-jos_animation="fade-right">
                                    {/* <!-- Section Wrapper --> */}
                                    <div>
                                        {/* <!-- Section Block --> */}
                                        <div className="mb-6">
                                            <h2 className="font-Syne text-4xl font-semibold uppercase leading-[1.07] text-black sm:text-5xl lg:text-6xl xl:text-[65px]">
                                                Know about us
                                            </h2>
                                        </div>
                                        {/* <!-- Section Block --> */}
                                    </div>
                                    {/* <!-- Section Wrapper --> */}
                                    {/* <!-- Content Text --> */}
                                    <p className="text-lg leading-[1.33] -tracking-[0.5px] text-[#2C2C2C] md:text-xl xl:text-2xl">
                                        We started our journey in January 2010. We are innovation-driven and dedicated to shaping the future through forward-thinking and
                                        cutting-edge technology solutions. Founded by a team of visionary engineers & entrepreneurs.
                                    </p>
                                    <p className="text-lg leading-[1.33] -tracking-[0.5px] text-[#2C2C2C] md:text-xl xl:text-2xl">
                                        We believe that technology should not only meet the needs of today but also anticipate the challenges of tomorrow. We are committed to
                                        creating products & services that empower individuals and businesses, making their digital experiences smarter, safer, and more efficient.
                                    </p>
                                    {/* <!-- Content Text --> */}

                                    <a href="#" className="btn is-primary is-transparent btn-animation is-large group mt-8 inline-block rounded-[3px]">
                                        <span> Discover More </span>
                                    </a>
                                </div>
                                {/* <!-- Content Block Left --> */}
                                {/* <!-- Content Block Right --> */}
                                <div className="jos order-2 lg:order-1" data-jos_animation="fade-left">
                                    <div className="w-full overflow-hidden rounded-[5px] mx-auto lg:mx-0 max-w-full sm:max-w-[80%] md:max-w-[70%] lg:max-w-full">
                                        <img src="assets/img/th-15/content-img-1.jpg" alt="content-img-1" width="526" height="550" className="h-auto w-full" />
                                    </div>
                                </div>
                                {/* <!-- Content Block Right --> */}
                            </div>
                            {/* <!-- Content Area Single --> */}

                            {/* <!-- Content Area Single --> */}
                            <div className="grid items-center gap-10 lg:grid-cols-[1fr_minmax(0,_0.75fr)] lg:gap-24 xl:gap-[110px]">
                                {/* <!-- Content Block Left --> */}
                                <div className="jos" data-jos_animation="fade-right">
                                    {/* <!-- Section Wrapper --> */}
                                    <div>
                                        {/* <!-- Section Block --> */}
                                        <div className="mb-6">
                                            <h2 className="font-Syne text-4xl font-semibold uppercase leading-[1.07] text-black sm:text-5xl lg:text-6xl xl:text-[65px]">
                                                Why choose us
                                            </h2>
                                        </div>
                                        {/* <!-- Section Block --> */}
                                    </div>
                                    {/* <!-- Section Wrapper --> */}
                                    {/* <!-- Content Text --> */}
                                    <p className="text-lg leading-[1.33] -tracking-[0.5px] text-[#2C2C2C] md:text-xl xl:text-2xl">
                                        Our core values include the relentless pursuit of excellence, a commitment to ethical and responsible tech development, and a dedication to
                                        continuous learning.
                                    </p>
                                    {/* <!-- Content Text --> */}

                                    {/* <!-- Content List --> */}
                                    <ul className="flex list-inside flex-col gap-y-8 text-lg leading-[1.33] -tracking-[0.5px] text-[#2C2C2C] md:text-xl xl:text-2xl">
                                        {/* <!-- Content Item --> */}
                                        <li className="flex gap-x-[10px]">
                                            <span className="mr-3 mt-[3px] text-ColorPrimary">
                                                <i className="fa-solid fa-circle-check"></i>
                                            </span>
                                            <p>
                                                <strong className="font-semibold text-black">Expertise & Specialization:</strong>
                                                We’re experts in respective fields. They specialize in various aspects of technology.
                                            </p>
                                        </li>
                                        {/* <!-- Content Item --> */}
                                        {/* <!-- Content Item --> */}
                                        <li className="flex gap-x-[10px]">
                                            <span className="mr-3 mt-[3px] text-ColorPrimary">
                                                <i className="fa-solid fa-circle-check"></i>
                                            </span>
                                            <p>
                                                <strong className="font-semibold text-black">Cost Efficiency:</strong>
                                                We can also scale services up or down based on making it a flexible and cost-efficient option.
                                            </p>
                                        </li>
                                        {/* <!-- Content Item --> */}
                                        {/* <!-- Content Item --> */}
                                        <li className="flex gap-x-[10px]">
                                            <span className="mr-3 mt-[3px] text-ColorPrimary">
                                                <i className="fa-solid fa-circle-check"></i>
                                            </span>
                                            <p>
                                                <strong className="font-semibold text-black">Security & Compliance:</strong>
                                                Help businesses maintain high levels of security and ensure compliance with industry-specific regulations.
                                            </p>
                                        </li>
                                        {/* <!-- Content Item --> */}
                                    </ul>
                                    {/* <!-- Content List --> */}
                                </div>
                                {/* <!-- Content Block Left --> */}
                                {/* <!-- Content Block Right --> */}
                                <div className="jos" data-jos_animation="fade-left">
                                    <div className="w-full overflow-hidden rounded-[10px] mx-auto lg:mx-0 max-w-full sm:max-w-[80%] md:max-w-[70%] lg:max-w-full">
                                        <img src="assets/img/th-15/content-img-2.jpg" alt="content-img-2" width="526" height="550" className="h-auto w-full" />
                                    </div>
                                </div>
                                {/* <!-- Content Block Right --> */}
                            </div>
                            {/* <!-- Content Area Single --> */}
                        </div>
                    </div>
                    {/* <!-- Section Container --> */}
                </div>
                {/* <!-- Section Space --> */}
            </section>
            {/* <!--...::: Content Section End :::... --> */}

            {/* <!--...::: Work Process Section Start :::... --> */}
            <section className="section-work-process">
                {/* <!-- Section Space --> */}
                <div className="section-space-bottom">
                    {/* <!-- Section Container --> */}
                    <div className="container-default">
                        {/* <!-- Section Wrapper --> */}
                        <div className="jos mb-[60px]">
                            <div className="mx-auto max-w-[843px]">
                                {/* <!-- Section Block --> */}
                                <div className="mb-5">
                                    <h2 className="text-center font-Syne text-4xl font-semibold uppercase leading-[1.07] text-black sm:text-5xl lg:text-6xl xl:text-[65px]">
                                        Our work process
                                    </h2>
                                </div>
                                {/* <!-- Section Block --> */}
                            </div>
                        </div>
                        {/* <!-- Section Wrapper --> */}

                        {/* <!-- Process Area --> */}
                        <div className="relative">
                            {/* <!-- Process Top Border --> */}
                            <div className="hidden h-[3px] w-full overflow-hidden rounded-[50px] bg-[#EAEDF0] lg:block"></div>
                            {/* <!-- Process List --> */}
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-[30px]">
                                {/* <!-- Process Item --> */}
                                <div className="jos group relative lg:pt-[30px]" data-jos_delay="0">
                                    <div className="mb-6 font-Syne text-3xl font-semibold leading-none text-black lg:text-[26px] xl:text-3xl xxl:text-[35px]">
                                        1. Project Discovery
                                    </div>
                                    <p className="m-0 text-lg leading-[1.33] -tracking-[0.5px] text-[#2C2C2C] md:text-xl xl:text-2xl">
                                        We create a detailed project plan with work outlines, milestones, timelines.
                                    </p>
                                    <div className="absolute -top-[3px] left-0 hidden h-[3px] w-full scale-x-0 overflow-hidden rounded-[50px] bg-ColorPrimary transition-all duration-300 group-hover:scale-x-100 lg:block"></div>
                                </div>
                                {/* <!-- Process Item --> */}
                                {/* <!-- Process Item --> */}
                                <div className="jos group relative lg:pt-[30px]" data-jos_delay="0.3">
                                    <div className="mb-6 font-Syne text-3xl font-semibold leading-none text-black lg:text-[26px] xl:text-3xl xxl:text-[35px]">
                                        2. Implementation
                                    </div>
                                    <p className="m-0 text-lg leading-[1.33] -tracking-[0.5px] text-[#2C2C2C] md:text-xl xl:text-2xl">
                                        Developers & engineers is essential in creating the necessary solutions.
                                    </p>
                                    <div className="absolute -top-[3px] left-0 hidden h-[3px] w-full scale-x-0 overflow-hidden rounded-[50px] bg-ColorPrimary transition-all duration-300 group-hover:scale-x-100 lg:block"></div>
                                </div>
                                {/* <!-- Process Item --> */}
                                {/* <!-- Process Item --> */}
                                <div className="jos group relative lg:pt-[30px]" data-jos_delay="0.6">
                                    <div className="mb-6 font-Syne text-3xl font-semibold leading-none text-black lg:text-[26px] xl:text-3xl xxl:text-[35px]">3. Establishment</div>
                                    <p className="m-0 text-lg leading-[1.33] -tracking-[0.5px] text-[#2C2C2C] md:text-xl xl:text-2xl">
                                        Includes all functional performance testing, testing, and security testing.
                                    </p>
                                    <div className="absolute -top-[3px] left-0 hidden h-[3px] w-full scale-x-0 overflow-hidden rounded-[50px] bg-ColorPrimary transition-all duration-300 group-hover:scale-x-100 lg:block"></div>
                                </div>
                                {/* <!-- Process Item --> */}
                            </div>
                            {/* <!-- Process List --> */}
                        </div>
                        {/* <!-- Process Area --> */}
                    </div>
                    {/* <!-- Section Container --> */}
                </div>
                {/* <!-- Section Space --> */}
            </section>
            {/* <!--...::: Work Process Section End :::... --> */}

            {/* <!--...::: Team Section Start :::... --> */}
            <section className="section-team">
                {/* <!-- Section Background --> */}
                <div className="bg-black">
                    {/* <!-- Section Space --> */}
                    <div className="section-space">
                        {/* <!-- Section Container --> */}
                        <div className="container-default">
                            {/* <!-- Section Wrapper --> */}
                            <div className="jos mb-[60px]">
                                <div className="max-w-[789px]">
                                    {/* <!-- Section Block --> */}
                                    <div className="mb-5">
                                        <h2 className="font-Syne text-4xl font-semibold uppercase leading-[1.07] text-white sm:text-5xl lg:text-6xl xl:text-[65px]">
                                            Meet our team
                                        </h2>
                                    </div>
                                    {/* <!-- Section Block --> */}
                                </div>
                            </div>
                            {/* <!-- Section Wrapper --> */}

                            {/* <!-- Team List --> */}
                            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                {/* <!-- Team Item --> */}
                                <div className="jos rounded-[5px] bg-[#2C2C2C] p-5" data-jos_animation="flip-left" data-jos_delay="0">
                                    <div className="mb-6 w-full overflow-hidden rounded-[6px] md:h-80 lg:h-60 xl:h-80">
                                        <img src="assets/img/th-15/team-img-1.jpg" alt="team-img-1" width="376" height="320" className="h-full w-full object-cover object-top" />
                                    </div>
                                    <div className="">
                                        <div className="mb-[5px] font-Syne text-2xl font-semibold text-white">Adam Smith</div>
                                        <span className="text-xl text-white">Founder & CEO</span>
                                    </div>
                                </div>
                                {/* <!-- Team Item --> */}
                                {/* <!-- Team Item --> */}
                                <div className="jos rounded-[5px] bg-[#2C2C2C] p-5" data-jos_animation="flip-left" data-jos_delay="0.3">
                                    <div className="mb-6 w-full overflow-hidden rounded-[6px] md:h-80 lg:h-60 xl:h-80">
                                        <img src="assets/img/th-15/team-img-2.jpg" alt="team-img-2" width="376" height="320" className="h-full w-full object-cover object-top" />
                                    </div>
                                    <div className="">
                                        <div className="mb-[5px] font-Syne text-2xl font-semibold text-white">Jones Marco</div>
                                        <span className="text-xl text-white">Chief Operating Officer</span>
                                    </div>
                                </div>
                                {/* <!-- Team Item --> */}
                                {/* <!-- Team Item --> */}
                                <div className="jos rounded-[5px] bg-[#2C2C2C] p-5" data-jos_animation="flip-left" data-jos_delay="0.6">
                                    <div className="mb-6 w-full overflow-hidden rounded-[6px] md:h-80 lg:h-60 xl:h-80">
                                        <img src="assets/img/th-15/team-img-3.jpg" alt="team-img-3" width="376" height="320" className="h-full w-full object-cover object-top" />
                                    </div>
                                    <div className="">
                                        <div className="mb-[5px] font-Syne text-2xl font-semibold text-white">Marsal Joy</div>
                                        <span className="text-xl text-white">General Manager</span>
                                    </div>
                                </div>
                                {/* <!-- Team Item --> */}
                                {/* <!-- Team Item --> */}
                                <div className="jos rounded-[5px] bg-[#2C2C2C] p-5" data-jos_animation="flip-left" data-jos_delay="0.9">
                                    <div className="mb-6 w-full overflow-hidden rounded-[6px] md:h-80 lg:h-60 xl:h-80">
                                        <img src="assets/img/th-15/team-img-4.jpg" alt="team-img-4" width="376" height="320" className="h-full w-full object-cover object-top" />
                                    </div>
                                    <div className="">
                                        <div className="mb-[5px] font-Syne text-2xl font-semibold text-white">Douglas Luhan</div>
                                        <span className="text-xl text-white">Sales Executive</span>
                                    </div>
                                </div>
                                {/* <!-- Team Item --> */}
                                {/* <!-- Team Item --> */}
                                <div className="jos rounded-[5px] bg-[#2C2C2C] p-5" data-jos_animation="flip-left" data-jos_delay="1.2">
                                    <div className="mb-6 w-full overflow-hidden rounded-[6px] md:h-80 lg:h-60 xl:h-80">
                                        <img src="assets/img/th-15/team-img-5.jpg" alt="team-img-5" width="376" height="320" className="h-full w-full object-cover object-top" />
                                    </div>
                                    <div className="">
                                        <div className="mb-[5px] font-Syne text-2xl font-semibold text-white">Alex Taylor</div>
                                        <span className="text-xl text-white">Web Developer</span>
                                    </div>
                                </div>
                                {/* <!-- Team Item --> */}
                                {/* <!-- Team Item --> */}
                                <div className="jos rounded-[5px] bg-[#2C2C2C] p-5" data-jos_animation="flip-left" data-jos_delay="1.5">
                                    <div className="mb-6 w-full overflow-hidden rounded-[6px] md:h-80 lg:h-60 xl:h-80">
                                        <img src="assets/img/th-15/team-img-6.jpg" alt="team-img-6" width="376" height="320" className="h-full w-full object-cover object-top" />
                                    </div>
                                    <div className="">
                                        <div className="mb-[5px] font-Syne text-2xl font-semibold text-white">Henry Fayol</div>
                                        <span className="text-xl text-white">UI/UX Designer</span>
                                    </div>
                                </div>
                                {/* <!-- Team Item --> */}
                            </div>
                            {/* <!-- Team List --> */}
                        </div>
                        {/* <!-- Section Container --> */}
                    </div>
                    {/* <!-- Section Space --> */}
                </div>
                {/* <!-- Section Background --> */}
            </section>
            {/* <!--...::: Team Section End :::... --> */}

            {/* <!--...::: FAQ Section Start :::... --> */}
            <section className="section-faq">
                {/* <!-- Section Space --> */}
                <div className="section-space">
                    {/* <!-- Section Container --> */}
                    <div className="container-default">
                        {/* <!-- Section Wrapper --> */}
                        <div className="jos mb-[60px]">
                            <div className="mx-auto max-w-[843px]">
                                {/* <!-- Section Block --> */}
                                <div className="mb-5">
                                    <h2 className="text-center font-Syne text-4xl font-semibold uppercase leading-[1.07] text-black sm:text-5xl lg:text-6xl xl:text-[65px]">
                                        We're often asked
                                    </h2>
                                </div>
                                {/* <!-- Section Block --> */}
                            </div>
                        </div>
                        {/* <!-- Section Wrapper --> */}

                        {/* <!-- FAQ Area --> */}
                        <div className="jos">
                            {/* <!-- Accordion List --> */}
                            <ul className="-mb-[60px]">
                                {/* <!-- Accordion Item --> */}
                                <li className="accordion-item active overflow-hidden border-b border-[#EAEDF0] py-[60px] first:pt-0 last:border-b-0">
                                    {/* <!-- Accordion Header --> */}
                                    <div className="accordion-header flex justify-between gap-6 font-Syne text-3xl font-semibold leading-none text-black lg:text-[26px] xl:text-3xl xxl:text-[35px]">
                                        <button className="flex-1 text-left">What does your tech company do?</button>
                                        <div className="accordion-icon-6 relative flex h-[50px] w-[50px] items-center justify-center">
                                            <span className="inline-block h-1 w-8 rounded-sm bg-black lg:w-10 xl:h-[7px] xl:w-[50px]"></span>
                                            <span className="absolute inline-block h-8 w-1 rotate-0 rounded-sm bg-black lg:h-10 xl:h-[50px] xl:w-[7px]"></span>
                                        </div>
                                    </div>
                                    {/* <!-- Accordion Header --> */}
                                    {/* <!-- Accordion Body --> */}
                                    <div className="accordion-body max-w-[898px] opacity-80">
                                        <p className="pt-5 text-lg leading-[1.33] -tracking-[0.5px] text-[#2C2C2C] md:text-xl xl:text-2xl">
                                            Masco Innovations is not just a tech company; it's a catalyst for progress, a hub of innovation, and a partner in your digital journey &
                                            connected future of technology.
                                        </p>
                                    </div>
                                    {/* <!-- Accordion Body --> */}
                                </li>
                                {/* <!-- Accordion Item --> */}
                                {/* <!-- Accordion Item --> */}
                                <li className="accordion-item overflow-hidden border-b border-[#EAEDF0] py-[60px] first:pt-0 last:border-b-0">
                                    {/* <!-- Accordion Header --> */}
                                    <div className="accordion-header flex justify-between gap-6 font-Syne text-3xl font-semibold leading-none text-black lg:text-[26px] xl:text-3xl xxl:text-[35px]">
                                        <button className="flex-1 text-left">What industries or sectors do you serve?</button>
                                        <div className="accordion-icon-6 relative flex h-[50px] w-[50px] items-center justify-center">
                                            <span className="inline-block h-1 w-8 rounded-sm bg-black lg:w-10 xl:h-[7px] xl:w-[50px]"></span>
                                            <span className="absolute inline-block h-8 w-1 rotate-0 rounded-sm bg-black lg:h-10 xl:h-[50px] xl:w-[7px]"></span>
                                        </div>
                                    </div>
                                    {/* <!-- Accordion Header --> */}
                                    {/* <!-- Accordion Body --> */}
                                    <div className="accordion-body max-w-[898px] opacity-80">
                                        <p className="pt-5 text-lg leading-[1.33] -tracking-[0.5px] text-[#2C2C2C] md:text-xl xl:text-2xl">
                                            Masco Innovations is not just a tech company; it's a catalyst for progress, a hub of innovation, and a partner in your digital journey &
                                            connected future of technology.
                                        </p>
                                    </div>
                                    {/* <!-- Accordion Body --> */}
                                </li>
                                {/* <!-- Accordion Item --> */}
                                {/* <!-- Accordion Item --> */}
                                <li className="accordion-item overflow-hidden border-b border-[#EAEDF0] py-[60px] first:pt-0 last:border-b-0">
                                    {/* <!-- Accordion Header --> */}
                                    <div className="accordion-header flex justify-between gap-6 font-Syne text-3xl font-semibold leading-none text-black lg:text-[26px] xl:text-3xl xxl:text-[35px]">
                                        <button className="flex-1 text-left">How much does a custom software solution cost?</button>
                                        <div className="accordion-icon-6 relative flex h-[50px] w-[50px] items-center justify-center">
                                            <span className="inline-block h-1 w-8 rounded-sm bg-black lg:w-10 xl:h-[7px] xl:w-[50px]"></span>
                                            <span className="absolute inline-block h-8 w-1 rotate-0 rounded-sm bg-black lg:h-10 xl:h-[50px] xl:w-[7px]"></span>
                                        </div>
                                    </div>
                                    {/* <!-- Accordion Header --> */}
                                    {/* <!-- Accordion Body --> */}
                                    <div className="accordion-body max-w-[898px] opacity-80">
                                        <p className="pt-5 text-lg leading-[1.33] -tracking-[0.5px] text-[#2C2C2C] md:text-xl xl:text-2xl">
                                            Masco Innovations is not just a tech company; it's a catalyst for progress, a hub of innovation, and a partner in your digital journey &
                                            connected future of technology.
                                        </p>
                                    </div>
                                    {/* <!-- Accordion Body --> */}
                                </li>
                                {/* <!-- Accordion Item --> */}
                                {/* <!-- Accordion Item --> */}
                                <li className="accordion-item overflow-hidden border-b border-[#EAEDF0] py-[60px] first:pt-0 last:border-b-0">
                                    {/* <!-- Accordion Header --> */}
                                    <div className="accordion-header flex justify-between gap-6 font-Syne text-3xl font-semibold leading-none text-black lg:text-[26px] xl:text-3xl xxl:text-[35px]">
                                        <button className="flex-1 text-left">Is data protection and privacy secure?</button>
                                        <div className="accordion-icon-6 relative flex h-[50px] w-[50px] items-center justify-center">
                                            <span className="inline-block h-1 w-8 rounded-sm bg-black lg:w-10 xl:h-[7px] xl:w-[50px]"></span>
                                            <span className="absolute inline-block h-8 w-1 rotate-0 rounded-sm bg-black lg:h-10 xl:h-[50px] xl:w-[7px]"></span>
                                        </div>
                                    </div>
                                    {/* <!-- Accordion Header --> */}
                                    {/* <!-- Accordion Body --> */}
                                    <div className="accordion-body max-w-[898px] opacity-80">
                                        <p className="pt-5 text-lg leading-[1.33] -tracking-[0.5px] text-[#2C2C2C] md:text-xl xl:text-2xl">
                                            Masco Innovations is not just a tech company; it's a catalyst for progress, a hub of innovation, and a partner in your digital journey &
                                            connected future of technology.
                                        </p>
                                    </div>
                                    {/* <!-- Accordion Body --> */}
                                </li>
                                {/* <!-- Accordion Item --> */}
                                {/* <!-- Accordion Item --> */}
                                <li className="accordion-item overflow-hidden border-b border-[#EAEDF0] py-[60px] first:pt-0 last:border-b-0">
                                    {/* <!-- Accordion Header --> */}
                                    <div className="accordion-header flex justify-between gap-6 font-Syne text-3xl font-semibold leading-none text-black lg:text-[26px] xl:text-3xl xxl:text-[35px]">
                                        <button className="flex-1 text-left">Which software is right for me?</button>
                                        <div className="accordion-icon-6 relative flex h-[50px] w-[50px] items-center justify-center">
                                            <span className="inline-block h-1 w-8 rounded-sm bg-black lg:w-10 xl:h-[7px] xl:w-[50px]"></span>
                                            <span className="absolute inline-block h-8 w-1 rotate-0 rounded-sm bg-black lg:h-10 xl:h-[50px] xl:w-[7px]"></span>
                                        </div>
                                    </div>
                                    {/* <!-- Accordion Header --> */}
                                    {/* <!-- Accordion Body --> */}
                                    <div className="accordion-body max-w-[898px] opacity-80">
                                        <p className="pt-5 text-lg leading-[1.33] -tracking-[0.5px] text-[#2C2C2C] md:text-xl xl:text-2xl">
                                            Masco Innovations is not just a tech company; it's a catalyst for progress, a hub of innovation, and a partner in your digital journey &
                                            connected future of technology.
                                        </p>
                                    </div>
                                    {/* <!-- Accordion Body --> */}
                                </li>
                                {/* <!-- Accordion Item --> */}
                            </ul>
                            {/* <!-- Accordion List --> */}
                        </div>
                        {/* <!-- FAQ Area --> */}
                    </div>
                    {/* <!-- Section Container --> */}
                </div>
                {/* <!-- Section Space --> */}
            </section>
            {/* <!--...::: FAQ Section End :::... --> */}

            {/* <!--...::: CTA Section Start :::... --> */}
            <section className="section-cta">
                {/* <!-- Section Background --> */}
                <div className="bg-ColorPrimary">
                    {/* <!-- Section Space --> */}
                    <div className="section-space">
                        {/* <!-- Section Container --> */}
                        <div className="container-default">
                            <div className="grid grid-cols-1 gap-[60px] lg:grid-cols-[1fr_minmax(0,_0.7fr)] xl:gap-20">
                                {/* <!-- CTA Left Block --> */}
                                <div className="text-white">
                                    {/* <!-- Section Wrapper --> */}
                                    <div className="jos" data-jos_animation="fade-left">
                                        <div className="max-w-[789px]">
                                            {/* <!-- Section Block --> */}
                                            <div className="mb-5">
                                                <h2 className="font-Syne text-4xl font-semibold uppercase leading-[1.07] text-white sm:text-5xl lg:text-6xl xl:text-[65px]">
                                                    Are you ready to get started?
                                                </h2>
                                            </div>
                                            {/* <!-- Section Block --> */}
                                            <p className="mb-0 max-w-[636px] text-lg leading-[1.33] -tracking-[0.5px] md:text-xl xl:text-2xl">
                                                Join us on this exciting journey as we continue to redefine what is possible with ever-evolving technology.
                                            </p>

                                            <div className="mt-8 lg:mt-[50px]">
                                                <a href="#" className="btn is-outline-white btn-animation is-large inline-block rounded-[3px]">
                                                    <span>View Our Services</span>
                                                </a>
                                            </div>

                                            <p className="mb-8 mt-16 text-sm md:mt-20 lg:mb-[50px] lg:mt-[100px] xl:mt-[120px]">
                                                We have collaborated with several esteemed organizations.
                                            </p>
                                            <div className="flex flex-wrap gap-x-[60px] gap-y-8">
                                                <div className="h-auto max-w-[170px]">
                                                    <img src="assets/img/th-15/brand-1.png" alt="brand-1" width="170" height="36" />
                                                </div>
                                                <div className="h-auto max-w-[170px]">
                                                    <img src="assets/img/th-15/brand-2.png" alt="brand-2" width="173" height="34" />
                                                </div>
                                                <div className="h-auto max-w-[170px]">
                                                    <img src="assets/img/th-15/brand-3.png" alt="brand-3" width="170" height="36" />
                                                </div>
                                                <div className="h-auto max-w-[170px]">
                                                    <img src="assets/img/th-15/brand-4.png" alt="brand-4" width="165" height="29" />
                                                </div>
                                                <div className="h-auto max-w-[170px]">
                                                    <img src="assets/img/th-15/brand-5.png" alt="brand-5" width="158" height="34" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Section Wrapper --> */}
                                </div>
                                {/* <!-- CTA Left Block --> */}

                                {/* <!-- CTA Right Block --> */}
                                <div className="jos rounded-[5px] bg-white p-10" data-jos_animation="fade-right">
                                    <form action="#" method="post" className="flex flex-col gap-y-6">
                                        <div className="flex flex-col">
                                            <label htmlFor="cta-name" className="mb-[10px] font-semibold text-black">
                                                Your name
                                            </label>
                                            <input
                                                type="text"
                                                name="cta-name"
                                                id="cta-name"
                                                className="rounded-[5px] border border-[#B8C1CC] px-4 py-2 outline-none transition-all duration-150 focus:border-ColorPrimary focus:text-black lg:px-[30px] lg:py-[15px]"
                                                placeholder="Enter your full name"
                                                required
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <label htmlFor="cta-email" className="mb-[10px] font-semibold text-black">
                                                Email address
                                            </label>
                                            <input
                                                type="email"
                                                name="cta-email"
                                                id="cta-email"
                                                className="rounded-[5px] border border-[#B8C1CC] px-4 py-2 outline-none transition-all duration-150 focus:border-ColorPrimary focus:text-black lg:px-[30px] lg:py-[15px]"
                                                placeholder="Enter your email"
                                                required
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <label htmlFor="cta-service" className="mb-[10px] font-semibold text-black">
                                                Email address
                                            </label>
                                            <select
                                                name="cta-service"
                                                id="cta-service"
                                                className="rounded-[5px] border border-[#B8C1CC] px-4 py-2 outline-none transition-all duration-150 focus:border-ColorPrimary focus:text-black lg:px-[30px] lg:py-[15px]"
                                                required
                                            >
                                                <option value="">Select a service</option>
                                                <option value="ui/ux design">ui/ux design</option>
                                                <option value="web development">web development</option>
                                                <option value="cloud hosting">cloud hosting</option>
                                            </select>
                                        </div>
                                        <div className="flex flex-col">
                                            <label htmlFor="cta-message" className="mb-[10px] font-semibold text-black">
                                                Write your message
                                            </label>
                                            <textarea
                                                name="cta-message"
                                                id="cta-message"
                                                className="min-h-[120px] w-full rounded-[5px] border border-[#B8C1CC] px-4 py-2 outline-none transition-all duration-150 focus:border-ColorPrimary focus:text-black lg:px-[30px] lg:py-[15px]"
                                                placeholder="Write us your question here..."
                                                required
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            className="btn is-large rounded-[3px] border-ColorPrimary bg-ColorPrimary text-white hover:bg-white hover:text-ColorPrimary"
                                        >
                                            Send Message
                                        </button>
                                    </form>
                                </div>
                                {/* <!-- CTA Right Block --> */}
                            </div>
                        </div>
                        {/* <!-- Section Container --> */}
                    </div>
                    {/* <!-- Section Space --> */}
                </div>
                {/* <!-- Section Background --> */}
            </section>
            {/* <!--...::: CTA Section End :::... --> */}
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

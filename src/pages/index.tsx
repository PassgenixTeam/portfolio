import { HeadFC, PageProps, graphql } from "gatsby";
import * as React from "react";
import cls from "classnames";
import PageHead from "../components/page-head/page-head";
import PageBody from "../components/page-body/page-body";
import FAQ from "../components/faq/faq";

const HomePage: React.FC<
    PageProps<{
        allContentfulProject: Queries.ContentfulProjectGroupConnection;
        allContentfulProgrammingLanguage: Queries.ContentfulProgrammingLanguageGroupConnection;
        allContentfulService: Queries.ContentfulServiceGroupConnection;
        allContentfulFaq: Queries.ContentfulFaqGroupConnection;
        allContentfulPlan: Queries.ContentfulPlanGroupConnection;
    }>
> = ({ data }) => {
    const projects = data.allContentfulProject.nodes;
    const programmingLanguages = data.allContentfulProgrammingLanguage.nodes;
    const services = data.allContentfulService.nodes;
    const faqs = data.allContentfulFaq.nodes;
    const plans = data.allContentfulPlan.nodes;

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
                                            Launched in 2023, we're a Vietnamese open-source company passionate about building high-quality software and services for the global
                                            tech community. Our team brings together Vietnam's top IT talent, selected for their strong skills and proven experience on large-scale
                                            projects.
                                        </p>
                                        <form action="#" method="post" className="relative mx-auto flex w-full items-center sm:w-[80%] lg:mx-0 lg:mt-5 lg:max-w-md">
                                            <input
                                                type="email"
                                                placeholder="Leave your email here"
                                                className="w-full rounded-[50px] border border-ColorBlack bg-white px-5 py-[15px] pr-40 text-base font-semibold text-opacity-50 outline-none"
                                            />
                                            <button type="submit" className="btn is-blue is-rounded absolute right-[5px] py-[10px]">
                                                Get started
                                            </button>
                                        </form>
                                        <div className="mt-5 text-sm leading-6 md:justify-normal">
                                            <span className="mr-2 inline-block text-lg text-ColorPrimary">
                                                <i className="fa-solid fa-badge-check"></i>
                                            </span>
                                            <span className="opacity-50">No credit card is required. We will contact you within 24 hours.</span>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Hero Content Block --> */}

                                {/* <!-- Hero Image Block --> */}
                                <div className="jos">
                                    <div className="relative flex items-center justify-center">
                                        <img src="/assets/img/th-1/hero-img.jpg" alt="hero image" width="600" height="579" className="h-auto w-full rounded-md" />
                                        {/* <a
                                            data-fslightbox="gallery"
                                            href="/https://www.youtube.com/watch?v=3nQNiWdeH2Q"
                                            className="group group absolute flex h-[100px] w-[100px] items-center justify-center rounded-[50%] bg-white text-ColorPrimary"
                                            aria-label="video-play"
                                        >
                                            <span className="text-2xl transition-all duration-300 ease-linear group-hover:scale-110">
                                                <i className="fa-solid fa-play"></i>
                                            </span>
                                        </a> */}
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
                        <img src="/assets/img/elements/hero-1-shape-1.svg" alt="hero-shape-1" width="607" height="792" className="" />
                    </div>

                    {/* <!-- Hero Shape - 2 --> */}
                    <div className="absolute bottom-0 right-0 -z-[1]">
                        <img src="/assets/img/elements/hero-1-shape-2.svg" alt="hero-shape-2" width="607" height="792" />
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
                                    {programmingLanguages.map((language) => (
                                        <a key={language.id} href={language.link!} className="swiper-slide">
                                            <img src={language.thumbnail?.localFile?.publicURL!} alt={language.name!} className="h-24 w-fit" />
                                        </a>
                                    ))}
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
                                {services.map((service) => (
                                    <div key={service.id} className="jos" data-jos_delay="0">
                                        <a
                                            href={`/services/${service.slug}`}
                                            className="block group rounded-[10px] border border-[#E6E6E6] bg-white p-8 transition-all duration-300 ease-in-out hover:border-teal-400 hover:bg-teal-50 lg:p-10 h-full"
                                        >
                                            <div className="flex flex-col gap-x-10 gap-y-6 sm:gap-y-8 lg:flex-row">
                                                <div className="relative mx-auto flex w-16 items-center justify-center lg:w-[98px]">
                                                    <img
                                                        src={service.thumbnail!.localFile!.publicURL!}
                                                        alt={service.name!}
                                                        width="98"
                                                        height="100"
                                                        className="opcity-100 h-auto w-full transition-all duration-300 ease-in-out group-hover:opacity-0"
                                                    />
                                                    <img
                                                        src={service.hoverThumbnail!.localFile!.publicURL!}
                                                        alt={service.name!}
                                                        width="98"
                                                        height="100"
                                                        className="absolute h-auto w-full opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100"
                                                    />
                                                </div>
                                                <div className="flex-1 text-center lg:text-left">
                                                    <div className="mb-4 text-xl font-semibold leading-[1.33] -tracking-[0.5px] text-ColorBlack lg:text-2xl">{service.name}</div>
                                                    <p className="mb-5 line-clamp-2 text-ColorBlack/80">{service.shortDescription}</p>
                                                    <div className="inline-flex items-center gap-x-2 text-base font-bold text-ColorBlack group-hover:text-ColorPrimary">
                                                        Find out more
                                                        <span className="transition-all duration-300 ease-in-out group-hover:translate-x-2">
                                                            <i className="fa-solid fa-arrow-right"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                ))}
                                {/* <!-- Service Item --> */}
                            </div>
                            {/* <!-- Service List --> */}
                        </div>
                        {/* <!-- Section Container --> */}
                    </div>
                    {/* <!-- Section Space --> */}

                    {/* <!-- Service Shape --> */}
                    <div className="absolute bottom-0 left-0 -z-10">
                        <img src="/assets/img/elements/service-1-shape-1.svg" alt="service-section-shape" width="390" height="507" />
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
                                                <h2>Highly innovative, Modern, Flexible and Extensible Software Solutions</h2>
                                            </div>
                                            {/* <!-- Section Block --> */}
                                        </div>
                                        {/* <!-- Section Wrapper --> */}
                                        <p>
                                            At <span className="font-semibold text-cyan-700">Passgenix Solutions</span>, we build with cutting-edge tools and adapt our process to
                                            keep things fresh. We sweat the details, but never lose sight of the whole project.
                                        </p>
                                        <p>
                                            <strong>Data-Driven Strategies:</strong> We use data to craft promotions that resonate with your audience and build a strong brand
                                            identity.
                                        </p>
                                        <p>
                                            <strong>Effective Services:</strong> We design and develop user-centric solutions that meet your business goals and user needs,
                                            delivered on time and budget.
                                        </p>
                                    </div>
                                    {/* <!-- Content Block Left --> */}
                                    {/* <!-- Content Block Right --> */}
                                    <div className="jos relative" data-jos_animation="fade-left">
                                        <div className="rounded-[10px] bg-[#FCEDCF] p-[30px] lg:p-10 xl:p-[50px]">
                                            {/* <!-- Content Image --> */}
                                            <img src="/assets/img/th-1/content-img-1.jpg" alt="content-img-1" width="426" height="398" className="h-auto w-full rounded-[10px]" />
                                        </div>
                                        {/* <!-- Content Shape --> */}
                                        <img src="/assets/img/elements/content-shape-1.svg" alt="content-shape-1" width="168" height="61" className="absolute -right-16 -top-16" />
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
                                                <h2>Discover the latest projects & emerging ideas for business growth</h2>
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
                                            <img src="/assets/img/th-1/content-img-2.jpg" alt="content-img-1" width="426" height="398" className="h-auto w-full rounded-[10px]" />
                                        </div>
                                        {/* <!-- Content Shape --> */}
                                        <img src="/assets/img/elements/content-shape-2.svg" alt="content-shape-1" width="107" height="105" className="absolute -bottom-1 -left-1" />
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

            {/* <!--...::: Pricing Section Start :::... --> */}
            <section className="section-pricing">
                <div className="bg-ColorEggSour bg-opacity-60">
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
                                                <span className="text-xl font-bold">Getting Start</span>
                                                <div className="text-[28px] font-normal leading-[2.85]">
                                                    <span className="text-[48px] font-bold leading-[1.3] xl:text-[58px]">FREE</span>
                                                </div>
                                                <span className="text-sm text-ColorBlack/70">No credit card required</span>
                                            </div>
                                            {/* <!-- Pricing Content Top --> */}
                                            {/* <!-- Horizontal Line Separator --> */}
                                            <div className="my-10 h-px w-full bg-ColorBlack/10"></div>
                                            {/* <!-- Horizontal Line Separator --> */}
                                            {/* <!-- Pricing Data list --> */}
                                            <ul className="flex flex-col gap-y-6 text-base font-semibold text-ColorBlack xl:px-[18px]">
                                                {plans.map((plan) => (
                                                    <li key={plan.id} className={cls("flex gap-x-3", !plan.level!.includes("Free") && "text-ColorBlack/10")}>
                                                        <span className="text-xl">
                                                            <i className="fa-solid fa-star"></i>
                                                        </span>
                                                        {plan.name}
                                                    </li>
                                                ))}
                                            </ul>
                                            {/* <!-- Pricing Data list --> */}
                                            <div className="mt-10 flex justify-center">
                                                <button className="btn is-white is-rounded is-large group w-full border-2">Contact now</button>
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
                                                    <span className="text-[48px] font-bold leading-[1.3] xl:text-[58px]">~$500</span>
                                                </div>
                                                <span className="text-sm text-ColorBlack/70">For small websites, retailers</span>
                                            </div>
                                            {/* <!-- Pricing Content Top --> */}
                                            {/* <!-- Horizontal Line Separator --> */}
                                            <div className="my-10 h-px w-full bg-ColorBlack/10"></div>
                                            {/* <!-- Horizontal Line Separator --> */}
                                            {/* <!-- Pricing Data list --> */}
                                            <ul className="flex flex-col gap-y-6 text-base font-semibold text-ColorBlack xl:px-[18px]">
                                                {plans.map((plan) => (
                                                    <li key={plan.id} className={cls("flex gap-x-3", !plan.level!.includes("Standard") && "text-ColorBlack/10")}>
                                                        <span className="text-xl">
                                                            <i className="fa-solid fa-star"></i>
                                                        </span>
                                                        {plan.name}
                                                    </li>
                                                ))}
                                            </ul>
                                            {/* <!-- Pricing Data list --> */}
                                            <div className="mt-10 flex justify-center">
                                                <button className="btn is-blue is-rounded is-large group w-full border-2">Contact now</button>
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
                                                <span className="text-xl font-bold">Pro Plan</span>
                                                <div className="text-[28px] font-normal leading-[2.85]">
                                                    <span className="text-[40px] font-bold leading-[1.3] xl:text-[50px]">CONTACT</span>
                                                </div>
                                                <span className="text-sm text-ColorBlack/70">For a complex project and maintenance</span>
                                            </div>
                                            {/* <!-- Pricing Content Top --> */}
                                            {/* <!-- Horizontal Line Separator --> */}
                                            <div className="my-10 h-px w-full bg-ColorBlack/10"></div>
                                            {/* <!-- Horizontal Line Separator --> */}
                                            {/* <!-- Pricing Data list --> */}
                                            <ul className="flex flex-col gap-y-6 text-base font-semibold text-ColorBlack xl:px-[18px]">
                                                {plans.map((plan) => (
                                                    <li key={plan.id} className={cls("flex gap-x-3", !plan.level!.includes("Pro") && "text-ColorBlack/10")}>
                                                        <span className="text-xl">
                                                            <i className="fa-solid fa-star"></i>
                                                        </span>
                                                        {plan.name}
                                                    </li>
                                                ))}
                                            </ul>
                                            {/* <!-- Pricing Data list --> */}
                                            <div className="mt-10 flex justify-center">
                                                <button className="btn is-white is-rounded is-large group w-full border-2">Contact now</button>
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
                                <a href="/projects" className="btn is-blue is-rounded btn-animation is-large group">
                                    <span>See more works</span>
                                </a>
                            </div>
                            {/* <!-- Section Wrapper --> */}

                            {/* <!-- Portfolio List --> */}
                            <div className="grid gap-8 md:grid-cols-2 lg:gap-10 xl:gap-[60px]">
                                {projects.map((project) => (
                                    <div key={project.id} className="jos" data-jos_delay="0">
                                        <a href={`/projects/${project.slug!}`} className="group">
                                            <div className="overflow-hidden rounded-[10px]">
                                                <img
                                                    src={project.thumbnail!.localFile!.publicURL!}
                                                    alt={project.name!}
                                                    width="617"
                                                    height="450"
                                                    className="h-full w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105"
                                                />
                                            </div>
                                            <div className="mt-6">
                                                <p className="mb-5 flex flex-wrap justify-between gap-5 text-ColorBlack lg:flex-nowrap xl:mb-7">
                                                    <div className="text-xl font-semibold leading-[1.33] -tracking-[0.5px] group-hover:text-ColorPrimary xl:text-2xl">
                                                        {project.name!}
                                                    </div>
                                                </p>
                                                <div className="text-base font-bold capitalize leading-[1.5] group-hover:text-ColorPrimary">
                                                    View work
                                                    <span className="inline-block transition-all duration-150 group-hover:translate-x-2">
                                                        <i className="fa-solid fa-arrow-right"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                ))}
                            </div>
                            {/* <!-- Portfolio List --> */}
                        </div>
                        {/* <!-- Section Container --> */}
                    </div>
                    {/* <!-- Section Space --> */}

                    {/* <!-- Portfolio Shape - 2 --> */}
                    <div className="absolute right-0 top-0 -z-10">
                        <img src="/assets/img/elements/portfolio-1-shape-1.svg" alt="portfolio-1-shape-1" width="467" height="609" />
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
                                    src="/assets/img/th-1/testimonial-image-1.jpg"
                                    alt="testimonial-image-1"
                                    width="636"
                                    height="446"
                                    className="jos h-auto w-full rounded-2xl"
                                    data-jos_animation="fade-right"
                                />
                                <div className="jos flex flex-col text-ColorBlack" data-jos_animation="fade-left">
                                    <img
                                        src="/assets/img/icons/icon-blue-quote-right-reverse.svg"
                                        alt="icon-blue-quote-right-reverse"
                                        width="90"
                                        height="60"
                                        className="h-auto w-10 xl:w-[90px]"
                                    />
                                    <p className="mt-[30px] text-xl font-semibold leading-[1.33] -tracking-[0.5px] lg:text-2xl">
                                        I've been using Passgenix Solutions's software for a while now, and it's made a huge difference in my workflow. It's easy to use, has all
                                        the features I need, and their customer support is excellent. A great value for the price!
                                    </p>
                                    <div className="mb-8 lg:mb-[50px]">
                                        <span className="block text-xl font-semibold">Nguyễn Minh Thắng</span>
                                        <span className="block">Frequent customer, Vietnam</span>
                                    </div>
                                    {/* <a href="/portfolio-details" className="group text-base font-bold capitalize leading-[1.5] hover:text-ColorPrimary">
                                        Read more reviews
                                        <span className="inline-block transition-all duration-150 group-hover:translate-x-2">
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </span>
                                    </a> */}
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
            <FAQ faqs={faqs} />
            {/* <!--...::: FAQ Section End :::... --> */}
        </PageBody>
    );
};

export default HomePage;

export const Head: HeadFC = () => <PageHead />;

export const query = graphql`
    {
        allContentfulProject(sort: { updatedAt: DESC }, filter: { node_locale: { eq: "en-US" } }) {
            nodes {
                id
                name
                slug
                categories
                thumbnail {
                    localFile {
                        publicURL
                    }
                }
            }
        }

        allContentfulProgrammingLanguage(sort: { updatedAt: DESC }, filter: { node_locale: { eq: "en-US" } }) {
            nodes {
                id
                name
                link
                thumbnail {
                    localFile {
                        publicURL
                    }
                }
            }
        }

        allContentfulService(limit: 4, filter: { node_locale: { eq: "en-US" } }) {
            nodes {
                id
                slug
                name
                shortDescription
                thumbnail {
                    localFile {
                        publicURL
                    }
                }
                hoverThumbnail {
                    localFile {
                        publicURL
                    }
                }
            }
        }

        allContentfulFaq(filter: { node_locale: { eq: "en-US" } }) {
            nodes {
                id
                question
                answer {
                    raw
                }
            }
        }

        allContentfulPlan(sort: { order: ASC }, filter: { node_locale: { eq: "en-US" } }) {
            nodes {
                id
                name
                level
            }
        }
    }
`;

import { HeadFC, PageProps, graphql } from "gatsby";
import * as React from "react";
import PageHead from "../../components/page-head/page-head";
import PageBody from "../../components/page-body/page-body";
import FAQ from "../../components/faq/faq";
import Plan from "../../components/plan/plan";
import { useLanguage } from "../../languages/hooks/useLanguage";

const ServicePage: React.FC<
    PageProps<{
        allContentfulService: Queries.ContentfulServiceGroupConnection;
        allContentfulFaq: Queries.ContentfulFaqGroupConnection;
        allContentfulPlan: Queries.ContentfulPlanGroupConnection;
    }>
> = ({ location, data }) => {
    const { homeLink } = useLanguage(location.pathname);

    const services = data.allContentfulService.nodes;
    const faqs = data.allContentfulFaq.nodes;
    const plans = data.allContentfulPlan.nodes;

    return (
        <PageBody pathname={location.pathname}>
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
                                    <a href={homeLink}>Home</a>
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
                                {services.map((service) => (
                                    <div key={service.id} className="jos" data-jos_delay="0">
                                        <a
                                            href={`${homeLink}services/${service.slug}`}
                                            className="block group rounded-[10px] bg-white p-8 transition-all duration-300 ease-in-out hover:shadow-[0_4px_60px_0_rgba(10,16,47,0.06)] lg:p-10"
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
                                    <img src="/assets/img/th-1/about-hero-2.jpg" alt="hero image" width="580" height="550" className="h-auto w-full rounded-md" />
                                    {/* <a
                                        data-fslightbox="gallery"
                                        href="https://www.youtube.com/watch?v=3nQNiWdeH2Q"
                                        className="group group absolute flex h-[100px] w-[100px] items-center justify-center rounded-[50%] bg-white text-ColorPrimary"
                                        aria-label="video-play"
                                    >
                                        <span className="text-2xl transition-all duration-300 ease-linear group-hover:scale-110">
                                            <i className="fa-solid fa-play"></i>
                                        </span>
                                    </a> */}
                                </div>
                            </div>
                            {/* <!-- About Hero Image Block --> */}
                            {/* <!-- About Hero Content Block --> */}
                            <div className="jos order-1 lg:order-2" data-jos_animation="fade-right" data-jos_delay="0.3">
                                {/* <!-- Section Wrapper --> */}
                                <div>
                                    {/* <!-- Section Block --> */}
                                    <div className="mb-5">
                                        <h2>Our vision to be shaping the future through innovative software solutions.</h2>
                                    </div>
                                    {/* <!-- Section Block --> */}
                                    <p>
                                        We believe technology should empower people and businesses, and we strive to create software that simplifies complex problems and drives
                                        positive change.
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
                                                <span className="block font-semibold">Nguyen Dinh Huy</span>
                                                <span className="text-sm text-opacity-80">Manager & Co-founder @ Passgenix Technology</span>
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
            <Plan plans={plans} className="bg-ColorOffWhite" pathname={location.pathname} />
            {/* <!--...::: Pricing Section Start :::... --> */}

            {/* <!--...::: FAQ Section Start :::... --> */}
            <FAQ faqs={faqs} />
            {/* <!--...::: FAQ Section End :::... --> */}
        </PageBody>
    );
};

export default ServicePage;

export const Head: HeadFC = ({ location }) => <PageHead title="Services" pathname={location.pathname} />;

export const query = graphql`
    {
        allContentfulService(filter: { node_locale: { eq: "en-US" } }, sort: { shouldShowOnDiscover: ASC }) {
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

        allContentfulPlan(sort: { order: ASC }, filter: { node_locale: { eq: "en-US" } }) {
            nodes {
                id
                name
                level
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
    }
`;

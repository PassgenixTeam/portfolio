import { HeadFC, PageProps, graphql } from "gatsby";
import * as React from "react";
import PageHead from "../../components/page-head/page-head";
import PageBody from "../../components/page-body/page-body";

const ProjectsPage: React.FC<PageProps> = ({ data }) => {
    return (
        <PageBody>
            {/* <!--...::: Breadcrumb Section Start :::... --> */}
            <section className="section-breadcrumb">
                {/* <!-- Breadcrumb Section Spacer --> */}
                <div className="breadcrumb-wrapper">
                    {/* <!-- Section Container --> */}
                    <div className="container-default">
                        <div className="breadcrumb-block">
                            <h1 className="breadcrumb-title">Projects</h1>
                            <ul className="breadcrumb-nav">
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                <li>Projects</li>
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

            {/* <!--...::: Portfolio Section Start :::... --> */}
            <div className="section-portfolio">
                {/* <!-- Section Space --> */}
                <div className="section-space">
                    {/* <!-- Section Container --> */}
                    <div className="container-default">
                        {/* <!-- Tab Button Menu --> */}
                        <div className="flex flex-wrap justify-center gap-3 md:gap-6">
                            <button className="active tab-button btn tab-btn-blue is-rounded h-[50px]" data-tab="show-all">
                                Show All
                            </button>
                            <button className="tab-button btn tab-btn-blue is-rounded h-[50px]" data-tab="website">
                                Website
                            </button>
                            <button className="tab-button btn tab-btn-blue is-rounded h-[50px]" data-tab="branding">
                                Branding
                            </button>
                            <button className="tab-button btn tab-btn-blue is-rounded h-[50px]" data-tab="commercial">
                                Commercial
                            </button>
                            <button className="tab-button btn tab-btn-blue is-rounded h-[50px]" data-tab="digital-art">
                                Digital Art
                            </button>
                            <button className="tab-button btn tab-btn-blue is-rounded h-[50px]" data-tab="ui-ux-design">
                                UI/UX Design
                            </button>
                        </div>
                        {/* <!-- Tab Button Menu --> */}

                        {/* <!-- Portfolio Area --> */}
                        <div className="my-10 lg:my-[60xp] xl:my-20">
                            {/* <!-- Portfolio List --> */}
                            <div className="tab-content grid gap-8 md:grid-cols-2 lg:gap-10 xl:gap-[60px]" id="show-all">
                                {/* <!-- Portfolio Item --> */}
                                <div className="jos" data-jos_delay="0">
                                    <div className="group">
                                        <div className="overflow-hidden rounded-[10px]">
                                            <img
                                                src="/assets/img/th-1/portfolio-img-1.jpg"
                                                alt="portfolio-img-1"
                                                width="617"
                                                height="450"
                                                className="h-full w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="mt-6">
                                            <div className="mb-5 flex flex-wrap justify-between gap-5 lg:flex-nowrap xl:mb-7">
                                                <a
                                                    href="details"
                                                    className="text-xl font-semibold leading-[1.33] -tracking-[0.5px] text-ColorBlack group-hover:text-ColorBlue xl:text-2xl"
                                                >
                                                    App — The power of communication
                                                </a>
                                                <a href="#" className="hover:text-ColorBlue">
                                                    UI/UX Design
                                                </a>
                                            </div>
                                            <a href="details" className="text-base font-bold capitalize leading-[1.5] group-hover:text-ColorBlue">
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
                                                src="/assets/img/th-1/portfolio-img-2.jpg"
                                                alt="portfolio-img-2"
                                                width="617"
                                                height="450"
                                                className="h-full w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="mt-6">
                                            <div className="mb-5 flex flex-wrap justify-between gap-5 lg:flex-nowrap xl:mb-7">
                                                <a
                                                    href="details"
                                                    className="text-xl font-semibold leading-[1.33] -tracking-[0.5px] text-ColorBlack group-hover:text-ColorBlue xl:text-2xl"
                                                >
                                                    Website — The future lifestyle platform.
                                                </a>
                                                <a href="#" className="hover:text-ColorBlue">
                                                    Branding
                                                </a>
                                            </div>
                                            <a href="details" className="text-base font-bold capitalize leading-[1.5] group-hover:text-ColorBlue">
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
                                <div className="jos" data-jos_delay="0.6">
                                    <div className="group">
                                        <div className="overflow-hidden rounded-[10px]">
                                            <img
                                                src="/assets/img/th-1/portfolio-img-3.jpg"
                                                alt="portfolio-img-3"
                                                width="617"
                                                height="450"
                                                className="h-full w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="mt-6">
                                            <div className="mb-5 flex flex-wrap justify-between gap-5 lg:flex-nowrap xl:mb-7">
                                                <a
                                                    href="details"
                                                    className="text-xl font-semibold leading-[1.33] -tracking-[0.5px] text-ColorBlack group-hover:text-ColorBlue xl:text-2xl"
                                                >
                                                    Campaign — Provision of information
                                                </a>
                                                <a href="#" className="hover:text-ColorBlue">
                                                    Marketing
                                                </a>
                                            </div>
                                            <a href="details" className="text-base font-bold capitalize leading-[1.5] group-hover:text-ColorBlue">
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
                                <div className="jos" data-jos_delay="0.9">
                                    <div className="group">
                                        <div className="overflow-hidden rounded-[10px]">
                                            <img
                                                src="/assets/img/th-1/portfolio-img-4.jpg"
                                                alt="portfolio-img-4"
                                                width="617"
                                                height="450"
                                                className="h-full w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="mt-6">
                                            <div className="mb-5 flex flex-wrap justify-between gap-5 lg:flex-nowrap xl:mb-7">
                                                <a
                                                    href="details"
                                                    className="text-xl font-semibold leading-[1.33] -tracking-[0.5px] text-ColorBlack group-hover:text-ColorBlue xl:text-2xl"
                                                >
                                                    Journal — Asset in business
                                                </a>
                                                <a href="#" className="hover:text-ColorBlue">
                                                    Commercial
                                                </a>
                                            </div>
                                            <a href="details" className="text-base font-bold capitalize leading-[1.5] group-hover:text-ColorBlue">
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
                                <div className="jos" data-jos_delay="1.2">
                                    <div className="group">
                                        <div className="overflow-hidden rounded-[10px]">
                                            <img
                                                src="/assets/img/th-1/portfolio-img-5.jpg"
                                                alt="portfolio-img-5"
                                                width="617"
                                                height="450"
                                                className="h-full w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="mt-6">
                                            <div className="mb-5 flex flex-wrap justify-between gap-5 lg:flex-nowrap xl:mb-7">
                                                <a
                                                    href="details"
                                                    className="text-xl font-semibold leading-[1.33] -tracking-[0.5px] text-ColorBlack group-hover:text-ColorBlue xl:text-2xl"
                                                >
                                                    Book — Design of the year
                                                </a>
                                                <a href="#" className="hover:text-ColorBlue">
                                                    UI/UX Design
                                                </a>
                                            </div>
                                            <a href="details" className="text-base font-bold capitalize leading-[1.5] group-hover:text-ColorBlue">
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
                                <div className="jos" data-jos_delay="1.5">
                                    <div className="group">
                                        <div className="overflow-hidden rounded-[10px]">
                                            <img
                                                src="/assets/img/th-1/portfolio-img-6.jpg"
                                                alt="portfolio-img-6"
                                                width="617"
                                                height="450"
                                                className="h-full w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="mt-6">
                                            <div className="mb-5 flex flex-wrap justify-between gap-5 lg:flex-nowrap xl:mb-7">
                                                <a
                                                    href="details"
                                                    className="text-xl font-semibold leading-[1.33] -tracking-[0.5px] text-ColorBlack group-hover:text-ColorBlue xl:text-2xl"
                                                >
                                                    Strategic — Ways to level up your brand
                                                </a>
                                                <a href="#" className="hover:text-ColorBlue">
                                                    Branding
                                                </a>
                                            </div>
                                            <a href="details" className="text-base font-bold capitalize leading-[1.5] group-hover:text-ColorBlue">
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
                            {/* <!-- Portfolio List --> */}
                            <div className="tab-content grid hidden gap-8 md:grid-cols-2 lg:gap-10 xl:gap-[60px]" id="website">
                                {/* <!-- Portfolio Item --> */}
                                <div className="jos" data-jos_delay="0">
                                    <div className="group">
                                        <div className="overflow-hidden rounded-[10px]">
                                            <img
                                                src="/assets/img/th-1/portfolio-img-2.jpg"
                                                alt="portfolio-img-2"
                                                width="617"
                                                height="450"
                                                className="h-full w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="mt-6">
                                            <div className="mb-5 flex flex-wrap justify-between gap-5 lg:flex-nowrap xl:mb-7">
                                                <a
                                                    href="details"
                                                    className="text-xl font-semibold leading-[1.33] -tracking-[0.5px] text-ColorBlack group-hover:text-ColorBlue xl:text-2xl"
                                                >
                                                    Website — The future lifestyle platform.
                                                </a>
                                                <a href="#" className="hover:text-ColorBlue">
                                                    Branding
                                                </a>
                                            </div>
                                            <a href="details" className="text-base font-bold capitalize leading-[1.5] group-hover:text-ColorBlue">
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
                            {/* <!-- Portfolio List --> */}
                            <div className="tab-content grid hidden gap-8 md:grid-cols-2 lg:gap-10 xl:gap-[60px]" id="branding">
                                {/* <!-- Portfolio Item --> */}
                                <div className="jos" data-jos_delay="0">
                                    <div className="group">
                                        <div className="overflow-hidden rounded-[10px]">
                                            <img
                                                src="/assets/img/th-1/portfolio-img-2.jpg"
                                                alt="portfolio-img-2"
                                                width="617"
                                                height="450"
                                                className="h-full w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="mt-6">
                                            <div className="mb-5 flex flex-wrap justify-between gap-5 lg:flex-nowrap xl:mb-7">
                                                <a
                                                    href="details"
                                                    className="text-xl font-semibold leading-[1.33] -tracking-[0.5px] text-ColorBlack group-hover:text-ColorBlue xl:text-2xl"
                                                >
                                                    Website — The future lifestyle platform.
                                                </a>
                                                <a href="#" className="hover:text-ColorBlue">
                                                    Branding
                                                </a>
                                            </div>
                                            <a href="details" className="text-base font-bold capitalize leading-[1.5] group-hover:text-ColorBlue">
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
                                                src="/assets/img/th-1/portfolio-img-6.jpg"
                                                alt="portfolio-img-6"
                                                width="617"
                                                height="450"
                                                className="h-full w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="mt-6">
                                            <div className="mb-5 flex flex-wrap justify-between gap-5 lg:flex-nowrap xl:mb-7">
                                                <a
                                                    href="details"
                                                    className="text-xl font-semibold leading-[1.33] -tracking-[0.5px] text-ColorBlack group-hover:text-ColorBlue xl:text-2xl"
                                                >
                                                    Strategic — Ways to level up your brand
                                                </a>
                                                <a href="#" className="hover:text-ColorBlue">
                                                    Branding
                                                </a>
                                            </div>
                                            <a href="details" className="text-base font-bold capitalize leading-[1.5] group-hover:text-ColorBlue">
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
                            {/* <!-- Portfolio List --> */}
                            <div className="tab-content grid hidden gap-8 md:grid-cols-2 lg:gap-10 xl:gap-[60px]" id="commercial">
                                {/* <!-- Portfolio Item --> */}
                                <div className="jos" data-jos_delay="0">
                                    <div className="group">
                                        <div className="overflow-hidden rounded-[10px]">
                                            <img
                                                src="/assets/img/th-1/portfolio-img-4.jpg"
                                                alt="portfolio-img-4"
                                                width="617"
                                                height="450"
                                                className="h-full w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="mt-6">
                                            <div className="mb-5 flex flex-wrap justify-between gap-5 lg:flex-nowrap xl:mb-7">
                                                <a
                                                    href="details"
                                                    className="text-xl font-semibold leading-[1.33] -tracking-[0.5px] text-ColorBlack group-hover:text-ColorBlue xl:text-2xl"
                                                >
                                                    Journal — Asset in business
                                                </a>
                                                <a href="#" className="hover:text-ColorBlue">
                                                    Commercial
                                                </a>
                                            </div>
                                            <a href="details" className="text-base font-bold capitalize leading-[1.5] group-hover:text-ColorBlue">
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
                            {/* <!-- Portfolio List --> */}
                            <div className="tab-content grid hidden gap-8 md:grid-cols-2 lg:gap-10 xl:gap-[60px]" id="digital-art">
                                {/* <!-- Portfolio Item --> */}
                                <div className="jos" data-jos_delay="0">
                                    <div className="group">
                                        <div className="overflow-hidden rounded-[10px]">
                                            <img
                                                src="/assets/img/th-1/portfolio-img-3.jpg"
                                                alt="portfolio-img-3"
                                                width="617"
                                                height="450"
                                                className="h-full w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="mt-6">
                                            <div className="mb-5 flex flex-wrap justify-between gap-5 lg:flex-nowrap xl:mb-7">
                                                <a
                                                    href="details"
                                                    className="text-xl font-semibold leading-[1.33] -tracking-[0.5px] text-ColorBlack group-hover:text-ColorBlue xl:text-2xl"
                                                >
                                                    Campaign — Provision of information
                                                </a>
                                                <a href="#" className="hover:text-ColorBlue">
                                                    Marketing
                                                </a>
                                            </div>
                                            <a href="details" className="text-base font-bold capitalize leading-[1.5] group-hover:text-ColorBlue">
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
                            {/* <!-- Portfolio List --> */}
                            <div className="tab-content grid hidden gap-8 md:grid-cols-2 lg:gap-10 xl:gap-[60px]" id="ui-ux-design">
                                {/* <!-- Portfolio Item --> */}
                                <div className="jos" data-jos_delay="0">
                                    <div className="group">
                                        <div className="overflow-hidden rounded-[10px]">
                                            <img
                                                src="/assets/img/th-1/portfolio-img-1.jpg"
                                                alt="portfolio-img-1"
                                                width="617"
                                                height="450"
                                                className="h-full w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="mt-6">
                                            <div className="mb-5 flex flex-wrap justify-between gap-5 lg:flex-nowrap xl:mb-7">
                                                <a
                                                    href="details"
                                                    className="text-xl font-semibold leading-[1.33] -tracking-[0.5px] text-ColorBlack group-hover:text-ColorBlue xl:text-2xl"
                                                >
                                                    App — The power of communication
                                                </a>
                                                <a href="#" className="hover:text-ColorBlue">
                                                    UI/UX Design
                                                </a>
                                            </div>
                                            <a href="details" className="text-base font-bold capitalize leading-[1.5] group-hover:text-ColorBlue">
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
                                                src="/assets/img/th-1/portfolio-img-5.jpg"
                                                alt="portfolio-img-5"
                                                width="617"
                                                height="450"
                                                className="h-full w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="mt-6">
                                            <div className="mb-5 flex flex-wrap justify-between gap-5 lg:flex-nowrap xl:mb-7">
                                                <a
                                                    href="details"
                                                    className="text-xl font-semibold leading-[1.33] -tracking-[0.5px] text-ColorBlack group-hover:text-ColorBlue xl:text-2xl"
                                                >
                                                    Book — Design of the year
                                                </a>
                                                <a href="#" className="hover:text-ColorBlue">
                                                    UI/UX Design
                                                </a>
                                            </div>
                                            <a href="details" className="text-base font-bold capitalize leading-[1.5] group-hover:text-ColorBlue">
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
                        {/* <!-- Portfolio Area --> */}

                        <div className="flex justify-center">
                            <button className="btn is-blue is-rounded is-large group">View more</button>
                        </div>
                    </div>
                    {/* <!-- Section Container --> */}
                </div>
                {/* <!-- Section Space --> */}
            </div>
            {/* <!--...::: Portfolio Section End :::... --> */}
        </PageBody>
    );
};

export default ProjectsPage;

export const Head: HeadFC = () => <PageHead title="Projects" />;

import { HeadFC, PageProps, graphql } from "gatsby";
import * as React from "react";
import PageHead from "../../components/page-head/page-head";
import PageBody from "../../components/page-body/page-body";

const TeamPage: React.FC<PageProps> = ({ data }) => {
    return (
        <PageBody>
            {/* <!--...::: Breadcrumb Section Start :::... --> */}
            <section className="section-breadcrumb">
                {/* <!-- Breadcrumb Section Spacer --> */}
                <div className="breadcrumb-wrapper">
                    {/* <!-- Section Container --> */}
                    <div className="container-default">
                        <div className="breadcrumb-block">
                            <h1 className="breadcrumb-title">Our Team & Partners</h1>
                            <ul className="breadcrumb-nav">
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                <li>Our Team</li>
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

            {/* <!--...::: Team Section Start :::... --> */}
            <div className="section-team">
                {/* <!-- Section Space --> */}
                <div className="section-space">
                    {/* <!-- Section Container --> */}
                    <div className="container-default">
                        {/* <!-- Team List --> */}
                        <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
                            {/* <!-- Team Item --> */}
                            <div
                                className="jos flex flex-col items-center justify-center rounded-[10px] bg-white p-5 text-center shadow-[0_4px_80px_0_rgba(0,0,0,0.08)]"
                                data-jos_animation="flip-left"
                            >
                                <img src="/assets/img/th-1/team-img-1.jpg" alt="team-img-1" width="266" height="250" className="h-auto w-full rounded-[10px] lg:w-auto" />
                                <div className="mb-4 mt-6">
                                    <div className="mb-1 text-xl font-semibold text-ColorBlack">Eleanor Pena</div>
                                    <span className="block text-opacity-80">CEO & Co-founder</span>
                                </div>

                                <div className="flex flex-wrap gap-[10px] xl:gap-4">
                                    <a
                                        href="https://twitter.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-ColorBlack bg-opacity-5 text-sm text-ColorBlack transition-all duration-300 hover:bg-ColorBlack hover:bg-opacity-100 hover:text-white"
                                        aria-label="twitter"
                                    >
                                        <i className="fa-brands fa-x-twitter"></i>
                                    </a>
                                    <a
                                        href="https://www.facebook.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-ColorBlack bg-opacity-5 text-sm text-ColorBlack transition-all duration-300 hover:bg-ColorBlack hover:bg-opacity-100 hover:text-white"
                                        aria-label="facebook"
                                    >
                                        <i className="fa-brands fa-facebook-f"></i>
                                    </a>
                                    <a
                                        href="https://www.instagram.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-ColorBlack bg-opacity-5 text-sm text-ColorBlack transition-all duration-300 hover:bg-ColorBlack hover:bg-opacity-100 hover:text-white"
                                        aria-label="instagram"
                                    >
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                    <a
                                        href="https://www.github.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-ColorBlack bg-opacity-5 text-sm text-ColorBlack transition-all duration-300 hover:bg-ColorBlack hover:bg-opacity-100 hover:text-white"
                                        aria-label="github"
                                    >
                                        <i className="fa-brands fa-github"></i>
                                    </a>
                                </div>
                            </div>
                            {/* <!-- Team Item --> */}
                            {/* <!-- Team Item --> */}
                            <div
                                className="jos flex flex-col items-center justify-center rounded-[10px] bg-white p-5 text-center shadow-[0_4px_80px_0_rgba(0,0,0,0.08)]"
                                data-jos_animation="flip-left"
                            >
                                <img src="/assets/img/th-1/team-img-2.jpg" alt="team-img-2" width="266" height="250" className="h-auto w-full rounded-[10px] lg:w-auto" />
                                <div className="mb-4 mt-6">
                                    <div className="mb-1 text-xl font-semibold text-ColorBlack">Leslie Alexander</div>
                                    <span className="block text-opacity-80">Product Manager</span>
                                </div>

                                <div className="flex flex-wrap gap-[10px] xl:gap-4">
                                    <a
                                        href="https://twitter.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-ColorBlack bg-opacity-5 text-sm text-ColorBlack transition-all duration-300 hover:bg-ColorBlack hover:bg-opacity-100 hover:text-white"
                                        aria-label="twitter"
                                    >
                                        <i className="fa-brands fa-x-twitter"></i>
                                    </a>
                                    <a
                                        href="https://www.facebook.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-ColorBlack bg-opacity-5 text-sm text-ColorBlack transition-all duration-300 hover:bg-ColorBlack hover:bg-opacity-100 hover:text-white"
                                        aria-label="facebook"
                                    >
                                        <i className="fa-brands fa-facebook-f"></i>
                                    </a>
                                    <a
                                        href="https://www.instagram.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-ColorBlack bg-opacity-5 text-sm text-ColorBlack transition-all duration-300 hover:bg-ColorBlack hover:bg-opacity-100 hover:text-white"
                                        aria-label="instagram"
                                    >
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                    <a
                                        href="https://www.github.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-ColorBlack bg-opacity-5 text-sm text-ColorBlack transition-all duration-300 hover:bg-ColorBlack hover:bg-opacity-100 hover:text-white"
                                        aria-label="github"
                                    >
                                        <i className="fa-brands fa-github"></i>
                                    </a>
                                </div>
                            </div>
                            {/* <!-- Team Item --> */}
                            {/* <!-- Team Item --> */}
                            <div
                                className="jos flex flex-col items-center justify-center rounded-[10px] bg-white p-5 text-center shadow-[0_4px_80px_0_rgba(0,0,0,0.08)]"
                                data-jos_animation="flip-left"
                            >
                                <img src="/assets/img/th-1/team-img-3.jpg" alt="team-img-3" width="266" height="250" className="h-auto w-full rounded-[10px] lg:w-auto" />
                                <div className="mb-4 mt-6">
                                    <div className="mb-1 text-xl font-semibold text-ColorBlack">Jane Cooper</div>
                                    <span className="block text-opacity-80">Web Developer</span>
                                </div>

                                <div className="flex flex-wrap gap-[10px] xl:gap-4">
                                    <a
                                        href="https://twitter.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-ColorBlack bg-opacity-5 text-sm text-ColorBlack transition-all duration-300 hover:bg-ColorBlack hover:bg-opacity-100 hover:text-white"
                                        aria-label="twitter"
                                    >
                                        <i className="fa-brands fa-x-twitter"></i>
                                    </a>
                                    <a
                                        href="https://www.facebook.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-ColorBlack bg-opacity-5 text-sm text-ColorBlack transition-all duration-300 hover:bg-ColorBlack hover:bg-opacity-100 hover:text-white"
                                        aria-label="facebook"
                                    >
                                        <i className="fa-brands fa-facebook-f"></i>
                                    </a>
                                    <a
                                        href="https://www.instagram.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-ColorBlack bg-opacity-5 text-sm text-ColorBlack transition-all duration-300 hover:bg-ColorBlack hover:bg-opacity-100 hover:text-white"
                                        aria-label="instagram"
                                    >
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                    <a
                                        href="https://www.github.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-ColorBlack bg-opacity-5 text-sm text-ColorBlack transition-all duration-300 hover:bg-ColorBlack hover:bg-opacity-100 hover:text-white"
                                        aria-label="github"
                                    >
                                        <i className="fa-brands fa-github"></i>
                                    </a>
                                </div>
                            </div>
                            {/* <!-- Team Item --> */}
                            {/* <!-- Team Item --> */}
                            <div
                                className="jos flex flex-col items-center justify-center rounded-[10px] bg-white p-5 text-center shadow-[0_4px_80px_0_rgba(0,0,0,0.08)]"
                                data-jos_animation="flip-left"
                            >
                                <img src="/assets/img/th-1/team-img-4.jpg" alt="team-img-4" width="266" height="250" className="h-auto w-full rounded-[10px] lg:w-auto" />
                                <div className="mb-4 mt-6">
                                    <div className="mb-1 text-xl font-semibold text-ColorBlack">Floyd Miles</div>
                                    <span className="block text-opacity-80">Marketing Expert</span>
                                </div>

                                <div className="flex flex-wrap gap-[10px] xl:gap-4">
                                    <a
                                        href="https://twitter.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-ColorBlack bg-opacity-5 text-sm text-ColorBlack transition-all duration-300 hover:bg-ColorBlack hover:bg-opacity-100 hover:text-white"
                                        aria-label="twitter"
                                    >
                                        <i className="fa-brands fa-x-twitter"></i>
                                    </a>
                                    <a
                                        href="https://www.facebook.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-ColorBlack bg-opacity-5 text-sm text-ColorBlack transition-all duration-300 hover:bg-ColorBlack hover:bg-opacity-100 hover:text-white"
                                        aria-label="facebook"
                                    >
                                        <i className="fa-brands fa-facebook-f"></i>
                                    </a>
                                    <a
                                        href="https://www.instagram.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-ColorBlack bg-opacity-5 text-sm text-ColorBlack transition-all duration-300 hover:bg-ColorBlack hover:bg-opacity-100 hover:text-white"
                                        aria-label="instagram"
                                    >
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                    <a
                                        href="https://www.github.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-ColorBlack bg-opacity-5 text-sm text-ColorBlack transition-all duration-300 hover:bg-ColorBlack hover:bg-opacity-100 hover:text-white"
                                        aria-label="github"
                                    >
                                        <i className="fa-brands fa-github"></i>
                                    </a>
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
            {/* <!--...::: Team Section End :::... --> */}

            {/* <!--...::: Team Section Start :::... --> */}
            <section className="section-team">
                {/* <!-- Section Space --> */}
                <div className="section-space-bottom">
                    {/* <!-- Section Container --> */}
                    <div className="container-default">
                        {/* <!-- Section Content Wrapper --> */}
                        <div className="jos mb-[60px] xl:mb-20">
                            {/* <!-- Section Content Block --> */}
                            <div className="mx-auto max-w-[636px]">
                                <h2 className="text-center">The amazing team behind our creative products</h2>
                            </div>
                            {/* <!-- Section Content Block --> */}
                        </div>
                        {/* <!-- Section Content Wrapper --> */}

                        {/* <!-- Team List --> */}
                        <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
                            {/* <!-- Team Item --> */}
                            <div
                                className="jos flex flex-col items-center justify-center rounded-[10px] bg-white p-5 text-center shadow-[0_4px_80px_0_rgba(0,0,0,0.08)]"
                                data-jos_animation="flip-left"
                            >
                                <img src="/assets/img/th-1/team-img-5.jpg" alt="team-img-5" width="266" height="250" className="h-auto w-full rounded-[10px] lg:w-auto" />
                                <div className="mb-4 mt-6">
                                    <div className="mb-1 text-xl font-semibold text-ColorBlack">Arlene McCoy</div>
                                    <span className="block text-opacity-80">UI/UX Designer</span>
                                </div>

                                <div className="flex flex-wrap gap-[10px] xl:gap-4">
                                    <a
                                        href="https://twitter.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-ColorBlack bg-opacity-5 text-sm text-ColorBlack transition-all duration-300 hover:bg-ColorBlack hover:bg-opacity-100 hover:text-white"
                                        aria-label="twitter"
                                    >
                                        <i className="fa-brands fa-x-twitter"></i>
                                    </a>
                                    <a
                                        href="https://www.facebook.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-ColorBlack bg-opacity-5 text-sm text-ColorBlack transition-all duration-300 hover:bg-ColorBlack hover:bg-opacity-100 hover:text-white"
                                        aria-label="facebook"
                                    >
                                        <i className="fa-brands fa-facebook-f"></i>
                                    </a>
                                    <a
                                        href="https://www.instagram.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-ColorBlack bg-opacity-5 text-sm text-ColorBlack transition-all duration-300 hover:bg-ColorBlack hover:bg-opacity-100 hover:text-white"
                                        aria-label="instagram"
                                    >
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                    <a
                                        href="https://www.github.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-ColorBlack bg-opacity-5 text-sm text-ColorBlack transition-all duration-300 hover:bg-ColorBlack hover:bg-opacity-100 hover:text-white"
                                        aria-label="github"
                                    >
                                        <i className="fa-brands fa-github"></i>
                                    </a>
                                </div>
                            </div>
                            {/* <!-- Team Item --> */}
                            {/* <!-- Team Item --> */}
                            <div
                                className="jos flex flex-col items-center justify-center rounded-[10px] bg-white p-5 text-center shadow-[0_4px_80px_0_rgba(0,0,0,0.08)]"
                                data-jos_animation="flip-left"
                            >
                                <img src="/assets/img/th-1/team-img-6.jpg" alt="team-img-6" width="266" height="250" className="h-auto w-full rounded-[10px] lg:w-auto" />
                                <div className="mb-4 mt-6">
                                    <div className="mb-1 text-xl font-semibold text-ColorBlack">Theresa Webb</div>
                                    <span className="block text-opacity-80">WP Developer</span>
                                </div>

                                <div className="flex flex-wrap gap-[10px] xl:gap-4">
                                    <a
                                        href="https://twitter.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-ColorBlack bg-opacity-5 text-sm text-ColorBlack transition-all duration-300 hover:bg-ColorBlack hover:bg-opacity-100 hover:text-white"
                                        aria-label="twitter"
                                    >
                                        <i className="fa-brands fa-x-twitter"></i>
                                    </a>
                                    <a
                                        href="https://www.facebook.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-ColorBlack bg-opacity-5 text-sm text-ColorBlack transition-all duration-300 hover:bg-ColorBlack hover:bg-opacity-100 hover:text-white"
                                        aria-label="facebook"
                                    >
                                        <i className="fa-brands fa-facebook-f"></i>
                                    </a>
                                    <a
                                        href="https://www.instagram.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-ColorBlack bg-opacity-5 text-sm text-ColorBlack transition-all duration-300 hover:bg-ColorBlack hover:bg-opacity-100 hover:text-white"
                                        aria-label="instagram"
                                    >
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                    <a
                                        href="https://www.github.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-ColorBlack bg-opacity-5 text-sm text-ColorBlack transition-all duration-300 hover:bg-ColorBlack hover:bg-opacity-100 hover:text-white"
                                        aria-label="github"
                                    >
                                        <i className="fa-brands fa-github"></i>
                                    </a>
                                </div>
                            </div>
                            {/* <!-- Team Item --> */}
                            {/* <!-- Team Item --> */}
                            <div
                                className="jos flex flex-col items-center justify-center rounded-[10px] bg-white p-5 text-center shadow-[0_4px_80px_0_rgba(0,0,0,0.08)]"
                                data-jos_animation="flip-left"
                            >
                                <img src="/assets/img/th-1/team-img-7.jpg" alt="team-img-7" width="266" height="250" className="h-auto w-full rounded-[10px] lg:w-auto" />
                                <div className="mb-4 mt-6">
                                    <div className="mb-1 text-xl font-semibold text-ColorBlack">Jerome Bell</div>
                                    <span className="block text-opacity-80">HTML Developer</span>
                                </div>

                                <div className="flex flex-wrap gap-[10px] xl:gap-4">
                                    <a
                                        href="https://twitter.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-ColorBlack bg-opacity-5 text-sm text-ColorBlack transition-all duration-300 hover:bg-ColorBlack hover:bg-opacity-100 hover:text-white"
                                        aria-label="twitter"
                                    >
                                        <i className="fa-brands fa-x-twitter"></i>
                                    </a>
                                    <a
                                        href="https://www.facebook.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-ColorBlack bg-opacity-5 text-sm text-ColorBlack transition-all duration-300 hover:bg-ColorBlack hover:bg-opacity-100 hover:text-white"
                                        aria-label="facebook"
                                    >
                                        <i className="fa-brands fa-facebook-f"></i>
                                    </a>
                                    <a
                                        href="https://www.instagram.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-ColorBlack bg-opacity-5 text-sm text-ColorBlack transition-all duration-300 hover:bg-ColorBlack hover:bg-opacity-100 hover:text-white"
                                        aria-label="instagram"
                                    >
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                    <a
                                        href="https://www.github.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-ColorBlack bg-opacity-5 text-sm text-ColorBlack transition-all duration-300 hover:bg-ColorBlack hover:bg-opacity-100 hover:text-white"
                                        aria-label="github"
                                    >
                                        <i className="fa-brands fa-github"></i>
                                    </a>
                                </div>
                            </div>
                            {/* <!-- Team Item --> */}
                            {/* <!-- Team Item --> */}
                            <div
                                className="jos flex flex-col items-center justify-center rounded-[10px] bg-white p-5 text-center shadow-[0_4px_80px_0_rgba(0,0,0,0.08)]"
                                data-jos_animation="flip-left"
                            >
                                <img src="/assets/img/th-1/team-img-8.jpg" alt="team-img-8" width="266" height="250" className="h-auto w-full rounded-[10px] lg:w-auto" />
                                <div className="mb-4 mt-6">
                                    <div className="mb-1 text-xl font-semibold text-ColorBlack">Darrell Steward</div>
                                    <span className="block text-opacity-80">Product Designer</span>
                                </div>

                                <div className="flex flex-wrap gap-[10px] xl:gap-4">
                                    <a
                                        href="https://twitter.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-ColorBlack bg-opacity-5 text-sm text-ColorBlack transition-all duration-300 hover:bg-ColorBlack hover:bg-opacity-100 hover:text-white"
                                        aria-label="twitter"
                                    >
                                        <i className="fa-brands fa-x-twitter"></i>
                                    </a>
                                    <a
                                        href="https://www.facebook.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-ColorBlack bg-opacity-5 text-sm text-ColorBlack transition-all duration-300 hover:bg-ColorBlack hover:bg-opacity-100 hover:text-white"
                                        aria-label="facebook"
                                    >
                                        <i className="fa-brands fa-facebook-f"></i>
                                    </a>
                                    <a
                                        href="https://www.instagram.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-ColorBlack bg-opacity-5 text-sm text-ColorBlack transition-all duration-300 hover:bg-ColorBlack hover:bg-opacity-100 hover:text-white"
                                        aria-label="instagram"
                                    >
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                    <a
                                        href="https://www.github.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-ColorBlack bg-opacity-5 text-sm text-ColorBlack transition-all duration-300 hover:bg-ColorBlack hover:bg-opacity-100 hover:text-white"
                                        aria-label="github"
                                    >
                                        <i className="fa-brands fa-github"></i>
                                    </a>
                                </div>
                            </div>
                            {/* <!-- Team Item --> */}
                            {/* <!-- Team Item --> */}
                            <div
                                className="jos flex flex-col items-center justify-center rounded-[10px] bg-white p-5 text-center shadow-[0_4px_80px_0_rgba(0,0,0,0.08)]"
                                data-jos_animation="flip-left"
                            >
                                <img src="/assets/img/th-1/team-img-9.jpg" alt="team-img-9" width="266" height="250" className="h-auto w-full rounded-[10px] lg:w-auto" />
                                <div className="mb-4 mt-6">
                                    <div className="mb-1 text-xl font-semibold text-ColorBlack">Devon Lane</div>
                                    <span className="block text-opacity-80">Marketing Expert</span>
                                </div>

                                <div className="flex flex-wrap gap-[10px] xl:gap-4">
                                    <a
                                        href="https://twitter.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-ColorBlack bg-opacity-5 text-sm text-ColorBlack transition-all duration-300 hover:bg-ColorBlack hover:bg-opacity-100 hover:text-white"
                                        aria-label="twitter"
                                    >
                                        <i className="fa-brands fa-x-twitter"></i>
                                    </a>
                                    <a
                                        href="https://www.facebook.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-ColorBlack bg-opacity-5 text-sm text-ColorBlack transition-all duration-300 hover:bg-ColorBlack hover:bg-opacity-100 hover:text-white"
                                        aria-label="facebook"
                                    >
                                        <i className="fa-brands fa-facebook-f"></i>
                                    </a>
                                    <a
                                        href="https://www.instagram.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-ColorBlack bg-opacity-5 text-sm text-ColorBlack transition-all duration-300 hover:bg-ColorBlack hover:bg-opacity-100 hover:text-white"
                                        aria-label="instagram"
                                    >
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                    <a
                                        href="https://www.github.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-ColorBlack bg-opacity-5 text-sm text-ColorBlack transition-all duration-300 hover:bg-ColorBlack hover:bg-opacity-100 hover:text-white"
                                        aria-label="github"
                                    >
                                        <i className="fa-brands fa-github"></i>
                                    </a>
                                </div>
                            </div>
                            {/* <!-- Team Item --> */}
                            {/* <!-- Team Item --> */}
                            <div
                                className="jos flex flex-col items-center justify-center rounded-[10px] bg-white p-5 text-center shadow-[0_4px_80px_0_rgba(0,0,0,0.08)]"
                                data-jos_animation="flip-left"
                            >
                                <img src="/assets/img/th-1/team-img-10.jpg" alt="team-img-10" width="266" height="250" className="h-auto w-full rounded-[10px] lg:w-auto" />
                                <div className="mb-4 mt-6">
                                    <div className="mb-1 text-xl font-semibold text-ColorBlack">Floyd Miles</div>
                                    <span className="block text-opacity-80">Product Designer</span>
                                </div>

                                <div className="flex flex-wrap gap-[10px] xl:gap-4">
                                    <a
                                        href="https://twitter.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-ColorBlack bg-opacity-5 text-sm text-ColorBlack transition-all duration-300 hover:bg-ColorBlack hover:bg-opacity-100 hover:text-white"
                                        aria-label="twitter"
                                    >
                                        <i className="fa-brands fa-x-twitter"></i>
                                    </a>
                                    <a
                                        href="https://www.facebook.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-ColorBlack bg-opacity-5 text-sm text-ColorBlack transition-all duration-300 hover:bg-ColorBlack hover:bg-opacity-100 hover:text-white"
                                        aria-label="facebook"
                                    >
                                        <i className="fa-brands fa-facebook-f"></i>
                                    </a>
                                    <a
                                        href="https://www.instagram.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-ColorBlack bg-opacity-5 text-sm text-ColorBlack transition-all duration-300 hover:bg-ColorBlack hover:bg-opacity-100 hover:text-white"
                                        aria-label="instagram"
                                    >
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                    <a
                                        href="https://www.github.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-ColorBlack bg-opacity-5 text-sm text-ColorBlack transition-all duration-300 hover:bg-ColorBlack hover:bg-opacity-100 hover:text-white"
                                        aria-label="github"
                                    >
                                        <i className="fa-brands fa-github"></i>
                                    </a>
                                </div>
                            </div>
                            {/* <!-- Team Item --> */}
                            {/* <!-- Team Item --> */}
                            <div
                                className="jos flex flex-col items-center justify-center rounded-[10px] bg-white p-5 text-center shadow-[0_4px_80px_0_rgba(0,0,0,0.08)]"
                                data-jos_animation="flip-left"
                            >
                                <img src="/assets/img/th-1/team-img-11.jpg" alt="team-img-11" width="266" height="250" className="h-auto w-full rounded-[10px] lg:w-auto" />
                                <div className="mb-4 mt-6">
                                    <div className="mb-1 text-xl font-semibold text-ColorBlack">Darlene Robertson</div>
                                    <span className="block text-opacity-80">Web Developer</span>
                                </div>

                                <div className="flex flex-wrap gap-[10px] xl:gap-4">
                                    <a
                                        href="https://twitter.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-ColorBlack bg-opacity-5 text-sm text-ColorBlack transition-all duration-300 hover:bg-ColorBlack hover:bg-opacity-100 hover:text-white"
                                        aria-label="twitter"
                                    >
                                        <i className="fa-brands fa-x-twitter"></i>
                                    </a>
                                    <a
                                        href="https://www.facebook.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-ColorBlack bg-opacity-5 text-sm text-ColorBlack transition-all duration-300 hover:bg-ColorBlack hover:bg-opacity-100 hover:text-white"
                                        aria-label="facebook"
                                    >
                                        <i className="fa-brands fa-facebook-f"></i>
                                    </a>
                                    <a
                                        href="https://www.instagram.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-ColorBlack bg-opacity-5 text-sm text-ColorBlack transition-all duration-300 hover:bg-ColorBlack hover:bg-opacity-100 hover:text-white"
                                        aria-label="instagram"
                                    >
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                    <a
                                        href="https://www.github.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-ColorBlack bg-opacity-5 text-sm text-ColorBlack transition-all duration-300 hover:bg-ColorBlack hover:bg-opacity-100 hover:text-white"
                                        aria-label="github"
                                    >
                                        <i className="fa-brands fa-github"></i>
                                    </a>
                                </div>
                            </div>
                            {/* <!-- Team Item --> */}
                            {/* <!-- Team Item --> */}
                            <div
                                className="jos flex flex-col items-center justify-center rounded-[10px] bg-white p-5 text-center shadow-[0_4px_80px_0_rgba(0,0,0,0.08)]"
                                data-jos_animation="flip-left"
                            >
                                <img src="/assets/img/th-1/team-img-12.jpg" alt="team-img-12" width="266" height="250" className="h-auto w-full rounded-[10px] lg:w-auto" />
                                <div className="mb-4 mt-6">
                                    <div className="mb-1 text-xl font-semibold text-ColorBlack">Bessie Cooper</div>
                                    <span className="block text-opacity-80">Marketing Executive</span>
                                </div>

                                <div className="flex flex-wrap gap-[10px] xl:gap-4">
                                    <a
                                        href="https://twitter.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-ColorBlack bg-opacity-5 text-sm text-ColorBlack transition-all duration-300 hover:bg-ColorBlack hover:bg-opacity-100 hover:text-white"
                                        aria-label="twitter"
                                    >
                                        <i className="fa-brands fa-x-twitter"></i>
                                    </a>
                                    <a
                                        href="https://www.facebook.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-ColorBlack bg-opacity-5 text-sm text-ColorBlack transition-all duration-300 hover:bg-ColorBlack hover:bg-opacity-100 hover:text-white"
                                        aria-label="facebook"
                                    >
                                        <i className="fa-brands fa-facebook-f"></i>
                                    </a>
                                    <a
                                        href="https://www.instagram.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-ColorBlack bg-opacity-5 text-sm text-ColorBlack transition-all duration-300 hover:bg-ColorBlack hover:bg-opacity-100 hover:text-white"
                                        aria-label="instagram"
                                    >
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                    <a
                                        href="https://www.github.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-ColorBlack bg-opacity-5 text-sm text-ColorBlack transition-all duration-300 hover:bg-ColorBlack hover:bg-opacity-100 hover:text-white"
                                        aria-label="github"
                                    >
                                        <i className="fa-brands fa-github"></i>
                                    </a>
                                </div>
                            </div>
                            {/* <!-- Team Item --> */}
                        </div>
                        {/* <!-- Team List --> */}

                        <div className="flex justify-center">
                            <a href="/contact" className="btn is-blue is-rounded btn-animation is-large group mt-10 inline-block lg:mt-[60px] xl:mt-20">
                                <span>Want to join us?</span>
                            </a>
                        </div>
                    </div>
                    {/* <!-- Section Container --> */}
                </div>
                {/* <!-- Section Space --> */}
            </section>
            {/* <!--...::: Team Section End :::... --> */}
        </PageBody>
    );
};

export default TeamPage;

export const Head: HeadFC = () => <PageHead title="Team" />;

import { HeadFC, PageProps, graphql } from "gatsby";
import * as React from "react";
import PageHead from "../../components/page-head/page-head";
import PageBody from "../../components/page-body/page-body";
import { useLanguage } from "../../languages/hooks/useLanguage";

const ProjectsPage: React.FC<
    PageProps<{
        allContentfulProject: Queries.ContentfulProjectGroupConnection;
    }>
> = ({ location, data }) => {
    const { homeLink } = useLanguage(location.pathname);

    const projects = data.allContentfulProject.nodes;
    const categories = projects.reduce((result, project) => {
        project.categories!.forEach((category) => {
            if (!result.includes(category!)) result.push(category!);
        });
        return result;
    }, [] as string[]);

    function category2Id(category: string) {
        return category.toLowerCase().replace(/\s/g, "-");
    }

    return (
        <PageBody pathname={location.pathname}>
            {/* <!--...::: Breadcrumb Section Start :::... --> */}
            <section className="section-breadcrumb">
                {/* <!-- Breadcrumb Section Spacer --> */}
                <div className="breadcrumb-wrapper">
                    {/* <!-- Section Container --> */}
                    <div className="container-default">
                        <div className="breadcrumb-block">
                            <h1 className="breadcrumb-title">Dự án</h1>
                            <ul className="breadcrumb-nav">
                                <li>
                                    <a href={homeLink}>Trang chủ</a>
                                </li>
                                <li>Dự án</li>
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
                                Xem tất cả
                            </button>
                            {categories.map((category) => (
                                <button key={category} className="tab-button btn tab-btn-blue is-rounded h-[50px]" data-tab={category2Id(category)}>
                                    {category}
                                </button>
                            ))}
                        </div>
                        {/* <!-- Tab Button Menu --> */}

                        {/* <!-- Portfolio Area --> */}
                        <div className="my-10 lg:my-[60xp] xl:my-20">
                            {/* <!-- Portfolio List --> */}
                            <div className="tab-content grid gap-8 md:grid-cols-2 lg:gap-10 xl:gap-[60px]" id="show-all">
                                {/* <!-- Portfolio Item --> */}
                                {projects.map((project) => (
                                    <div key={project.id} className="jos" data-jos_delay="0">
                                        <a href={`${homeLink}projects/${project.slug}`} className="group">
                                            <div className="overflow-hidden rounded-[10px]">
                                                <img
                                                    src={project.thumbnail!.localFile!.publicURL!}
                                                    alt="portfolio-img-1"
                                                    width="617"
                                                    height="450"
                                                    className="h-full w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105"
                                                />
                                            </div>
                                            <div className="mt-6">
                                                <div className="mb-5 flex flex-wrap justify-between gap-5 lg:flex-nowrap xl:mb-7">
                                                    <div className="text-xl font-semibold leading-[1.33] -tracking-[0.5px] text-ColorBlack group-hover:text-ColorPrimary xl:text-2xl">
                                                        {project.name}
                                                    </div>
                                                </div>
                                                <div className="text-base font-bold capitalize leading-[1.5] group-hover:text-ColorPrimary">
                                                    Xem chi tiết
                                                    <span className="inline-block transition-all duration-150 group-hover:translate-x-2">
                                                        <i className="fa-solid fa-arrow-right"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                ))}
                                {/* <!-- Portfolio Item --> */}
                            </div>
                            {/* <!-- Portfolio List --> */}

                            {categories.map((category) => (
                                <div key={category} className="tab-content grid hidden gap-8 md:grid-cols-2 lg:gap-10 xl:gap-[60px]" id={category2Id(category)}>
                                    {/* <!-- Portfolio Item --> */}
                                    {projects
                                        .filter((project) => project.categories!.includes(category))
                                        .map((project) => (
                                            <div key={project.id} className="jos" data-jos_delay="0">
                                                <a href={`${homeLink}projects/${project.slug}`} className="group">
                                                    <div className="overflow-hidden rounded-[10px]">
                                                        <img
                                                            src={project.thumbnail!.localFile!.publicURL!}
                                                            alt="portfolio-img-1"
                                                            width="617"
                                                            height="450"
                                                            className="h-full w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105"
                                                        />
                                                    </div>
                                                    <div className="mt-6">
                                                        <div className="mb-5 flex flex-wrap justify-between gap-5 lg:flex-nowrap xl:mb-7">
                                                            <div className="text-xl font-semibold leading-[1.33] -tracking-[0.5px] text-ColorBlack group-hover:text-ColorPrimary xl:text-2xl">
                                                                {project.name}
                                                            </div>
                                                        </div>
                                                        <div className="text-base font-bold capitalize leading-[1.5] group-hover:text-ColorPrimary">
                                                            Xem chi tiết
                                                            <span className="inline-block transition-all duration-150 group-hover:translate-x-2">
                                                                <i className="fa-solid fa-arrow-right"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        ))}
                                    {/* <!-- Portfolio Item --> */}
                                </div>
                            ))}
                        </div>
                        {/* <!-- Portfolio Area --> */}
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

export const Head: HeadFC = ({ location }) => <PageHead title="Projects" pathname={location.pathname} />;

export const query = graphql`
    {
        allContentfulProject(sort: { updatedAt: DESC }, filter: { node_locale: { eq: "vi-VN" } }) {
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
    }
`;

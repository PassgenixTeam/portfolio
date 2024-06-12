import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { HeadFC, PageProps, graphql } from "gatsby";
import * as React from "react";
import PageBody from "../../components/page-body/page-body";
import PageHead from "../../components/page-head/page-head";
import { useLanguage } from "../../languages/hooks/useLanguage";

const TeamDetailsPage: React.FC<
    PageProps<{
        contentfulProject: Queries.ContentfulProject;
    }>
> = ({ location, data }) => {
    const { homeLink } = useLanguage(location.pathname);

    const project = data.contentfulProject;

    const projectContent = documentToReactComponents(JSON.parse(project.content!.raw!), {
        renderNode: {
            [BLOCKS.LIST_ITEM]: (node, children) => (
                <li className="mb-4 flex gap-x-3 last:mb-0">
                    <span className="text-xl text-ColorPrimary">
                        <i className="fa-solid fa-badge-check"></i>
                    </span>
                    {children}
                </li>
            ),
            [BLOCKS.EMBEDDED_ASSET]: (node) => {
                const imageId = node.data.target.sys.id;
                const imageReference = project.content!.references?.find((reference) => reference!.contentful_id === imageId);
                return (
                    <div className="image flex flex-col items-center gap-4 mb-10">
                        <img src={imageReference!.localFile!.publicURL!} alt={node.data.target.title} className="h-auto w-full rounded-lg max-w-[50rem]" />
                        <small className="text-sm font-medium italic text-ColorBlack/40">{imageReference!.description}</small>
                    </div>
                );
            },
        },
    });

    return (
        <PageBody pathname={location.pathname}>
            {/* <!--...::: Breadcrumb Section Start :::... --> */}
            <section className="section-breadcrumb">
                {/* <!-- Breadcrumb Section Spacer --> */}
                <div className="breadcrumb-wrapper">
                    {/* <!-- Section Container --> */}
                    <div className="container-default">
                        <div className="breadcrumb-block">
                            <h1 className="breadcrumb-title">{project.name}</h1>
                            <ul className="breadcrumb-nav">
                                <li>
                                    <a href={homeLink}>Trang chủ</a>
                                </li>
                                <li>
                                    <a href={`${homeLink}projects`}>Dự án</a>
                                </li>
                                <li>{project.name!}</li>
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
            <section className="section-portfolio">
                {/* <!-- Section Space --> */}
                <div className="section-space">
                    {/* <!-- Section Container --> */}
                    <div className="container-default">
                        {/* <!-- Portfolio Details Area --> */}
                        <div className="mx-auto max-w-[1076px]">
                            {/* <!-- Portfolio Main Image --> */}
                            <img src={project.image!.localFile!.publicURL!} alt={project.name!} width="1076" height="600" className="h-auto w-full rounded-[10px]" />
                            {/* <!-- Portfolio Main Image --> */}

                            {/* <!-- Portfolio Info List --> */}
                            <ul className="mb-[60px] mt-[30px] flex flex-wrap justify-between gap-8">
                                <li>
                                    <span className="mb-[5px] block text-xl font-bold leading-[1.4] text-ColorBlack">Khách hàng:</span>
                                    <span className="text-ColorBlack/80">{project.client}</span>
                                </li>
                                <li>
                                    <span className="mb-[5px] block text-xl font-bold leading-[1.4] text-ColorBlack">Danh mục:</span>
                                    <span className="text-ColorBlack/80">{project.categories!.join(", ")}</span>
                                </li>
                                <li>
                                    <span className="mb-[5px] block text-xl font-bold leading-[1.4] text-ColorBlack">Thời gian:</span>
                                    <span className="text-ColorBlack/80">{project.duration}</span>
                                </li>
                                <li>
                                    <span className="mb-[5px] block text-xl font-bold leading-[1.4]">Website:</span>
                                    <a href={project.websiteLink!} target="_blank" className="block text-ColorBlack/80 hover:text-ColorPrimary text-ellipsis max-w-[320px]">
                                        {project.websiteLink}
                                    </a>
                                </li>
                            </ul>
                            {/* <!-- Portfolio Info List --> */}

                            {/* <!-- Portfolio Programming Languages List --> */}
                            <div className="swiper brand-slider mb-[60px]">
                                {/* <!-- Additional required wrapper --> */}
                                <div className="swiper-wrapper">
                                    {/* <!-- Slides --> */}
                                    {project.programmingLanguages!.map((language) => (
                                        <a key={language!.id} href={language!.link!} className="swiper-slide">
                                            <img src={language!.thumbnail?.localFile?.publicURL!} alt={language!.name!} className="h-24 w-fit" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                            {/* <!-- Portfolio Programming Languages List --> */}

                            {/* <!-- Portfolio Rich Text --> */}
                            <div className="rich-text">{projectContent}</div>
                            {/* <!-- Portfolio Rich Text --> */}
                        </div>
                        {/* <!-- Portfolio Details Area --> */}
                    </div>
                    {/* <!-- Section Container --> */}
                </div>
                {/* <!-- Section Space --> */}
            </section>
            {/* <!--...::: Portfolio Section End :::... --> */}

            {/* <!-- Horizontal Text Slider --> */}
            <div className="overflow-hidden bg-ColorBlack py-5 text-3xl font-bold uppercase leading-[1.4] tracking-widest text-white">
                {/* <!-- Horizontal Slider Block--> */}
                <div className="horizontal-slide-from-right-to-left flex gap-x-[30px]">
                    {[...Array(5)].map((_, index) => (
                        <span key={index} className="inline-block min-w-[855px]">
                            Làm việc cùng với niềm đam mê và sự sáng tạo
                        </span>
                    ))}
                </div>
                {/* <!-- Horizontal Slider Block--> */}
            </div>
            {/* <!-- Horizontal Text Slider --> */}

            {/* <!--...::: Related Portfolio Section Start :::... --> */}
            <section className="related-portfolio-section">
                {/* <!-- Section Space --> */}
                <div className="section-space">
                    {/* <!-- Section Container --> */}
                    <div className="container-default">
                        <div className="mx-auto max-w-[1076px]">
                            {/* <!-- Section Wrapper --> */}
                            <div className="jos flex flex-wrap items-center justify-between gap-8">
                                {/* <!-- Section Block --> */}
                                <div className="mb-5">
                                    <h2>Dự án gần đây:</h2>
                                </div>
                                {/* <!-- Section Block --> */}
                            </div>
                            {/* <!-- Section Wrapper --> */}
                            <p className="jos max-w-[856px]">
                                Hãy xem các dự án vừa hoàn thành gần đây của chúng tôi. Dưới đây là tập hợp các dự án có liên quan, giới thiệu các công nghệ và ý tưởng sáng tạo có
                                trong các dịch vụ mà chúng tôi cung cấp.
                            </p>

                            {/* <!-- Portfolio List --> */}
                            <div className="grid gap-8 sm:grid-cols-2">
                                {/* <!-- Portfolio Item --> */}
                                {project.relatedProjects!.map((relatedProject) => (
                                    <div key={relatedProject!.id} className="jos">
                                        <a href={`${homeLink}projects/${relatedProject!.slug}`} className="group">
                                            <div className="relative z-10 after:absolute after:inset-0 after:-z-10 after:translate-x-0 after:translate-y-0 after:rounded-[11px] after:bg-ColorBlack after:transition-all after:duration-300 after:ease-in-out hover:after:translate-x-[10px] hover:after:translate-y-[10px]">
                                                <div className="overflow-hidden rounded-[10px]">
                                                    <img
                                                        src={relatedProject!.thumbnail!.localFile!.publicURL!}
                                                        alt="portfolio-modern-img-1"
                                                        width="406"
                                                        height="350"
                                                        className="h-full w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105"
                                                    />
                                                </div>
                                            </div>
                                            <div className="mt-8">
                                                <div className="mb-3 flex flex-wrap gap-2 text-xl leading-[1.33] -tracking-[0.5px] text-ColorBlack group-hover:text-ColorPrimary lg:flex-nowrap xl:text-2xl">
                                                    <div className="font-semibold">{relatedProject!.name!}</div>
                                                </div>
                                                <p className="line-clamp-2 text-base sm:max-w-[350px]">{relatedProject!.shortDescription!}</p>
                                            </div>
                                        </a>
                                    </div>
                                ))}
                                {/* <!-- Portfolio Item --> */}
                            </div>
                            {/* <!-- Portfolio List --> */}
                        </div>
                    </div>
                    {/* <!-- Section Container --> */}
                </div>
                {/* <!-- Section Space --> */}
            </section>
            {/* <!--...::: Related Portfolio Section Start :::... --> */}
        </PageBody>
    );
};

export default TeamDetailsPage;

export const Head: HeadFC<{
    contentfulProject: Queries.ContentfulProject;
}> = ({ location, data }) => <PageHead title={data.contentfulProject.name!} pathname={location.pathname} />;

export const query = graphql`
    query ($slug: String!) {
        contentfulProject(slug: { eq: $slug }, node_locale: { eq: "vi-VN" }) {
            id
            name
            slug
            categories
            client
            duration
            websiteLink
            shortDescription
            image {
                localFile {
                    publicURL
                }
            }
            content {
                raw
                references {
                    contentful_id
                    description
                    localFile {
                        publicURL
                    }
                }
            }
            relatedProjects {
                id
                name
                slug
                shortDescription
                thumbnail {
                    localFile {
                        publicURL
                    }
                }
            }
            programmingLanguages {
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
    }
`;

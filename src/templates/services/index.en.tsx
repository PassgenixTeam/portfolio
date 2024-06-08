import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { HeadFC, PageProps, graphql } from "gatsby";
import * as React from "react";
import PageBody from "../../components/page-body/page-body";
import PageHead from "../../components/page-head/page-head";
import FAQ from "../../components/faq/faq";
import { useLanguage } from "../../languages/hooks/useLanguage";

const ServiceDetailsPage: React.FC<
    PageProps<{
        contentfulService: Queries.ContentfulService;
        allContentfulFaq: Queries.ContentfulFaqGroupConnection;
    }>
> = ({ location, data }) => {
    const { homeLink } = useLanguage(location.pathname);

    const service = data.contentfulService;
    const faqs = data.allContentfulFaq.nodes;

    const serviceDescription = documentToReactComponents(JSON.parse(service.description!.raw!), {
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
                const imageReference = service.description!.references?.find((reference) => reference!.contentful_id === imageId);
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
                            <h1 className="breadcrumb-title">{service.name}</h1>
                            <ul className="breadcrumb-nav">
                                <li>
                                    <a href={homeLink}>Home</a>
                                </li>
                                <li>
                                    <a href={`${homeLink}services`}>Services</a>
                                </li>
                                <li>{service.name!}</li>
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

            {/* <!--...::: Service Details Section Start :::... --> */}
            <section className="section-service-details">
                {/* <!-- Section Space --> */}
                <div className="section-space">
                    {/* <!-- Section Container --> */}
                    <div className="container-default">
                        {/* <!-- Service Details Area --> */}
                        <div className="mx-auto max-w-[1080px]">
                            {/* <!-- Service main Image --> */}
                            <img src={service.image!.localFile!.publicURL!} alt={service.name!} className="mb-10 h-auto w-full rounded-[10px]" />
                            {/* <!-- Service Rich Text --> */}
                            <div className="rich-text">{serviceDescription}</div>
                        </div>
                        {/* <!-- Service Details Area --> */}
                    </div>
                    {/* <!-- Section Container --> */}
                </div>
                {/* <!-- Section Space --> */}
            </section>
            {/* <!--...::: Service Details Section End :::... --> */}

            {/* <!--...::: FAQ Section Start :::... --> */}
            <FAQ faqs={faqs} className="bg-ColorOffWhite" pathname={location.pathname} />
            {/* <!--...::: FAQ Section End :::... --> */}
        </PageBody>
    );
};

export default ServiceDetailsPage;

export const Head: HeadFC<{
    contentfulService: Queries.ContentfulService;
}> = ({ location, data }) => <PageHead title={data.contentfulService.name!} pathname={location.pathname} />;

export const query = graphql`
    query ($slug: String!) {
        contentfulService(slug: { eq: $slug }, node_locale: { eq: "en-US" }) {
            id
            slug
            name
            image {
                localFile {
                    publicURL
                }
            }
            description {
                raw
                references {
                    contentful_id
                    description
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
    }
`;

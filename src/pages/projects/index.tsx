import { HeadFC, PageProps, graphql } from "gatsby";
import * as React from "react";
import PageBody from "../../components/page-body/page-body";
import PageHead from "../../components/page-head/page-head";

const HomePage: React.FC<
    PageProps<{
        allContentfulProject: Queries.ContentfulProjectGroupConnection;
    }>
> = ({ data }) => {
    const projects = data.allContentfulProject.nodes;

    return (
        <PageBody>
            <section className="page-header">
                <div
                    className="page-header__bg"
                    style={{
                        backgroundImage: "url(/assets/images/backgrounds/page-header-bg-1-1.jpg)",
                    }}
                ></div>
                <div className="container">
                    <h2 className="page-header__title">Project</h2>
                    <ul className="ostech-breadcrumb list-unstyled">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <span>Project</span>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="project-two project-two--page">
                <div className="container">
                    <div className="row gutter-y-30">
                        {projects.map((project) => (
                            <div key={project.id} className="col-md-4 col-sm-6">
                                <div className="project-two__item wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="500ms">
                                    <a href={`/projects/${project.slug || ""}`}>
                                        <div className="project-two__thumb">
                                            <img src={project.thumbnail?.localFile?.publicURL || ""} alt={project.title || ""} />
                                        </div>
                                        <div className="project-two__content">
                                            <h4 className="project-two__content__title">
                                                <a href={`/projects/${project.slug || ""}`}>
                                                    <span className="text-ellipsis line-clamp-1">{project.title || ""}</span>
                                                </a>
                                            </h4>
                                            <p className="project-two__content__text">{project.service?.title || ""}</p>
                                            <a href={`/projects/${project.slug || ""}`} className="project-two__content__btn">
                                                <span className="project-two__content__btn__icon"></span>
                                            </a>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </PageBody>
    );
};

export default HomePage;

export const Head: HeadFC = () => <PageHead title="Projects" />;

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
    }
`;

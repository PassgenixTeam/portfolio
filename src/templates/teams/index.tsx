import { HeadFC, PageProps, graphql } from "gatsby";
import * as React from "react";
import PageBody from "../../components/page-body/page-body";
import PageHead from "../../components/page-head/page-head";

const TeamDetailsPage: React.FC<
    PageProps<{
        contentfulTeam: Queries.ContentfulTeam;
    }>
> = ({ data, params }) => {
    const { slug } = params;

    const team = data.contentfulTeam;
    console.log(team);

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
                    <h2 className="page-header__title">Team Details</h2>
                    <ul className="ostech-breadcrumb list-unstyled">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <span>Team</span>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="team-details">
                <div className="container">
                    <div className="team-details__inner">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="team-details__image  wow fadeInLeft" data-wow-delay="500ms">
                                    <img src={team.avatar!.localFile!.publicURL!} alt="team-details__image" />
                                </div>
                            </div>

                            <div className="col-md-7">
                                <div className="team-details__content">
                                    <h6 className="team-details__content__subtitle  wow fadeInUp" data-wow-delay="500ms">
                                        {team.role}
                                    </h6>
                                    <h3 className="team-details__content__title  wow fadeInUp" data-wow-delay="500ms">
                                        {team.name}
                                    </h3>
                                    <p className="team-details__content__text  wow fadeInUp" data-wow-delay="500ms">
                                        {team.description}
                                    </p>

                                    <div className="team-details__content__highlight  wow fadeInUp" data-wow-delay="500ms">
                                        <span className="team-details__content__highlight__text">{team.quote}</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 315 38">
                                            <path d="M267 0L0 38H315V18L267 0Z" />
                                        </svg>
                                    </div>
                                    <ul className="list-unstyled team-details__list  wow fadeInUp" data-wow-delay="500ms">
                                        <li className="team-details__list__item">
                                            <i className="icon-portfolio"></i> <span className="team-details__list__item__name">Experience:</span> {team.experience}
                                        </li>
                                        <li className="team-details__list__item">
                                            <i className="icon-email"></i> <span className="team-details__list__item__name"> Email:</span>{" "}
                                            <a href={`mailto:${team.email}`}>{team.email}</a>
                                        </li>
                                        <li className="team-details__list__item">
                                            <i className="icon-telephone"></i> <span className="team-details__list__item__name">Phone:</span>{" "}
                                            <a href={`tel:${team.phone?.replace(/[\(\) ]/g, "")}`}>{team.phone}</a>
                                        </li>
                                    </ul>

                                    <div className="team-details__social  wow fadeInUp" data-wow-delay="500ms">
                                        {team.link!.github && (
                                            <a href={team.link!.github!}>
                                                <i className="fab fa-github" aria-hidden="true"></i> <span className="sr-only">Github</span>
                                            </a>
                                        )}
                                        {team.link!.facebook && (
                                            <a href={team.link!.facebook!}>
                                                <i className="icon-facebook-f" aria-hidden="true"></i>
                                                <span className="sr-only">Facebook</span>
                                            </a>
                                        )}
                                        {team.link!.youtube && (
                                            <a href={team.link!.youtube!}>
                                                <i className="fab fa-youtube" aria-hidden="true"></i>
                                                <span className="sr-only">Youtube</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="team-skills-one">
                <div className="container">
                    <div className="team-skills-one__top">
                        <div className="row">
                            <div className="col-md-6 col-lg-6">
                                <div className="team-skills-one__content  wow fadeInUp" data-wow-delay="500ms">
                                    <h3 className="team-skills-one__title">Certificates & Education</h3>
                                    <p className="team-skills-one__text">{team.certificate!.description!}</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6">
                                <div className="team-skills-one__certificates  wow fadeInUp" data-wow-delay="700ms">
                                    {team.certificate!.thumbnails!.map((thumbnail) => (
                                        <div key={thumbnail!.id!} className="team-skills-one__certificates__item">
                                            <img src={thumbnail!.localFile!.publicURL!} alt="team-skills-one__certificates" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="team-skills-one__bottom  wow fadeInUp" data-wow-delay="500ms">
                        <div className="row align-items-center gutter-y-30">
                            {team.timeline!.map((timeline) => (
                                <div key={timeline!.id!} className="col">
                                    <div className="team-skills-one__skill">
                                        <span className="team-skills-one__skill__start">{timeline!.date!}</span>
                                        <h4 className="team-skills-one__skill__title">{timeline!.name!}</h4>
                                        <p className="team-skills-one__skill__text">{timeline!.description!}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="team-form-one">
                <div
                    className="team-form-one__bg"
                    style={{
                        backgroundImage: "url(/assets/images/shapes/team-details-bg.png)",
                    }}
                ></div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="sec-title text-center wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="000ms">
                                <div className="d-flex align-items-center justify-content-center">
                                    <img src="/assets/images/shapes/sec-title-s-1.png" alt="Contact with us" className="sec-title__img" />
                                    <h6 className="sec-title__tagline">Contact with us</h6>
                                </div>
                                <h3 className="sec-title__title">Feel Free to Write us Anytime</h3>
                            </div>
                        </div>
                    </div>
                    <form className="form-one team-form-one__form contact-form-validated  wow fadeInUp" data-wow-delay="500ms" action="inc/sendemail.php">
                        <div className="form-one__group">
                            <div className="form-one__control">
                                <input type="text" name="name" placeholder="Your name" />
                            </div>
                            <div className="form-one__control">
                                <input type="email" name="email" placeholder="Email address" />
                            </div>
                            <div className="form-one__control ">
                                <input type="text" name="phone" placeholder="Phone" />
                            </div>
                            <div className="form-one__control">
                                <input type="text" name="subject" placeholder="Subject" />
                            </div>
                            <div className="form-one__control form-one__control--full">
                                <textarea name="message" placeholder="Write a message"></textarea>
                            </div>
                            <div className="form-one__control form-one__control--full text-center">
                                <button type="submit" className="ostech-btn ostech-btn--submite">
                                    Send a Message
                                </button>
                            </div>
                        </div>
                    </form>
                    <div className="result"></div>
                </div>
                <div className="team-form-one__shape">
                    <img src="/assets/images/shapes/team-contact-shape-bg.png" alt="team-contact-shape-bg" />
                </div>
            </section>
        </PageBody>
    );
};

export default TeamDetailsPage;

export const Head: HeadFC = () => <PageHead />;

export const projects = graphql`
    query ($slug: String!) {
        contentfulTeam(slug: { eq: $slug }) {
            name
            role
            description
            quote
            experience
            email
            phone
            link {
                facebook
                github
                youtube
            }
            avatar {
                localFile {
                    publicURL
                }
            }
            certificate {
                description
                thumbnails {
                    id
                    localFile {
                        publicURL
                    }
                }
            }
            timeline {
                id
                name
                description
                date(formatString: "MMM YYYY")
            }
        }
    }
`;

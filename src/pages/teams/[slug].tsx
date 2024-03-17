import { HeadFC, PageProps, graphql } from "gatsby";
import * as React from "react";
import PageBody from "../../components/page-body/page-body";
import PageHead from "../../components/page-head/page-head";

const TeamDetailsPage: React.FC<
    PageProps<{
        allContentfulProject: Queries.ContentfulProjectGroupConnection;
    }>
> = ({ data, params }) => {
    const { slug } = params;

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
                                    <img src="/assets/images/team/team-d-1.png" alt="team-details__image" />
                                </div>
                            </div>

                            <div className="col-md-7">
                                <div className="team-details__content">
                                    <h6 className="team-details__content__subtitle  wow fadeInUp" data-wow-delay="500ms">
                                        Instructor
                                    </h6>
                                    <h3 className="team-details__content__title  wow fadeInUp" data-wow-delay="500ms">
                                        Darrell Steward
                                    </h3>
                                    <p className="team-details__content__text  wow fadeInUp" data-wow-delay="500ms">
                                        There are many variations of passages of Lorem Ipsum have avagtilable, but the majority suffered alteration in some form, by injected
                                        hudfdfmour, or randomised words which don't look
                                    </p>

                                    <div className="team-details__content__highlight  wow fadeInUp" data-wow-delay="500ms">
                                        <span className="team-details__content__highlight__text">
                                            The generated Lorem Ipsum is therefore always free from repetition, injected humour, or
                                        </span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 315 38">
                                            <path d="M267 0L0 38H315V18L267 0Z" />
                                        </svg>
                                    </div>
                                    <ul className="list-unstyled team-details__list  wow fadeInUp" data-wow-delay="500ms">
                                        <li className="team-details__list__item">
                                            <i className="icon-portfolio"></i> <span className="team-details__list__item__name">Experience:</span> 23 Years
                                        </li>
                                        <li className="team-details__list__item">
                                            <i className="icon-email"></i> <span className="team-details__list__item__name"> Email:</span>{" "}
                                            <a href="mailto:demo@gmail.com">demo@gmail.com</a>
                                        </li>
                                        <li className="team-details__list__item">
                                            <i className="icon-telephone"></i> <span className="team-details__list__item__name">Phone:</span>{" "}
                                            <a href="tel:+8801775-338747"> +(684) 555-0102</a>
                                        </li>
                                    </ul>

                                    <div className="team-skills">
                                        <div className="team-skills__progress">
                                            <h4 className="team-skills__progress__title">Web Development</h4>
                                            <div className="team-skills__progress__bar">
                                                <div className="team-skills__progress__inner count-bar" data-percent="80%">
                                                    <div className="team-skills__progress__number count-text">80%</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="team-skills__progress">
                                            <h4 className="team-skills__progress__title">UI/UX Design</h4>
                                            <div className="team-skills__progress__bar">
                                                <div className="team-skills__progress__inner count-bar" data-percent="70%">
                                                    <div className="team-skills__progress__number count-text">70%</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="team-details__social  wow fadeInUp" data-wow-delay="500ms">
                                        <a href="https://twitter.com">
                                            <i className="icon-x-twitter" aria-hidden="true"></i> <span className="sr-only">Twitter</span>
                                        </a>
                                        <a href="https://facebook.com">
                                            <i className="icon-facebook-f" aria-hidden="true"></i>
                                            <span className="sr-only">Facebook</span>
                                        </a>
                                        <a href="https://pinterest.com">
                                            <i className="icon-pinterest-p" aria-hidden="true"></i>
                                            <span className="sr-only">Pinterest</span>
                                        </a>
                                        <a href="https://instagram.com">
                                            <i className="fab fa-instagram" aria-hidden="true"></i>
                                            <span className="sr-only">Instagram</span>
                                        </a>
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
                                    <p className="team-skills-one__text">
                                        There are many variations of passages of Lorem Ipsum avagtilable, but the majority have suffered alteration in some form
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6">
                                <div className="team-skills-one__certificates  wow fadeInUp" data-wow-delay="700ms">
                                    <div className="team-skills-one__certificates__item">
                                        <img src="/assets/images/team/certificate-1-1.jpg" alt="team-skills-one__certificates" />
                                    </div>
                                    <div className="team-skills-one__certificates__item">
                                        <img src="/assets/images/team/certificate-1-2.jpg" alt="team-skills-one__certificates" />
                                    </div>
                                    <div className="team-skills-one__certificates__item">
                                        <img src="/assets/images/team/certificate-1-3.jpg" alt="team-skills-one__certificates" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="team-skills-one__bottom  wow fadeInUp" data-wow-delay="500ms">
                        <div className="row align-items-center gutter-y-30">
                            <div className="col-md-3">
                                <div className="team-skills-one__skill">
                                    <span className="team-skills-one__skill__start">July 2018</span>
                                    <h4 className="team-skills-one__skill__title">Computer science</h4>
                                    <p className="team-skills-one__skill__text">Canadian National University</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="team-skills-one__skill">
                                    <span className="team-skills-one__skill__start">July 2019</span>
                                    <h4 className="team-skills-one__skill__title">Artist</h4>
                                    <p className="team-skills-one__skill__text">Canadian National University</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="team-skills-one__skill">
                                    <span className="team-skills-one__skill__start">July 2020</span>
                                    <h4 className="team-skills-one__skill__title">Master Degree</h4>
                                    <p className="team-skills-one__skill__text">Canadian National University</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="team-skills-one__skill">
                                    <span className="team-skills-one__skill__start">July 2023</span>
                                    <h4 className="team-skills-one__skill__title">Ms, Technolgy</h4>
                                    <p className="team-skills-one__skill__text">Canadian National University</p>
                                </div>
                            </div>
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
    {
        allContentfulProject(sort: { updatedAt: DESC }) {
            nodes {
                id
                title
                subtitle
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

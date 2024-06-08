import { HeadFC, PageProps, graphql } from "gatsby";
import * as React from "react";
import PageHead from "../../components/page-head/page-head";
import PageBody from "../../components/page-body/page-body";
import { useLanguage } from "../../languages/hooks/useLanguage";

const TeamPage: React.FC<
    PageProps<{
        allContentfulLeader: Queries.ContentfulLeaderGroupConnection;
        allContentfulTeam: Queries.ContentfulTeamGroupConnection;
    }>
> = ({ location, data }) => {
    const { homeLink } = useLanguage(location.pathname);

    const leaders = data.allContentfulLeader.nodes;
    const teams = data.allContentfulTeam.nodes;

    return (
        <PageBody pathname={location.pathname}>
            {/* <!--...::: Breadcrumb Section Start :::... --> */}
            <section className="section-breadcrumb">
                {/* <!-- Breadcrumb Section Spacer --> */}
                <div className="breadcrumb-wrapper">
                    {/* <!-- Section Container --> */}
                    <div className="container-default">
                        <div className="breadcrumb-block">
                            <h1 className="breadcrumb-title">Đội Nhóm và Đối Tác của Chúng Tôi</h1>
                            <ul className="breadcrumb-nav">
                                <li>
                                    <a href={homeLink}>Trang chủ</a>
                                </li>
                                <li>Đội nhóm</li>
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
                        <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
                            {/* <!-- Team Item --> */}
                            {leaders.map((leader) => (
                                <div
                                    key={leader.id}
                                    className="jos flex flex-col items-center justify-center rounded-[10px] bg-white p-5 text-center shadow-[0_4px_80px_0_rgba(0,0,0,0.08)]"
                                    data-jos_animation="flip-left"
                                >
                                    <img
                                        src={leader.thumbnail!.localFile!.publicURL!}
                                        alt={leader.name!}
                                        width="266"
                                        height="250"
                                        className="h-auto w-full rounded-[10px] lg:w-auto"
                                    />
                                    <div className="mb-4 mt-6">
                                        <div className="mb-1 text-xl font-semibold text-ColorBlack">{leader.name!}</div>
                                        <span className="block text-sm text-opacity-80">{leader.role!}</span>
                                    </div>

                                    <div className="flex flex-wrap gap-[10px] xl:gap-4">
                                        <a
                                            href={`mailto:${leader.email!}`}
                                            className="flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-ColorBlack bg-opacity-5 text-sm text-ColorBlack transition-all duration-300 hover:bg-ColorBlack hover:bg-opacity-100 hover:text-white"
                                        >
                                            <i className="fa-regular fa-envelope"></i>
                                        </a>
                                        <a
                                            href={leader.facebook!}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-ColorBlack bg-opacity-5 text-sm text-ColorBlack transition-all duration-300 hover:bg-ColorBlack hover:bg-opacity-100 hover:text-white"
                                            aria-label="facebook"
                                        >
                                            <i className="fa-brands fa-facebook-f"></i>
                                        </a>
                                        {leader.github && (
                                            <a
                                                href={leader.github!}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-ColorBlack bg-opacity-5 text-sm text-ColorBlack transition-all duration-300 hover:bg-ColorBlack hover:bg-opacity-100 hover:text-white"
                                                aria-label="github"
                                            >
                                                <i className="fa-brands fa-github"></i>
                                            </a>
                                        )}
                                        <a
                                            href={leader.website!}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex h-[35px] w-[35px] items-center justify-center rounded-[50%] bg-ColorBlack bg-opacity-5 text-sm text-ColorBlack transition-all duration-300 hover:bg-ColorBlack hover:bg-opacity-100 hover:text-white"
                                            aria-label="website"
                                        >
                                            <i className="fa-regular fa-globe"></i>
                                        </a>
                                    </div>
                                </div>
                            ))}
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
                                <h2 className="text-center">Đội ngũ tuyệt vời đứng sau các sản phẩm sáng tạo của chúng tôi</h2>
                            </div>
                            {/* <!-- Section Content Block --> */}
                        </div>
                        {/* <!-- Section Content Wrapper --> */}

                        {/* <!-- Team List --> */}
                        <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
                            {/* <!-- Team Item --> */}

                            {teams.map((teamGroup) => (
                                <div
                                    key={teamGroup.id}
                                    className="jos flex flex-col items-center justify-center rounded-[10px] bg-white p-5 text-center shadow-[0_4px_80px_0_rgba(0,0,0,0.08)]"
                                    data-jos_animation="flip-left"
                                >
                                    <img
                                        src={teamGroup.thumbnail!.localFile!.publicURL!}
                                        alt={teamGroup.name!}
                                        width="266"
                                        height="250"
                                        className="h-auto w-full rounded-[10px] lg:w-auto"
                                    />
                                    <div className="mb-4 mt-6">
                                        <div className="mb-1 text-xl font-semibold text-ColorBlack">{teamGroup.name!}</div>
                                        <span className="block text-[0.9rem] text-opacity-80">{teamGroup.size!} thành viên</span>
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <span className="text-sm text-ColorBlack font-semibold">Leader:</span>
                                        <a href={teamGroup.leader!.website!} className="text-sm italic text-ColorBlack transition-all duration-300 hover:text-ColorPrimary">
                                            {teamGroup.leader!.name!}
                                        </a>
                                    </div>
                                </div>
                            ))}
                            {/* <!-- Team Item --> */}
                        </div>
                        {/* <!-- Team List --> */}

                        <div className="flex justify-center">
                            <a href={`${homeLink}contact`} className="btn is-blue is-rounded btn-animation is-large group mt-10 inline-block lg:mt-[60px] xl:mt-20">
                                <span>Hãy tham gia cùng chúng tôi</span>
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

export const Head: HeadFC = ({ location }) => <PageHead title="Team" pathname={location.pathname} />;

export const query = graphql`
    {
        allContentfulLeader(filter: { node_locale: { eq: "vi-VN" } }) {
            nodes {
                id
                name
                role
                email
                facebook
                github
                website
                thumbnail {
                    localFile {
                        publicURL
                    }
                }
            }
        }

        allContentfulTeam(filter: { node_locale: { eq: "vi-VN" } }) {
            nodes {
                id
                name
                size
                thumbnail {
                    localFile {
                        publicURL
                    }
                }
                leader {
                    name
                    website
                }
            }
        }
    }
`;

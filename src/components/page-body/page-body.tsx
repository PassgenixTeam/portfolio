import { Menu, MenuButton, MenuItem, MenuItems, Transition } from "@headlessui/react";
import { getLangs, getUrlForLang } from "ptz-i18n";
import * as React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../languages/hooks/useLanguage";
import { languagesDetail } from "../../languages/types";
import { messages } from "./messages";
import LocalePopup from "../locale-popup/locale-popup";

const PageBody: React.FC<{
    pathname: string;
    children?: React.ReactNode;
}> = ({ children, pathname }) => {
    const isSSR = typeof window === "undefined";

    const { langs, defaultLangKey, langKey, homeLink } = useLanguage(pathname);
    const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, pathname)).map((item) => ({ ...item, link: item.link.replace(`/${defaultLangKey}/`, "/") }));

    const handleLangChanged = (langKey: string) => {
        if (isSSR) return;
        localStorage.setItem("lang-key", langKey);
    };

    // Load custom scripts
    React.useEffect(() => {
        // Put custom scripts here
        const scriptInfos: Record<string, { path: string } & Record<string, any>> = {
            countdown_js: {
                path: "/assets/js/vendors/countdown.js",
                type: "module",
            },
            counterup_js: {
                path: "/assets/js/vendors/counterup.js",
                type: "module",
            },
            menu_js: {
                path: "/assets/js/vendors/menu.js",
            },
            main_js: {
                path: "/assets/js/main.js",
            },
        };

        Object.keys(scriptInfos).forEach((key) => {
            const scriptInfo = scriptInfos[key];

            document.getElementById(key)?.remove();

            const script = document.createElement("script");
            script.id = key;
            script.src = scriptInfo.path;
            if (scriptInfo.type) script.type = scriptInfo.type;

            document.body.appendChild(script);
        });
    }, []);

    // Render the page
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="page-wrapper relative z-[1] bg-white"
        >
            {/* <!--...::: Header Start :::... --> */}
            <header className="site-header site-header--absolute is--white py-3" id="sticky-menu">
                <div className="container-default">
                    <div className="flex items-center justify-between gap-x-8">
                        {/* <!-- Header Logo --> */}
                        <a href={homeLink} className="">
                            <img src="/assets/img/logo-full.svg" alt="Passgenix Technology" className="h-[3rem]" />
                        </a>
                        {/* <!-- Header Logo --> */}

                        {/* <!-- Header Navigation --> */}
                        <div className="menu-block-wrapper">
                            <div className="menu-overlay"></div>
                            <nav className="menu-block" id="append-menu-header">
                                <div className="mobile-menu-head">
                                    <div className="go-back">
                                        <i className="fa-solid fa-angle-left"></i>
                                    </div>
                                    <div className="current-menu-title"></div>
                                    <div className="mobile-menu-close">&times;</div>
                                </div>
                                <ul className="site-menu-main">
                                    <li className="nav-item">
                                        <a href={homeLink} className="nav-link-item">
                                            {messages["nav.discover"][langKey]}
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href={`${homeLink}services`} className="nav-link-item">
                                            {messages["nav.services"][langKey]}
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href={`${homeLink}team`} className="nav-link-item">
                                            {messages["nav.team"][langKey]}
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href={`${homeLink}projects`} className="nav-link-item">
                                            {messages["nav.projects"][langKey]}
                                        </a>
                                    </li>
                                    {/* <li className="nav-item nav-item-has-children">
                                        <a href="#" className="nav-link-item drop-trigger">
                                            Services
                                            <i className="fa-solid fa-angle-down"></i>
                                        </a>
                                        <ul className="sub-menu" id="submenu-2">
                                            <li className="sub-menu--item">
                                                <a href="services.html">Services</a>
                                            </li>
                                            <li className="sub-menu--item">
                                                <a href="service-details.html">Service Details</a>
                                            </li>
                                        </ul>
                                    </li> */}
                                </ul>
                            </nav>
                        </div>
                        {/* <!-- Header Navigation --> */}

                        {/* <!-- Header User Event --> */}
                        <div className="flex items-center gap-6">
                            <a href={`${homeLink}contact`} className="btn is-blue is-rounded btn-animation group hidden sm:inline-block">
                                <span>{messages["nav.contact"][langKey]}</span>
                            </a>

                            <Menu>
                                <div className="relative inline-block text-left">
                                    <MenuButton className="bg-white font-semibold gap-x-1 hover:bg-gray-50 inline-flex justify-center px-3 py-2 ring-1 ring-gray-300 ring-inset rounded-md text-gray-900 text-sm">
                                        {languagesDetail[langKey].code.toUpperCase()} {languagesDetail[langKey].flag}
                                    </MenuButton>

                                    <Transition
                                        enter="duration-200 ease-out"
                                        enterFrom="scale-95 opacity-0"
                                        enterTo="scale-100 opacity-100"
                                        leave="duration-300 ease-out"
                                        leaveFrom="scale-100 opacity-100"
                                        leaveTo="scale-95 opacity-0"
                                    >
                                        <MenuItems
                                            anchor="bottom end"
                                            className="z-10 mt-3 py-1 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 [--anchor-gap:var(--spacing-1)] focus:outline-none origin-top-right transition"
                                            modal={false}
                                        >
                                            {langsMenu.map((item) => (
                                                <MenuItem key={item.langKey}>
                                                    <a
                                                        href={item.link}
                                                        className="block px-2 py-2 ps-4 text-sm font-medium text-end text-gray-700 hover:bg-gray-100"
                                                        role="menuitem"
                                                        tabIndex={-1}
                                                        onClick={() => handleLangChanged(item.langKey)}
                                                    >
                                                        {languagesDetail[item.langKey].name} {languagesDetail[item.langKey].flag}
                                                    </a>
                                                </MenuItem>
                                            ))}
                                        </MenuItems>
                                    </Transition>
                                </div>
                            </Menu>

                            {/* <!-- Responsive Offcanvas Menu Button --> */}
                            <div className="block lg:hidden">
                                <button id="openBtn" className="hamburger-menu mobile-menu-trigger">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>
                            </div>
                        </div>
                        {/* <!-- Header User Event --> */}
                    </div>
                </div>
            </header>
            {/* <!--...::: Header End :::... --> */}

            <main className="main-wrapper relative overflow-hidden">{children}</main>

            {/* <!--...::: Footer Section Start :::... --> */}
            <footer className="section-footer">
                <div className="bg-ColorBlack">
                    {/* <!-- Footer Area Top --> */}
                    <div className="relative z-10">
                        {/* <!-- Footer Top Spacing --> */}
                        <div className="pb-[60px] pt-20 lg:pb-20 lg:pt-[100px] xl:pt-[120px]">
                            {/* <!-- Section Container --> */}
                            <div className="container-default">
                                {/* <!-- Section Wrapper --> */}
                                <div className="flex flex-wrap items-center justify-center text-center lg:text-left lg:justify-between gap-8">
                                    {/* <!-- Section Block --> */}
                                    <div className="max-w-[400px] md:max-w-[500px] lg:max-w-[550px]">
                                        <h2 className="text-white">{messages["footer.title"][langKey]}</h2>
                                    </div>
                                    {/* <!-- Section Block --> */}
                                    <a href={`${homeLink}contact`} className="btn is-blue is-rounded btn-animation is-large group">
                                        <span>{messages["footer.callOfAction"][langKey]}</span>
                                    </a>
                                </div>
                                {/* <!-- Section Wrapper --> */}
                            </div>
                            {/* <!-- Section Container --> */}
                        </div>
                        {/* <!-- Footer Top Spacing --> */}

                        {/* <!-- CTA Shape --> */}
                        <div className="absolute right-[9%] top-8 -z-10 hidden xxl:block">
                            <img src="/assets/img/elements/cta-1-shape-1.svg" alt="cta-1-shape-1" width="115" height="130" />
                        </div>
                    </div>
                    {/* <!-- Footer Area Top --> */}

                    {/* <!-- Horizontal Line Separator --> */}
                    <div className="horizontal-line bg-white"></div>
                    {/* <!-- Horizontal Line Separator --> */}

                    {/* <!-- Footer Area Center --> */}
                    <div className="text-white">
                        {/* <!-- Footer Center Spacing --> */}
                        <div className="py-[60px] lg:py-20">
                            {/* <!-- Section Container --> */}
                            <div className="container-default">
                                {/* <!-- Footer Widget List --> */}
                                <div className="grid gap-x-16 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1fr_repeat(3,_auto)] xl:gap-x-24 xxl:gap-x-[134px]">
                                    {/* <!-- Footer Widget Item --> */}
                                    <div className="flex flex-col gap-y-7 md:col-span-3 lg:col-span-1">
                                        {/* <!-- Footer Logo --> */}
                                        <a href={homeLink}>
                                            <img src="/assets/img/logo-full-light.svg" alt="Passgenix Technology" className="h-[3rem]" />
                                        </a>
                                        {/* <!-- Footer Content --> */}
                                        <div>
                                            {/* <!-- Footer About Text --> */}
                                            <div className="lg:max-w-[416px]">{messages["footer.logoDescription"][langKey]}</div>
                                            {/* <!-- Footer Mail --> */}
                                            <a
                                                href="mailto:passgenixteam2023@gmail.com"
                                                className="my-6 block font-semibold underline-offset-4 transition-all duration-300 hover:underline hover:text-ColorPrimary"
                                            >
                                                passgenixteam2023@gmail.com
                                            </a>
                                            {/* <!-- Footer Social Link --> */}
                                            {/* <div className="flex flex-wrap gap-5">
                                                <a
                                                    href="https://twitter.com"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-white bg-opacity-5 text-sm text-white transition-all duration-300 hover:bg-ColorBlue"
                                                    aria-label="twitter"
                                                >
                                                    <i className="fa-brands fa-x-twitter"></i>
                                                </a>
                                                <a
                                                    href="https://www.facebook.com/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-white bg-opacity-5 text-sm text-white transition-all duration-300 hover:bg-ColorBlue"
                                                    aria-label="facebook"
                                                >
                                                    <i className="fa-brands fa-facebook-f"></i>
                                                </a>
                                                <a
                                                    href="https://www.instagram.com/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-white bg-opacity-5 text-sm text-white transition-all duration-300 hover:bg-ColorBlue"
                                                    aria-label="instagram"
                                                >
                                                    <i className="fa-brands fa-instagram"></i>
                                                </a>
                                                <a
                                                    href="https://www.github.com/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-white bg-opacity-5 text-sm text-white transition-all duration-300 hover:bg-ColorBlue"
                                                    aria-label="github"
                                                >
                                                    <i className="fa-brands fa-github"></i>
                                                </a>
                                            </div> */}
                                        </div>
                                        {/* <!-- Footer Content --> */}
                                    </div>
                                    {/* <!-- Footer Widget Item --> */}

                                    {/* <!-- Footer Widget Item --> */}
                                    <div className="flex flex-col gap-y-7 md:col-span-3 lg:col-span-1">
                                        {/* <!-- Footer Widget Title --> */}
                                        <div className="text-xl font-semibold capitalize">Quick Links</div>
                                        {/* <!-- Footer Navbar --> */}
                                        <ul className="flex flex-col gap-y-[10px] capitalize">
                                            <li>
                                                <a
                                                    href={homeLink}
                                                    className="hover:opcity-100 underline-offset-4 opacity-80 transition-all duration-300 ease-linear hover:underline"
                                                >
                                                    {messages["nav.discover"][langKey]}
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href={`${homeLink}services`}
                                                    className="hover:opcity-100 underline-offset-4 opacity-80 transition-all duration-300 ease-linear hover:underline"
                                                >
                                                    {messages["nav.services"][langKey]}
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href={`${homeLink}team`}
                                                    className="hover:opcity-100 underline-offset-4 opacity-80 transition-all duration-300 ease-linear hover:underline"
                                                >
                                                    {messages["nav.team"][langKey]}
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href={`${homeLink}projects`}
                                                    className="hover:opcity-100 underline-offset-4 opacity-80 transition-all duration-300 ease-linear hover:underline"
                                                >
                                                    {messages["nav.projects"][langKey]}
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <!-- Footer Widget Item --> */}
                                </div>
                                {/* <!-- Footer Widget List --> */}
                            </div>
                            {/* <!-- Section Container --> */}
                        </div>
                        {/* <!-- Footer Center Spacing --> */}
                    </div>
                    {/* <!-- Footer Area Center --> */}

                    {/* <!-- Footer Bottom --> */}
                    <div className="bg-white bg-opacity-5">
                        {/* <!-- Footer Bottom Spacing --> */}
                        <div className="py-[18px]">
                            {/* <!-- Section Container --> */}
                            <div className="container-default">
                                <div className="text-sm text-center text-white text-opacity-80">
                                    &copy; Copyright 2024, All Rights Reserved by{" "}
                                    <a href={homeLink} className="font-semibold hover:text-ColorPrimary">
                                        Passgenix Technology
                                    </a>
                                </div>
                            </div>
                            {/* <!-- Section Container --> */}
                        </div>
                        {/* <!-- Footer Bottom Spacing --> */}
                    </div>
                    {/* <!-- Footer Bottom --> */}
                </div>
            </footer>
            {/* <!--...::: Footer Section End :::... --> */}

            <LocalePopup langsMenu={langsMenu} />
        </motion.div>
    );
};

export default PageBody;

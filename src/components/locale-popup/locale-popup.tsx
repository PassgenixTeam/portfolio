import * as React from "react";

const LocalePopupClientLazy = React.lazy(() => import("./locale-popup-client"));

const LocalePopup: React.FC<
    React.HTMLAttributes<HTMLDivElement> & {
        langsMenu: { langKey: string; link: string; selected: boolean }[];
    }
> = ({ langsMenu, ...props }) => {
    const isSSR = typeof window === "undefined";
    if (isSSR) return null;

    return (
        <React.Suspense fallback={null}>
            <LocalePopupClientLazy langsMenu={langsMenu} {...props} />
        </React.Suspense>
    );
};

export default LocalePopup;

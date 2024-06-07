import { graphql, useStaticQuery } from "gatsby";
import { getCurrentLangKey } from "ptz-i18n";
import { useMemo } from "react";
import { LanguageCode } from "../types";

export const useLanguage = (pathname: string) => {
    const headerInfo = useStaticQuery(graphql`
        {
            site {
                siteMetadata {
                    languages {
                        langs
                        defaultLangKey
                    }
                }
            }
        }
    `);

    const languageInfo: {
        langs: LanguageCode[];
        defaultLangKey: LanguageCode;
        langKey: LanguageCode;
        homeLink: string;
    } = useMemo(() => {
        const { langs, defaultLangKey } = headerInfo.site.siteMetadata.languages;
        const langKey = getCurrentLangKey(langs, defaultLangKey, pathname || "/");
        const homeLink = `/${langKey}/`.replace(`/${defaultLangKey}/`, "/");

        return { langs, defaultLangKey, langKey, homeLink };
    }, [headerInfo, pathname]);

    return languageInfo;
};

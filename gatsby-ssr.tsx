import { GatsbySSR } from "gatsby";
import React from "react";

export const onRenderBody: GatsbySSR["onRenderBody"] = ({ setPostBodyComponents }) => {
    setPostBodyComponents([
        // <script src="/assets/js/vendors/counterup.js" type="module"></script>,
        <script src="/assets/js/vendors/swiper-bundle.min.js"></script>,
        <script src="/assets/js/vendors/fslightbox.js"></script>,
        <script src="/assets/js/vendors/jos.min.js"></script>,
        // <script src="/assets/js/vendors/menu.js"></script>,
    ]);
};

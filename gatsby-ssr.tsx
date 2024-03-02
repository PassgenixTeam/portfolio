import { GatsbySSR } from "gatsby";
import React from "react";

export const onRenderBody: GatsbySSR["onRenderBody"] = ({ setPostBodyComponents }) => {
    setPostBodyComponents([
        // ALl JS Plugins =================
        // jquery-3.7.0 js plugins
        <script id="jquery-3.7.0.min.js" src="/assets/vendors/jquery/jquery-3.7.0.min.js"></script>,
        <script id="jquery.lettering.min.js" src="/assets/vendors/jquery-lettering/jquery.lettering.min.js"></script>,
        // Bootstrap js plugins
        <script id="bootstrap.bundle.min.js" src="/assets/vendors/bootstrap/js/bootstrap.bundle.min.js"></script>,
        <script id="bootstrap-select.min.js" src="/assets/vendors/bootstrap-select/bootstrap-select.min.js"></script>,
        // jarallax js plugins
        <script id="jarallax.min.js" src="/assets/vendors/jarallax/jarallax.min.js"></script>,
        // jquery-ui js plugins
        <script id="jquery-ui.js" src="/assets/vendors/jquery-ui/jquery-ui.js"></script>,
        // jquery-ajaxchimp js plugins
        <script id="jquery.ajaxchimp.min.js" src="/assets/vendors/jquery-ajaxchimp/jquery.ajaxchimp.min.js"></script>,
        // jquery-appear js plugins
        <script id="jquery.appear.min.js" src="/assets/vendors/jquery-appear/jquery.appear.min.js"></script>,
        // jquery-circle-progress js plugins
        <script id="jquery.circle-progress.min.js" src="/assets/vendors/jquery-circle-progress/jquery.circle-progress.min.js"></script>,
        // magnific-popup js plugins
        <script id="jquery.magnific-popup.min.js" src="/assets/vendors/jquery-magnific-popup/jquery.magnific-popup.min.js"></script>,
        // validate js plugins
        <script id="jquery.validate.min.js" src="/assets/vendors/jquery-validate/jquery.validate.min.js"></script>,
        // nouislider js plugins
        <script id="nouislider.min.js" src="/assets/vendors/nouislider/nouislider.min.js"></script>,
        // wnumb js plugins
        <script id="wNumb.min.js" src="/assets/vendors/wnumb/wNumb.min.js"></script>,
        // owl-carousel js plugins
        <script id="owl.carousel.min.js" src="/assets/vendors/owl-carousel/js/owl.carousel.min.js"></script>,
        // Bootstrap js plugins
        <script id="wow.js" src="/assets/vendors/wow/wow.js"></script>,
        // wow js plugins
        <script id="imagesloaded.min.js" src="/assets/vendors/imagesloaded/imagesloaded.min.js"></script>,
        // isotope js plugins
        <script id="isotope.js" src="/assets/vendors/isotope/isotope.js"></script>,
        // countdown js plugins
        <script id="countdown.min.js" src="/assets/vendors/countdown/countdown.min.js"></script>,
        // Chart.js js plugins
        <script id="Chart.min.js" src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.1.4/Chart.min.js"></script>,
        // jquery-circleType js plugins
        <script id="jquery.circleType.js" src="/assets/vendors/jquery-circleType/jquery.circleType.js"></script>,
    ]);
};

import React, { useEffect } from "react";
import AllRoutes from "./router/AllRoutes";
import AOS from "aos";
import { Helmet } from "react-helmet";
import AnimatedCursor from "react-animated-cursor";
// custom css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "photoswipe/dist/photoswipe.css";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>bboy creative | Web, Mobile, Strategy</title>
        <meta
          name="description"
          content="bboy creative is a multidisciplinary software agency based in Texas"
        />
        <meta
          name="keywords"
          content="web, mobile, hybrid apps, react native, firebase, full stack, developer, custom, software"
        />
      </Helmet>
      {/* End React Helmet for SEO */}
      <AnimatedCursor
        innerSize={8}
        outerSize={44}
        color="220, 53, 69"
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={1.2}
      />
      {/* End Animated Cursor */}

      <AllRoutes />
      {/* End All Routes */}
    </>
  );
};

export default App;

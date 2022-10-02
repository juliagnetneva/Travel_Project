import React from "react";
//

import ErrorImage from "../assets/hero/hero_banner_error.jpg";
import { HeadingBold, HeadingOutlined, HeadingRedCursive } from "../components";

export const ErrorPage = () => {
  return (
    <section>
      <div
        style={{
          height: "100%",
          width: "100%",
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
        }}
      >
        <img
          src={ErrorImage}
          alt="Discover the Planet"
          style={{
            height: "100%",
            width: "100%",

            objectFit: "cover",
          }}
        />
      </div>
      <div style={{ position: "relative", zIndex: "99" }}>
        <HeadingBold>
          Page<HeadingRedCursive> not </HeadingRedCursive>found <br />
          <HeadingOutlined>404</HeadingOutlined>
        </HeadingBold>
      </div>
    </section>
  );
};

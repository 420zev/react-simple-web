import React from "react";
import { Carousel, ConfigProvider } from "antd";

const contentStyle: React.CSSProperties = {
  height: "500px",
  color: "#fff", //text color
  lineHeight: "500px", //text position
  textAlign: "center", //text position
  background: "#364d79", //component background color
};

const MainCarousel: React.FC = () => (
  <ConfigProvider
    theme={{
      components: {
        Carousel: {
          /* here is your component tokens */
        },
      },
    }}
  >
    <Carousel dotPosition={"right"} autoplay>
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  </ConfigProvider>
);

export default MainCarousel;
